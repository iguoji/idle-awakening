import test from 'node:test';
import assert from 'node:assert/strict';

// UI 模块的浏览器集成由 Browser E2E 阶段覆盖；这里先保证测试入口存在且可被 CI 发现。
test('UI 模块测试占位', () => { assert.ok(true); });
