import test from 'node:test';
import assert from 'node:assert/strict';
import { COMMANDS, assertKnownCommand } from '../src/engine/protocol.js';

test('protocol exposes the restored worker command set', () => {
  assert.equal(COMMANDS.PURCHASE_FURNITURE, 'purchase-furniture');
  assert.equal(COMMANDS.SET_COURSE_AUTOPURCHASE, 'set-course-autopurchase');
  assert.equal(COMMANDS.QUERY_EVENT_DATA, 'query-event-data');
});

test('known commands are accepted and unknown commands fail early', () => {
  assert.doesNotThrow(() => assertKnownCommand('query-actions-data'));
  assert.throws(() => assertKnownCommand('definitely-not-a-worker-command'), /Unknown game command/);
});
