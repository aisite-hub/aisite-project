# AI Site Project

Landing page project built with React, Vite, Tailwind CSS, and an Express server.

## Project Specifications

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + custom design tokens + Radix UI components
- **Animations**: Framer Motion (hero effects, transitions)
- **Icons**: Lucide React
- **Routing**: Wouter
- **Backend**: Express (single endpoint for newsletter subscription)
- **Build system**:
  - `vite` builds client assets to `dist/public`
  - `esbuild` bundles server to `dist/index.cjs`
- **Default local dev URL**: `http://127.0.0.1:4321`

## Features

- Responsive landing page with animated hero sections
- Custom 404 page
- Newsletter/lead form integration (`/api/subscribers`)
- GitHub Pages deployment workflow

## Project Structure

```text
client/                  # React app (UI pages/components)
server/                  # Express server
script/build.ts          # Production build script (client + server)
.github/workflows/       # CI/CD workflows (GitHub Pages deploy)
dist/                    # Build output
```

## Prerequisites

- **Node.js** `20.19+` (recommended) or `22.12+`
- **npm** (comes with Node)

## Getting Started (Local)

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open in browser:

```text
http://127.0.0.1:4321
```

## Available Scripts

- `npm run dev`:
  - Starts Express + Vite in development mode.
- `npm run check`:
  - Runs TypeScript type-checking.
- `npm run build`:
  - Builds client and server for production (`dist/`).
- `npm run start`:
  - Runs production server from `dist/index.cjs`.
- `npm run build:pages`:
  - Builds static client output for Pages (`dist/public`).

## Run Production Build Locally

1. Build:

```bash
npm run build
```

2. Start production server:

```bash
npm run start
```

3. Open:

```text
http://127.0.0.1:4321
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml` to publish automatically.

1. Push your code to GitHub.
2. In your repository, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or `master` (or run workflow manually via **Actions** tab).
5. After workflow finishes, GitHub provides your Pages URL.

### Notes for Pages Deployments

- GitHub Pages is **static hosting**.
- Client calls to `/api/subscribers` require a running backend. In this project, the Express route is mocked locally.
- The workflow currently publishes `dist/public`.

## Troubleshooting

- **`403` / wrong app on localhost**:
  - Another process may already use your port. Run with a custom port:
  - `PORT=4321 npm run dev` (or another free port).
- **Vite Node version warning**:
  - Upgrade Node to `20.19+`.
- **Blank page after deploy**:
  - Confirm Pages source is set to **GitHub Actions** and latest workflow run succeeded.

## License

MIT
