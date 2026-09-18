import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWorkerMessage, normalizeActions, normalizeActionsMeta, normalizeResources } from '../src/engine/worker-client.js';

test('worker message builder creates stable JSON envelopes', () => {
  assert.equal(buildWorkerMessage('ping', { id: 1 }), JSON.stringify({ event: 'ping', payload: { id: 1 } }));
  assert.throws(() => buildWorkerMessage('', {}), /non-empty string/);
});

test('client normalizers expose stable UI-facing shapes', () => {
  assert.deepEqual(normalizeResources({
    resources: [{ id: 'coins', name: 'Coins', amount: '12', income: '0.5', hasCap: true, cap: '100' }],
  }), [{
    id: 'coins',
    label: 'Coins',
    value: 12,
    cap: 100,
    delta: 0.5,
    raw: { id: 'coins', name: 'Coins', amount: '12', income: '0.5', hasCap: true, cap: '100' },
  }]);

  assert.deepEqual(normalizeActions({
    available: [{ id: 'walk', name: 'Walking', category: 'gathering', level: '3', xp: '4', maxXP: '10', isActive: true }],
  })[0], {
    id: 'walk',
    name: 'Walking',
    category: 'gathering',
    level: 3,
    xp: 4,
    maxXp: 10,
    active: true,
    description: '',
    tags: [],
    focused: null,
    affordable: undefined,
    xpRate: 0,
    missingResourceId: null,
    raw: { id: 'walk', name: 'Walking', category: 'gathering', level: '3', xp: '4', maxXP: '10', isActive: true },
  });

  assert.deepEqual(normalizeActionsMeta({ showHidden: true, customFiltersOrder: ['a'] }).customFiltersOrder, ['a']);
});
