export function createGameAdapter(engine) {
  if (!engine || typeof engine.getSnapshot !== 'function' || typeof engine.subscribe !== 'function') {
    throw new TypeError('createGameAdapter requires an engine with getSnapshot() and subscribe()');
  }

  return {
    getSnapshot: () => engine.getSnapshot(),
    subscribe: (listener) => engine.subscribe(listener),
    dispatch: (command, payload) => engine.dispatch(command, payload),
  };
}
