import test from 'node:test';
import assert from 'node:assert/strict';
import { createCommandPayload } from '../modules/commands/payload.js';

test('命令载荷结构稳定且复制 payload', () => {
  const payload = { amount: 3 };
  const message = createCommandPayload('test', payload, { id: 'x-1', timestamp: 123 });
  assert.deepEqual(message, { version: 1, id: 'x-1', command: 'test', payload: { amount: 3 }, timestamp: 123 });
  assert.notEqual(message.payload, payload);
});

test('非法命令被拒绝', () => {
  assert.throws(() => createCommandPayload(''), /非空字符串/);
});
