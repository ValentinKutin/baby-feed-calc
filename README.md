# Baby Feed Calc

Vite + React + TypeScript starter with ESLint, Vitest, and React Testing Library. Configured for GitHub Pages deployment.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build locally
- `npm run test` – run tests once (Vitest)
- `npm run test:watch` – run tests in watch mode
- `npm run lint` – run ESLint

## Testing

Vitest is configured with `jsdom` and React Testing Library. See `vitest.setup.ts` and example in `src/App.test.tsx`.

## GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml` that builds with a base matching the repository name and deploys to GitHub Pages from the `dist/` output.

Steps:
1. Push to `main`.
2. Ensure GitHub Pages is set to "GitHub Actions" in repo settings.


