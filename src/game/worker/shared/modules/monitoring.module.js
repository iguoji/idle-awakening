import { GameModule } from '../game-module.js';
import * as index from '../../../framework/index.js';

export class MonitoringModule extends GameModule {
  constructor() {
    super();
    this.eventHandler.registerHandler('set-monitored', ({ scope, type, id } = {}) => {
      if (scope === 'actions') {
        index.gameCore.getModule('actions').setMonitored({ type, id });
      }

      if (scope === 'spells') {
        index.gameCore.getModule('magic').setMonitored({ type, id });
      }

      if (scope !== 'effects') return;

      if (type === 'action') {
        if (id) {
          const data = index.gameEntity.getEffects(
            id,
            1,
            index.gameCore.getModule('actions').actions[id]?.level || 1,
            true,
          );
          index.gameCore.getModule('attributes').setMonitored(data.filter((entry) => entry.type === 'effects'));
          index.gameCore.getModule('resource-pool').setMonitored(data.filter((entry) => entry.type === 'resources'));
        } else {
          clearEffectMonitoring();
        }
      }

      if (type === 'spell') {
        if (id) {
          const spell = index.gameEntity.getEntity(id);
          const durable = index.gameEntity.getEffects(id, 0, spell.level, true);
          const usage = spell.usageGain ? index.resourceApi.unpackEffects(spell.usageGain, spell.level) : [];
          const data = [...durable, ...usage];
          index.gameCore.getModule('attributes').setMonitored(data.filter((entry) => entry.type === 'effects'));
          index.gameCore.getModule('resource-pool').setMonitored(data.filter((entry) => entry.type === 'resources'));
        } else {
          clearEffectMonitoring();
        }
      }

      if (['furniture', 'accessory', 'amplifier'].includes(type)) {
        if (id) {
          const data = index.gameEntity.getEffects(id, 1, 1, true);
          index.gameCore.getModule('attributes').setMonitored(data.filter((entry) => entry.type === 'effects'));
          index.gameCore.getModule('resource-pool').setMonitored(data.filter((entry) => entry.type === 'resources'));
        } else {
          clearEffectMonitoring();
        }
      }
    });
  }

  initialize() {}
  tick() {}
  save() {}
  load() {}
}

function clearEffectMonitoring() {
  index.gameCore.getModule('attributes').setMonitored([]);
  index.gameCore.getModule('resource-pool').setMonitored([]);
}
