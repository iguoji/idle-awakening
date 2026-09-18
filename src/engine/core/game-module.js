import { EventBus } from './event-bus.js';

export class GameModule {
  constructor({ eventBus } = {}) {
    this.eventBus = eventBus || new EventBus();
    this.game = null;
  }

  initialize(game) {
    this.game = game;
  }

  tick() {}

  save() {
    return {};
  }

  load() {}

  on(event, listener) {
    return this.eventBus.on(event, listener);
  }

  emit(event, payload) {
    this.eventBus.emit(event, payload);
  }
}
