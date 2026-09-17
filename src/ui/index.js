import { createGameAdapter } from './game-adapter.js';
import { mountUiShell } from './ui-shell.js';

const adapter = createGameAdapter(globalThis);
const root = document.getElementById('ui-root');

if (root) {
  const ui = mountUiShell({ root, game: adapter.getState() });
  globalThis.__IDLE_AWAKENING_UI__ = { adapter, ui };
}
