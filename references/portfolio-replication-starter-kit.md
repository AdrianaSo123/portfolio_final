# Portfolio Replication Starter Kit (Code-First)

This is a direct, reusable starter kit based on patterns from `kaw393939/designsystem`.

## 1) Global tokens (`app/globals.css`)

```css
:root {
  --page-bg: #f5efe5;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-proof: #dfe9e1;
  --border: rgba(73, 90, 77, 0.16);
  --border-strong: rgba(73, 90, 77, 0.28);
  --ink-strong: #203126;
  --ink-body: #435548;
  --accent: #4f6854;
  --signal: #7a4e21;

  --type-hero: clamp(2.7rem, 6vw, 4.8rem);
  --type-section: clamp(1.9rem, 4vw, 2.8rem);
  --type-body: 1rem;
  --leading-body: 1.8;

  --radius-card: 1.5rem;
  --radius-pill: 999px;

  --shadow-card: 0 14px 36px rgba(44, 52, 43, 0.08);
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--page-bg);
  color: var(--ink-strong);
  font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
}

.type-meta {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.type-hero {
  font-family: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  font-size: var(--type-hero);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.type-section {
  font-family: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  font-size: var(--type-section);
  line-height: 1.06;
}

.type-body {
  font-size: var(--type-body);
  line-height: var(--leading-body);
}

.panel-shell {
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  background: var(--surface);
}

.panel-proof {
  background: var(--surface-proof);
}

.action-primary,
.action-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.25rem;
  border-radius: var(--radius-pill);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
}

.action-primary {
  background: var(--ink-strong);
  color: #fff;
}

.action-secondary {
  border: 1px solid var(--border-strong);
  color: var(--ink-strong);
  background: rgba(255, 255, 255, 0.75);
}
```

## 2) Content model (`lib/portfolio-content.ts`)

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

export type PortfolioQuote = {
  quote: string;
  attribution: string;
  role: string;
};

export type PortfolioPageData = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  intro: string;
  audience: string;
  signal: string;
  email: string;
  imagePath: string;
  imageAlt: string;
  metrics: readonly PortfolioMetric[];
  projects: readonly PortfolioProject[];
  quote: PortfolioQuote;
};

export const portfolioData: PortfolioPageData = {
  slug: "your-name",
  name: "Your Name",
  role: "Product and visual designer",
  headline: "I turn messy product flows into clear systems people can trust.",
  intro:
    "I design and ship portfolio-grade product work with strong UX narrative and real evidence.",
  audience: "For product design and design systems teams",
  signal: "Sage x Builder",
  email: "mailto:you@example.com",
  imagePath: "/images/hero.jpg",
  imageAlt: "Hero project collage",
  metrics: [
    { value: "4", label: "products redesigned end-to-end" },
    { value: "28%", label: "task-time reduction in tested flows" },
    { value: "96%", label: "reviewers identified target user on first read" },
  ],
  projects: [
    {
      title: "Studio Queue",
      label: "Scheduling workflow redesign",
      summary: "Rebuilt critique scheduling from spreadsheet chaos to a clear queue system.",
      outcome: "Cut navigation steps in half for student sign-up.",
      proof: "Prototype states, test notes, and release handoff documentation.",
      imagePath: "/images/studio-queue.jpg",
      imageAlt: "Studio queue UI and flow board",
    },
  ],
  quote: {
    quote: "Strong systems thinking and excellent execution under constraints.",
    attribution: "Design Lead",
    role: "Hiring manager",
  },
};
```

## 3) Page shell (`components/page-shell.tsx`)

```tsx
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--ink-strong)]">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-[var(--ink-strong)] px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(160,190,168,0.28),transparent_30%),linear-gradient(180deg,rgba(247,242,233,0.98),rgba(244,238,228,0.98))]" />

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
```

## 4) Reusable heading block (`components/section-heading.tsx`)

```tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="type-meta text-[var(--accent)]">{eyebrow}</p>
      <h2 className="type-section mt-3 text-[var(--ink-strong)]">{title}</h2>
      <p className="type-body mt-4 text-[var(--ink-body)]">{body}</p>
    </header>
  );
}
```

## 5) Evidence tier badge (`components/evidence-tier-badge.tsx`)

```tsx
export type EvidenceTier =
  | "Verified evidence"
  | "Interpreted synthesis"
  | "Concept model"
  | "Generated illustration";

const tierStyles: Record<EvidenceTier, string> = {
  "Verified evidence": "border-[rgba(76,109,68,0.24)] bg-[rgba(230,239,227,0.92)]",
  "Interpreted synthesis": "border-[rgba(87,104,130,0.22)] bg-[rgba(228,234,242,0.9)]",
  "Concept model": "border-[rgba(79,104,84,0.24)] bg-[rgba(237,243,235,0.88)]",
  "Generated illustration": "border-[rgba(150,96,54,0.24)] bg-[rgba(245,226,215,0.92)]",
};

export function EvidenceTierBadge({ tier }: { tier: EvidenceTier }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 type-meta ${tierStyles[tier]}`}>
      {tier}
    </span>
  );
}
```

## 6) Portfolio preview card (`components/portfolio-preview-card.tsx`)

```tsx
import Link from "next/link";

type PortfolioPreview = {
  href: string;
  name: string;
  role: string;
  summary: string;
  audience: string;
  signal: string;
  imagePath: string;
  imageAlt: string;
};

export function PortfolioPreviewCard({ item }: { item: PortfolioPreview }) {
  return (
    <article className="panel-shell panel-proof overflow-hidden">
      <img src={item.imagePath} alt={item.imageAlt} className="h-56 w-full object-cover" />
      <div className="p-6">
        <p className="type-meta text-[var(--accent)]">{item.role}</p>
        <h3 className="mt-3 text-2xl font-semibold">{item.name}</h3>
        <p className="type-body mt-3 text-[var(--ink-body)]">{item.summary}</p>
        <p className="mt-4 text-sm text-[var(--ink-body)]"><strong>Audience:</strong> {item.audience}</p>
        <p className="mt-2 text-sm text-[var(--ink-body)]"><strong>Signal:</strong> {item.signal}</p>
        <Link href={item.href} className="action-primary mt-5">
          Open case study
        </Link>
      </div>
    </article>
  );
}
```

## 7) Fast path component (`components/fast-path.tsx`)

```tsx
import Link from "next/link";

type FastPathStep = {
  title: string;
  summary: string;
};

export function FastPath({ steps }: { steps: readonly FastPathStep[] }) {
  return (
    <section className="space-y-5">
      <div className="panel-shell p-6">
        <p className="type-meta text-[var(--accent)]">Fast path</p>
        <h2 className="type-section mt-3">Get the key story in 3 steps</h2>
        <p className="type-body mt-3 text-[var(--ink-body)]">
          For busy reviewers: this takes under 2 minutes.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/work" className="action-primary">See work</Link>
          <Link href="/contact" className="action-secondary">Contact</Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <article key={step.title} className="panel-shell p-5">
            <p className="type-meta text-[var(--accent)]">Step {i + 1}</p>
            <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
            <p className="type-body mt-2 text-[var(--ink-body)]">{step.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

## 8) Case-study section (`components/case-study-section.tsx`)

```tsx
import type { PortfolioProject } from "@/lib/portfolio-content";

export function CaseStudySection({ projects }: { projects: readonly PortfolioProject[] }) {
  return (
    <section id="work" className="mt-16 space-y-8">
      {projects.map((project) => (
        <article key={project.title} className="panel-shell p-6">
          <p className="type-meta text-[var(--accent)]">{project.label}</p>
          <h3 className="mt-3 text-3xl font-semibold">{project.title}</h3>
          <p className="type-body mt-3 text-[var(--ink-body)]">{project.summary}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-white/60 p-4">
              <p className="type-meta text-[var(--signal)]">Outcome</p>
              <p className="mt-2 text-sm text-[var(--ink-body)]">{project.outcome}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/60 p-4">
              <p className="type-meta text-[var(--signal)]">Proof</p>
              <p className="mt-2 text-sm text-[var(--ink-body)]">{project.proof}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
```

## 9) Example homepage composition (`app/page.tsx`)

```tsx
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { FastPath } from "@/components/fast-path";
import { CaseStudySection } from "@/components/case-study-section";
import { portfolioData } from "@/lib/portfolio-content";

export default function HomePage() {
  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="type-meta text-[var(--accent)]">{portfolioData.role}</p>
          <h1 className="type-hero mt-4">{portfolioData.headline}</h1>
          <p className="type-body mt-5 max-w-2xl text-[var(--ink-body)]">{portfolioData.intro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm">
              {portfolioData.audience}
            </span>
            <span className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm">
              {portfolioData.signal}
            </span>
          </div>

          <div className="mt-7 flex gap-3">
            <a href="#work" className="action-primary">Review selected work</a>
            <a href={portfolioData.email} className="action-secondary">Contact</a>
          </div>
        </div>

        <img src={portfolioData.imagePath} alt={portfolioData.imageAlt} className="w-full rounded-[1.5rem] border border-[var(--border)]" />
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {portfolioData.metrics.map((metric) => (
          <article key={metric.label} className="panel-shell p-5">
            <p className="text-4xl font-semibold text-[var(--accent)]">{metric.value}</p>
            <p className="mt-2 text-sm text-[var(--ink-body)]">{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="How I work"
          title="Clear signal, real proof, repeatable systems"
          body="I design for first-read clarity, then validate with outcomes and artifacts."
        />
      </section>

      <div className="mt-10">
        <FastPath
          steps={[
            { title: "Understand context", summary: "Who is this for and what friction exists?" },
            { title: "Design with proof", summary: "Build decisions around measurable outcomes." },
            { title: "Ship and refine", summary: "Release, test, and improve with evidence." },
          ]}
        />
      </div>

      <CaseStudySection projects={portfolioData.projects} />
    </PageShell>
  );
}
```

## 10) Minimal route-aware nav helper (`lib/nav.ts`)

```ts
export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function isActivePath(currentPath: string, href: string) {
  const current = normalizePath(currentPath);
  const target = normalizePath(href);
  return current === target || (target !== "/" && current.startsWith(`${target}/`));
}
```

## 11) Quick checklist for implementation

```txt
[ ] Add tokens and base styles
[ ] Add typed content model
[ ] Build page shell + section heading
[ ] Build preview card + case-study section
[ ] Add fast path and proof blocks
[ ] Add route-aware nav active states
[ ] Add final CTA section with direct contact
```

## Notes
- This starter kit intentionally mirrors the strongest reusable patterns from the source repo.
- You can keep the structure and re-theme colors/fonts per your own brand signal.
