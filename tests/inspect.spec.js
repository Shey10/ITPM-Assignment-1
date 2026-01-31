const { test } = require('@playwright/test');

test('Inspect the translator page', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.pause(); // This will pause and let you inspect
});
