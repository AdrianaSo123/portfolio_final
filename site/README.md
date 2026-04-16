# Portfolio Site

This app lives in the `site` folder of a multi-folder workspace.

## Run Locally

From the workspace root (`portfolio_final`):

```bash
cd site
npm install
npm run dev
```

If port 3000 is already in use, Next.js will choose another available port (for example 3001).

## Scripts

- `npm run dev`: start local development server
- `npm run build`: create production build
- `npm run start`: run production server
- `npm run lint`: run ESLint (includes accessibility rules)
- `npm run a11y:check`: run a quick Axe scan against the local homepage on port 3100 (includes a short render delay for stable results)

## Key Files

- `app/page.tsx`: homepage content and semantic structure
- `app/globals.css`: theme tokens, typography, layout, and interaction styles
- `lib/portfolio-brief.ts`: portfolio content model and data
- `app/layout.tsx`: metadata, global font loading, and root layout

## Accessibility Notes

- Includes keyboard-accessible skip link and focus-visible states for primary actions.
- Reduced-motion preferences are respected.
- Includes a repeatable Axe-based accessibility scan via `npm run a11y:check`.

## Common Pitfall

Running `npm run dev` from the workspace root (`portfolio_final`) fails because there is no `package.json` there.
Always run commands from `portfolio_final/site`.
