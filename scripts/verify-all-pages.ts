import { chromium } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';

const SCREENSHOT_DIR = 'C:\\Users\\atile\\.gemini\\antigravity\\brain\\779813d2-b316-4e85-b8f2-1060a2085d4e\\screenshots';

const ROUTES_TO_CAPTURE = [
  { name: 'homepage', path: '/' },
  { name: 'flats-listing', path: '/flats' },
  { name: 'flat-detail', path: '/flats/2-bhk-flat-in-wakad-pune-tower-a-402' },
  { name: 'projects-listing', path: '/projects' },
  { name: 'project-detail', path: '/projects/aangan-residences' },
  { name: 'locations-listing', path: '/locations' },
  { name: 'location-detail', path: '/locations/wakad' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: 'admin', path: '/admin' },
];

async function main() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  try {
    for (const route of ROUTES_TO_CAPTURE) {
      console.log(`\n=== Capturing: ${route.name} (${route.path}) ===`);

      // 1. Desktop Light (1440px)
      const desktopContext = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        colorScheme: 'light',
      });
      const desktopPage = await desktopContext.newPage();
      await desktopPage.goto(`http://127.0.0.1:3000${route.path}`, { waitUntil: 'networkidle' });
      await desktopPage.waitForTimeout(500);

      // If admin, unlock first to capture dashboard
      if (route.name === 'admin') {
        const pass = desktopPage.locator('#passcode');
        if (await pass.isVisible()) {
          await pass.fill('gharapna2025');
          await desktopPage.click('button[type="submit"]');
          await desktopPage.waitForTimeout(600);
        }
      }

      await desktopPage.screenshot({
        path: path.join(SCREENSHOT_DIR, `${route.name}-desktop-1440px.png`),
        fullPage: false,
      });
      console.log(`Saved ${route.name}-desktop-1440px.png`);

      // 2. Desktop Dark Mode (1440px)
      await desktopPage.evaluate(() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      });
      await desktopPage.waitForTimeout(400);

      await desktopPage.screenshot({
        path: path.join(SCREENSHOT_DIR, `${route.name}-dark-1440px.png`),
        fullPage: false,
      });
      console.log(`Saved ${route.name}-dark-1440px.png`);
      await desktopContext.close();

      // 3. Tablet (768px)
      const tabletContext = await browser.newContext({
        viewport: { width: 768, height: 1024 },
        colorScheme: 'light',
      });
      const tabletPage = await tabletContext.newPage();
      await tabletPage.goto(`http://127.0.0.1:3000${route.path}`, { waitUntil: 'networkidle' });
      await tabletPage.waitForTimeout(500);

      if (route.name === 'admin') {
        const pass = tabletPage.locator('#passcode');
        if (await pass.isVisible()) {
          await pass.fill('gharapna2025');
          await tabletPage.click('button[type="submit"]');
          await tabletPage.waitForTimeout(600);
        }
      }

      await tabletPage.screenshot({
        path: path.join(SCREENSHOT_DIR, `${route.name}-tablet-768px.png`),
        fullPage: false,
      });
      console.log(`Saved ${route.name}-tablet-768px.png`);
      await tabletContext.close();

      // 4. Mobile (360px)
      const mobileContext = await browser.newContext({
        viewport: { width: 360, height: 780 },
        colorScheme: 'light',
        isMobile: true,
      });
      const mobilePage = await mobileContext.newPage();
      await mobilePage.goto(`http://127.0.0.1:3000${route.path}`, { waitUntil: 'networkidle' });
      await mobilePage.waitForTimeout(500);

      if (route.name === 'admin') {
        const pass = mobilePage.locator('#passcode');
        if (await pass.isVisible()) {
          await pass.fill('gharapna2025');
          await mobilePage.click('button[type="submit"]');
          await mobilePage.waitForTimeout(600);
        }
      }

      await mobilePage.screenshot({
        path: path.join(SCREENSHOT_DIR, `${route.name}-mobile-360px.png`),
        fullPage: false,
      });
      console.log(`Saved ${route.name}-mobile-360px.png`);
      await mobileContext.close();
    }

    console.log('\nAll pages captured successfully across 1440px (light+dark), 768px, and 360px!');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Capture failed:', err);
  process.exit(1);
});
