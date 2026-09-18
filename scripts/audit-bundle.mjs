import fs from 'node:fs';

const files = ['bundle.js', 'bundle.worker.js'];
const helperPattern = /node_modules\\/@babel\\/runtime\\/helpers\\/esm\\/([^" ]+)/g;
const helpers = new Set();
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  let count = 0;
  for (const match of source.matchAll(helperPattern)) { helpers.add(match[1]); count++; }
  console.log(`${file}: Babel helper 引用 ${count}`);
}
console.log(`去重后的 helper 数量: ${helpers.size}`);
console.log([...helpers].sort().join('\n'));
