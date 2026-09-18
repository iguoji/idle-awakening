import './tokens.css';
import { renderResourceCard } from './components/resource-card.js';
import { renderActionsView } from './features/actions/actions-view.js';
import { getAutomationQueries, renderAutomationView } from './features/automation/automation-view.js';
import { getCharacterQueries, renderCharacterView } from './features/character/character-view.js';
import { getCoursesQueries, renderCoursesView } from './features/courses/courses-view.js';
import { getDomainQueryConfig, renderDomainView } from './features/domain/domain-view.js';
import { getPropertyQueries, renderPropertyView } from './features/property/property-view.js';
import { decodePortableSave, renderSettingsView } from './features/settings/settings-view.js';
import { getStatisticsQueries, renderStatisticsView } from './features/statistics/statistics-view.js';
import { getRandomEventsQueries, renderRandomEventsView } from './features/random-events/random-events-view.js';
import { createUiState } from './ui-state.js';
import { createUiEventBinder } from './ui-event-binder.js';

const NAV = [
  ['actions', 'Actions', '⚔', 'actions'],
  ['character', 'Character', '◉', null],
  ['statistics', 'Statistics', '▤', null],
  ['events', 'Events', '◈', null],
  ['shop', 'Shop', '◈', 'shop'],
  ['inventory', 'Inventory', '▦', 'inventory'],
  ['courses', 'Courses', '▤', 'courses'],
  ['automation', 'Automation', '⟳', 'automations'],
  ['world', 'World', '◎', 'world'],
  ['property', 'Property', '⌂', 'property'],
  ['workshop', 'Workshop', '◇', 'workshop'],
  ['spellbook', 'Spellbook', '✦', 'spellbook'],
  ['social', 'Social', '♧', 'social'],
  ['settings', 'Settings', '⚙', null],
  ['about', 'About', 'ⓘ', null],
];

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderEventOverlay(snapshot) {
  const data = snapshot?.raw?.['random-events-data'];
  const list = Array.isArray(data?.list) ? data.list : [];
  const opened = data?.openedEventData;
  if (!list.length && !opened) return '';
  const primary = opened || list[0];
  const label = opened ? opened.name : primary?.name || 'Active event';
  const time = opened ? list.find((item) => item.id === opened.id)?.expiresIn : primary?.expiresIn;
  return '<aside class="ui-event-overlay" aria-live="polite">' +
    '<div><div class="ui-kicker">Event</div><strong>' + escapeHtml(label) + '</strong><span>' + (time !== undefined ? escapeHtml(Math.max(0, Number(time) || 0).toFixed(0)) + 's remaining' : 'Active') + '</span></div>' +
    '<div class="ui-event-overlay__actions">' +
      '<button class="ui-btn" data-view="events">Open Events</button>' +
      (opened ? '<button class="ui-btn" data-command="set-event-data-opened" data-event-id="' + escapeHtml(opened.id) + '" data-opened="false">Close</button>' : '') +
    '</div>' +
  '</aside>';
}


function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function createFilterDraft(existing, order = []) {
  if (existing) return clone(existing);
  return {
    id: '',
    name: `Filter ${Math.max(1, order.length + 1)}`,
    condition: '',
    rules: [{ type: 'tag', object: '' }],
    isPinned: true,
    sortIndex: order.length,
    isRequired: false,
  };
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

function downloadText(filename, text) {
  if (!text) return false;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  return true;
}

function captureFocusedField() {
  const element = document.activeElement;
  if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) return null;
  const action = element.dataset.action;
  if (!action) return null;
  return {
    action,
    value: element.value,
    start: typeof element.selectionStart === 'number' ? element.selectionStart : null,
    end: typeof element.selectionEnd === 'number' ? element.selectionEnd : null,
  };
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

  function requestCommands(view, commands, force = false) {
    for (const [command, payload] of commands) {
      const key = `${view}:${command}:${JSON.stringify(payload || {})}`;
      if (!force && requested.has(key)) continue;
      requested.add(key);
      game.dispatch?.(command, payload);
    }
  }

  function getViewCommands(view) {
    if (view === 'character') return getCharacterQueries();
    if (view === 'courses') return getCoursesQueries();
    if (view === 'automation') return getAutomationQueries();
    if (view === 'statistics') return getStatisticsQueries();
    if (view === 'events') return getRandomEventsQueries();
    if (view === 'property') return getPropertyQueries();
    return getDomainQueryConfig(view)?.queries || [];
  }

  function requestView(view, force = false) {
    requestCommands(view, getViewCommands(view), force);
  }

  function scheduleViewRefresh(view) {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = null;
    const interval = view === 'character' ? 500 : view === 'actions' ? 250 : view === 'courses' ? 500 : view === 'automation' ? 750 : view === 'statistics' ? 1000 : view === 'events' ? 1000 : view === 'property' ? 750 : view === 'world' ? 1500 : 750;
    if (getViewCommands(view).length) refreshTimer = setInterval(() => requestView(view, true), interval);
  }

  const eventBinder = createUiEventBinder({
    game,
    getGameState: () => gameState,
    getUiState: () => uiState,
    setUiState: (next) => { uiState = next; },
    requestView,
    scheduleViewRefresh,
    render: () => render(),
    openFilterEditor,
    closeFilterEditor,
    patchFilterDraft,
    saveFilterDraft,
    loadTextSave,
    copyText,
    downloadText,
  });

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

  function isUnlocked(unlockKey) {
    return !unlockKey || gameState?.unlocks?.[unlockKey] === true;
  }

  function openFilterEditor(existing = null) {
    const meta = gameState?.actionsMeta || {};
    uiState = { ...uiState, modal: { type: 'actions-filter', draft: createFilterDraft(existing, meta.customFiltersOrder || []) } };
    render();
  }

  function closeFilterEditor() {
    uiState = { ...uiState, modal: null };
    render();
  }

  function patchFilterDraft(mutator, rerender = false) {
    const modal = uiState.modal;
    if (!modal || modal.type !== 'actions-filter') return;
    const draft = clone(modal.draft);
    mutator(draft);
    uiState = { ...uiState, modal: { ...modal, draft } };
    if (rerender) render();
  }

  function saveFilterDraft() {
    const modal = uiState.modal;
    if (!modal || modal.type !== 'actions-filter') return;
    const draft = clone(modal.draft);
    const meta = gameState?.actionsMeta || {};
    const order = Array.isArray(meta.customFiltersOrder) ? meta.customFiltersOrder : [];
    const index = draft.id ? Math.max(0, order.indexOf(draft.id)) : order.length;
    draft.name = String(draft.name || '').trim() || 'Untitled filter';
    draft.condition = String(draft.condition || '').trim();
    draft.rules = (Array.isArray(draft.rules) ? draft.rules : [])
      .filter((rule) => rule && ['tag', 'resource', 'attribute'].includes(rule.type) && String(rule.object || '').trim())
      .map((rule) => ({ type: rule.type, object: String(rule.object).trim() }));
    if (draft.condition && !/^(?:\\s*(?:\\d+|AND|OR|NOT|\\(|\\))\\s*)+$/i.test(draft.condition)) {
      window.alert?.('Condition may only contain rule numbers, parentheses, AND, OR and NOT.');
      return;
    }
    const references = [...draft.condition.matchAll(/\\d+/g)].map((match) => Number(match[0]));
    if (references.some((reference) => reference < 1 || reference > draft.rules.length)) {
      window.alert?.('Condition references a rule that does not exist.');
      return;
    }
    draft.sortIndex = index;
    draft.isPinned = Boolean(draft.isPinned);
    if (!draft.id) delete draft.id;
    game.dispatch?.('save-actions-custom-filter', draft);
    closeFilterEditor();
  }

  function render() {
    const focusedField = captureFocusedField();
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
          ${NAV.map(([id, label, icon, unlockKey]) => {
            const unlocked = isUnlocked(unlockKey);
            return `<button type="button" data-view="${id}" data-active="${uiState.activeView === id}" data-locked="${!unlocked}" ${unlocked ? '' : 'disabled aria-disabled="true"'}>
              <span class="ui-nav__icon">${icon}</span><span>${label}</span>${unlocked ? '' : '<span class="ui-nav__lock">⌘</span>'}
            </button>`;
          }).join('')}
          <div class="ui-nav__section-title ui-nav__section-title--lower">Resources</div>
          <div class="ui-resources">${(gameState.resources || []).map(renderResourceCard).join('')}</div>
        </aside>
        <main class="ui-shell__main">${renderView(uiState.activeView)}</main>
      </div>
      ${renderEventOverlay(gameState)}
    `;

    root.replaceChildren(shell);

    eventBinder.bind(shell, focusedField);

  }

  function renderView(view) {
    if (view === 'actions') return renderActionsView(gameState, uiState);
    if (view === 'character') return renderCharacterView(gameState);
    if (view === 'courses') return renderCoursesView(gameState);
    if (view === 'automation') return renderAutomationView(gameState);
    if (view === 'statistics') return renderStatisticsView(gameState);
    if (view === 'events') return renderRandomEventsView(gameState);
    if (view === 'settings') return renderSettingsView(gameState);
    if (view === 'about') return renderAboutView(gameState);
    if (view === 'property') return renderPropertyView(gameState);
    return renderDomainView(view, gameState);
  }

  requestView(uiState.activeView);
  scheduleViewRefresh(uiState.activeView);
  render();
  return {
    getState: () => uiState,
    destroy: () => {
      if (refreshTimer) clearInterval(refreshTimer);
      eventBinder.destroy();
      refreshTimer = null;
      unsubscribe();
    },
  };
}