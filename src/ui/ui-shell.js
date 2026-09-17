import './tokens.css';
import { createUiState, setActiveView, toggleSidebar } from './ui-state.js';

const NAV = [
  ['home', 'Overview'],
  ['character', 'Character'],
  ['inventory', 'Inventory'],
  ['upgrade', 'Upgrades'],
  ['settings', 'Settings'],
];

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '\"':'&quot;', "'":'&#039;' }[c]));
}

export function mountUiShell({ root = document.body, game = {} } = {}) {
  let state = createUiState();
  const model = {
    title: game.title || 'Idle Awakening',
    level: game.level ?? 1,
    gold: game.gold ?? 0,
    energy: game.energy ?? 100,
    progress: game.progress ?? 42,
  };

  const render = () => {
    const shell = document.createElement('div');
    shell.className = 'ui-shell';
    shell.dataset.sidebarOpen = String(state.sidebarOpen);
    shell.innerHTML = `
      <header class="ui-shell__topbar">
        <button class="ui-btn ui-shell__mobile" data-action="menu" aria-label="Open menu">☰</button>
        <div class="ui-shell__brand">${escapeHtml(model.title)}</div>
        <div class="ui-muted">UI Refactor</div>
      </header>
      <div class="ui-shell__body">
        <nav class="ui-shell__nav" aria-label="Main navigation">
          ${NAV.map(([id,label]) => `<button type="button" data-view="${id}" data-active="${state.activeView === id}">${label}</button>`).join('')}
        </nav>
        <main class="ui-shell__main">
          ${renderView(state.activeView)}
        </main>
      </div>`;

    root.replaceChildren(shell);
    shell.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
      state = setActiveView(state, button.dataset.view);
      render();
    }));
    shell.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      state = toggleSidebar(state);
      render();
    });
  };

  const renderView = view => {
    if (view !== 'home') {
      const label = NAV.find(([id]) => id === view)?.[1] || view;
      return `<section class="ui-page-head"><div><h1>${escapeHtml(label)}</h1><p>This screen is now isolated from the legacy runtime.</p></div></section><section class="ui-card"><div class="ui-card__body"><strong>${escapeHtml(label)}</strong><p class="ui-muted">Replace this placeholder with the real feature adapter next.</p></div></section>`;
    }
    return `
      <section class="ui-page-head"><div><h1>Awakening</h1><p>A clean UI layer over the existing game runtime.</p></div><button class="ui-btn ui-btn--primary">Continue</button></section>
      <section class="ui-grid">
        <article class="ui-card"><div class="ui-card__body">
          <div class="ui-stat-grid">
            <div class="ui-stat"><div class="ui-stat__label">Level</div><div class="ui-stat__value">${model.level}</div></div>
            <div class="ui-stat"><div class="ui-stat__label">Gold</div><div class="ui-stat__value">${model.gold}</div></div>
            <div class="ui-stat"><div class="ui-stat__label">Energy</div><div class="ui-stat__value">${model.energy}%</div></div>
          </div>
          <div style="margin-top:28px"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><strong>Awakening progress</strong><span class="ui-muted">${model.progress}%</span></div><div class="ui-progress"><i style="width:${Math.max(0,Math.min(100,model.progress))}%"></i></div></div>
          <div class="ui-actions"><button class="ui-btn ui-btn--primary">Awaken</button><button class="ui-btn">Auto</button><button class="ui-btn">Details</button></div>
        </div></article>
        <aside class="ui-card"><div class="ui-card__body"><strong>Runtime bridge</strong><p class="ui-muted">The next step is to replace these demo values with a GameAdapter connected to the existing bundle.</p></div></aside>
      </section>`;
  };

  render();
  return { getState: () => state, setGameModel(next) { Object.assign(model, next); render(); } };
}
