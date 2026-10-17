import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const SCREENSHOT_DIR = path.resolve(
  'C:\\Users\\atile\\.gemini\\antigravity\\brain\\779813d2-b316-4e85-b8f2-1060a2085d4e\\screenshots'
);

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function verify() {
  console.log('🚀 Starting Phase 1 Browser Verification...');
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'mobile-360px', width: 360, height: 740 },
    { name: 'tablet-768px', width: 768, height: 1024 },
    { name: 'desktop-1440px', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    console.log(`📱 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // 1. Home Page
    console.log(`  Visiting Home (${vp.name})...`);
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `home-${vp.name}.png`),
      fullPage: false,
    });

    // 2. Project Detail Page
    console.log(`  Visiting Project Detail (${vp.name})...`);
    await page.goto('http://127.0.0.1:3000/projects/aangan-residences', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `project-detail-${vp.name}.png`),
      fullPage: false,
    });

    // 3. Locality Detail Page
    console.log(`  Visiting Locality Detail (${vp.name})...`);
    await page.goto('http://127.0.0.1:3000/locations/wakad', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `locality-detail-${vp.name}.png`),
      fullPage: false,
    });

    await context.close();
  }

  // Dark Mode Verification
  console.log('🌙 Testing Dark Mode Toggle...');
  const darkContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const darkPage = await darkContext.newPage();
  await darkPage.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await darkPage.waitForTimeout(1000);

  // Click theme toggle button
  const themeToggle = await darkPage.$('button[aria-label="Toggle dark mode"]');
  if (themeToggle) {
    await themeToggle.click();
    await darkPage.waitForTimeout(500);
    await darkPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'home-dark-mode-1440px.png'),
      fullPage: false,
    });
    console.log('  Dark mode screenshot captured.');
  }
  await darkContext.close();

  // Form Submission Test on Contact Page
  console.log('📝 Testing Lead Form Submission & Validation...');
  const formPageContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const formPage = await formPageContext.newPage();
  await formPage.goto('http://127.0.0.1:3000/contact', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await formPage.waitForTimeout(1000);

  await formPage.fill('input[placeholder="e.g. Rahul Sharma"]', 'Amit Deshmukh');
  await formPage.fill('input[placeholder="9823012345"]', '9822123456');
  await formPage.click('button[type="submit"]');

  await formPage.waitForTimeout(1500);
  await formPage.screenshot({
    path: path.join(SCREENSHOT_DIR, 'contact-form-success.png'),
  });

  const successText = await formPage.textContent('body');
  const hasSuccess = successText?.includes('Request Received');
  console.log(hasSuccess ? '✅ Lead form submitted successfully!' : '❌ Lead form submission check failed.');

  await formPageContext.close();
  await browser.close();
  console.log('🎉 Browser verification completed successfully! Screenshots stored in:', SCREENSHOT_DIR);
}

verify().catch((err) => {
  console.error('Verification error:', err);
  process.exit(1);
});
