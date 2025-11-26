# Testing Guide

This guide helps you test the Free For Charity web application, including content management and automated UI tests.

## Quick Test Checklist

### 1. Verify Installation
```bash
# Check that decap-cms-app is installed
npm list decap-cms-app
# Should show: decap-cms-app@3.x.x

# Install dependencies if needed
npm install
```

### 2. Check Admin Files
```bash
# Verify admin files exist
ls -la public/admin/
# Should see: config.yml, index.html
```

### 3. Check Content Structure
```bash
# Verify JSON content files
ls -la src/data/faqs/
ls -la src/data/team/
ls -la src/data/testimonials/
```

### 4. Test Development Server
```bash
npm run dev
```
Then visit:
- Main site: http://localhost:3000
- CMS Admin: http://localhost:3000/admin/index.html

### 5. Test Build
```bash
npm run build
```
Should complete successfully with admin files in `./out/admin/`

### 6. Test Preview
```bash
npm run preview
```
Visit http://localhost:3000 to see the built site

### 7. Run Automated Tests
```bash
# First, ensure the site is built
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests
npm test
```

## Automated Test Suite

### Overview

The project uses **Playwright** for end-to-end testing. All tests run automatically in CI before deployment.

**Test Framework**: Playwright v1.56.0  
**Browser**: Chromium (uses system browser to avoid network restrictions)  
**Test Files**: 6 test files with comprehensive coverage

### Test Files and Coverage

#### 1. Logo and Image Visibility Tests (`tests/logo.spec.ts`)

Tests that verify critical images are present and visible on the homepage.

**Test Cases:**

1. **`should display logo in header`**
   - **Purpose**: Verifies logo appears in navigation header
   - **Checks**:
     - Logo element is visible on page
     - Alt text equals "Free For Charity"
   - **Selector**: `header a[href="/"] img[alt="Free For Charity"]`

2. **`should display hero section image`**
   - **Purpose**: Verifies hero image appears correctly
   - **Checks**:
     - Image element is visible on page
     - Alt text equals "Hero image"
   - **Selector**: `img[alt="Hero image"]`

3. **`both header logo and hero image should be present on the same page`**
   - **Purpose**: Verifies both images exist simultaneously
   - **Checks**:
     - Header logo is visible
     - Hero image is visible

#### 2. Image Loading Tests (`tests/image-loading.spec.ts`)

Tests that verify images load correctly when the site is built.

**Test Cases:**

1. **`images should load correctly and be visible`**
   - **Purpose**: Validates images are visible and have src attributes
   - **Checks**:
     - Header logo is visible
     - Hero image is visible
     - Both have truthy src attributes

2. **`hero image should load from local assets`**
   - **Purpose**: Verifies hero image loads with HTTP 200 status
   - **Method**: Monitors network responses for `figma-hero-img.png`
   - **Checks**:
     - At least one image request is made
     - All requests return status code 200 OK

3. **`images have natural dimensions indicating successful load`** ⏭️ **SKIPPED**
   - **Purpose**: Verifies image has loaded by checking natural dimensions
   - **Status**: Temporarily disabled
   - **Reason**: `naturalWidth`/`naturalHeight` return 0 in CI environment

#### 3. Cookie Consent Tests (`tests/cookie-consent.spec.ts`)

Comprehensive tests for the cookie consent functionality.

**Cookie Consent Banner Tests:**

1. **`should display cookie consent banner on first visit`**
   - Verifies banner appears with correct heading and buttons
   - Checks for Decline All, Customize, and Accept All buttons
   - Verifies Privacy Policy and Cookie Policy links

2. **`should hide banner after clicking Accept All`**
   - Clicks Accept All button
   - Verifies banner disappears

3. **`should hide banner after clicking Decline All`**
   - Clicks Decline All button
   - Verifies banner disappears

4. **`should persist Accept All choice and not show banner on subsequent visits`**
   - Accepts cookies, reloads page
   - Verifies banner doesn't appear
   - Checks localStorage for correct preferences

5. **`should persist Decline All choice and not show banner on subsequent visits`**
   - Declines cookies, reloads page
   - Verifies banner doesn't appear
   - Checks localStorage for correct preferences

**Cookie Preferences Modal Tests:**

6. **`should open preferences modal when clicking Customize`**
   - Verifies modal appears with correct structure
   - Checks for cookie category sections
   - Verifies action buttons present

7. **`should close modal when clicking Cancel`**
   - Opens modal, clicks Cancel
   - Verifies modal closes, banner remains

8. **`should close modal when pressing Escape key`**
   - Opens modal, presses Escape
   - Verifies modal closes

9. **`should close modal when clicking outside (overlay)`**
   - Opens modal, clicks overlay
   - Verifies modal closes

10. **`should have necessary cookies always checked and disabled`**
    - Verifies necessary cookies checkbox is checked and disabled
    - Checks for "Always Active" text

11. **`should allow toggling analytics and marketing cookies`**
    - Verifies toggles start unchecked
    - Toggles both on
    - Verifies toggles are now checked

12. **`should save custom preferences correctly`**
    - Enables only analytics (not marketing)
    - Saves preferences
    - Verifies localStorage has correct values
    - Reloads and verifies banner doesn't appear

**Accessibility Tests:**

13. **`modal should have proper ARIA attributes`**
    - Checks `aria-modal="true"`
    - Checks `aria-labelledby="cookie-preferences-title"`

14. **`banner should have proper ARIA attributes`**
    - Checks `aria-label="Cookie consent notice"`

#### 4. Animated Numbers Tests (`tests/animated-numbers.spec.ts`)

Tests for the Results-2023 section animated statistics.

**Test Cases:**

1. **`should display the Results-2023 section with all four statistics`**
   - Scrolls to Results section
   - Waits for animations to complete
   - Verifies all four values are correct (221, 3, 221, 25)

2. **`should start with numbers at 0 before scrolling into view`**
   - Verifies numbers start at 0
   - Confirms Results section exists

3. **`should animate numbers only once when scrolled into view`**
   - Scrolls to section, waits for animation
   - Scrolls away and back
   - Verifies value stays at final animated value

4. **`should display correct descriptions for each statistic`**
   - Verifies all four descriptions are visible:
     - Organizational partners
     - Total volunteers
     - Organizations accessing technical assistance offerings
     - Volunteer hours contributed to the organization

5. **`should respect prefers-reduced-motion preference`**
   - Creates context with reduced motion preference
   - Verifies numbers appear instantly at final value

#### 5. Copyright Notice Tests (`tests/copyright.spec.ts`)

Tests for the footer copyright notice.

**Test Cases:**

1. **`should display copyright notice with current year`**
   - Verifies copyright text is visible
   - Checks for copyright symbol and current year
   - Verifies complete copyright text

2. **`should display link to freeforcharity.org in copyright notice`**
   - Verifies link is visible
   - Checks link href and text

#### 6. Mission Video Tests (`tests/mission-video.spec.ts`)

Tests for the mission video player.

**Test Cases:**

1. **`should display video in mission section`**
   - Verifies video element is visible
   - Checks accessibility attributes (aria-label, title)
   - Verifies controls are enabled

2. **`should have video source configured correctly`**
   - Verifies source element exists
   - Checks video type is `video/mp4`

### Running Tests

#### Local Development

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests in different modes
npm test              # Headless mode (default)
npm run test:headed   # With browser visible
npm run test:ui       # Interactive Playwright UI
```

#### Running Individual Tests

```bash
# Run only logo tests
npx playwright test logo.spec.ts

# Run only cookie consent tests
npx playwright test cookie-consent.spec.ts

# Run a specific test by name
npx playwright test -g "should display logo in header"

# Run in debug mode
npx playwright test --debug
```

#### CI/CD Environment

Tests run automatically in GitHub Actions on every push to the main branch.

**Workflow**: `.github/workflows/nextjs.yml`

**CI Pipeline Steps**:
1. ✅ Checkout repository
2. ✅ Setup Node.js 20
3. ✅ Install dependencies (`npm ci`)
4. ✅ Install Playwright browsers with system deps
5. ✅ Build Next.js with GitHub Pages basePath
6. ✅ Run test suite
7. ✅ Upload test artifacts on failure
8. ✅ Deploy only if tests pass

### Test Configuration

**Playwright Config** (`playwright.config.ts`)

Key settings:
- **Test Directory**: `./tests`
- **Base URL**: `http://localhost:3000`
- **Parallel Execution**: Enabled (disabled in CI for stability)
- **Retries**: 2 in CI, 0 locally
- **Web Server**: Auto-starts `npm run preview` before tests
- **Browser**: System Chromium (fallback to Playwright's if unavailable)
- **Trace Collection**: On first retry for debugging
- **Reporter**: HTML report

**Special Features**:
- Automatically detects and uses system Chromium browser
- Works in restricted network environments
- Prevents accidental `test.only` in CI

## Static Analysis

### ESLint

**Configuration**: `eslint.config.mjs`

- **Rules**: Next.js core-web-vitals + TypeScript
- **Ignored Paths**: node_modules, .next, out, build, test-results, playwright-report
- **Integration**: Runs automatically during `npm run build`

**Current Warnings**:
- Warnings about using `<img>` instead of `<Image />` (expected and acceptable)
- These warnings are intentional for static export with GitHub Pages basePath support

### TypeScript

**Configuration**: `tsconfig.json`

- **Strict Mode**: Enabled
- **Type Checking**: Runs during build
- **Path Aliases**: Configured for clean imports
- **Target**: ES2017+ with Next.js optimizations

### Code Quality

```bash
# Run linter
npm run lint

# Type checking (part of build)
npm run build
```

## What to Verify

### Visual Elements
- [ ] Logo displays in header navigation
- [ ] Hero image displays correctly
- [ ] Mission video plays correctly

### Homepage Content
- [ ] Team members display correctly (5 members)
- [ ] Testimonials carousel works
- [ ] FAQs accordion expands/collapses
- [ ] Results 2023 numbers animate on scroll

### Cookie Consent
- [ ] Banner appears on first visit
- [ ] Accept All hides banner
- [ ] Decline All hides banner
- [ ] Customize opens preferences modal
- [ ] Preferences persist across page reloads

### CMS Admin Interface
- [ ] Admin page loads at /admin/index.html
- [ ] Three collections visible: FAQs, Team Members, Testimonials
- [ ] Can browse existing content items

### JSON Data Integration
- [ ] Team data imported from JSON files
- [ ] Testimonial data imported from JSON files
- [ ] FAQ data imported from JSON files (2 from JSON, rest inline)

## Expected Behavior

### Team Members (from JSON)
1. Clarke Moyer - Founder/President
2. Chris Rae - Vice President
3. Tyler Carlotto - Secretary
4. Brennan Darling - Treasurer
5. Rebecca Cook - Member at Large

### Testimonials (from JSON)
1. Professional online presence testimonial
2. Free domain and email testimonial
3. Core mission focus testimonial

### FAQs (2 from JSON, rest inline)
1. What is the organization aiming to accomplish? (JSON)
2. Are you really a Charity? (JSON)
3. Additional FAQs (inline in faqs.ts)

## Common Issues

### Issue: Admin page blank
**Cause**: External CDN (unpkg.com) blocked or inaccessible  
**Solution**: This is expected in restricted environments. Will work in production.

### Issue: Content not showing
**Cause**: JSON import error  
**Solution**: Check TypeScript compilation and JSON validity

### Issue: Playwright browser download fails
**Cause**: Network restrictions blocking cdn.playwright.dev  
**Solution**: Uses system Chromium automatically via playwright.config.ts

### Issue: Test times out
**Cause**: Web server didn't start in time  
**Solution**: Increase timeout in playwright.config.ts (currently 120s)

## File Structure Reference

```
freeforcharity-web/
├── tests/                          # Test suite
│   ├── logo.spec.ts               # Logo visibility tests
│   ├── image-loading.spec.ts      # Image loading tests
│   ├── cookie-consent.spec.ts     # Cookie consent tests
│   ├── animated-numbers.spec.ts   # Animated numbers tests
│   ├── copyright.spec.ts          # Copyright notice tests
│   ├── mission-video.spec.ts      # Mission video tests
│   └── README.md                  # Test documentation
├── playwright.config.ts            # Playwright configuration
├── .github/workflows/
│   └── nextjs.yml                 # CI/CD pipeline with automated tests
├── public/
│   └── admin/
│       ├── index.html             # CMS admin interface
│       └── config.yml             # CMS configuration
├── src/data/
│   ├── faqs/
│   │   ├── what-is-the-organization-aiming-to-accomplish.json
│   │   └── are-you-really-a-charity.json
│   ├── team/
│   │   ├── clarke-moyer.json
│   │   ├── chris-rae.json
│   │   ├── tyler-carlotto.json
│   │   ├── brennan-darling.json
│   │   └── rebecca-cook.json
│   ├── testimonials/
│   │   ├── testimonial-1.json
│   │   ├── testimonial-2.json
│   │   └── testimonial-3.json
│   ├── faqs.ts                    # Imports FAQ JSON files
│   ├── team.ts                    # Imports team JSON files
│   └── testimonials.ts            # Imports testimonial JSON files
├── DECAP.md                       # Complete CMS documentation
├── TESTING.md                     # This file
└── README.md                      # Project overview with testing summary
```

## Test Debugging

### Local Debugging

```bash
# Run tests in headed mode to see browser
npm run test:headed

# Run in debug mode with Playwright Inspector
npx playwright test --debug

# Run with trace collection
npx playwright test --trace on

# View trace file
npx playwright show-trace trace.zip
```

### CI Debugging

When tests fail in CI:
1. Check the GitHub Actions workflow run logs
2. Download test artifacts (screenshots, traces)
3. View HTML report: `npx playwright show-report`
4. Compare local vs CI results

## Writing New Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('My Feature', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    
    // Your test code here
    const element = page.locator('selector');
    await expect(element).toBeVisible();
  });
});
```

### Best Practices

- **Use descriptive test names**: Clearly state what is being tested
- **Group related tests**: Use `test.describe()` blocks
- **Use specific selectors**: Prefer data-testid, role, or aria-label attributes
- **Wait for elements**: Always use Playwright's auto-waiting or explicit waits
- **Test user behavior**: Focus on what users see and do, not implementation details
- **Keep tests independent**: Each test should run in isolation

## Documentation

- Full guide: [DECAP.md](./DECAP.md)
- Quick start: [README.md](./README.md#content-management)
- Test suite: [tests/README.md](./tests/README.md)
- Decap CMS docs: https://decapcms.org/docs/
- Playwright docs: https://playwright.dev/docs/intro

---

**Test Suite Status**: ✅ All tests passing (1 skipped in CI)  
**Integration Status**: ✅ Complete  
**Last Updated**: November 2025
