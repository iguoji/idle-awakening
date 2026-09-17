import { EventBus } from './event-bus.js';

export class GameCore {
  constructor({ resourcesManager, unlocks, eventBus } = {}) {
    this.resourcesManager = resourcesManager;
    this.unlocks = unlocks;
    this.eventBus = eventBus || new EventBus();
    this.modules = new Map();
    this.globalTime = 0;
    this.numTicks = 0;
    this.isInitialized = false;
    this.isTicking = false;
    this.ticker = null;
  }

  registerModule(id, module) {
    if (!id || !module) throw new TypeError('registerModule requires id and module');
    if (this.modules.has(id)) return this.modules.get(id);

    module.game = this;
    for (const method of ['initialize', 'tick', 'load', 'save']) {
      if (typeof module[method] !== 'function') {
        throw new Error(`Module ${id} missing ${method}() implementation`);
      }
    }

    this.modules.set(id, module);
    return module;
  }

  getModule(id) {
    return this.modules.get(id);
  }

  initialize() {
    for (const module of this.modules.values()) module.initialize(this);
    this.resourcesManager?.initialize?.(this);
    this.unlocks?.initialize?.(this);
    this.isInitialized = true;
    this.eventBus.emit('initialized', this);
  }

  startTicking(interval = 50, delta = interval / 1000) {
    this.stopTicking();
    this.isTicking = true;
    this.ticker = setInterval(() => {
      if (!this.isInitialized) return;
      const currentDelta = typeof delta === 'function' ? delta() : delta;
      for (const module of this.modules.values()) module.tick(this, currentDelta);
      this.resourcesManager?.tick?.(currentDelta);
      this.numTicks += 1;
      this.globalTime += currentDelta;
      this.eventBus.emit('tick', { delta: currentDelta, time: this.globalTime, ticks: this.numTicks });
    }, interval);
  }

  stopTicking() {
    if (this.ticker !== null) clearInterval(this.ticker);
    this.ticker = null;
    this.isTicking = false;
  }

  save() {
    const data = {};
    for (const [id, module] of this.modules) data[id] = module.save();
    if (this.resourcesManager?.save) data.resources = this.resourcesManager.save();
    data.globalTime = this.globalTime;
    data.numTicks = this.numTicks;
    data.lastSave = Date.now();
    return data;
  }

  load(data = {}) {
    this.resourcesManager?.load?.(data.resources || {});
    for (const [id, module] of this.modules) module.load(data[id]);
    this.globalTime = data.globalTime || 0;
    this.numTicks = data.numTicks || 0;
  }
}
