export class GameWorkerClient {
  #worker;
  #listeners = new Set();
  #snapshot = {
    initialized: false,
    resources: [],
    actions: [],
    attributes: [],
    unlocks: {},
    actionDetails: {},
    raw: {},
  };

  constructor() {
    this.#worker = new Worker(new URL('../game/worker/main.worker.js', import.meta.url), { type: 'module' });
    this.#worker.addEventListener('message', (event) => this.#handleMessage(event));
    this.#worker.addEventListener('error', (error) => console.error('[GameWorker]', error));
  }

  start(initialPayload = {}) {
    this.dispatch('initialize-game', initialPayload);
    this.dispatch('query-unlocks', {});
    this.dispatch('query-resources-data', {});
    this.dispatch('query-attributes-data', {});
    this.dispatch('query-actions-data', {});
    this.dispatch('query-actions-running', {});
    this.dispatch('start-ticking');
  }

  getSnapshot() {
    return this.#snapshot;
  }

  subscribe(listener) {
    if (typeof listener !== 'function') throw new TypeError('GameWorkerClient listener must be a function');
    this.#listeners.add(listener);
    listener(this.#snapshot);
    return () => this.#listeners.delete(listener);
  }

  dispatch(event, payload = {}) {
    this.#worker.postMessage(JSON.stringify({ event, payload }));
  }

  destroy() {
    this.#worker.terminate();
    this.#listeners.clear();
  }

  #handleMessage(event) {
    if (typeof event.data !== 'string') return;

    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      console.warn('[GameWorker] Ignoring invalid message', event.data);
      return;
    }

    const { event: type, payload } = message;
    const patch = { raw: { ...this.#snapshot.raw, [type]: payload } };

    switch (type) {
      case 'initialized':
        patch.initialized = true;
        break;
      case 'resources-data':
        patch.resources = Array.isArray(payload) ? payload : payload?.resources || [];
        break;
      case 'actions-data':
        patch.actions = Array.isArray(payload) ? payload : payload?.actions || payload?.items || [];
        break;
      case 'attributes-data':
        patch.attributes = Array.isArray(payload) ? payload : payload?.attributes || [];
        break;
      case 'unlocks':
      case 'unlocks-actions':
      case 'unlocks-main':
        patch.unlocks = payload || {};
        break;
      case 'actions-running':
        patch.actionsRunning = payload || {};
        break;
      default:
        if (type?.startsWith('action-details')) {
          const id = type.replace(/^action-details-?/, '') || payload?.id || 'unknown';
          patch.actionDetails = { ...this.#snapshot.actionDetails, [id]: payload };
        }
    }

    this.#snapshot = { ...this.#snapshot, ...patch };
    for (const listener of [...this.#listeners]) listener(this.#snapshot);
  }
}
