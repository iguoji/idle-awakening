#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const inputRoot = path.resolve(process.argv[2] || 'src/recovered');
const outputRoot = path.resolve(process.argv[3] || 'src/game');

function ensureRelative(specifier) {
  return specifier.startsWith('.') ? specifier : `./${specifier}`;
}

function resolveImport(sourceModule, outputFile, importedId) {
  let target;
  if (importedId === './src/index.js') {
    target = path.join(outputRoot, 'index.js');
  } else if (importedId.startsWith('./src/worker/')) {
    target = path.join(outputRoot, importedId.slice('./src/'.length));
  } else if (importedId.startsWith('./node_modules/game-framework/')) {
    target = path.join(outputRoot, 'framework', importedId.slice('./node_modules/game-framework/'.length));
  } else if (importedId.startsWith('game-framework')) {
    const suffix = importedId.slice('game-framework'.length).replace(/^\//, '');
    target = path.join(outputRoot, 'framework', suffix || 'index.js');
  } else if (importedId.startsWith('./node_modules/')) {
    const packagePath = importedId.slice('./node_modules/'.length);
    const packageName = packagePath.startsWith('@') ? packagePath.split('/').slice(0, 2).join('/') : packagePath.split('/')[0];
    return packageName;
  } else {
    return importedId;
  }

  const fromDir = path.dirname(outputFile);
  const rel = path.relative(fromDir, target).split(path.sep).join('/');
  return ensureRelative(rel);
}

function transformModule(content, sourceModule, outputFile) {
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
  code = code.replace(/\/\* harmony export \*\/ __webpack_require__\.d\(__webpack_exports__, \{[\s\S]*?\}\);\s*/m, '');
  code = code.replace(/\/\/#[ \t]*sourceURL=.*$/m, '');

  for (const { alias, defaultAlias } of imports) {
    if (defaultAlias) code = code.split(defaultAlias).join(alias);
    const marker = `${alias}__WEBPACK_IMPORTED_MODULE_`;
    // The variable may have a compiler suffix in the identifier. We already
    // know the exact alias from the import declaration, so rewrite every
    // generated namespace reference that starts with it.
    code = code.replace(new RegExp(`${alias.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\.`, 'g'), `${alias}.`);
  }

  const exportMatches = [...content.matchAll(/\/\* harmony export \*\/ __webpack_require__\.d\(__webpack_exports__, \{([\s\S]*?)\}\);/g)];
  const exports = [];
  for (const match of exportMatches) {
    for (const item of match[1].matchAll(/([A-Za-z0-9_$]+): \(\) => \(\/\* binding \*\/ ([A-Za-z0-9_$]+)\)/g)) {
      exports.push({ name: item[1], binding: item[2] });
    }
  }

  // The extractor aliases webpack modules exactly as the original source
  // importer did. For native ESM a namespace import is enough, and it also
  // preserves lodash-style named property access.
  const importText = imports.length
    ? `${imports.map(({ alias, importedId }) => `import * as ${alias} from '${resolveImport(sourceModule, outputFile, importedId)}';`).join('\n')}\n\n`
    : '';

  // Strip the one generated variable alias that was used only for default
  // interop. It has already been rewritten to the namespace variable above.
  code = code.replace(/\/\* harmony import \*\/[\t ]*var [A-Za-z0-9_$]+ = [^\n]*\n?/g, '');

  const exportText = exports.length
    ? `\n\nexport { ${exports.map(({ name, binding }) => name === binding ? binding : `${binding} as ${name}`).join(', ')} };\n`
    : '\n';

  return `${importText}${code.trim()}${exportText}`;
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

if (!files.length) {
  throw new Error(`No recovered worker/framework modules found under ${inputRoot}`);
}

for (const file of files) {
  const rel = path.relative(inputRoot, file).split(path.sep).join('/');
  const outputFile = path.join(outputRoot, rel);
  const content = fs.readFileSync(file, 'utf8');
  const transformed = transformModule(content, file, outputFile);
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, `${transformed.trim()}\n`, 'utf8');
}

console.log(`Dewebpacked ${files.length} worker/framework modules into ${path.relative(process.cwd(), outputRoot)}`);
