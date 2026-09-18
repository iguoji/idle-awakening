import { test, expect } from '@playwright/test';

test('启动后默认使用中文，并显示核心导航', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.getByRole('button', { name: '行动', exact: true })).toBeVisible();
  for (const label of ['角色', '商店', '自动化', '设置']) {
    await expect(page.getByRole('button', { name: label, exact: true })).toHaveCount(1);
  }
});

test('设置页可以导出存档，并保持中文界面', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '设置', exact: true }).click();
  await expect(page.getByRole('heading', { name: '设置', exact: true })).toBeVisible();
  await page.getByRole('button', { name: '导出存档', exact: true }).click();
  await expect.poll(async () => page.locator('[data-action="save-text"]').inputValue()).not.toBe('');
});

test('角色、商店、自动化入口按解锁状态可访问', async ({ page }) => {
  await page.goto('/');
  for (const label of ['角色', '商店', '自动化']) {
    const button = page.getByRole('button', { name: label, exact: true });
    await expect(button).toHaveCount(1);
    if (await button.isEnabled()) {
      await button.click();
      await expect(page.locator('main.ui-shell__main')).toContainText(label);
    }
  }
});
