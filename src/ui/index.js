import { GameWorkerClient } from '../engine/worker-client.js';
import { createGameAdapter } from './game-adapter.js';
import { mountUiShell } from './ui-shell.js';

const engine = new GameWorkerClient();
const adapter = createGameAdapter(engine);
const root = document.getElementById('root');

if (!root) {
  throw new Error('Missing #root mount element');
}

const ui = mountUiShell({ root, game: adapter });
engine.start();

window.addEventListener('beforeunload', () => engine.destroy(), { once: true });
window.IdleAwakening = Object.freeze({ adapter, engine, ui });
