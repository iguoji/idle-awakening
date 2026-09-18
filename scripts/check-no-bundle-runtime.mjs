#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const roots = ['index.html', 'src'];
const forbidden = /(?:^|[\/'"`])bundle(?:\.worker)?\.js(?:$|[\/'"`?])/i;
const ignored = new Set([
  path.normalize('scripts/check-no-bundle-runtime.mjs'),
  path.normalize('src/recovered'),
]);

function walk(entry) {
  if (!fs.existsSync(entry)) return [];
  const stat = fs.statSync(entry);
  if (stat.isFile()) return [entry];

  const files = [];
  for (const child of fs.readdirSync(entry, { withFileTypes: true })) {
    const full = path.join(entry, child.name);
    if (child.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const violations = [];
for (const root of roots) {
  for (const file of walk(root)) {
    const normalized = path.normalize(file);
    if (ignored.has(normalized) || normalized.includes(`${path.sep}recovered${path.sep}`)) continue;
    if (!/\.(html|js|jsx|ts|tsx|css)$/.test(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    if (forbidden.test(content)) violations.push(file);
  }
}

if (violations.length) {
  console.error('Legacy bundle runtime dependency found in:');
  for (const file of violations) console.error(` - ${file}`);
  process.exit(1);
}

console.log('Architecture check passed: no legacy bundle runtime or floating-service dependency in index.html/src/.');
