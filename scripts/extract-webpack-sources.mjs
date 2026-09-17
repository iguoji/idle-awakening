#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  const arg = process.argv[i];
  if (arg.startsWith('--')) args.set(arg.slice(2), process.argv[i + 1]);
}

const inputs = [args.get('main'), args.get('worker')].filter(Boolean);
const outputRoot = path.resolve(args.get('out') || 'src/recovered');

if (!inputs.length) {
  console.error('Usage: node scripts/extract-webpack-sources.mjs --main bundle.js --worker bundle.worker.js --out src/recovered');
  process.exit(2);
}

function decodeEvalString(source, start) {
  const marker = 'eval("';
  const markerEnd = start + marker.length;
  let raw = '';
  for (let i = markerEnd; i < source.length; i += 1) {
    const char = source[i];
    if (char === '\\') {
      raw += char;
      i += 1;
      if (i < source.length) raw += source[i];
      continue;
    }
    if (char === '"') {
      return JSON.parse(`"${raw}"`);
    }
    raw += char;
  }
  throw new Error(`Unterminated eval string at offset ${start}`);
}

function extractBundle(filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const headers = [];
  const headerRe = /\/\*\*\*\/ "([^"]+)":/g;
  let match;
  while ((match = headerRe.exec(source))) {
    headers.push({ id: match[1], start: match.index, end: headerRe.lastIndex });
  }

  const modules = [];
  for (let i = 0; i < headers.length; i += 1) {
    const header = headers[i];
    const sectionEnd = i + 1 < headers.length ? headers[i + 1].start : source.length;
    const section = source.slice(header.end, sectionEnd);
    const evalOffset = section.indexOf('eval("');
    if (evalOffset < 0) continue;

    const code = decodeEvalString(section, evalOffset);
    const sourceUrl = code.match(/\/\/#[ \t]*sourceURL=webpack:\/\/[^/]+\/(.+?)(?:\?.*)?$/m)?.[1];
    const modulePath = sourceUrl || header.id;

    const isProjectSource = modulePath.startsWith('./src/') || modulePath === './src/index.js';
    const isGameFramework = modulePath.startsWith('./node_modules/game-framework/');
    if (!isProjectSource && !isGameFramework) continue;

    modules.push({ sourceFile: filename, moduleId: header.id, modulePath, code });
  }
  return modules;
}

fs.mkdirSync(outputRoot, { recursive: true });
const manifest = [];
const seen = new Map();

for (const input of inputs) {
  for (const item of extractBundle(input)) {
    let relativePath;
    if (item.modulePath.startsWith('./node_modules/game-framework/')) {
      relativePath = path.posix.join('framework', item.modulePath.slice('./node_modules/game-framework/'.length));
    } else {
      relativePath = item.modulePath.slice(2);
    }
    if (!/\.(m?js|jsx|ts|tsx)$/.test(relativePath)) continue;

    const outputPath = path.resolve(outputRoot, relativePath);
    if (!outputPath.startsWith(`${outputRoot}${path.sep}`)) {
      throw new Error(`Refusing to write outside output directory: ${relativePath}`);
    }

    if (seen.has(relativePath)) {
      const previous = seen.get(relativePath);
      if (previous.code !== item.code) {
        throw new Error(`Conflicting module content for ${relativePath}: ${previous.sourceFile} vs ${item.sourceFile}`);
      }
      continue;
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${item.code.trim()}\n`, 'utf8');
    seen.set(relativePath, item);
    manifest.push({
      output: path.relative(process.cwd(), outputPath).split(path.sep).join('/'),
      sourceBundle: item.sourceFile,
      webpackModule: item.moduleId,
      webpackSourcePath: item.modulePath,
    });
  }
}

manifest.sort((a, b) => a.output.localeCompare(b.output));
fs.writeFileSync(
  path.join(outputRoot, 'manifest.json'),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), modules: manifest }, null, 2)}\n`,
  'utf8',
);

console.log(`Recovered ${manifest.length} project/framework modules into ${path.relative(process.cwd(), outputRoot)}`);
