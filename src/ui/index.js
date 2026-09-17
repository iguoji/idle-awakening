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

root.addEventListener('change', async (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.dataset.action !== 'skill-draft-import-file') return;
  const file = input.files?.[0];
  if (!file) return;
  try {
    const content = await file.text();
    adapter.dispatch('import-skill-draft', { content });
  } catch (error) {
    console.error('[UI] Unable to import skill draft:', error);
    window.alert?.(error.message || 'Unable to import skill draft');
  } finally {
    input.value = '';
  }
});

engine.start();

window.addEventListener('beforeunload', () => engine.destroy(), { once: true });
window.IdleAwakening = Object.freeze({ adapter, engine, ui });
