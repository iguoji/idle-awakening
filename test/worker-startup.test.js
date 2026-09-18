import test from 'node:test';
import assert from 'node:assert/strict';

const emitted = [];
globalThis.postMessage = (message) => {
  emitted.push(JSON.parse(message));
};

const { mainModule } = await import('../src/game/worker/main.module.js');
const game = mainModule();

function send(event, payload = {}) {
  game.eventHandler.processEvent({
    data: JSON.stringify({ event, payload }),
  });
}

test('worker boot initializes and answers its initial query surface', () => {
  emitted.length = 0;
  assert.doesNotThrow(() => send('initialize-game', {}));
  assert.ok(emitted.some((message) => message.event === 'initialized'));

  assert.doesNotThrow(() => send('reset-game', {}));

  for (const [event, payload] of [
    ['query-resources-data', { includePinned: true }],
    ['query-actions-data', {}],
    ['query-actions-running', {}],
    ['query-attributes-data', {}],
    ['query-unlocks', {}],
    ['query-event-data', {}],
    ['query-settings', {}],
    ['query_tour_status', {}],
  ]) {
    assert.doesNotThrow(() => send(event, payload), 'Worker query should not throw: ' + event);
  }
});
