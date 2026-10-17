import { chromium } from 'playwright';

async function checkMetrics() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 360, height: 780 },
  });

  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });

  const timing = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('navigation')[0]))
  );

  const imagesWithoutAlt = await page.$$eval('img', (imgs) =>
    imgs.filter((img) => !img.hasAttribute('alt') || img.getAttribute('alt')?.trim() === '').length
  );

  const title = await page.title();
  const h1Count = await page.locator('h1').count();
  const h2Count = await page.locator('h2').count();
  const buttonsWithAria = await page.$$eval('button', (btns) =>
    btns.every((btn) => btn.innerText.trim().length > 0 || btn.hasAttribute('aria-label'))
  );

  console.log('--- Homepage Quality & Accessibility Metrics ---');
  console.log(`Title: "${title}"`);
  console.log(`DOM Interactive: ${Math.round(timing.domInteractive)}ms`);
  console.log(`DOM Complete: ${Math.round(timing.domComplete)}ms`);
  console.log(`H1 Count: ${h1Count}`);
  console.log(`H2 Count: ${h2Count}`);
  console.log(`Images without alt: ${imagesWithoutAlt}`);
  console.log(`All buttons have accessible labels: ${buttonsWithAria}`);

  await browser.close();
}

checkMetrics().catch(console.error);
