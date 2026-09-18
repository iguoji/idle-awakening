import test from 'node:test';
import assert from 'node:assert/strict';
import { formatNumber, itemId, renderButton, renderMeta } from '../src/ui/features/domain/format.js';

test('domain number formatting stays readable', () => {
  assert.equal(formatNumber(12345.678), '12,345.68');
  assert.equal(formatNumber('not-a-number'), 'not-a-number');
});

test('itemId accepts the worker item identity fallbacks', () => {
  assert.equal(itemId({ id: 'abc' }), 'abc');
  assert.equal(itemId({ key: 'xyz' }), 'xyz');
  assert.equal(itemId({ name: 'Fallback' }), 'Fallback');
});

test('renderButton preserves command payload attributes', () => {
  const html = renderButton('purchase-item', 'Buy', { id: 'item-1' }, { amount: 5, filterId: 'shop' });
  assert.match(html, /data-command="purchase-item"/);
  assert.match(html, /data-id="item-1"/);
  assert.match(html, /data-amount="5"/);
  assert.match(html, /data-filter-id="shop"/);
});

test('renderMeta includes level and running state', () => {
  const html = renderMeta({ level: 3, max: 10, category: 'alchemy', isRunning: true });
  assert.match(html, /Lv 3 \/ 10/);
  assert.match(html, /alchemy/);
  assert.match(html, /Running/);
});
