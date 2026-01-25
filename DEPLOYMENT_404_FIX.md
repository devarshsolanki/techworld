# Deployment Guide - 404 Fix for SPA Routes

## Problem Fixed
After deployment, reloading on any page other than home showed a 404 error. This is a classic SPA (Single Page Application) routing issue.

## Why This Happened
Your React Router app is a client-side router. When you reload at `/about` or `/contact`, the server tried to find that exact file path and failed. You need to serve `index.html` for all routes so React Router can handle them client-side.

## Solutions Implemented

### 1. **Vite Config** (`vite.config.ts`)
Added `historyApiFallback: true` to the dev server for local development.

### 2. **Node.js Server** (`server.js`)
Added static file serving and SPA fallback middleware:
- Serves the built frontend from the `build/` directory
- For any route that doesn't match API (`/api/*`) or static files, serves `index.html`
- React Router then handles the routing on the client side

### 3. **Apache/Htaccess** (`.htaccess`)
For Apache-based hosting:
- Rewrites all non-existent files/directories to `index.html`
- Allows React Router to handle routing

### 4. **Netlify** (`public/_redirects`)
For Netlify deployments:
- Redirects all routes to `index.html` with 200 status
- Netlify automatically processes this file

## Deployment Steps

### If Using Node.js Server
```bash
npm run build
node server.js
```
Visit `http://localhost:5000` - all routes should work now!

### If Using Vercel
Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### If Using Netlify
- The `public/_redirects` file is already created
- Deploy normally with `npm run build`

### If Using Apache
- The `.htaccess` file handles routing automatically
- Ensure mod_rewrite is enabled on your Apache server

### If Using Other Platforms
Look for SPA routing configuration in your hosting provider's documentation. The key rule is:
**All non-matching routes should serve `index.html`**

## Rebuild & Deploy
```bash
# Build the project
npm run build

# Test locally
node server.js

# Deploy the `build/` folder to your hosting platform
```

## API Routes
API endpoints under `/api/*` are not affected and will continue to work normally.

Routes handled by React Router (client-side):
- `/`
- `/home`
- `/about`
- `/solutions`
- `/contact`
- `/technology`
- `/projects`
- `/resources`
