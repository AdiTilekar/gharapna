import { chromium } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';

const SCREENSHOT_DIR = 'C:\\Users\\atile\\.gemini\\antigravity\\brain\\779813d2-b316-4e85-b8f2-1060a2085d4e\\screenshots';

async function main() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log('--- 1. Testing Admin Locked Screen (/admin) ---');
  await page.goto('http://127.0.0.1:3000/admin', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'admin-dashboard-locked.png'),
    fullPage: false,
  });
  console.log('Saved admin-dashboard-locked.png');

  console.log('--- 2. Unlocking Admin Portal with Passcode ---');
  const passInput = page.locator('#passcode');
  await passInput.fill('gharapna2025');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(600);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'admin-dashboard-unlocked-1440px.png'),
    fullPage: false,
  });
  console.log('Saved admin-dashboard-unlocked-1440px.png');

  console.log('--- 3. Testing Status Filtering in Admin Dashboard ---');
  // Click on "Visit Scheduled" filter button
  const visitScheduledBtn = page.locator('button', { hasText: 'visit scheduled' });
  if (await visitScheduledBtn.count() > 0) {
    await visitScheduledBtn.click();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'admin-dashboard-filtered-visits.png'),
      fullPage: false,
    });
    console.log('Saved admin-dashboard-filtered-visits.png');
  }

  console.log('--- 4. Testing CSV Export Endpoint (/api/export-leads) ---');
  const exportRes = await page.request.get('http://127.0.0.1:3000/api/export-leads');
  console.log('Export leads HTTP status:', exportRes.status());
  const contentType = exportRes.headers()['content-type'];
  console.log('Content-Type:', contentType);
  const csvBody = await exportRes.text();
  console.log('CSV Lines count:', csvBody.split('\n').length);
  console.log('CSV Header:', csvBody.split('\n')[0]);

  if (!contentType.includes('text/csv') || !csvBody.includes('Lead ID')) {
    throw new Error('CSV export response failed validation');
  }

  console.log('--- 5. Testing Admin Dashboard on Mobile (360px) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 360, height: 740 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://127.0.0.1:3000/admin', { waitUntil: 'networkidle' });
  const mobilePass = mobilePage.locator('#passcode');
  await mobilePass.fill('gharapna2025');
  await mobilePage.click('button[type="submit"]');
  await mobilePage.waitForTimeout(600);

  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, 'admin-dashboard-mobile-360px.png'),
    fullPage: false,
  });
  console.log('Saved admin-dashboard-mobile-360px.png');

  await browser.close();
  console.log('=== All Phase 4 Browser & API Verifications Passed! ===');
}

main().catch((err) => {
  console.error('Phase 4 verification error:', err);
  process.exit(1);
});
