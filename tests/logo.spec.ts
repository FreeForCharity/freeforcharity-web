import { test, expect } from '@playwright/test';

/**
 * Logo Visibility Tests
 * 
 * These tests verify that the Free For Charity logo is present and visible
 * in critical locations on the homepage:
 * 1. Top left corner (NavBar)
 * 2. Hero section (landing/home section)
 * 
 * The tests handle both deployment scenarios:
 * - Custom domain (freeforcharity.org): images at /web-app-manifest-512x512.png
 * - GitHub Pages (freeforcharity.github.io/freeforcharity-web/): images at /freeforcharity-web/web-app-manifest-512x512.png
 */

test.describe('Logo Visibility', () => {
  test('should display logo in top left corner (NavBar)', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find the logo in the NavBar
    // The logo is in a Link element with aria-label "Free For Charity home"
    const navBarLogo = page.locator('header a[aria-label="Free For Charity home"] img[alt="Free For Charity logo"]');

    // Verify the logo exists
    await expect(navBarLogo).toBeVisible();

    // Verify the logo has a valid src (handles both custom domain and GitHub Pages)
    const src = await navBarLogo.getAttribute('src');
    expect(src).toMatch(/\/web-app-manifest-512x512\.png$/);

    // Verify the logo has the correct alt text
    await expect(navBarLogo).toHaveAttribute('alt', 'Free For Charity logo');
  });

  test('should display logo in hero section', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find the logo in the hero section
    // The hero section has id="home" and contains a large circular logo
    const heroLogo = page.locator('section#home img[alt="Free For Charity mark"]');

    // Verify the logo exists
    await expect(heroLogo).toBeVisible();

    // Verify the logo has a valid src (handles both custom domain and GitHub Pages)
    const src = await heroLogo.getAttribute('src');
    expect(src).toMatch(/\/web-app-manifest-512x512\.png$/);

    // Verify the logo has the correct alt text
    await expect(heroLogo).toHaveAttribute('alt', 'Free For Charity mark');
  });

  test('both logos should be present on the same page', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find both logos
    const navBarLogo = page.locator('header a[aria-label="Free For Charity home"] img[alt="Free For Charity logo"]');
    const heroLogo = page.locator('section#home img[alt="Free For Charity mark"]');

    // Verify both logos are visible simultaneously
    await expect(navBarLogo).toBeVisible();
    await expect(heroLogo).toBeVisible();

    // Verify they use the same image source
    const navBarSrc = await navBarLogo.getAttribute('src');
    const heroSrc = await heroLogo.getAttribute('src');
    expect(navBarSrc).toBe(heroSrc);
    expect(navBarSrc).toMatch(/\/web-app-manifest-512x512\.png$/);
  });
});
