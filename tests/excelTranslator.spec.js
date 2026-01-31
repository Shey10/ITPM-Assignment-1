const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');

const workbook = XLSX.readFile('./IT22898234.xlsx');
const sheetName = ' Test cases';
const sheet = workbook.Sheets[sheetName];

// Read rows starting from row 5 (skip the note rows)
let testCases = XLSX.utils.sheet_to_json(sheet, { 
  range: 4,
  defval: '' 
});

// Filter: remove empty rows
testCases = testCases.filter(tc =>
  tc['Input'] &&
  tc['Expected output']
);

test.describe('Excel Driven Translator Tests', () => {
  testCases.forEach((tc, index) => {
    const testId = tc['TC ID'] || `Test_${index + 1}`;
    const desc = tc['Test case name'] || `Auto Test ${index + 1}`;
    
    test(`${testId} - ${desc}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
      
      // Fill the input textarea
      const textarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
      await textarea.fill(tc['Input']);
      
      // Use JavaScript to click the button directly
      await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Translate"]');
        if (btn) btn.click();
      });
      
      // Wait for translation to complete
      await page.waitForTimeout(3000);
      
      // Get all visible text from the page
      const pageText = await page.textContent('body');
      
      // Normalize whitespace for comparison (remove extra spaces)
      const normalizedPageText = pageText.replace(/\s+/g, ' ').trim();
      const normalizedExpected = tc['Expected output'].replace(/\s+/g, ' ').trim();
      
      // Check if output contains expected Sinhala text
      expect(normalizedPageText).toContain(normalizedExpected);
    });
  });
});
