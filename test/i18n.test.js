import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_LANGUAGE, translateText } from '../src/ui/i18n.js';

test('default UI language is simplified Chinese', () => {
  assert.equal(DEFAULT_LANGUAGE, 'zh-CN');
  assert.equal(translateText('Actions'), '行动');
  assert.equal(translateText('Search'), '搜索');
  assert.equal(translateText('Perform some walking exercises to improve your stamina'), '进行一些散步运动，以提高你的体力');
  assert.equal(translateText('A Mysterious Stranger'), '神秘的陌生人');
});

test('common dynamic UI counters are localized', () => {
  assert.equal(translateText('3 filters'), '3 个筛选器');
  assert.equal(translateText('5 visible'), '5 项可见');
  assert.equal(translateText('2 items'), '2 项物品');
});
