import test from 'node:test';
import assert from 'node:assert/strict';
import { GameWorkerClient } from '../modules/worker/client.js';

class FakeWorker {
  constructor() { this.messages = []; this.onmessage = null; this.terminated = false; }
  postMessage(message) { this.messages.push(message); queueMicrotask(() => this.onmessage?.({ data: { id: message.id, result: { ok: true, command: message.command } } })); }
  terminate() { this.terminated = true; }
}

test('Worker 客户端 smoke test', async () => {
  let worker;
  const client = new GameWorkerClient(() => { worker = new FakeWorker(); return worker; });
  const result = await client.request('ping', { value: 1 });
  assert.deepEqual(result, { ok: true, command: 'ping' });
  assert.equal(worker.messages[0].command, 'ping');
  client.stop();
  assert.equal(worker.terminated, true);
});
