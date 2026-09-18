export const initialUiState = {
  activeView: 'actions',
  sidebarOpen: false,
  modal: null,
};

export function createUiState(initial = {}) {
  return { ...initialUiState, ...initial };
}

export function setActiveView(state, view) {
  return { ...state, activeView: view, sidebarOpen: false };
}

export function toggleSidebar(state) {
  return { ...state, sidebarOpen: !state.sidebarOpen };
}
