import './tokens.css';
import { renderResourceCard } from './components/resource-card.js';
import { renderActionsView } from './features/actions/actions-view.js';
import { renderFeaturePlaceholder } from './features/feature-placeholder.js';
import { createUiState, setActiveView, toggleSidebar } from './ui-state.js';

const NAV = [
  ['actions', 'Actions', '⚔'],
  ['shop', 'Shop', '◈'],
  ['inventory', 'Inventory', '▦'],
  ['world', 'World', '◎'],
  ['property', 'Property', '⌂'],
  ['workshop', 'Workshop', '◇'],
  ['spellbook', 'Spellbook', '✦'],
  ['social', 'Social', '♧'],
  ['settings', 'Settings', '⚙'],
  ['about', 'About', 'ⓘ'],
];

export function mountUiShell({ root, game }) {
  if (!root) throw new Error('UI root is required');
  if (!game || typeof game.getSnapshot !== 'function' || typeof game.subscribe !== 'function') {
    throw new TypeError('UI requires a GameAdapter');
  }

  let uiState = createUiState();
  let gameState = game.getSnapshot();

  const unsubscribe = game.subscribe((snapshot) => {
    gameState = snapshot;
    render();
  });

  function render() {
    const shell = document.createElement('div');
    shell.className = 'ui-shell';
    shell.dataset.sidebarOpen = String(uiState.sidebarOpen);
    shell.innerHTML = `
      <header class="ui-shell__topbar">
        <button class="ui-btn ui-shell__mobile" data-action="menu" aria-label="Open menu">☰</button>
        <div class="ui-shell__brand">Idle Awakening</div>
        <div class="ui-level">${gameState.initialized ? 'Online' : 'Starting…'}</div>
      </header>
      <div class="ui-shell__body">
        <aside class="ui-shell__nav">
          <div class="ui-nav__section-title">Game</div>
          ${NAV.map(([id, label, icon]) => `
            <button type="button" data-view="${id}" data-active="${uiState.activeView === id}">
              <span class="ui-nav__icon">${icon}</span><span>${label}</span>
            </button>
          `).join('')}
          <div class="ui-nav__section-title ui-nav__section-title--lower">Resources</div>
          <div class="ui-resources">${(gameState.resources || []).map(renderResourceCard).join('')}</div>
        </aside>
        <main class="ui-shell__main">${renderView(uiState.activeView)}</main>
      </div>
    `;

    root.replaceChildren(shell);

    shell.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => {
        uiState = setActiveView(uiState, button.dataset.view);
        if (window.matchMedia('(max-width: 800px)').matches) {
          uiState = { ...uiState, sidebarOpen: false };
        }
        render();
      });
    });

    shell.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      uiState = toggleSidebar(uiState);
      render();
    });

    shell.querySelectorAll('[data-action="run-action"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('run-action', { id: button.dataset.id, isForce: true });
      });
    });
  }

  function renderView(view) {
    return view === 'actions' ? renderActionsView(gameState) : renderFeaturePlaceholder(view);
  }

  render();
  return {
    getState: () => uiState,
    destroy: unsubscribe,
  };
}
