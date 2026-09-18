import test from 'node:test';
import assert from 'node:assert/strict';
import { createUiState, setActiveView, toggleSidebar } from '../src/ui/ui-state.js';

test('createUiState returns stable defaults', () => {
  assert.deepEqual(createUiState(), {
    activeView: 'actions',
    sidebarOpen: false,
    modal: null,
  });
});

test('setActiveView closes the mobile/sidebar state', () => {
  const state = { activeView: 'actions', sidebarOpen: true, modal: null };
  assert.deepEqual(setActiveView(state, 'world'), {
    activeView: 'world',
    sidebarOpen: false,
    modal: null,
  });
});

test('toggleSidebar preserves the rest of UI state', () => {
  const state = { activeView: 'shop', sidebarOpen: false, modal: { type: 'x' } };
  assert.deepEqual(toggleSidebar(state), {
    activeView: 'shop',
    sidebarOpen: true,
    modal: { type: 'x' },
  });
});
