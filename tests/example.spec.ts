import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {

  test('should find Playwright on DuckDuckGo', async ({ page }) => {
    // 访问网站
    await page.goto('https://duckduckgo.com/');

    // 找到搜索框并输入 "Playwright"
    await page.locator('#search_form_input_homepage').fill('Playwright');

    // 点击搜索按钮
    await page.locator('#search_button_homepage').click();

    // 断言页面标题包含了搜索词
    await expect(page).toHaveTitle(/Playwright at DuckDuckGo/);
  });

  test('should fail intentionally to show in the report', async ({ page }) => {
    // 访问网站
    await page.goto('https://playwright.dev/docs/intro');

    // 这是一个会失败的断言
    await expect(page.locator('h1')).toHaveText('This text will not match');
  });

});