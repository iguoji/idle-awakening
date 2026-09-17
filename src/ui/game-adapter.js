export function createGameAdapter(runtime = globalThis) {
  return {
    getState() {
      // Compatibility boundary: runtime-specific probing stays here, never in UI components.
      return {
        title: runtime.__IDLE_AWAKENING_TITLE__ || 'Idle Awakening',
        level: runtime.__IDLE_AWAKENING_LEVEL__ ?? 1,
        gold: runtime.__IDLE_AWAKENING_GOLD__ ?? 0,
        energy: runtime.__IDLE_AWAKENING_ENERGY__ ?? 100,
        progress: runtime.__IDLE_AWAKENING_PROGRESS__ ?? 0,
      };
    },
  };
}
