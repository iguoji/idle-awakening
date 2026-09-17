import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, extname, basename } from 'node:path';

const ROOT = join(process.cwd(), 'src', 'game');
const WEBPACK_ALIAS = /\b[A-Za-z_$][\w$]*__WEBPACK_IMPORTED_MODULE_\d+__\b/g;
const IMPORT_STATEMENT = /import\s+([\s\S]*?)\s+from\s+(['"])([^'"]+)\2\s*;/g;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.isFile() && extname(entry.name) === '.js') files.push(path);
  }
  return files;
}

function safeName(source, used) {
  let name = basename(source, '.js')
    .replace(/[^A-Za-z0-9_$]+/g, '_')
    .replace(/^[^A-Za-z_$]+/, '') || 'dependency';
  name = name.replace(/^[A-Z]/, (c) => c.toLowerCase());
  let candidate = name;
  let suffix = 2;
  while (used.has(candidate)) candidate = `${name}_${suffix++}`;
  used.add(candidate);
  return candidate;
}

function normalizeImports(source) {
  const mappings = new Map();
  const used = new Set();

  const rewritten = source.replace(IMPORT_STATEMENT, (statement, clause, quote, modulePath) => {
    const aliases = clause.match(WEBPACK_ALIAS) || [];
    if (!aliases.length) return statement;
    for (const alias of new Set(aliases)) {
      if (!mappings.has(alias)) mappings.set(alias, safeName(modulePath, used));
    }
    return statement;
  });

  let result = rewritten;
  for (const [alias, name] of mappings) {
    result = result.replaceAll(alias, name);
  }
  result = result.replace(/\/\*\s*harmony export\s*\*\//g, '');
  return { result, changed: mappings.size > 0 };
}

const files = await walk(ROOT);
let changed = 0;
const leftovers = [];

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const { result, changed: fileChanged } = normalizeImports(source);
  if (fileChanged && result !== source) {
    await writeFile(file, result);
    changed += 1;
  }
  const matches = result.match(WEBPACK_ALIAS);
  if (matches?.length) leftovers.push(`${relative(process.cwd(), file)}: ${[...new Set(matches)].join(', ')}`);
}

console.log(`Normalized webpack import aliases in ${changed} files.`);
if (leftovers.length) {
  console.error('Unnormalized webpack aliases remain:');
  console.error(leftovers.join('\n'));
  process.exit(1);
}
