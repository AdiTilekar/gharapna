import { chromium } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';

const SCREENSHOT_DIR = 'C:\\Users\\atile\\.gemini\\antigravity\\brain\\779813d2-b316-4e85-b8f2-1060a2085d4e\\screenshots';

async function main() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  try {
    // 1. Desktop Light (1440px)
    console.log('--- 1. Testing Desktop Light (1440x900) ---');
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: 'light',
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(1000);

    // Initial hero view
    await desktopPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-desktop-1440px.png'),
      fullPage: false,
    });
    console.log('Saved minimal-home-desktop-1440px.png');

    // Scrolled nav state check
    await desktopPage.evaluate(() => window.scrollTo(0, 300));
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-desktop-scrolled-nav.png'),
      fullPage: false,
    });
    console.log('Saved minimal-home-desktop-scrolled-nav.png');

    // Full page desktop
    await desktopPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-desktop-fullpage.png'),
      fullPage: true,
    });
    console.log('Saved minimal-home-desktop-fullpage.png');

    // 2. Desktop Dark Mode (1440px)
    console.log('--- 2. Testing Desktop Dark Mode (1440x900) ---');
    // Toggle dark mode via class on html or clicking theme toggle
    await desktopPage.evaluate(() => {
      window.scrollTo(0, 0);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    });
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-dark-1440px.png'),
      fullPage: false,
    });
    console.log('Saved minimal-home-dark-1440px.png');

    // Full page dark mode
    await desktopPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-dark-fullpage.png'),
      fullPage: true,
    });
    console.log('Saved minimal-home-dark-fullpage.png');
    await desktopContext.close();

    // 3. Tablet (768px)
    console.log('--- 3. Testing Tablet (768x1024) ---');
    const tabletContext = await browser.newContext({
      viewport: { width: 768, height: 1024 },
      colorScheme: 'light',
    });
    const tabletPage = await tabletContext.newPage();
    await tabletPage.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
    await tabletPage.waitForTimeout(1000);
    await tabletPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-tablet-768px.png'),
      fullPage: false,
    });
    console.log('Saved minimal-home-tablet-768px.png');

    await tabletPage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-tablet-fullpage.png'),
      fullPage: true,
    });
    console.log('Saved minimal-home-tablet-fullpage.png');
    await tabletContext.close();

    // 4. Mobile (360px)
    console.log('--- 4. Testing Mobile (360x780) ---');
    const mobileContext = await browser.newContext({
      viewport: { width: 360, height: 780 },
      colorScheme: 'light',
      isMobile: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);
    await mobilePage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-mobile-360px.png'),
      fullPage: false,
    });
    console.log('Saved minimal-home-mobile-360px.png');

    await mobilePage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'minimal-home-mobile-fullpage.png'),
      fullPage: true,
    });
    console.log('Saved minimal-home-mobile-fullpage.png');

    // 5. Mobile Menu (360px)
    console.log('--- 5. Testing Mobile Fullscreen Menu (360px) ---');
    const menuButton = mobilePage.locator('button[aria-label="Open menu"]');
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await mobilePage.waitForTimeout(600);
      await mobilePage.screenshot({
        path: path.join(SCREENSHOT_DIR, 'minimal-home-mobile-menu.png'),
        fullPage: false,
      });
      console.log('Saved minimal-home-mobile-menu.png');
    } else {
      console.log('Warning: Menu button not found by aria-label');
    }
    await mobileContext.close();

    // 6. Test Search Bar Interaction & Navigation
    console.log('--- 6. Testing Floating Search Bar Navigation ---');
    const searchContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const searchPage = await searchContext.newPage();
    await searchPage.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });

    // Select Locality "Wakad"
    const localitySelect = searchPage.locator('select').first();
    await localitySelect.selectOption('wakad');

    // Click Search button
    const searchBtn = searchPage.getByRole('button', { name: 'Search', exact: true });
    await searchBtn.click();
    await searchPage.waitForURL(/\/flats\?locality=wakad/, { timeout: 5000 });
    console.log('Search successfully navigated to: ', searchPage.url());

    await searchContext.close();
    console.log('All minimal homepage verifications completed successfully!');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
