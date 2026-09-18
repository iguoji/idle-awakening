import * as main_module from './main.module.js';

const mainGame = (0,main_module.mainModule)();

function serializeError(error) {
  return {
    message: error?.message || String(error),
    stack: error?.stack || '',
    name: error?.name || 'Error',
  };
}

function reportWorkerError(error) {
  const payload = serializeError(error);
  console.error('[GameWorker] uncaught', payload.message, payload.stack);
  postMessage(JSON.stringify({ event: 'worker-error', payload }));
}

self.addEventListener('error', (event) => {
  reportWorkerError(event?.error || new Error(event?.message || 'Unknown worker error'));
});

self.addEventListener('unhandledrejection', (event) => {
  reportWorkerError(event?.reason || new Error('Unhandled worker rejection'));
});

self.addEventListener('message', (event) => {
  try {
    mainGame.eventHandler.processEvent(event);
  } catch (error) {
    reportWorkerError(error);
  }
});
