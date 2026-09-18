import { test, expect } from '@playwright/test';

const NAV_IDS = {
  action: 'actions',
  character: 'character',
  shop: 'shop',
  automation: 'automation',
  settings: 'settings',
};

test.beforeEach(async ({ page }) => {
  page.__diagnostics = { console: [], pageErrors: [], workerErrors: [] };
  page.on('console', (message) => {
    const text = message.text();
    page.__diagnostics.console.push({ type: message.type(), text });
    if (message.type() === 'error' && /GameWorker|worker-error/i.test(text)) {
      page.__diagnostics.workerErrors.push(text);
    }
  });
  page.on('pageerror', (error) => {
    page.__diagnostics.pageErrors.push({ message: error.message, stack: error.stack || '' });
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

function nav(page, id) {
  return page.locator('button[data-view="' + id + '"]');
}

async function expectHealthyWorker(page) {
  await expect.poll(() => page.__diagnostics.workerErrors.length, { timeout: 5000 }).toBe(0);
  await expect.poll(() => page.__diagnostics.pageErrors.length, { timeout: 1000 }).toBe(0);
}

test('启动后默认使用中文，并显示核心导航', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  await expect(nav(page, NAV_IDS.action)).toContainText('行动');
  await expect(nav(page, NAV_IDS.character)).toContainText('角色');
  await expect(nav(page, NAV_IDS.shop)).toContainText('商店');
  await expect(nav(page, NAV_IDS.automation)).toContainText('自动化');
  await expect(nav(page, NAV_IDS.settings)).toContainText('设置');
  await expectHealthyWorker(page);
});

test('设置页可以导出并恢复存档', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  await nav(page, NAV_IDS.settings).click();
  await expect(page.getByRole('heading', { name: '设置', exact: true })).toBeVisible();
  await page.getByRole('button', { name: '导出存档', exact: true }).click();
  await expect.poll(async () => page.locator('[data-action="save-text"]').inputValue()).not.toBe('');
  const beforeReload = await page.locator('[data-action="save-text"]').inputValue();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });
  await nav(page, NAV_IDS.settings).click();
  await expect.poll(async () => page.locator('[data-action="save-text"]').inputValue()).not.toBe('');
  await expect(await page.locator('[data-action="save-text"]').inputValue()).toBe(beforeReload);
  await expectHealthyWorker(page);
});

test('行动、角色、商店、自动化入口可访问', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty({ timeout: 15000 });

  await nav(page, NAV_IDS.action).click();
  await expect(page.getByRole('heading', { name: '行动', exact: true })).toBeVisible();
  const runnable = page.locator('[data-action="run-action"]:not(:disabled)').first();
  if (await runnable.count()) {
    await runnable.click();
    await expect.poll(async () => await page.locator('[data-action="run-action"]').filter({ hasText: '运行中' }).count()).toBeGreaterThan(0);
  }

  await nav(page, NAV_IDS.character).click();
  await expect(page.getByRole('heading', { name: '法师', exact: true })).toBeVisible();

  await nav(page, NAV_IDS.shop).click();
  await expect(page.getByRole('heading', { name: '商店', exact: true })).toBeVisible();

  await nav(page, NAV_IDS.automation).click();
  await expect(page.getByRole('heading', { name: '自动化', exact: true })).toBeVisible();

  await expectHealthyWorker(page);
});
