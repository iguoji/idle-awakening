export default function createGameWorker() {
  return new Worker(new URL('../../bundle.worker.js', import.meta.url));
}
