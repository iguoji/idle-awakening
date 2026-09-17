import { createGameAdapter } from './game-adapter.js';
import { createPreviewEngine } from './preview-engine.js';
import { mountUiShell } from './ui-shell.js';

const engine = createPreviewEngine();
const adapter = createGameAdapter(engine);
const root = document.getElementById('root');

if (!root) {
  throw new Error('Missing #root mount element');
}

const ui = mountUiShell({ root, game: adapter });

window.IdleAwakening = Object.freeze({ adapter, ui });
