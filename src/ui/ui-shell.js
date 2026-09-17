import './tokens.css';
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

const FEATURE_COPY = {
  shop: ['Shop', 'Trade resources for upgrades and useful items.'],
  inventory: ['Inventory', 'Manage resources, consumables, automation and item details.'],
  world: ['World', 'Explore locations, unlock new areas and track map progress.'],
  property: ['Property', 'Manage your home, permanent bonuses and interactive objects.'],
  workshop: ['Workshop', 'Craft, gather and manage production systems.'],
  spellbook: ['Spellbook', 'Prepare spells, inspect effects and manage magical progression.'],
  social: ['Social', 'Guilds, progression and long-term social systems.'],
  settings: ['Settings', 'Display, save data, controls and accessibility.'],
  about: ['About', 'Game information, credits and migration diagnostics.'],
};

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function pct(value) {
  return `${Math.max(0, Math.min(100, Number(value) || 0))}%`;
}

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
    const active = uiState.activeView;
    const resourceCards = (gameState.resources || []).map((resource) => `
      <div class="ui-resource">
        <div class="ui-resource__top"><span>${escapeHtml(resource.label)}</span><strong>${Math.floor(resource.value)}</strong></div>
        ${resource.cap ? `<div class="ui-resource__bar"><i style="width:${pct((resource.value / resource.cap) * 100)}"></i></div>` : ''}
        <small>${resource.delta >= 0 ? '+' : ''}${Number(resource.delta || 0).toFixed(2)} / sec</small>
      </div>
    `).join('');

    const shell = document.createElement('div');
    shell.className = 'ui-shell';
    shell.dataset.sidebarOpen = String(uiState.sidebarOpen);
    shell.innerHTML = `
      <header class="ui-shell__topbar">
        <button class="ui-btn ui-shell__mobile" data-action="menu" aria-label="Open menu">☰</button>
        <div class="ui-shell__brand">Idle Awakening</div>
        <div class="ui-level">Level ${escapeHtml(gameState.level ?? 1)}</div>
      </header>
      <div class="ui-shell__body">
        <aside class="ui-shell__nav">
          <div class="ui-nav__section-title">Game</div>
          ${NAV.map(([id, label, icon]) => `
            <button type="button" data-view="${id}" data-active="${active === id}">
              <span class="ui-nav__icon">${icon}</span><span>${label}</span>
            </button>
          `).join('')}
          <div class="ui-nav__section-title ui-nav__section-title--lower">Resources</div>
          <div class="ui-resources">${resourceCards}</div>
        </aside>
        <main class="ui-shell__main">${renderView(active)}</main>
      </div>
    `;

    root.replaceChildren(shell);

    shell.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => {
        uiState = setActiveView(uiState, button.dataset.view);
        game.dispatch?.('navigate', { tab: button.dataset.view });
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

    shell.querySelectorAll('[data-action="toggle-action"]').forEach((button) => {
      button.addEventListener('click', () => game.dispatch?.('toggle-action', { id: button.dataset.id }));
    });
  }

  function renderView(view) {
    if (view !== 'actions') {
      const [title, description] = FEATURE_COPY[view] || [view, 'Feature module'];
      return `
        <section class="ui-page-head">
          <div><div class="ui-kicker">Feature</div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div>
        </section>
        <section class="ui-grid ui-grid--single">
          <article class="ui-card"><div class="ui-card__body ui-empty-state">
            <span class="ui-empty-state__icon">✦</span>
            <h2>${escapeHtml(title)} module</h2>
            <p>This presentation is independent from the legacy bundle. The feature adapter can be wired to the recovered domain module without changing this shell.</p>
          </div></article>
        </section>
      `;
    }

    const actions = gameState.actions || [];
    return `
      <section class="ui-page-head">
        <div><div class="ui-kicker">Active progression</div><h1>Actions</h1><p>Run work continuously while you explore the rest of the game.</p></div>
        <button class="ui-btn ui-btn--primary" data-action="toggle-action" data-id="${escapeHtml(actions.find((a) => !a.active)?.id || actions[0]?.id || '')}">Run next</button>
      </section>
      <section class="ui-grid">
        <article class="ui-card">
          <div class="ui-card__body">
            <div class="ui-section-title"><div><strong>Available actions</strong><span> · ${actions.length} unlocked</span></div><span class="ui-muted">Persistent background progress</span></div>
            <div class="ui-action-list">
              ${actions.map((action) => `
                <article class="ui-action" data-active="${Boolean(action.active)}">
                  <div class="ui-action__main">
                    <div class="ui-action__title"><strong>${escapeHtml(action.name)}</strong><span>Lv.${escapeHtml(action.level)}</span></div>
                    <div class="ui-action__meta"><span>${escapeHtml(action.category || 'general')}</span><span>${Math.floor(action.xp)} / ${Math.floor(action.maxXp)} XP</span></div>
                    <div class="ui-progress"><i style="width:${pct((action.xp / Math.max(1, action.maxXp)) * 100)}"></i></div>
                  </div>
                  <button class="ui-btn ${action.active ? '' : 'ui-btn--primary'}" data-action="toggle-action" data-id="${escapeHtml(action.id)}">${action.active ? 'Stop' : 'Start'}</button>
                </article>
              `).join('')}
            </div>
          </div>
        </article>
        <aside class="ui-card">
          <div class="ui-card__body">
            <div class="ui-kicker">Runtime boundary</div>
            <h2>Engine → UI</h2>
            <p class="ui-muted">The UI only consumes snapshots and dispatches commands. Game rules, ticking, save data and worker transport stay outside the presentation layer.</p>
            <div class="ui-boundary"><span>Snapshot</span><b>→</b><span>Components</span></div>
            <div class="ui-boundary"><span>User action</span><b>→</b><span>Command</span></div>
          </div>
        </aside>
      </section>
    `;
  }

  render();
  return {
    getState: () => uiState,
    destroy: unsubscribe,
  };
}
