import { useCallback, useEffect } from 'react';
import { globalEventHandlers } from './handlers.js';

const workerListeners = new WeakMap();

export function useWorkerClient(worker) {
  const onMessage = useCallback((event, callback) => {
    globalEventHandlers[event] = callback;
  }, []);

  const sendData = useCallback((event, payload) => {
    if (worker) worker.postMessage(JSON.stringify({ event, payload }));
  }, [worker]);

  const handleMessage = useCallback((event) => {
    if (!event.data) return;
    const parsed = JSON.parse(event.data);
    if (!parsed.event || !globalEventHandlers[parsed.event]) return;
    globalEventHandlers[parsed.event]?.(parsed.payload);
  }, []);

  useEffect(() => {
    if (!worker) return undefined;
    if (!workerListeners.has(worker)) {
      worker.addEventListener('message', handleMessage);
      workerListeners.set(worker, handleMessage);
    }
    return () => {
      const registeredHandler = workerListeners.get(worker);
      if (registeredHandler === handleMessage) {
        worker.removeEventListener('message', handleMessage);
        workerListeners.delete(worker);
      }
    };
  }, [worker, handleMessage]);

  return { onMessage, sendData };
}
