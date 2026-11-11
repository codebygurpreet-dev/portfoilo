# Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`) to open in your browser.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` type-checks the app and creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source with Oxlint.

## Project structure

```text
src/
  assets/       Static assets
  components/   Reusable page sections and UI components
  hooks/        Shared React hooks
  pages/        Page-level compositions
  utils/        Typed portfolio content and shared utilities
  App.tsx       Application root
  index.css     Tailwind import and global styles
  main.tsx      Browser entry point
```

Update the example content in `src/utils/portfolio.ts` and replace the placeholder name and email in the page components before publishing.
