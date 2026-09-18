import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeAmount,
  payloadActionFilterOrder,
  payloadEventOpened,
  payloadEventOption,
  payloadFurnitureAutomation,
  payloadHotkey,
  payloadInventoryAmount,
  payloadMonitored,
  payloadSetCraftingLevel,
  payloadSetPlantationWatering,
  payloadSetting,
  payloadTourFinished,
  payloadWithAmount,
  payloadWithFlag,
} from '../src/engine/command-builders.js';

test('command builders normalize non-trivial payloads', () => {
  assert.equal(normalizeAmount('3.9'), 3);
  assert.equal(normalizeAmount('bad'), 1);
  assert.deepEqual(payloadWithAmount('item', '5'), { id: 'item', amount: 5 });
  assert.deepEqual(payloadWithFlag('item', 1), { id: 'item', flag: true });
  assert.deepEqual(payloadSetCraftingLevel('recipe', '4', 'filter'), { id: 'recipe', level: 4, filterId: 'filter', isForce: false });
  assert.deepEqual(payloadSetPlantationWatering('plant', '2'), { id: 'plant', level: 2 });
  assert.deepEqual(payloadFurnitureAutomation('chair', true, 'f1'), { id: 'chair', flag: true, filterId: 'f1' });
  assert.deepEqual(payloadInventoryAmount('potion', '7'), { id: 'potion', amount: 7, sendDetails: false });
  assert.deepEqual(payloadEventOpened('event-1', true), { id: 'event-1', opened: true });
  assert.deepEqual(payloadEventOption('event-1', 'choice-2'), { eventId: 'event-1', optionId: 'choice-2' });
  assert.deepEqual(payloadActionFilterOrder('1', '3'), { sourceIndex: 1, destinationIndex: 3 });
  assert.deepEqual(payloadMonitored('effects', 'action', 'walk'), { scope: 'effects', type: 'action', id: 'walk' });
  assert.deepEqual(payloadSetting('theme', 'dark'), { key: 'theme', value: 'dark' });
  assert.deepEqual(payloadTourFinished('3'), { skipStep: 3 });
  assert.deepEqual(payloadTourFinished(''), { skipStep: undefined });
});

test('hotkey builder preserves the original worker payload shape', () => {
  assert.deepEqual(payloadHotkey({ id: 'move', key: 'Shift+M', code: 'KeyM' }, 'move'), {
    id: 'move',
    key: 'Shift+M',
    code: 'KeyM',
  });
  assert.throws(() => payloadHotkey(null, 'move'), /payload must be an object/);
});
