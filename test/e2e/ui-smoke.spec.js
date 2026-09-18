import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.__diagnostics = { console: [], pageErrors: [], workerErrors: [] };
  page.on('console', (message) => {
    page.__diagnostics.console.push({ type: message.type(), text: message.text() });
  });
  page.on('pageerror', (error) => {
    page.__diagnostics.pageErrors.push(error.message);
  });
  page.on('requestfailed', (request) => {
    if (request.resourceType() === 'worker') {
      page.__diagnostics.workerErrors.push({
        url: request.url(),
        failure: request.failure()?.errorText || 'unknown worker request failure',
      });
    }
  });
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === testInfo.expectedStatus) return;
  let body = '';
  let root = '';
  try {
    body = await page.locator('body').innerText({ timeout: 2000 });
    root = await page.locator('#root').innerHTML({ timeout: 2000 });
  } catch (error) {
    body = 'Unable to read DOM: ' + error.message;
  }
  console.log(JSON.stringify({
    url: page.url(),
    body,
    root,
    diagnostics: page.__diagnostics,
  }, null, 2));
});

test('启动后默认使用中文，并显示核心导航', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  await expect(page.getByRole('button', { name: '行动', exact: true })).toBeVisible();
  for (const label of ['角色', '商店', '自动化', '设置']) {
    await expect(page.getByRole('button', { name: label, exact: true })).toHaveCount(1);
  }
});

test('设置页可以导出存档，并保持中文界面', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  await page.getByRole('button', { name: '设置', exact: true }).click();
  await expect(page.getByRole('heading', { name: '设置', exact: true })).toBeVisible();
  await page.getByRole('button', { name: '导出存档', exact: true }).click();
  await expect.poll(async () => page.locator('[data-action="save-text"]').inputValue()).not.toBe('');
});

test('角色、商店、自动化入口按解锁状态可访问', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  for (const label of ['角色', '商店', '自动化']) {
    const button = page.getByRole('button', { name: label, exact: true });
    await expect(button).toHaveCount(1);
    if (await button.isEnabled()) {
      await button.click();
      await expect(page.locator('main.ui-shell__main')).toContainText(label);
    }
  }
});
