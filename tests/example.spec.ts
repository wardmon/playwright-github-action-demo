import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {

  test('should display the correct page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('user can fill in login form', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
  });

});