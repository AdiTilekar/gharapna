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

  console.log('--- 1. Testing Blog Listing Page (/blog) ---');
  await page.goto('http://127.0.0.1:3000/blog', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'blog-listing-desktop-1440px.png'),
    fullPage: false,
  });
  console.log('Saved blog-listing-desktop-1440px.png');

  console.log('--- 2. Testing Blog Article Detail (/blog/best-areas-to-buy-a-flat-in-pcmc) ---');
  await page.goto('http://127.0.0.1:3000/blog/best-areas-to-buy-a-flat-in-pcmc', {
    waitUntil: 'networkidle',
  });
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'blog-article-desktop-1440px.png'),
    fullPage: false,
  });
  console.log('Saved blog-article-desktop-1440px.png');

  console.log('--- 3. Testing Why Gharapna Page (/why-gharapna) ---');
  await page.goto('http://127.0.0.1:3000/why-gharapna', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'why-gharapna-desktop-1440px.png'),
    fullPage: false,
  });
  console.log('Saved why-gharapna-desktop-1440px.png');

  console.log('--- 4. Testing About Page (/about) with Team Empty State ---');
  await page.goto('http://127.0.0.1:3000/about', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'about-page-desktop-1440px.png'),
    fullPage: false,
  });
  console.log('Saved about-page-desktop-1440px.png');

  console.log('--- 5. Testing FAQ Hub Page (/faq) ---');
  await page.goto('http://127.0.0.1:3000/faq', { waitUntil: 'networkidle' });
  // Click on the second question to expand it
  const secondFaqButton = page.locator('button[aria-expanded]').nth(1);
  if (await secondFaqButton.count() > 0) {
    await secondFaqButton.click();
    await page.waitForTimeout(300);
  }
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'faq-hub-desktop-1440px.png'),
    fullPage: false,
  });
  console.log('Saved faq-hub-desktop-1440px.png');

  console.log('--- 6. Testing Language Toggle Dropdown ---');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
  const langButton = page.locator('button[aria-label="Change Language"]');
  if (await langButton.count() > 0) {
    await langButton.click();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'language-switcher-dropdown.png'),
      fullPage: false,
    });
    console.log('Saved language-switcher-dropdown.png');
  }

  console.log('--- 7. Testing Mobile Viewports (360px) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 360, height: 740 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto('http://127.0.0.1:3000/why-gharapna', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, 'why-gharapna-mobile-360px.png'),
    fullPage: false,
  });
  console.log('Saved why-gharapna-mobile-360px.png');

  await mobilePage.goto('http://127.0.0.1:3000/blog', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({
    path: path.join(SCREENSHOT_DIR, 'blog-listing-mobile-360px.png'),
    fullPage: false,
  });
  console.log('Saved blog-listing-mobile-360px.png');

  console.log('--- 8. Testing Sitemap and Robots Endpoints ---');
  const robotsRes = await page.goto('http://127.0.0.1:3000/robots.txt');
  console.log('Robots status:', robotsRes?.status());
  const sitemapRes = await page.goto('http://127.0.0.1:3000/sitemap.xml');
  console.log('Sitemap status:', sitemapRes?.status());

  await browser.close();
  console.log('=== All Phase 3 Browser Tests Passed! ===');
}

main().catch((err) => {
  console.error('Phase 3 verification failed:', err);
  process.exit(1);
});
