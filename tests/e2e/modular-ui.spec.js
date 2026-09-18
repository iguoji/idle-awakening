import { test, expect } from '@playwright/test';

test.describe('中文模块化维护 UI', () => {
  test('维护面板可打开并切换三个模块', async ({ page }) => {
    await page.goto('/index.html');
    const button = page.getByRole('button', { name: '维护面板' });
    await expect(button).toBeVisible();
    await button.click();
    await expect(page.getByRole('heading', { name: '维护与运行时设置' })).toBeVisible();
    await page.getByRole('button', { name: '快捷键' }).click();
    await expect(page.getByRole('heading', { name: '快捷键' })).toBeVisible();
    await page.getByRole('button', { name: '性能监控' }).click();
    await expect(page.getByRole('heading', { name: '性能监控' })).toBeVisible();
    await page.getByRole('button', { name: '引导设置' }).click();
    await expect(page.getByRole('heading', { name: '引导与运行时设置' })).toBeVisible();
  });

  test('快捷键可以修改并持久化', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('button', { name: '维护面板' }).click();
    await page.getByRole('button', { name: '快捷键' }).click();
    const input = page.locator('.ia-setting-row input').first();
    await input.focus();
    await page.keyboard.press('F8');
    await expect(input).toHaveValue('F8');
    await page.reload();
    await page.getByRole('button', { name: '维护面板' }).click();
    await expect(page.locator('.ia-setting-row input').first()).toHaveValue('F8');
  });
});
