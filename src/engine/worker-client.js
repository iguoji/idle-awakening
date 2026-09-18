const SAVE_STORAGE_KEY = 'idlemanceryV2Reworked';

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
    focused: action.focused || null,
    affordable: action.affordable,
    xpRate: Number(action.xpRate ?? 0),
    missingResourceId: action.missingResourceId || null,
    raw: action,
  }));
}

function normalizeActionsMeta(payload) {
  if (!payload || typeof payload !== 'object') return {};
  return {
    actionCategories: Array.isArray(payload.actionCategories) ? payload.actionCategories : [],
    selectedCategory: payload.selectedCategory || 'all',
    showHidden: Boolean(payload.showHidden),
    searchData: payload.searchData || { search: '', selectedScopes: ['name', 'tags'] },
    automationEnabled: Boolean(payload.automationEnabled),
    automationUnlocked: Boolean(payload.automationUnlocked),
    autotriggerIntervalSetting: payload.autotriggerIntervalSetting ?? null,
    current: Array.isArray(payload.current) ? payload.current : [],
    runningList: payload.runningList || null,
    actionLists: payload.actionLists || [],
    aspects: payload.aspects || null,
    customFilters: payload.customFilters && typeof payload.customFilters === 'object' ? payload.customFilters : {},
    customFiltersOrder: Array.isArray(payload.customFiltersOrder) ? payload.customFiltersOrder : [],
  };
}

function readStoredSave() {
  try {
    const text = localStorage.getItem(SAVE_STORAGE_KEY);
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.warn('[GameWorker] Ignoring invalid local save', error);
    try { localStorage.removeItem(SAVE_STORAGE_KEY); } catch {}
    return null;
  }
}

function writeStoredSave(payload) {
  try {
    localStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('[GameWorker] Unable to persist save', error);
  }
}

function clearStoredSave() {
  try { localStorage.removeItem(SAVE_STORAGE_KEY); } catch (error) {
    console.warn('[GameWorker] Unable to clear save', error);
  }
}

export class GameWorkerClient {
  #worker;
  #listeners = new Set();
  #timers = [];
  #started = false;
  #snapshot = {
    initialized: false,
    loading: false,
    resources: [],
    actions: [],
    actionsMeta: {},
    attributes: [],
    unlocks: {},
    actionDetails: {},
    actionXpBreakdowns: {},
    actionsRunning: {},
    raw: {},
  };

  constructor() {
    this.#worker = new Worker(new URL('../game/worker/main.worker.js', import.meta.url), { type: 'module' });
    this.#worker.addEventListener('message', (event) => this.#handleMessage(event));
    this.#worker.addEventListener('error', (error) => this.#setError(error));
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

  loadSave(saveObject, { persist = true } = {}) {
    if (!saveObject || typeof saveObject !== 'object') throw new TypeError('Save object must be an object');
    if (persist) writeStoredSave(saveObject);
    this.dispatch('load-game', saveObject);
  }

  resetGame() {
    clearStoredSave();
    this.dispatch('reset-game', {});
  }

  clearStoredSave() {
    clearStoredSave();
  }

  destroy() {
    for (const timer of this.#timers) clearInterval(timer);
    this.#timers = [];
    this.#worker.terminate();
    this.#listeners.clear();
  }

  #notify() {
    for (const listener of [...this.#listeners]) listener(this.#snapshot);
  }

  #setError(error) {
    this.#snapshot = {
      ...this.#snapshot,
      raw: { ...this.#snapshot.raw, error },
      loading: false,
    };
    this.#notify();
    console.error('[GameWorker]', error);
  }

  #dispatchQuiet(event, payload = {}) {
    try {
      this.dispatch(event, payload);
    } catch (error) {
      this.#setError(error);
    }
  }

  #startRefreshLoops() {
    if (this.#timers.length) return;

    const refresh = (event, payload, interval) => {
      this.#dispatchQuiet(event, payload);
      return setInterval(() => this.#dispatchQuiet(event, payload), interval);
    };

    this.#timers.push(
      refresh('query-resources-data', { includePinned: true }, 200),
      refresh('query-actions-data', {}, 100),
      refresh('query-actions-running', {}, 150),
      refresh('query-attributes-data', {}, 500),
      refresh('query-unlocks', {}, 1000),
      refresh('query-event-data', {}, 1000),
    );
  }

  #refreshAfterLoad() {
    this.#dispatchQuiet('query-unlocks', {});
    this.#dispatchQuiet('query-resources-data', { includePinned: true });
    this.#dispatchQuiet('query-attributes-data', {});
    this.#dispatchQuiet('query-actions-data', {});
    this.#dispatchQuiet('query-actions-running', {});
    this.#dispatchQuiet('query-event-data', {});
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
      case 'initialized': {
        patch.initialized = true;
        patch.loading = true;
        this.#snapshot = { ...this.#snapshot, ...patch };
        this.#notify();

        const save = readStoredSave();
        if (save && typeof save === 'object') this.#dispatchQuiet('load-game', save);
        else this.#dispatchQuiet('reset-game', {});

        this.#refreshAfterLoad();
        this.#startRefreshLoops();
        return;
      }
      case 'loading':
        patch.loading = true;
        break;
      case 'loaded':
        patch.loading = false;
        this.#refreshAfterLoad();
        this.#dispatchQuiet('start-ticking');
        break;
      case 'save-game':
        writeStoredSave(payload);
        break;
      case 'resources-data':
        patch.resources = normalizeResources(payload);
        break;
      case 'actions-data':
        patch.actions = normalizeActions(payload);
        patch.actionsMeta = normalizeActionsMeta(payload);
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
        } else if (type?.startsWith('action-xp-breakdown-')) {
          const id = type.replace(/^action-xp-breakdown-/, '') || 'unknown';
          patch.actionXpBreakdowns = { ...this.#snapshot.actionXpBreakdowns, [id]: payload };
        }
    }

    this.#snapshot = { ...this.#snapshot, ...patch };
    this.#notify();
  }
}
