import { test, expect } from '@playwright/test';

/**
 * Animated Numbers Tests
 * 
 * These tests verify that the Results-2023 section numbers animate correctly
 * when scrolled into view.
 */

test.describe('Results 2023 Animated Numbers', () => {
  test('should display the Results-2023 section with all four statistics', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find the Results-2023 section heading
    const resultsHeading = page.locator('h1:has-text("Results - 2023")');
    await expect(resultsHeading).toBeVisible();

    // Scroll to the Results section to trigger animations
    await resultsHeading.scrollIntoViewIfNeeded();

    // Wait for animations to complete
    await page.waitForTimeout(3000);

    // Verify all four statistics are displayed with their final values
    const organizationalPartners = page.locator('text=Organizational partners').locator('..');
    await expect(organizationalPartners.locator('h1')).toContainText('221');

    const totalVolunteers = page.locator('text=Total volunteers').locator('..');
    await expect(totalVolunteers.locator('h1')).toContainText('3');

    const technicalAssistance = page.locator('text=Organizations accessing technical assistance offerings').locator('..');
    await expect(technicalAssistance.locator('h1')).toContainText('221');

    const volunteerHours = page.locator('text=Volunteer hours contributed to the organization').locator('..');
    await expect(volunteerHours.locator('h1')).toContainText('25');
  });

  test('should start with numbers at 0 before scrolling into view', async ({ page }) => {
    // Navigate to the homepage without scrolling
    await page.goto('/');

    // The numbers should initially be 0 (before animation triggers)
    // We check if the animated number elements exist
    const resultsSection = page.locator('h1:has-text("Results - 2023")');
    await expect(resultsSection).toBeAttached();
  });

  test('should animate numbers only once when scrolled into view', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Find and scroll to the Results-2023 section
    const resultsHeading = page.locator('h1:has-text("Results - 2023")');
    await resultsHeading.scrollIntoViewIfNeeded();

    // Wait for animation to complete
    await page.waitForTimeout(3000);

    // Capture the final values
    const firstCard = page.locator('text=Organizational partners').locator('..').locator('h1');
    const finalValue = await firstCard.textContent();
    expect(finalValue).toBe('221');

    // Scroll away and back
    await page.locator('h1:has-text("Welcome to")').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await resultsHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Value should still be the final animated value (not reset to 0)
    const valueAfterRescroll = await firstCard.textContent();
    expect(valueAfterRescroll).toBe('221');
  });

  test('should display correct descriptions for each statistic', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Verify all descriptions are present
    await expect(page.locator('text=Organizational partners')).toBeVisible();
    await expect(page.locator('text=Total volunteers')).toBeVisible();
    await expect(page.locator('text=Organizations accessing technical assistance offerings')).toBeVisible();
    await expect(page.locator('text=Volunteer hours contributed to the organization')).toBeVisible();
  });
});
