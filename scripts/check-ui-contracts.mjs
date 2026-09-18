#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const sourceRoot = path.resolve('src/ui');
const protocolPath = path.resolve('src/engine/protocol.js');

const dispatchLiteral = /dispatch(?:\?\.)?\(\s*['"]([^'"]+)['"]/g;
const branchLiteral = /command\s*===\s*['"]([^'"]+)['"]/g;
const queryLiteral = /^\s*['"]((?:initialize|load|reset|start|get|query|set|run|stop|toggle|save|delete|apply|purchase|consume|sell|use|select|remove|leave|map|actions|check)-[^'"]+)['"]\s*,/;

const UI_ONLY_COMMANDS = new Set([
  'copy-save',
  'save-runtime-settings',
  'download-save',
  'load-save-text',
]);

const sourceFiles = [];

function walk(entry) {
  if (!fs.existsSync(entry)) return;
  const stat = fs.statSync(entry);
  if (stat.isFile()) {
    if (entry.endsWith('.js')) sourceFiles.push(entry);
    return;
  }
  for (const child of fs.readdirSync(entry, { withFileTypes: true })) {
    walk(path.join(entry, child.name));
  }
}

walk(sourceRoot);

const protocol = fs.readFileSync(protocolPath, 'utf8');
const known = new Set([...protocol.matchAll(/:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]));
const used = new Set();

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8');

  for (const match of source.matchAll(dispatchLiteral)) {
    used.add(match[1]);
  }

  for (const match of source.matchAll(branchLiteral)) {
    if (!UI_ONLY_COMMANDS.has(match[1])) used.add(match[1]);
  }

  for (const line of source.split('\n')) {
    const match = line.match(queryLiteral);
    if (match) used.add(match[1]);
  }
}

const missing = [...used]
  .filter((command) => !UI_ONLY_COMMANDS.has(command) && !known.has(command))
  .sort();

if (missing.length) {
  console.error('UI commands missing from src/engine/protocol.js:');
  for (const command of missing) console.error(' - ' + command);
  process.exit(1);
}

console.log('UI command contract passed: ' + used.size + ' command references verified.');
