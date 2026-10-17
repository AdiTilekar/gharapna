import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const SCREENSHOT_DIR = path.resolve(
  'C:\\Users\\atile\\.gemini\\antigravity\\brain\\779813d2-b316-4e85-b8f2-1060a2085d4e\\screenshots'
);

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function verifyPhase2() {
  console.log('🚀 Starting Phase 2 Browser Verification...');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // 1. Flats Catalog Page (Grid View)
  console.log('📦 Visiting Flats Catalog (/flats)...');
  await page.goto('http://127.0.0.1:3000/flats', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'flats-catalog-grid-1440px.png'),
  });

  // 2. Flats Catalog Map View
  console.log('🗺️ Testing Leaflet Map View Toggle...');
  const mapBtn = await page.$('button[aria-label="Map View"]');
  if (mapBtn) {
    await mapBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'flats-catalog-map-view.png'),
    });
  }

  // Switch back to Grid View
  const gridBtn = await page.$('button[aria-label="Grid View"]');
  if (gridBtn) await gridBtn.click();
  await page.waitForTimeout(500);

  // 3. Flat Compare Feature
  console.log('⚖️ Testing Flat Comparison Drawer...');
  const compareButtons = await page.$$('button:has-text("Compare")');
  if (compareButtons.length >= 2) {
    await compareButtons[0].click();
    await page.waitForTimeout(300);
    await compareButtons[1].click();
    await page.waitForTimeout(500);

    // Capture drawer at bottom
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'flats-compare-drawer-active.png'),
    });

    // Open side-by-side modal
    const compareModalBtn = await page.$('button:has-text("Compare Side-by-Side")');
    if (compareModalBtn) {
      await compareModalBtn.click();
      await page.waitForTimeout(800);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'flats-compare-modal-matrix.png'),
      });

      // Close modal
      const closeBtn = await page.$('button:has-text("Close")');
      if (closeBtn) await closeBtn.click();
    }
  }

  // 4. Flat Detail Page
  console.log('🏠 Visiting Clean Flat Detail Page...');
  await page.goto('http://127.0.0.1:3000/flats/2-bhk-flat-in-wakad-pune-tower-a-402', {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'flat-detail-desktop-1440px.png'),
  });

  // 5. Locality Comparison Page
  console.log('📍 Visiting Locality Comparison Page (/locations/compare)...');
  await page.goto('http://127.0.0.1:3000/locations/compare', {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'locality-compare-matrix.png'),
  });

  // 6. Tools Hub (EMI, Stamp Duty, Affordability)
  console.log('🧮 Visiting Tools Hub (/tools)...');
  await page.goto('http://127.0.0.1:3000/tools?tab=emi', {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'tools-emi-calculator.png'),
  });

  // Stamp Duty tab
  await page.click('button:has-text("PCMC Stamp Duty & Cess")');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'tools-stamp-duty-calculator.png'),
  });

  // Affordability tab
  await page.click('button:has-text("Budget & Affordability Matrix")');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'tools-affordability-calculator.png'),
  });

  // Mobile testing on Flats Catalog (360px)
  console.log('📱 Testing Flats Catalog on Mobile (360px)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 360, height: 740 },
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://127.0.0.1:3000/flats', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, 'flats-catalog-mobile-360px.png'),
  });

  await mobileContext.close();
  await context.close();
  await browser.close();

  console.log('🎉 Phase 2 Browser Verification Complete! All screenshots saved.');
}

verifyPhase2().catch((err) => {
  console.error('Phase 2 verification error:', err);
  process.exit(1);
});
