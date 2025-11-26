Free For Charity website built with Next.js App Router.

## Organization

**Free For Charity** is a 501(c)(3) nonprofit organization (EIN: 46-2471893) dedicated to supporting other nonprofits.

## Purpose

Free For Charity connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. By providing free web hosting, domain names, Microsoft 365 grants assistance, and consulting services, we help nonprofits put more resources back into their charitable missions.

## Main Calls-to-Action

The site features multiple CTAs accessible throughout the experience:

- **Donate**: Support our mission with financial contributions
- **Volunteer**: Join our team of skilled volunteers helping nonprofits
- **Help for Charities**: Learn about our services and onboarding programs

## Deployment

- **Live Site**: [https://www.freeforcharity.org](https://www.freeforcharity.org)
- **GitHub Pages**: [https://freeforcharity.github.io/freeforcharity-web/](https://freeforcharity.github.io/freeforcharity-web/)
- **Hosting**: GitHub Pages
- **Deployment**: Automated via GitHub Actions on push to `main` branch

## Development Status

**Current Status: Active Development**

The site is actively being developed with the following status:

✅ **Functional:**
- Multi-page site with comprehensive navigation
- Responsive design (mobile and desktop) with animated mobile menu
- SEO optimization (metadata, sitemap, robots.txt)
- Static site generation and deployment pipeline
- Cookie consent banner with customizable preferences
- Mission video player
- Animated statistics section (Results 2023)
- Team member profiles
- Testimonials carousel
- FAQ accordion
- Multiple informational pages (Help for Charities, Volunteer, Donate, About Us, etc.)
- Policy pages (Privacy Policy, Cookie Policy, Terms of Service, etc.)
- **Decap CMS integration for content management** (FAQs, Team, Testimonials)

⚠️ **In Progress:**
- Search functionality (UI present but not fully implemented)
- Some external integrations

The site is deployed to its live domain (freeforcharity.org) and is fully functional.

## Overview

This site showcases Free For Charity's programs, services, and mission. It enables donations, volunteer signups, and provides comprehensive resources for charities seeking assistance.

## Tech Stack

- Next.js 15.5.2 (App Router, TypeScript)
- React 19.1.0
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React & React Icons for iconography
- Swiper for carousels
- **Decap CMS** for content management (FAQs, Team, Testimonials)
- Playwright for automated testing

## Content Management

This site uses **Decap CMS** (formerly Netlify CMS) for easy content editing without code changes.

**Quick Start:**
- Access the CMS at `/admin/index.html` (local: `http://localhost:3000/admin/index.html`)
- Manage FAQs, Team Members, and Testimonials through a user-friendly interface
- Content is stored as JSON files and automatically integrated into the site

**Full Documentation:** See [DECAP.md](./DECAP.md) for complete setup, usage, and troubleshooting guide.

## Local Development

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

Visit http://localhost:3000

## Testing

This project includes automated tests using Playwright to ensure quality and consistency.

### Running Tests

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests
npm test              # Headless mode
npm run test:headed   # With browser visible
npm run test:ui       # Interactive UI mode
```

### Current Test Coverage

#### End-to-End Tests (Playwright)

The test suite includes 6 test files with comprehensive coverage:

**Logo and Image Tests** (`tests/logo.spec.ts`)
- ✅ Header logo visibility verification
- ✅ Hero section image visibility
- ✅ Both images present on the same page

**Image Loading Tests** (`tests/image-loading.spec.ts`)
- ✅ Images load correctly and are visible
- ✅ Hero image loads from local assets with HTTP 200 status
- ⏭️ Natural dimensions check (skipped in CI due to timing issues)

**Cookie Consent Tests** (`tests/cookie-consent.spec.ts`)
- ✅ Banner display on first visit
- ✅ Accept All and Decline All functionality
- ✅ Preference persistence across page reloads
- ✅ Customize preferences modal
- ✅ Toggle analytics and marketing cookies
- ✅ Save custom preferences
- ✅ Accessibility (ARIA attributes, keyboard navigation)

**Animated Numbers Tests** (`tests/animated-numbers.spec.ts`)
- ✅ Results-2023 section displays with all four statistics
- ✅ Numbers start at 0 before scrolling into view
- ✅ Numbers animate only once when scrolled into view
- ✅ Correct descriptions for each statistic
- ✅ Respects prefers-reduced-motion preference

**Copyright Notice Tests** (`tests/copyright.spec.ts`)
- ✅ Footer displays copyright with current year
- ✅ Link to freeforcharity.org present

**Mission Video Tests** (`tests/mission-video.spec.ts`)
- ✅ Video displays in mission section with accessibility attributes
- ✅ Video source configured correctly

**Test Configuration** (`playwright.config.ts`)
- Uses system Chromium browser to avoid network download issues
- Runs against built static site (`npm run preview`)
- Retries failed tests 2x in CI, 0x locally
- Collects traces on first retry for debugging

Tests run automatically on every push to main via GitHub Actions before deployment.

### Static Code Analysis

**ESLint** (`eslint.config.mjs`)
- ✅ Next.js core-web-vitals and TypeScript rules enabled
- ✅ Runs automatically during build process
- ⚠️ Some warnings about `<img>` tags (acceptable for static export)

**TypeScript** (`tsconfig.json`)
- ✅ Strict mode enabled
- ✅ Type checking runs during build

### CI/CD Integration

**GitHub Actions Workflow** (`.github/workflows/nextjs.yml`)

Current CI/CD pipeline includes:
1. ✅ Node.js 20 setup
2. ✅ Dependency installation (`npm ci`)
3. ✅ Next.js build with GitHub Pages basePath
4. ✅ Playwright browser installation
5. ✅ Automated test execution
6. ✅ Test failure blocks deployment
7. ✅ Static site artifact upload
8. ✅ Deployment to GitHub Pages

**Full Testing Guide:** See [TESTING.md](./TESTING.md) for complete documentation.

## Key Features

- Multi-page application with comprehensive navigation
  - Desktop navigation with dropdown menus
  - Mobile slide-out navigation with hamburger menu
  - Navigation component: `src/components/Header/index.tsx`

- Homepage sections (Figma-based design)
  - Hero section with video/image
  - Mission section with embedded video
  - Support Free For Charity
  - Endowment Features
  - Our Programs
  - Volunteer with Us
  - Results 2023 (animated statistics)
  - Testimonials carousel
  - Team member profiles
  - FAQs accordion
  - Homepage: `src/app/Figma-Home-page/index.tsx`

- Cookie Consent System
  - GDPR-compliant cookie banner
  - Customizable cookie preferences (necessary, analytics, marketing)
  - Preferences persist across visits
  - Component: `src/components/CookieConsent/`

- SEO
  - Global metadata in `src/app/layout.tsx` (title template, description, OG/Twitter, robots)
  - `src/app/sitemap.ts` and `src/app/robots.ts`

## Project Structure

- `src/app/page.tsx` – Entry point routing to Figma homepage
- `src/app/Figma-Home-page/` – Main homepage implementation
- `src/app/[various-pages]/` – Individual page routes (about-us, donate, volunteer, etc.)
- `src/components/` – UI components organized by feature/page
  - `Header/` – Navigation header with dropdown menus
  - `Footer/` – Site footer with links and contact info
  - `CookieConsent/` – Cookie consent banner and preferences modal
  - `Figma-Home-Page-Components/` – Homepage section components
  - `UI/` – Reusable UI components
- `src/data/` – Content data (FAQs, team, testimonials)
- `src/lib/` – Utility functions (assetPath for GitHub Pages)
- `public/` – Static assets (images, icons, admin files)
- `tests/` – Playwright test files

## Common Tasks

- Update homepage content: edit components in `src/components/Figma-Home-Page-Components/`
- Add new pages: create folders in `src/app/`
- Update navigation: edit `src/components/Header/index.tsx`
- Adjust SEO: edit `metadata` in `src/app/layout.tsx`
- Manage team/FAQs/testimonials: use Decap CMS or edit files in `src/data/`

## Deployment Details

The site is configured for static export and deployed to GitHub Pages:

**Production:**
- Live at: [https://www.freeforcharity.org](https://www.freeforcharity.org)
- GitHub Pages URL: [https://freeforcharity.github.io/freeforcharity-web/](https://freeforcharity.github.io/freeforcharity-web/)
- Deployment: Automatic via GitHub Actions (`.github/workflows/nextjs.yml`)
- Trigger: Push to `main` branch
- Build output: Static files in `./out` directory

**Local preview of production build:**
```bash
npm run build    # Build static site
npm run preview  # Preview at http://localhost:3000
```

**Note:** The build process uses `output: "export"` in `next.config.ts` for static site generation compatible with GitHub Pages.

## Notes

- The site uses multiple pages rather than global popup modals for donations and volunteering
- If you add new routes, consider updating `sitemap.ts` accordingly
- Cookie consent preferences are stored in localStorage
- For GitHub Pages deployment, use the `assetPath()` helper from `src/lib/assetPath.ts` for image paths
