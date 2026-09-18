import { setActiveView, toggleSidebar } from '../ui-state.js';

export function createNavigationController(context) {
  const { getUiState, setUiState, requestView, scheduleViewRefresh, render } = context;
  function bind(shell) {
    shell.querySelectorAll('[data-view]:not(:disabled)').forEach((button) => {
      button.addEventListener('click', () => {
        const view = button.dataset.view;
        setUiState(setActiveView(getUiState(), view));
        requestView(view);
        scheduleViewRefresh(view);
        if (window.matchMedia('(max-width: 800px)').matches) {
          setUiState({ ...getUiState(), sidebarOpen: false });
        }
        render();
      });
    });

    shell.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      setUiState(toggleSidebar(getUiState()));
      render();
    });


  }
  return { bind, destroy() {} };
}
