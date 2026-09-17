const initialState = {
  activeTab: 'actions',
  level: 1,
  resources: [
    { id: 'energy', label: 'Energy', value: 100, cap: 100, delta: 0.24 },
    { id: 'coins', label: 'Coins', value: 1280, cap: null, delta: 3.6 },
    { id: 'knowledge', label: 'Knowledge', value: 72, cap: null, delta: 0.8 },
  ],
  actions: [
    { id: 'walk', name: 'Walking', level: 4, xp: 74, maxXp: 100, active: false, category: 'training' },
    { id: 'beggar', name: 'Begging', level: 3, xp: 42, maxXp: 80, active: true, category: 'resource' },
    { id: 'rest', name: 'Resting', level: 2, xp: 64, maxXp: 70, active: false, category: 'recovery' },
    { id: 'study', name: 'Studying', level: 1, xp: 28, maxXp: 50, active: false, category: 'training' },
  ],
};

function clone(value) {
  return structuredClone(value);
}

export function createPreviewEngine() {
  let state = clone(initialState);
  const listeners = new Set();

  const emit = () => listeners.forEach((listener) => listener(state));

  return {
    getSnapshot() {
      return state;
    },

    subscribe(listener) {
      listeners.add(listener);
      listener(state);
      return () => listeners.delete(listener);
    },

    dispatch(command, payload = {}) {
      if (command === 'navigate') {
        state = { ...state, activeTab: payload.tab };
      }
      if (command === 'toggle-action') {
        state = {
          ...state,
          actions: state.actions.map((action) =>
            action.id === payload.id ? { ...action, active: !action.active } : { ...action, active: false },
          ),
        };
      }
      if (command === 'tick') {
        const seconds = Number(payload.seconds) || 1;
        state = {
          ...state,
          resources: state.resources.map((resource) => ({
            ...resource,
            value: Math.max(0, resource.value + resource.delta * seconds),
          })),
        };
      }
      emit();
    },
  };
}
