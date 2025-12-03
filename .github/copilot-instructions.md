# Free For Charity Web Application

Free For Charity is a Next.js 15.5.2 static website that connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. Built with TypeScript, Tailwind CSS, and configured for static export to GitHub Pages.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup
- **Node.js Version**: Requires Node.js 20.x (validated with v20.19.4)
- **Package Manager**: Uses npm with package-lock.json

### Bootstrap and Build Process
**Build Status: ✅ WORKING**
- `npm run build` works without modifications (Google Fonts have been removed)
- Build takes ~15-20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- No workarounds needed - build process is fully functional

### Core Commands and Timings
1. `npm install` -- takes ~10-15 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
2. `npm run lint` -- takes ~2 seconds. Produces 11 warnings (expected). Set timeout to 30+ seconds.
3. `npm run build` -- takes ~15-20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
4. `npm run dev` -- starts in ~1 second with turbopack. NEVER CANCEL. Set timeout to 30+ seconds.
5. `npm run preview` -- serves built static files. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow
```bash
# Install dependencies (10-15 seconds)
npm install

# Start development server (1 second startup)
npm run dev
# Visit http://localhost:3000

# Lint code (2 seconds, 11 warnings expected)
npm run lint

# Build for production (15-20 seconds)
npm run build

# Preview built site
npm run preview
# Visit http://localhost:3000
```

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS test application functionality after making changes:**

1. **Homepage Load Test**: Navigate to http://localhost:3000 and verify page loads completely
2. **Navigation Test**: Test Header navigation and mobile responsive behavior
3. **Page Accessibility**: Verify all 29 pages are accessible and load correctly
4. **Responsive Design Test**: Verify mobile and desktop layouts work correctly
5. **Static Content Test**: Verify content loads (Team, Testimonials, FAQs)
6. **Image Rendering Test**: Verify images display correctly across all pages

### Automated Testing
**Playwright tests are available to validate critical functionality:**

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run all tests
npm test

# Run tests in headed mode (to see browser)
npm run test:headed

# Run tests with UI
npm run test:ui
```

**Test Suites:**
- `tests/logo.spec.ts` - Verifies logo visibility in NavBar and hero section
- `tests/github-pages.spec.ts` - Validates image loading for GitHub Pages deployment

**Testing Image Rendering for GitHub Pages:**
To test the GitHub Pages deployment locally with basePath:
```bash
# Build with basePath for GitHub Pages
NEXT_PUBLIC_BASE_PATH=/freeforcharity-web npm run build

# Preview the site
npm run preview

# Run tests (in another terminal)
npm test
```

### Pre-Commit Validation
**ALWAYS run before committing changes:**
```bash
npm run lint  # Fix any errors, 11 warnings are expected
npm test     # Run automated tests (requires build first)
```

### Expected Lint Warnings
The linter reports **11 warnings** which are expected:
- 6 warnings about `<img>` vs `<Image>` (acceptable for static export)
- 3 warnings about unused imports (can be cleaned up)
- 2 warnings about React hooks (review if causing issues)

## Application Architecture

### Key Features
- **29 Pages**: Complete website with program pages, resources, policies, and actions
- **Global Header/Footer**: Consistent navigation and footer across all pages
  - Header: `src/components/Header/index.tsx`
  - Footer: `src/components/Footer/index.tsx`
- **Static Export**: Configured for GitHub Pages deployment via `next.config.ts`
- **SEO Optimized**: Comprehensive metadata in `layout.tsx`, sitemap, and robots.txt
- **Dual Deployment**: Works on both custom domain and GitHub Pages with basePath support
- **Content Management**: JSON-based content for FAQs, team members, and testimonials

### Project Structure
```
src/
├── app/                     # Next.js App Router (29 pages)
│   ├── page.tsx            # Homepage (routes to Figma-Home-page)
│   ├── layout.tsx          # Root layout with metadata and providers
│   ├── globals.css         # Global styles
│   ├── Figma-Home-page/    # Main homepage component
│   ├── [28 other pages]/   # All site pages
│   ├── sitemap.ts          # SEO sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/              # React components
│   ├── Header/             # Site header with navigation
│   ├── Footer/             # Site footer
│   ├── UI/                 # Reusable UI components
│   ├── Home/               # Original home page components
│   ├── Figma-Home-Page-Components/  # Current home page
│   ├── [program-components]/  # Page-specific components
│   └── CookieConsent/      # Cookie consent banner
├── data/                    # JSON data files
│   ├── faqs/               # FAQ JSON files (2 files)
│   ├── team/               # Team member profiles (5 files)
│   ├── testimonials/       # Testimonial data (3 files)
│   ├── faqs.ts            # FAQ data loader
│   ├── team.ts            # Team data loader
│   └── testimonials.ts     # Testimonial data loader
└── lib/
    └── assetPath.ts        # Helper for GitHub Pages basePath support
```

### Configuration Files
- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint with Next.js rules
- `postcss.config.mjs` - Tailwind CSS PostCSS configuration
- `.github/workflows/nextjs.yml` - GitHub Pages deployment

## Common Tasks

### Content Updates
- **Homepage content**: Edit `src/app/page.tsx`
- **Navigation links**: Update `src/app/components/NavBar.tsx`
- **Team information**: Modify `src/app/data/team.ts`
- **FAQ content**: Update `src/app/data/faqs.ts`
- **Testimonials**: Edit `src/app/data/testimonials.ts`

### SEO and Metadata
- **Site metadata**: Edit `metadata` object in `src/app/layout.tsx`
- **Sitemap**: Update `src/app/sitemap.ts` for new routes
- **Robots.txt**: Modify `src/app/robots.ts`

### Styling and UI
- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind CSS 4.1.12 utility classes directly in components
- **PostCSS config**: `postcss.config.mjs`

### Adding Images and Assets
When adding images or other static assets that need to work on both custom domain and GitHub Pages:

**Use the `assetPath()` helper for images:**
```typescript
import { assetPath } from "@/lib/assetPath";

// In your component:
<img src={assetPath("/Images/my-image.png")} alt="Description" />
```

**Why this is needed:**
- Custom domain (freeforcharity.org): images at `/Images/my-image.png`
- GitHub Pages: images at `/freeforcharity-web/Images/my-image.png`
- The helper automatically handles both scenarios based on the `NEXT_PUBLIC_BASE_PATH` environment variable

**Current Usage:**
- `assetPath()` is imported in `src/components/Figma-Home-Page-Components/Mission/index.tsx` but not actively used
- Header logo uses external URL: `https://freeforcharity.org/wp-content/uploads/2024/04/Screenshot_145.png`
- Footer uses local SVG: `/Svgs/footerImage.svg`

### Deployment Process
The site auto-deploys to GitHub Pages via `.github/workflows/nextjs.yml` when pushed to main branch:
1. Node.js 20 setup
2. `npm ci` for clean install
3. `NEXT_PUBLIC_BASE_PATH=/freeforcharity-web` is set for GitHub Pages deployment
4. `next build` builds the site with proper basePath (~15-20 seconds)
5. Playwright tests run to validate the build
6. Static files deployed from `./out` directory

**Dual Deployment:**
- **Custom domain**: https://www.freeforcharity.org (CNAME configured, no basePath needed)
- **GitHub Pages**: https://freeforcharity.github.io/freeforcharity-web/ (basePath required)

## Known Issues and Limitations

### ESLint Warnings
- **Current warnings**: 11 warnings (expected and documented)
  - 6 warnings: `@next/next/no-img-element` - Using `<img>` instead of Next.js `<Image>` component
  - 3 warnings: Unused imports (`Link`, `assetPath`, `Image`)
  - 2 warnings: React hooks dependencies
- **Status**: Acceptable for static export configuration. The `<img>` warnings are expected for static export with unoptimized images.
- **Action**: Can clean up unused imports, but `<img>` warnings should remain as-is for static export.

### Asset Path Helper Usage
- **Issue**: `assetPath()` helper exists but is not consistently used across the codebase
- **Current State**: Header logo uses external WordPress URL, Footer uses local SVG without helper
- **Recommendation**: For new images, use `assetPath()` to ensure GitHub Pages compatibility

## Quick Reference Commands

```bash
# Repository setup
node --version        # Verify Node.js 20.x
npm install          # 10-15 seconds

# Development
npm run dev          # http://localhost:3000 (1 second startup)
npm run lint         # 2 seconds, 11 warnings expected

# Testing
npm run build        # Build first (15-20 seconds, required for tests)
npm test             # Run Playwright tests
npm run test:headed  # Run tests in headed mode
npm run test:ui      # Run tests with Playwright UI

# Production
npm run build        # 15-20 seconds
npm run preview      # http://localhost:3000

# Test GitHub Pages deployment locally
NEXT_PUBLIC_BASE_PATH=/freeforcharity-web npm run build
npm run preview      # Test with basePath

# File structure overview
ls -la src/app/      # Main application code (29 pages)
ls -la src/components/  # React components
ls -la src/data/     # JSON content files
ls -la public/       # Static assets (icons, images, SVGs)
ls -la tests/        # Playwright test files
ls -la .github/      # GitHub workflows and configs
```

## Troubleshooting

### Build Failures
1. **Build cache warning**: Normal on first build, subsequent builds will be faster
2. **TypeScript errors**: Run `npm run lint` to identify issues
3. **Dependency issues**: Run `npm install` to ensure all dependencies are installed

### Development Server Issues
1. **Port conflicts**: Stop existing servers or use different port: `npm run dev -- -p 3001`
2. **Cache issues**: Delete `.next` directory and restart: `rm -rf .next && npm run dev`

### Test Issues
1. **Playwright browsers not found**: Run `npx playwright install chromium --with-deps`
2. **Tests timeout**: Ensure build completed successfully, web server timeout is 120s
3. **Tests fail in CI but pass locally**: Check GitHub Actions logs, review test artifacts

Remember: **NEVER CANCEL** long-running commands. **ALWAYS** test after changes. Build process is fully functional without workarounds.