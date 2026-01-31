const { test } = require('@playwright/test');

test('Debug - See what happens', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  const input = page.getByPlaceholder("Input Your Singlish Text Here.");
  await input.fill('mama vaeda karanavaa');
  
  // Wait and take screenshots at different times
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'debug-3sec.png', fullPage: true });
  
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'debug-8sec.png', fullPage: true });
  
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'debug-13sec.png', fullPage: true });
  
  // Print all text
  const allText = await page.textContent('body');
  console.log('ALL TEXT:', allText);
});
