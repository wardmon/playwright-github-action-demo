import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {

  test('should display the correct page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('user can log in to SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 验证跳转成功：进入库存页面
    await expect(page).toHaveURL(/.*inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  // 示例 3：检查导航栏是否存在并点击
  test('navigation menu should be visible and clickable', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const navDocs = page.locator('a:has-text("Docs")');
    await expect(navDocs).toBeVisible();
    await navDocs.click();

    // 等待跳转到 Docs 页面
    await expect(page).toHaveURL(/.*docs/);
  });

  // 示例 4：搜索框输入并等待结果
  test('user can search in docs', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');

    // 点击搜索按钮
    const searchButton = page.locator('.DocSearch-Button-Placeholder');
    await searchButton.click();
    await page.waitForTimeout(500); // 等待搜索框弹出
    
    // 等待搜索输入框出现（点击后弹出的实际输入框）
    const searchInput = page.locator('input.DocSearch-Input');
    await expect(searchInput).toBeVisible();
    
    // 在实际的搜索输入框中输入
    await searchInput.fill('browser');
    await page.waitForTimeout(1000); // 等待结果加载效果
  });

  // 示例 5：截图保存页面
  test('take a screenshot of homepage', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(500); // 等待页面元素加载完整
    await page.screenshot({ path: 'homepage.png', fullPage: true });

    // 验证关键元素存在
    await expect(page.locator('h1')).toContainText('Playwright');
  });

});