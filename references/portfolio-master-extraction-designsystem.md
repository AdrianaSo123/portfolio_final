# Master Extraction from `kaw393939/designsystem`

This file is the consolidated "final pass" of high-value ideas for building your portfolio.

## Recommended Stack (Best Fit)

Use this stack for your project:
- Next.js (App Router)
- TypeScript
- Tailwind CSS 4 + CSS variables for tokens
- Vitest + Testing Library (unit tests)
- Playwright + axe-core (browser + accessibility tests)
- Lighthouse CI (quality gates)
- GitHub Actions (quality + deploy)
- GitHub Pages static export (if you want static hosting)

Why this is the best fit for both you and the source repo:
- The source repo is already built around this architecture.
- You get direct pattern portability from existing components.
- You get a production-quality workflow (not only UI snippets).
- You keep static-export compatibility for affordable/simple hosting.

## Complete Idea Inventory

## A) Information Architecture and Navigation

1. Route families by job, not just topic.
- Start, guided path, browse/depth, examples, support.
- Source: `lib/site-navigation.ts`

2. Status badges for route intent.
- Label pages as entry/required/support/optional.
- Source: `components/route-status-badge.tsx`

3. Context-aware active navigation.
- Match nested routes, not exact path only.
- Source: `components/site-header-nav.tsx`

4. Return links that adapt to user journey.
- "Back to previous page" or fallback.
- Source: `components/journey-return-link.tsx`

5. "Return to tour" CTA from deep pages.
- Keep support content connected to core path.
- Source: `components/return-to-tour-cta.tsx`

## B) UX Flow and User Guidance

6. Guided multi-step flow with progress chips.
- Explicit step count and current step.
- Source: `components/guided-step-shell.tsx`

7. Companion panel (desktop + mobile sheet).
- Consolidates route map, notes, and "stuck" diagnostics.
- Source: `components/guided-step-companion.tsx`

8. Resume-where-you-left-off band.
- Uses local persistence for revisit continuity.
- Source: `components/journey-resume-band.tsx`

9. Fast-path pattern for impatient users.
- Gives quick route for recruiters with low time.
- Source: `components/student-fast-path.tsx`

10. Progressive disclosure (`details/summary`).
- Keep page short while preserving depth.
- Source: `components/progressive-disclosure.tsx`

## C) Portfolio Content Strategy

11. Data-first portfolio model.
- Typed structures for metrics/projects/principles/quote.
- Source: `lib/student-portfolio-examples.ts`

12. Case studies as proof systems.
- Each project includes summary, outcome, and proof block.
- Source: `lib/student-portfolio-examples.ts`

13. Operating principles section.
- 3 concise principles tied to execution style.
- Source: `lib/student-portfolio-examples.ts`

14. Conversion-focused closing section.
- "Looking for" + specific opportunity target + contact CTA.
- Source: `app/examples/student-exemplars/noor-valdez/page.tsx`, `app/examples/student-exemplars/jules-morrow/page.tsx`

15. Object-label framing for artifacts.
- Object type, provenance, why here, what it proves.
- Source: `components/object-label.tsx`

16. Evidence-tier labeling.
- Differentiate verified evidence vs synthesis vs concept.
- Source: `components/evidence-tier-badge.tsx`

## D) Visual System and UI Composition

17. Tokenized design system in CSS custom properties.
- Colors, spacing, radius, type scales, motion, measures.
- Source: `app/globals.css`

18. Tone-based panel system.
- Single panel primitive with tone variants.
- Source: `components/tone-panel.tsx`

19. Editorial hero band + split layouts.
- Reusable hero structure for consistent page openings.
- Source: `components/editorial-band.tsx`, `components/split-layout.tsx`

20. Grid primitive with auto-fit min card width.
- Rapid, consistent card layouts.
- Source: `components/content-grid.tsx`

21. Section heading primitive.
- Keeps pages scannable and coherent.
- Source: `components/section-heading.tsx`

22. Persona-specific visual lanes.
- Different typographic/color systems per persona.
- Source: exemplar pages in `app/examples/student-exemplars/`

23. Timeline component for narrative progression.
- Useful for project evolution and milestones.
- Source: `components/timeline-section.tsx`

## E) Accessibility and Reliability Patterns

24. Skip link + focusable main content.
- Keyboard-first page entry.
- Source: `components/page-shell.tsx`, accessibility tests

25. Reduced-motion support and forced-colors checks.
- Validate motion and readability under constraints.
- Source: `tests/browser/accessibility.spec.ts`

26. Route-level accessibility smoke testing.
- Automated axe checks on representative routes.
- Source: `tests/browser/accessibility.spec.ts`

27. Local note persistence + clipboard export.
- User notes survive route changes and can be copied.
- Source: `components/tour-record-panel.tsx`, `lib/tour-brief-storage.ts`

## F) Content Governance and Schema Discipline

28. Page recipe contracts with validation.
- Enforce required block sequences and ordering.
- Source: `lib/page-recipes.ts`

29. Recipe exemplar wrapper pattern.
- Page intro + structure preview + validated unit rendering.
- Source: `components/recipe-exemplar-page.tsx`

30. Workflow artifacts with explicit statuses.
- Assemble/review/approve/publish pipeline concepts.
- Source: `lib/release-workflow.ts`, `lib/site-release.ts`

31. Release-aware route selection.
- Sitemaps and audits generated from selected release scope.
- Source: `app/sitemap.ts`, `.lighthouserc.js`, `lib/site-release.ts`

32. Observable state export mindset.
- Event/snapshot-based transparency for system health.
- Source: `lib/observable-state.ts`

## G) Quality Engineering and Deployment

33. Strong script taxonomy.
- Build, schema validation, workflow validation, release validation, tests, lighthouse.
- Source: `package.json`

34. CI quality pipeline.
- typecheck + lint + validations + unit + browser + lighthouse.
- Source: `.github/workflows/quality.yml`

35. Base-path compatibility testing.
- Validate root and repository-path hosting.
- Source: `.github/workflows/quality.yml`

36. Static deployment workflow.
- Build and deploy to GitHub Pages with environment configuration.
- Source: `.github/workflows/deploy-pages.yml`

37. Canonical robots and sitemap generation.
- Dynamic metadata aligned to selected site release.
- Source: `app/robots.ts`, `app/sitemap.ts`, `lib/site-config.ts`

## High-Impact Subset to Implement First

If we implement only the highest ROI ideas first:
1. Token system + panel tones + shell
2. Typed portfolio content model
3. Case-study cards with outcome/proof blocks
4. Evidence-tier + object-label metadata
5. Route-aware nav + fast path
6. Accessibility baseline (skip link + keyboard + reduced motion)
7. Unit/browser tests + lighthouse in CI

## What This Means for Your Project Build

The source repo is more than UI inspiration. It gives a complete method:
- design system
- content system
- navigation system
- proof/credibility system
- quality/deployment system

For your portfolio, we should keep this method and simplify content volume.

## Suggested Build Mode

Use "production-lite" mode:
- Keep the architecture and quality gates.
- Reduce route count to: Home, Work, About, Contact, optional Process.
- Keep evidence/proof and narrative rigor from the original system.

This gives you a portfolio that looks strong and behaves like a mature product.
