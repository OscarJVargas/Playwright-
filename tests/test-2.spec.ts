import { test, expect } from '@playwright/test';

//forma 1
test('test locators', async ({ page }) => {
  await page.goto('file:///C:/Users/oscar/index.html');
  await page.pause()

  await page.locator('#name').fill('algo')
  await page.pause()
  
});


//forma 2 
test('test locators2', async ({ page }) => {
  await page.goto('file:///C:/Users/oscar/index.html');
  await page.pause()

  await page.locator('xpath=//input[@class="form"]').fill('algo')
  await page.pause()
  
});

//forma 3 
test('test locators3', async ({ page }) => {
  await page.goto('file:///C:/Users/oscar/index.html');
  await page.pause()

  await page.locator('input[class="form"]').fill('algo')
  await page.pause()
  
});