import { test, expect } from '@playwright/test';

/**
 * Logo Visibility Tests
 * 
 * These tests verify that the Free For Charity logo is present and visible
 * in critical locations on the homepage:
 * 1. Top left corner (Header)
 * 2. Hero section
 * 
 * Note: The current implementation uses:
 * - Header logo: External image from freeforcharity.org with alt="Free For Charity"
 * - Hero image: Local image /Images/figma-hero-img.png with alt="Hero image"
 */

test.describe('Logo Visibility', () => {
  test('should display logo in header', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find the logo in the Header
    // The logo is in a Link element that points to "/" with img alt="Free For Charity"
    const headerLogo = page.locator('header a[href="/"] img[alt="Free For Charity"]');

    // Verify the logo exists
    await expect(headerLogo).toBeVisible();

    // Verify the logo has the correct alt text
    await expect(headerLogo).toHaveAttribute('alt', 'Free For Charity');
  });

  test('should display hero image', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find the hero image
    const heroImage = page.locator('img[alt="Hero image"]');

    // Verify the image exists
    await expect(heroImage).toBeVisible();

    // Verify the image has the correct alt text
    await expect(heroImage).toHaveAttribute('alt', 'Hero image');
  });

  test('both header logo and hero image should be present on the same page', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find both images
    const headerLogo = page.locator('header a[href="/"] img[alt="Free For Charity"]');
    const heroImage = page.locator('img[alt="Hero image"]');

    // Verify both are visible simultaneously
    await expect(headerLogo).toBeVisible();
    await expect(heroImage).toBeVisible();
  });
});
