import './tokens.css';
import { renderResourceCard } from './components/resource-card.js';
import { renderActionsView } from './features/actions/actions-view.js';
import { getDomainQueryConfig, renderDomainView } from './features/domain/domain-view.js';
import { decodePortableSave, renderSettingsView } from './features/settings/settings-view.js';
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

async function copyText(text) {
  if (!text) return false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  const area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch {}
  area.remove();
  return copied;
}

export function mountUiShell({ root, game }) {
  if (!root) throw new Error('UI root is required');
  if (!game || typeof game.getSnapshot !== 'function' || typeof game.subscribe !== 'function') {
    throw new TypeError('UI requires a GameAdapter');
  }

  let uiState = createUiState();
  let gameState = game.getSnapshot();
  const requested = new Set();
  let refreshTimer = null;

  function requestView(view, force = false) {
    const config = getDomainQueryConfig(view);
    if (!config) return;
    for (const [command, payload] of config.queries) {
      const key = `${view}:${command}:${JSON.stringify(payload || {})}`;
      if (!force && requested.has(key)) continue;
      requested.add(key);
      game.dispatch?.(command, payload);
    }
  }

  function scheduleViewRefresh(view) {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = null;
    const config = getDomainQueryConfig(view);
    if (!config) return;
    const interval = view === 'actions' ? 250 : view === 'world' ? 1500 : 750;
    refreshTimer = setInterval(() => requestView(view, true), interval);
  }

  const unsubscribe = game.subscribe((snapshot) => {
    gameState = snapshot;
    render();
  });

  async function loadTextSave(text) {
    try {
      const save = decodePortableSave(text);
      game.loadSave?.(save, { persist: true });
      return true;
    } catch (error) {
      console.error('[UI] Unable to import save:', error);
      window.alert?.(error.message || 'Invalid save');
      return false;
    }
  }

  function render() {
    const shell = document.createElement('div');
    shell.className = 'ui-shell';
    shell.dataset.sidebarOpen = String(uiState.sidebarOpen);
    shell.innerHTML = `
      <header class="ui-shell__topbar">
        <button class="ui-btn ui-shell__mobile" data-action="menu" aria-label="Open menu">☰</button>
        <div class="ui-shell__brand">Idle Awakening</div>
        <div class="ui-level">${gameState.initialized ? (gameState.loading ? 'Loading…' : 'Online') : 'Starting…'}</div>
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
        scheduleViewRefresh(view);
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
          if (await copyText(save)) button.textContent = 'Copied';
        } else if (command === 'load-save-text') {
          await loadTextSave(shell.querySelector('[data-action="save-text"]')?.value || '');
        } else if (command === 'reset-game') {
          game.resetGame?.();
        } else if (command === 'map-generate-map') {
          game.dispatch?.(command, {});
        } else if (command === 'set-crafting-level') {
          game.dispatch?.(command, { id, level: amount, filterId, isForce: false });
        } else if (command === 'set-plantation-watering') {
          game.dispatch?.(command, { id, level: amount });
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

    shell.querySelector('[data-action="import-save-file"]')?.addEventListener('change', async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        await loadTextSave(await file.text());
      } finally {
        event.target.value = '';
      }
    });
  }

  function renderView(view) {
    if (view === 'actions') return renderActionsView(gameState);
    if (view === 'settings') return renderSettingsView(gameState);
    if (view === 'about') return renderAboutView(gameState);
    return renderDomainView(view, gameState);
  }

  requestView(uiState.activeView);
  scheduleViewRefresh(uiState.activeView);
  render();
  return {
    getState: () => uiState,
    destroy: () => {
      if (refreshTimer) clearInterval(refreshTimer);
      refreshTimer = null;
      unsubscribe();
    },
  };
}
