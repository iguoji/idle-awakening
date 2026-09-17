export function createGameAdapter(engine) {
  if (!engine || typeof engine.getSnapshot !== 'function' || typeof engine.subscribe !== 'function') {
    throw new TypeError('createGameAdapter requires an engine with getSnapshot() and subscribe()');
  }

  return Object.freeze({
    getSnapshot: () => engine.getSnapshot(),
    subscribe: (listener) => engine.subscribe(listener),
    dispatch: (command, payload) => {
      if (typeof engine.dispatch !== 'function') return undefined;
      return engine.dispatch(command, payload);
    },
  });
}
