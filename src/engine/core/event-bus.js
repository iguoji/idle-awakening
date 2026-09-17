export class EventBus {
  #listeners = new Map();

  on(event, listener) {
    if (typeof listener !== 'function') throw new TypeError('EventBus listener must be a function');
    const listeners = this.#listeners.get(event) || new Set();
    listeners.add(listener);
    this.#listeners.set(event, listeners);
    return () => this.off(event, listener);
  }

  once(event, listener) {
    const off = this.on(event, (payload) => {
      off();
      listener(payload);
    });
    return off;
  }

  off(event, listener) {
    const listeners = this.#listeners.get(event);
    if (!listeners) return;
    listeners.delete(listener);
    if (!listeners.size) this.#listeners.delete(event);
  }

  emit(event, payload) {
    const listeners = this.#listeners.get(event);
    if (!listeners) return;
    for (const listener of [...listeners]) listener(payload);
  }

  clear() {
    this.#listeners.clear();
  }
}
