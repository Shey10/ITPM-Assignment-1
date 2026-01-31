const { test } = require('@playwright/test');

test('Find exact selectors', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  // Find textarea
  const textareas = await page.locator('textarea').all();
  console.log(`Found ${textareas.length} textareas`);
  
  for (let i = 0; i < textareas.length; i++) {
    const id = await textareas[i].getAttribute('id');
    const className = await textareas[i].getAttribute('class');
    const placeholder = await textareas[i].getAttribute('placeholder');
    console.log(`Textarea ${i}: id="${id}", class="${className}", placeholder="${placeholder}"`);
  }
  
  // Find buttons
  const buttons = await page.locator('button').all();
  console.log(`\nFound ${buttons.length} buttons`);
  
  for (let i = 0; i < buttons.length; i++) {
    const id = await buttons[i].getAttribute('id');
    const className = await buttons[i].getAttribute('class');
    const ariaLabel = await buttons[i].getAttribute('aria-label');
    console.log(`Button ${i}: id="${id}", class="${className}", aria-label="${ariaLabel}"`);
  }
});
