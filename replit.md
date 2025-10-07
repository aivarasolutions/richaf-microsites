# RichAF Microsite Starter

## Overview
Next.js microsite application migrated from Vercel to Replit. Features client pages with optional basic authentication and SEO controls.

## Recent Changes
**October 07, 2025**: Migrated project from Vercel to Replit
- Configured Next.js to run on port 5000 with 0.0.0.0 binding for Replit compatibility
- Set up environment variables for authentication and SEO control
- Configured npm workflow and deployment settings
- Dependencies installed and project running successfully

## Project Architecture
- **Framework**: Next.js 14.2.5 with TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Node Version**: 20.x

### Directory Structure
- `/pages` - Next.js pages directory
  - `/client/[slug].tsx` - Dynamic client pages with authentication
  - `index.tsx` - Home page
  - `_app.tsx` - Custom App component
- `/components` - React components
- `/styles` - Global CSS files
- `middleware.ts` - Basic authentication middleware for /client/* routes

## Environment Variables
The following environment variables are configured in Replit Secrets:

- **BASIC_AUTH_USER**: Username for protecting /client/* pages
- **BASIC_AUTH_PASS**: Password for protecting /client/* pages
- **NEXT_PUBLIC_CLIENTS_OPEN**: Set to 'true' to disable authentication on client pages
- **NEXT_PUBLIC_INDEX_CLIENT**: Set to 'true' to allow search engine indexing of client pages

## Development
- **Dev Server**: Runs on port 5000 (configured for Replit)
- **Command**: `npm run dev`
- **Workflow**: Automatically starts via the "Server" workflow

## Deployment
Configured for Replit Autoscale deployment:
- **Build**: `npm run build`
- **Start**: `npm run start`
- Production server runs on port 5000

## Security Features
- Basic authentication middleware protecting /client/* routes
- Configurable authentication bypass via environment variable
- SEO controls for client pages (index/noindex)
