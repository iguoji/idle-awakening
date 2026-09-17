import './tokens.css';
import { renderResourceCard } from './components/resource-card.js';
import { renderActionsView } from './features/actions/actions-view.js';
import { getDomainQueryConfig, renderDomainView } from './features/domain/domain-view.js';
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

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderSettingsView(snapshot) {
  const save = snapshot?.raw?.['saved-string']?.string || '';
  return `<section class="ui-page-head">
    <div><div class="ui-kicker">System</div><h1>Settings</h1><p>Save, reset and inspect the new runtime without depending on the legacy UI.</p></div>
  </section>
  <section class="ui-grid ui-grid--single">
    <article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Game controls</strong><span>Runtime commands</span></div></div>
      <div class="ui-actions">
        <button class="ui-btn ui-btn--primary" data-command="get-save-string">Export save</button>
        <button class="ui-btn" data-command="reset-game">Reset game</button>
      </div>
      ${save ? `<div class="ui-save-box"><div class="ui-save-box__label">Latest exported save</div><textarea readonly>${escapeHtml(save)}</textarea><button class="ui-btn" data-command="copy-save">Copy</button></div>` : '<p class="ui-muted">No save export requested yet.</p>'}
    </div></article>
  </section>`;
}

function renderAboutView(snapshot) {
  const rawCount = Object.keys(snapshot?.raw || {}).length;
  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Architecture</div><h1>About</h1><p>The new client is a bundle-free application. UI code talks to a worker through a narrow adapter; extracted domain modules live under <code>src/game</code>.</p></div>
  </section>
  <section class="ui-grid">
    <article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Runtime boundary</strong><span>Current design</span></div></div>
      <div class="ui-boundary"><span>UI features</span><b>↓</b><span>GameAdapter</span><b>↓</b><span>Worker / domain</span></div>
      <div class="ui-stat-grid" style="margin-top:16px"><div class="ui-stat"><div class="ui-stat__label">Worker state</div><div class="ui-stat__value">${snapshot?.initialized ? 'Ready' : 'Booting'}</div></div><div class="ui-stat"><div class="ui-stat__label">Responses seen</div><div class="ui-stat__value">${rawCount}</div></div><div class="ui-stat"><div class="ui-stat__label">Legacy runtime</div><div class="ui-stat__value">Removed</div></div></div>
    </div></article>
  </section>`;
}

export function mountUiShell({ root, game }) {
  if (!root) throw new Error('UI root is required');
  if (!game || typeof game.getSnapshot !== 'function' || typeof game.subscribe !== 'function') {
    throw new TypeError('UI requires a GameAdapter');
  }

  let uiState = createUiState();
  let gameState = game.getSnapshot();
  const requested = new Set();

  function requestView(view) {
    const config = getDomainQueryConfig(view);
    if (!config) return;
    for (const [command, payload] of config.queries) {
      const key = `${view}:${command}:${JSON.stringify(payload || {})}`;
      if (requested.has(key)) continue;
      requested.add(key);
      game.dispatch?.(command, payload);
    }
  }

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
        const view = button.dataset.view;
        uiState = setActiveView(uiState, view);
        requestView(view);
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

    shell.querySelectorAll('[data-command]').forEach((button) => {
      button.addEventListener('click', async () => {
        const command = button.dataset.command;
        const id = button.dataset.id;
        const amount = button.dataset.amount ? Number(button.dataset.amount) : undefined;
        const filterId = button.dataset.filterId;
        if (command === 'get-save-string') {
          game.dispatch?.(command, { type: 'manual' });
        } else if (command === 'copy-save') {
          const save = gameState?.raw?.['saved-string']?.string;
          if (save) await navigator.clipboard?.writeText(save);
        } else if (command === 'map-generate-map' || command === 'reset-game') {
          game.dispatch?.(command, {});
        } else if (command === 'set-crafting-level') {
          game.dispatch?.(command, { id, level: amount, filterId, isForce: false });
        } else if (command === 'purchase-furniture') {
          game.dispatch?.(command, { id, filterId });
        } else if (command === 'select-guild') {
          game.dispatch?.(command, { id });
        } else if (command === 'purchase-guild-item') {
          game.dispatch?.(command, { id });
        } else if (command === 'consume-inventory' || command === 'sell-inventory') {
          game.dispatch?.(command, { id, amount: amount || 1, sendDetails: false });
        } else if (command === 'purchase-item' || command === 'use-spell') {
          game.dispatch?.(command, { id, amount: amount || 1 });
        } else {
          game.dispatch?.(command, id ? { id } : {});
        }
      });
    });
  }

  function renderView(view) {
    if (view === 'actions') return renderActionsView(gameState);
    if (view === 'settings') return renderSettingsView(gameState);
    if (view === 'about') return renderAboutView(gameState);
    return renderDomainView(view, gameState);
  }

  requestView(uiState.activeView);
  render();
  return {
    getState: () => uiState,
    destroy: unsubscribe,
  };
}
