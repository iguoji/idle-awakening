import { GameModule } from '../game-module.js';

export class HotkeysModule extends GameModule {
  constructor() {
    super();
    this.hotKeys = {};
    this.eventHandler.registerHandler('query-all-hotkeys', (payload = {}) => {
      const label = payload?.suffix ? `all-hotkeys-${payload.suffix}` : 'all-hotkeys';
      this.eventHandler.sendData(label, this.hotKeys);
    });
    this.eventHandler.registerHandler('update-hotkey', (payload = {}) => {
      if (!payload.id) return;
      this.hotKeys[payload.id] = payload;
      this.eventHandler.sendData('all-hotkeys', this.hotKeys);
      this.eventHandler.sendData('all-hotkeys-all', this.hotKeys);
    });
  }

  initialize() {}

  save() {
    return { hotKeys: this.hotKeys };
  }

  load(obj) {
    if (obj?.hotKeys && typeof obj.hotKeys === 'object') {
      this.hotKeys = obj.hotKeys;
    }
  }

  tick() {}
}
