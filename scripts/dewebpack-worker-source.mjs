#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const inputRoot = path.resolve(process.argv[2] || 'src/recovered');
const outputRoot = path.resolve(process.argv[3] || 'src/game');

function ensureRelative(specifier) {
  return specifier.startsWith('.') ? specifier : `./${specifier}`;
}

function resolveImport(importedId, outputFile) {
  let target = null;

  if (importedId.startsWith('./src/worker/')) {
    target = path.join(outputRoot, importedId.slice('./src/'.length));
  } else if (importedId.startsWith('./node_modules/game-framework/')) {
    target = path.join(outputRoot, 'framework', importedId.slice('./node_modules/game-framework/'.length));
  } else if (importedId.startsWith('game-framework')) {
    const suffix = importedId.slice('game-framework'.length).replace(/^\//, '');
    target = path.join(outputRoot, 'framework', suffix || 'index.js');
  }

  if (!target) {
    if (importedId.startsWith('./node_modules/')) {
      const packagePath = importedId.slice('./node_modules/'.length);
      return packagePath.startsWith('@')
        ? packagePath.split('/').slice(0, 2).join('/')
        : packagePath.split('/')[0];
    }
    return importedId;
  }

  const rel = path.relative(path.dirname(outputFile), target).split(path.sep).join('/');
  return ensureRelative(rel);
}

function parseExports(content) {
  const block = content.match(/\/\* harmony export \*\/ __webpack_require__\.d\(__webpack_exports__, \{([\s\S]*?)\n(?:\/\* harmony export \*\/ )?\}\);/m)?.[1];
  if (!block) return [];

  const result = [];
  for (const line of block.split('\n')) {
    const clean = line.replace(/^\/\* harmony export \*\/\s*/, '').trim();
    let match = clean.match(/^([A-Za-z0-9_$]+): \(\) => \(\/\* binding \*\/ ([A-Za-z0-9_$]+)\),?$/);
    if (match) {
      result.push({ type: 'binding', name: match[1], local: match[2] });
      continue;
    }
    match = clean.match(/^([A-Za-z0-9_$]+): \(\) => \(\/\* reexport safe \*\/ ([A-Za-z0-9_$]+)\.([A-Za-z0-9_$]+)\),?$/);
    if (match) result.push({ type: 'reexport', name: match[1], namespace: match[2], local: match[3] });
  }
  return result;
}

function transformModule(content, outputFile, normalizedRel) {
  if (normalizedRel === 'framework/index.js' && /module\.exports\s*=\s*__webpack_require__/.test(content)) {
    return "export * from './src/index.js';\n";
  }

  let code = content;
  const imports = [];
  const aliasRe = /\/\* harmony import \*\/ var ([A-Za-z0-9_$]+) = __webpack_require__\(\/\*! [^*]+ \*\/ "([^"]+)"\);/g;
  code = code.replace(aliasRe, (_, alias, importedId) => {
    imports.push({ alias, importedId, defaultAlias: null });
    return '';
  });

  const defaultRe = /\/\* harmony import \*\/ var ([A-Za-z0-9_$]+) = \/\*#__PURE__\*\/__webpack_require__\.n\(([A-Za-z0-9_$]+)\);/g;
  code = code.replace(defaultRe, (_, defaultAlias, baseAlias) => {
    const item = imports.find((entry) => entry.alias === baseAlias);
    if (item) item.defaultAlias = defaultAlias;
    return '';
  });

  code = code.replace(/^__webpack_require__\.r\(__webpack_exports__\);\s*/m, '');
  code = code.replace(/\/\* harmony export \*\/ __webpack_require__\.d\(__webpack_exports__, \{[\s\S]*?\n(?:\/\* harmony export \*\/ )?\}\);\s*/m, '');
  code = code.replace(/\/\/#[ \t]*sourceURL=.*$/m, '');

  for (const { alias, defaultAlias } of imports) {
    if (defaultAlias) code = code.split(defaultAlias).join(alias);
  }

  const importText = imports.length
    ? `${imports.map(({ alias, importedId }) => `import * as ${alias} from '${resolveImport(importedId, outputFile)}';`).join('\n')}\n\n`
    : '';

  const exportLines = [];
  const seenExports = new Set();
  for (const entry of parseExports(content)) {
    if (seenExports.has(entry.name)) continue;
    seenExports.add(entry.name);
    if (entry.type === 'reexport') exportLines.push(`export const ${entry.name} = ${entry.namespace}.${entry.local};`);
    else exportLines.push(`export { ${entry.local}${entry.local === entry.name ? '' : ` as ${entry.name}`} };`);
  }

  return `${importText}${code.trim()}${exportLines.length ? `\n\n${exportLines.join('\n')}\n` : '\n'}`;
}

function collectFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...collectFiles(full));
    else if (entry.isFile() && full.endsWith('.js')) result.push(full);
  }
  return result;
}

const workerSource = path.join(inputRoot, 'src', 'worker');
const frameworkSource = path.join(inputRoot, 'framework');
const files = [
  ...(fs.existsSync(workerSource) ? collectFiles(workerSource) : []),
  ...(fs.existsSync(frameworkSource) ? collectFiles(frameworkSource) : []),
];

if (!files.length) throw new Error(`No recovered worker/framework modules found under ${inputRoot}`);

fs.rmSync(outputRoot, { recursive: true, force: true });
for (const file of files) {
  const rel = path.relative(inputRoot, file).split(path.sep).join('/');
  const normalizedRel = rel.startsWith('src/') ? rel.slice('src/'.length) : rel;
  const outputFile = path.join(outputRoot, normalizedRel);
  const transformed = transformModule(fs.readFileSync(file, 'utf8'), outputFile, normalizedRel);
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, `${transformed.trim()}\n`, 'utf8');
}

console.log(`Dewebpacked ${files.length} worker/framework modules into ${path.relative(process.cwd(), outputRoot)}`);
