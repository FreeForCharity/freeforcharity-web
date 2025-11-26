# Decap CMS Integration Guide

This document explains how Decap CMS is integrated into the Free For Charity website and how to use it to manage content.

## What is Decap CMS?

Decap CMS (formerly Netlify CMS) is an open-source content management system for static site generators. It provides a user-friendly admin interface to manage content without needing to edit code directly.

## Overview

Decap CMS has been integrated into this Next.js static site to allow content editors to manage:
- **FAQs** - Frequently asked questions
- **Team Members** - Information about team members
- **Testimonials** - User testimonials and reviews

## How It Works

### Architecture

1. **Admin Interface**: Located at `/admin/index.html`, provides a visual editor interface
2. **Configuration**: `public/admin/config.yml` defines the content structure and collections
3. **Content Storage**: Content is stored as individual JSON files in `src/app/data/` subdirectories
4. **TypeScript Integration**: Data files (`faqs.ts`, `team.ts`, `testimonials.ts`) import the JSON files

### Content Flow

```
CMS Edit → JSON File → TypeScript Import → Next.js Build → Static Site
```

## Accessing the CMS

### Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the admin interface:
   ```
   http://localhost:3000/admin/index.html
   ```

3. You'll see the Decap CMS interface with three collections:
   - FAQs
   - Team Members
   - Testimonials

### Production (GitHub Pages)

1. Navigate to:
   ```
   https://www.freeforcharity.org/admin/index.html
   ```

2. Authentication is handled via Git Gateway (requires setup - see Authentication section below)

## Authentication Setup

To use Decap CMS with GitHub authentication, you need to set up **Git Gateway** or **GitHub OAuth**:

### Option 1: Git Gateway (Recommended for GitHub Pages)

Git Gateway is a service that allows Decap CMS to authenticate with GitHub without exposing credentials.

1. Sign up for [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
2. Enable Git Gateway in your Netlify site settings
3. Configure the backend in `public/admin/config.yml` (already set to `git-gateway`)

### Option 2: GitHub OAuth App

1. Create a GitHub OAuth App in your repository settings
2. Update `config.yml` to use the GitHub backend:
   ```yaml
   backend:
     name: github
   repo: FreeForCharity/freeforcharity-web
     branch: main
   ```
3. Deploy an authentication server (see [Decap CMS OAuth docs](https://decapcms.org/docs/authentication-backends/))

### Option 3: Local Development Mode

For local testing without authentication:

1. Install the Decap server:
   ```bash
   npx decap-server
   ```

2. Uncomment the `local_backend: true` line in `public/admin/config.yml`

3. Start both the Decap server and your dev server:
   ```bash
   # Terminal 1
   npx decap-server
   
   # Terminal 2
   npm run dev
   ```

4. Access the CMS at `http://localhost:3000/admin/index.html`

## Managing Content

### Adding a New FAQ

1. Open the CMS admin interface
2. Click on "FAQs" collection
3. Click "New FAQ"
4. Fill in:
   - **Question**: The FAQ question
   - **Answer**: The detailed answer (supports multi-line text)
5. Click "Save"
6. Click "Publish" to commit the changes

This creates a new JSON file in `src/data/faqs/` and automatically includes it in the FAQ list.

### Adding a Team Member

1. Open the CMS admin interface
2. Click on "Team Members" collection
3. Click "New Team Member"
4. Fill in:
   - **Name**: Team member's full name
   - **Title**: Their role/title
5. Save and Publish

### Adding a Testimonial

1. Open the CMS admin interface
2. Click on "Testimonials" collection
3. Click "New Testimonial"
4. Fill in:
   - **Author**: Name of the person giving the testimonial
   - **Quote**: The testimonial text
5. Save and Publish

### Editing Existing Content

1. Navigate to the appropriate collection
2. Click on the item you want to edit
3. Make your changes
4. Save and Publish

## Content Structure

### File Organization

```
src/data/
├── faqs/
│   ├── what-is-the-organization-aiming-to-accomplish.json
│   ├── are-you-really-a-charity.json
│   └── [other-faq-files].json
├── team/
│   ├── clarke-moyer.json
│   ├── chris-rae.json
│   └── [other-team-members].json
├── testimonials/
│   ├── testimonial-1.json
│   ├── testimonial-2.json
│   └── [other-testimonials].json
├── faqs.ts (imports all FAQ JSON files)
├── team.ts (imports all team JSON files)
└── testimonials.ts (imports all testimonial JSON files)
```

### JSON Format Examples

**FAQ** (`src/data/faqs/example.json`):
```json
{
  "question": "What is Free For Charity?",
  "answer": "Free For Charity is a 501(c)(3) nonprofit organization..."
}
```

**Team Member** (`src/data/team/example.json`):
```json
{
  "name": "John Doe",
  "title": "Board Member"
}
```

**Testimonial** (`src/data/testimonials/example.json`):
```json
{
  "author": "Jane Smith",
  "quote": "Free For Charity has been instrumental in helping our organization..."
}
```

## Editorial Workflow

Decap CMS is configured with **Editorial Workflow** enabled (`publish_mode: editorial_workflow`). This means:

1. **Drafts**: New content starts as a draft
2. **Review**: Content can be reviewed before publishing
3. **Ready**: Mark content as ready for publication
4. **Published**: Final step that commits changes to the repository

This workflow helps maintain quality control and allows for collaborative editing.

## Manual Content Management

You can also manage content without the CMS interface:

### Direct File Editing

1. Edit JSON files directly in `src/data/[collection]/`
2. Ensure JSON format is valid
3. Commit and push changes
4. The site will rebuild automatically via GitHub Actions

### Adding Content via TypeScript

For content that doesn't need to be managed via CMS, you can add it directly to the TypeScript files:

**Example** - Adding an inline FAQ in `faqs.ts`:
```typescript
export const faqs: Faq[] = [
  faq1,
  faq2,
  {
    question: "My inline question?",
    answer: "My inline answer."
  },
  // ... more FAQs
];
```

## Build Process

The build process handles both JSON imports and static file copying:

1. **TypeScript Compilation**: JSON files are imported into TypeScript using `resolveJsonModule`
2. **Next.js Build**: Generates static HTML/CSS/JS
3. **Static Export**: Outputs to `./out` directory
4. **Admin Files**: Copied to `./out/admin/` for CMS access

## Troubleshooting

### CMS Interface Not Loading

**Issue**: Admin page shows blank screen  
**Solution**: 
- Check browser console for errors
- Verify `public/admin/config.yml` is valid YAML
- Ensure unpkg.com (CDN) is accessible
- Try clearing browser cache

### Authentication Issues

**Issue**: Can't log in to CMS  
**Solution**:
- Verify Git Gateway is configured (production)
- For local dev, use `local_backend: true` and run `npx decap-server`
- Check GitHub OAuth credentials if using GitHub backend

### Content Not Appearing

**Issue**: New content doesn't show on site  
**Solution**:
- Verify the JSON file is valid
- Check that the TypeScript file imports the new JSON
- Rebuild the site: `npm run build`
- Check for TypeScript errors: `npm run lint`

### Build Errors with JSON Imports

**Issue**: Build fails with import errors  
**Solution**:
- Verify `tsconfig.json` has `"resolveJsonModule": true`
- Check JSON syntax is valid
- Ensure file paths in imports are correct

## Configuration Reference

### Collection Fields

The CMS collections are configured in `public/admin/config.yml`:

```yaml
collections:
  - name: "faqs"
    label: "FAQs"
    folder: "src/app/data/faqs"
    create: true
    fields:
      - { label: "Question", name: "question", widget: "string" }
      - { label: "Answer", name: "answer", widget: "text" }
```

**Key Settings**:
- `name`: Internal collection identifier
- `label`: Display name in CMS
- `folder`: Where JSON files are stored
- `create`: Allow creating new items
- `fields`: Define the content structure

### Widget Types

Available field widgets:
- `string`: Single-line text input
- `text`: Multi-line text area
- `markdown`: Rich text editor
- `boolean`: Checkbox
- `datetime`: Date/time picker
- `image`: Image uploader
- `list`: Repeatable fields

## Media Management

Uploaded media files are stored in `public/uploads/` and accessed at `/uploads/` in the built site.

To add image fields to collections:
```yaml
fields:
  - { label: "Image", name: "image", widget: "image" }
```

## Future Enhancements

Potential improvements to the CMS integration:

1. **Add More Collections**: Programs, blog posts, events
2. **Rich Text Editing**: Use markdown widget for formatted content
3. **Image Management**: Add photo uploads for team members
4. **Preview Templates**: Custom preview styling in CMS
5. **Workflow Automation**: Auto-deployment on publish

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [Configuration Options](https://decapcms.org/docs/configuration-options/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
- [Backend Authentication](https://decapcms.org/docs/authentication-backends/)

## Support

For issues or questions about the CMS integration:
1. Check this documentation
2. Review Decap CMS official docs
3. Check the GitHub repository issues
4. Contact the development team

---

**Last Updated**: November 2025  
**Decap CMS Version**: 3.x
