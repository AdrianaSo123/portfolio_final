# Portfolio Site

Live site: https://portfolio-final-site.vercel.app/

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

## How These Projects Address Key Skill Gaps

While these projects do not yet include full production infrastructure (e.g., cloud deployment, CI/CD, or large-scale monitoring), they are intentionally designed to solve the core application-layer challenges of building real AI systems.

### UX Design Analyzer (UX-ai-critique)

The UX Design Analyzer addresses gaps in autonomous evaluation and critique by:

- Capturing website screenshots across responsive breakpoints (browser automation)
- Running six specialized AI agents (UX, interaction, typography, visual design, responsive design, accessibility)
- Synthesizing findings into prioritized, actionable recommendations

This demonstrates the ability to build agentic systems that can autonomously audit a website and produce structured outputs.

### UX Research Synthesizer (AI Insight Generation)

The UX Research Synthesizer addresses gaps in AI product design and structured outputs by:

- Converting unstructured research data into structured, schema-constrained insights
- Enforcing deterministic JSON outputs to reduce hallucination and improve reliability
- Designing human-interpretable outputs (themes, personas, insights) aligned with real UX workflows
- Providing a user-facing interface for interacting with AI-generated analysis

This demonstrates the ability to design AI systems that are usable, interpretable, and directly integrated into real decision-making workflows.

### Combined Impact

Together, these projects demonstrate the ability to build AI systems across two complementary layers:

- Insight layer (UX Synthesizer): structuring ambiguous human data into reliable, usable outputs
- Critique layer (UX-ai-critique): generating multi-agent UX audits and prioritized design recommendations

While infrastructure-level concerns (deployment, monitoring, scaling) remain as future work, these projects establish a strong foundation in:

- Structured LLM integration
- Multi-agent orchestration
- Reliability and validation
- Human-centered AI system design
