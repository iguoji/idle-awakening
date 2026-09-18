import { assertKnownCommand } from '../engine/protocol.js';

export function createGameAdapter(engine) {
  if (!engine || typeof engine.getSnapshot !== 'function' || typeof engine.subscribe !== 'function') {
    throw new TypeError('createGameAdapter requires an engine with getSnapshot() and subscribe()');
  }

  return Object.freeze({
    getSnapshot: () => engine.getSnapshot(),
    subscribe: (listener) => engine.subscribe(listener),
    dispatch: (command, payload) => {
      assertKnownCommand(command);
      if (typeof engine.dispatch !== 'function') return undefined;
      return engine.dispatch(command, payload);
    },
    loadSave: (saveObject, options) => {
      if (typeof engine.loadSave !== 'function') return undefined;
      return engine.loadSave(saveObject, options);
    },
    resetGame: () => {
      if (typeof engine.resetGame === 'function') return engine.resetGame();
      return engine.dispatch?.('reset-game', {});
    },
  });
}
