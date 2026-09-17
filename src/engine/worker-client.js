function normalizeResources(payload) {
  const list = Array.isArray(payload) ? payload : payload?.resources || [];
  return list.map((resource) => ({
    id: resource.id,
    label: resource.name || resource.label || resource.id,
    value: Number(resource.amount ?? resource.balance ?? 0),
    cap: resource.hasCap ? Number(resource.cap ?? 0) : null,
    delta: Number(resource.income ?? resource.netIncome ?? resource.production ?? 0),
    raw: resource,
  }));
}

function normalizeActions(payload) {
  const list = Array.isArray(payload) ? payload : payload?.available || payload?.actions || [];
  return list.map((action) => ({
    id: action.id,
    name: action.name || action.id,
    category: action.category || action.tags?.[0] || 'general',
    level: Number(action.level ?? 1),
    xp: Number(action.xp ?? 0),
    maxXp: Number(action.maxXP ?? action.maxXp ?? 0),
    active: Boolean(action.isActive),
    description: action.description || '',
    tags: action.tags || [],
    raw: action,
  }));
}

export class GameWorkerClient {
  #worker;
  #listeners = new Set();
  #started = false;
  #snapshot = {
    initialized: false,
    resources: [],
    actions: [],
    attributes: [],
    unlocks: {},
    actionDetails: {},
    actionsRunning: {},
    raw: {},
  };

  constructor() {
    this.#worker = new Worker(new URL('../game/worker/main.worker.js', import.meta.url), { type: 'module' });
    this.#worker.addEventListener('message', (event) => this.#handleMessage(event));
    this.#worker.addEventListener('error', (error) => console.error('[GameWorker]', error));
  }

  start(initialPayload = {}) {
    if (this.#started) return;
    this.#started = true;
    this.dispatch('initialize-game', initialPayload);
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

  #bootQueries() {
    this.dispatch('query-unlocks', {});
    this.dispatch('query-resources-data', {});
    this.dispatch('query-attributes-data', {});
    this.dispatch('query-actions-data', {});
    this.dispatch('query-actions-running', {});
    this.dispatch('start-ticking');
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
        this.#bootQueries();
        break;
      case 'resources-data':
        patch.resources = normalizeResources(payload);
        break;
      case 'actions-data':
        patch.actions = normalizeActions(payload);
        break;
      case 'attributes-data':
        patch.attributes = Array.isArray(payload) ? payload : payload?.list || [];
        break;
      case 'unlocks':
      case 'unlocks-actions':
      case 'unlocks-main':
        patch.unlocks = payload || {};
        break;
      case 'actions-running':
        patch.actionsRunning = payload || {};
        break;
      case 'action-details':
        if (payload?.id) patch.actionDetails = { ...this.#snapshot.actionDetails, [payload.id]: payload };
        break;
      default:
        if (type?.startsWith('action-details-')) {
          const id = type.replace(/^action-details-/, '') || payload?.id || 'unknown';
          patch.actionDetails = { ...this.#snapshot.actionDetails, [id]: payload };
        }
    }

    this.#snapshot = { ...this.#snapshot, ...patch };
    for (const listener of [...this.#listeners]) listener(this.#snapshot);
  }
}
