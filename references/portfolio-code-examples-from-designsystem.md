# Portfolio Code Examples from `kaw393939/designsystem`

The snippets below are extracted/adapted from the repo and organized for reuse in a portfolio project.

## 1) Token-first CSS foundation
Source inspiration: `app/globals.css`

```css
:root {
  --page-reading: #f5efe5;
  --surface-neutral: rgba(255, 255, 255, 0.78);
  --border-neutral: rgba(73, 90, 77, 0.16);
  --ink-strong: #203126;
  --ink-body: #435548;
  --accent-strong: #4f6854;

  --type-hero-size: clamp(3rem, 6vw, 4.85rem);
  --type-section-size: clamp(2rem, 4vw, 3rem);
  --type-body-size: 1rem;

  --space-3: 1rem;
  --space-5: 2rem;
  --radius-card: 1.5rem;
  --radius-pill: 999px;

  --motion-fast: 180ms;
  --motion-gentle: 260ms;
}
```

Why useful:
- Gives you a reusable visual system so pages feel consistent and intentional.

## 2) Accessible page shell with skip link
Source inspiration: `components/page-shell.tsx`

```tsx
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-(--page-reading) text-(--ink-strong)">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-(--ink-strong) px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(160,190,168,0.28),transparent_26%),linear-gradient(180deg,rgba(247,242,233,0.98),rgba(244,238,228,0.98))]" />

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </main>
    </div>
  );
}
```

Why useful:
- Gives a clean baseline for every route and improves accessibility.

## 3) Reusable section heading primitive
Source inspiration: `components/section-heading.tsx`

```tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
  headingLevel?: 1 | 2 | 3;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  headingLevel = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${headingLevel}` as const;

  return (
    <div className="measure-reading">
      <p className="type-meta text-[var(--accent-strong)]">{eyebrow}</p>
      <HeadingTag className="type-section mt-3 text-[var(--ink-strong)]">{title}</HeadingTag>
      <p className="type-body mt-4 text-[var(--ink-body)]">{body}</p>
    </div>
  );
}
```

Why useful:
- Keeps page sections consistent and easy to scan.

## 4) Portfolio preview card pattern
Source inspiration: `components/student-portfolio-preview-card.tsx`

```tsx
type StudentPortfolioPreview = {
  href: string;
  name: string;
  role: string;
  summary: string;
  audience: string;
  signal: string;
  styleNote: string;
  imagePath: string;
  imageAlt: string;
};

export function PortfolioPreviewCard({ portfolio }: { portfolio: StudentPortfolioPreview }) {
  return (
    <article className="panel-shell panel-proof overflow-hidden">
      <img src={portfolio.imagePath} alt={portfolio.imageAlt} className="h-56 w-full object-cover" />
      <div className="p-6">
        <p className="type-meta text-(--accent-strong)">{portfolio.role}</p>
        <h3 className="mt-3 type-concept text-(--ink-strong)">{portfolio.name}</h3>
        <p className="mt-3 type-body text-(--ink-body)">{portfolio.summary}</p>
        <p className="mt-4 type-caption"><strong>Audience:</strong> {portfolio.audience}</p>
        <p className="mt-2 type-caption"><strong>Signal:</strong> {portfolio.signal}</p>
        <a href={portfolio.href} className="action-primary mt-5 inline-flex">Open case study</a>
      </div>
    </article>
  );
}
```

Why useful:
- Great starter card for showing identity + outcome + direction at a glance.

## 5) Evidence tier badge
Source inspiration: `components/evidence-tier-badge.tsx`

```tsx
type EvidenceTier =
  | "Verified evidence"
  | "Interpreted synthesis"
  | "Concept model"
  | "Generated illustration";

const tierClasses: Record<EvidenceTier, string> = {
  "Verified evidence": "border-[rgba(76,109,68,0.24)] bg-[rgba(230,239,227,0.92)]",
  "Interpreted synthesis": "border-[rgba(87,104,130,0.22)] bg-[rgba(228,234,242,0.9)]",
  "Concept model": "border-[rgba(79,104,84,0.24)] bg-[rgba(237,243,235,0.88)]",
  "Generated illustration": "border-[rgba(150,96,54,0.24)] bg-[rgba(245,226,215,0.92)]",
};
```

Why useful:
- Makes source quality explicit, which increases trust in your case studies.

## 6) Progressive disclosure for optional depth
Source inspiration: `components/progressive-disclosure.tsx`

```tsx
export function ProgressiveDisclosure({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group" open={defaultOpen || undefined}>
      <summary className="flex cursor-pointer list-none items-center gap-2 type-meta text-(--accent-strong) [&::-webkit-details-marker]:hidden">
        <span className="inline-block transition group-open:rotate-90" aria-hidden="true">›</span>
        {title}
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
```

Why useful:
- Keeps pages compact while still allowing deep process documentation.

## 7) Route-aware nav matching (for active states)
Source inspiration: `components/site-header-nav.tsx`

```tsx
function matchesCurrentPath(currentPath: string, href: string) {
  const normalized = href === "/" ? "/" : href.replace(/\/+$/, "");
  return currentPath === normalized || (normalized !== "/" && currentPath.startsWith(`${normalized}/`));
}
```

Why useful:
- Improves wayfinding and perceived polish in portfolio navigation.

## 8) Type-first portfolio data model
Source inspiration: `lib/student-portfolio-examples.ts`

```ts
export type PortfolioMetric = {
  value: string;
  label: string;
};

export type PortfolioProject = {
  title: string;
  label: string;
  summary: string;
  outcome: string;
  proof: string;
  imagePath: string;
  imageAlt: string;
};

export type PortfolioPageData = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  intro: string;
  metrics: readonly PortfolioMetric[];
  projects: readonly PortfolioProject[];
};
```

Why useful:
- Lets you add/edit projects as structured content instead of rewriting UI.

## Fast integration path
1. Copy the token foundation and shell pattern.
2. Create one typed `portfolioData.ts` file.
3. Build one reusable case-study card and one reusable project section.
4. Add evidence badges and one testimonial block.
5. Add progressive disclosure for process notes.
