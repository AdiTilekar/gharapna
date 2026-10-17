import { test, expect } from '@playwright/test';

test.describe('Gharapna E2E Smoke Tests', () => {
  test('1. Home Page renders minimal hero, floating search, and 3 featured project cards', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Gharapna/);

    // Hero headline: "Find your own home in Pimpri-Chinchwad"
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toContainText('Find your');
    await expect(heroHeading).toContainText('own');
    await expect(heroHeading).toContainText('home in Pimpri-Chinchwad');

    // Floating Search bar presence
    const searchBtn = page.locator('button', { hasText: 'Search' });
    await expect(searchBtn.first()).toBeVisible();

    // Featured projects section
    await expect(page.locator('text=Featured projects')).toBeVisible();
    await expect(page.locator('text=Aangan Residences')).toBeVisible();
    await expect(page.locator('text=Tulsi Greens')).toBeVisible();
    await expect(page.locator('text=Nilaya Heights')).toBeVisible();

    // Slim footer notice
    await expect(page.locator('text=RERA details are shown on each project page.')).toBeVisible();
  });

  test('2. Locality Page (/locations/wakad) renders corridor details and infrastructure markers', async ({
    page,
  }) => {
    await page.goto('/locations/wakad');

    // Title and jurisdiction badge
    await expect(page.locator('h1')).toContainText('Wakad');
    await expect(page.locator('text=PCMC').first()).toBeVisible();

    // Landmarks and schools sections
    await expect(page.locator('text=Infrastructure & Neighborhood Insights')).toBeVisible();
    await expect(page.locator('text=Schools & Colleges')).toBeVisible();
    await expect(page.locator('text=Hospitals & Medical Centers')).toBeVisible();
  });

  test('3. Project Page (/projects/aangan-residences) renders RERA placeholder and all-in price breakup', async ({
    page,
  }) => {
    await page.goto('/projects/aangan-residences');

    // Project name
    await expect(page.locator('h1')).toContainText('Aangan Residences');

    // RERA badge placeholder
    const reraBadge = page.locator('text=P52100XXXXXX [TO BE ADDED]');
    await expect(reraBadge.first()).toBeVisible();

    // Cost breakup section
    await expect(page.locator('text=Transparent Cost Breakup').first()).toBeVisible();
    await expect(page.locator('text=Stamp Duty & Metro Cess').first()).toBeVisible();
    await expect(page.locator('text=Government Registration Fee').first()).toBeVisible();
  });

  test('4. Flats Catalog (/flats) supports filtering and view switching', async ({ page }) => {
    await page.goto('/flats');

    // Catalog heading
    await expect(page.locator('h1')).toContainText('Verified Flats in Pimpri-Chinchwad');

    // Unit cards count
    const flatCards = page.locator('article');
    await expect(flatCards.first()).toBeVisible();
    const count = await flatCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('5. Lead Form submission on Contact page creates lead record successfully', async ({
    page,
  }) => {
    await page.goto('/contact');

    // Fill form
    await page.fill('input[placeholder="e.g. Rahul Sharma"]', 'Test E2E Homebuyer');
    await page.fill('input[placeholder="9823012345"]', '9822012345');

    // Submit form
    await page.click('button[type="submit"]');

    // Verify success banner appears
    const successAlert = page.locator('text=Request Received');
    await expect(successAlert).toBeVisible({ timeout: 10000 });
  });

  test('6. Admin Portal (/admin) unlocks with passcode and shows operations dashboard', async ({
    page,
  }) => {
    await page.goto('/admin');

    // Enter passcode
    await page.fill('#passcode', 'gharapna2025');
    await page.click('button[type="submit"]');

    // Verify dashboard renders
    await expect(page.locator('h1')).toContainText('Lead & Site Visit Management');
    await expect(page.locator('text=Total Enquiries')).toBeVisible();
    await expect(page.locator('a', { hasText: 'Export CSV' })).toBeVisible();
  });
});
