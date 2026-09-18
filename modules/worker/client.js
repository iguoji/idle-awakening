/**
 * Worker 客户端适配层。
 * 不假设现有 bundle.worker.js 的业务协议，只提供稳定的请求/通知边界。
 */
import { createRequestPayload } from '../commands/payload.js';

export class GameWorkerClient {
  constructor(workerFactory = () => new Worker('bundle.worker.js')) {
    this.workerFactory = workerFactory;
    this.worker = null;
    this.pending = new Map();
    this.sequence = 0;
  }

  start() {
    if (this.worker) return this;
    this.worker = this.workerFactory();
    this.worker.onmessage = (event) => this.#handleMessage(event.data);
    return this;
  }

  stop() {
    this.worker?.terminate?.();
    this.worker = null;
    for (const { reject } of this.pending.values()) reject(new Error('Worker 已停止'));
    this.pending.clear();
  }

  notify(command, payload = {}) {
    this.start();
    this.worker.postMessage(createRequestPayload(command, payload, this.#nextId()));
  }

  request(command, payload = {}, timeout = 5000) {
    this.start();
    const id = this.#nextId();
    const message = createRequestPayload(command, payload, id);
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error('Worker 请求超时'));
      }, timeout);
      this.pending.set(id, { resolve, reject, timer });
      this.worker.postMessage(message);
    });
  }

  #nextId() { return 'req-' + (++this.sequence); }

  #handleMessage(message) {
    const id = message?.id;
    if (!id || !this.pending.has(id)) return;
    const item = this.pending.get(id);
    clearTimeout(item.timer);
    this.pending.delete(id);
    if (message.error) item.reject(new Error(message.error));
    else item.resolve(message.result ?? message.payload ?? message);
  }
}
