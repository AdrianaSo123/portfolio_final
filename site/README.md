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


🧩 How These Projects Address Key Skill Gaps
While these projects do not yet include full production infrastructure (e.g., cloud deployment, CI/CD, or large-scale monitoring), they are intentionally designed to solve the core application-layer challenges of building real AI systems.
OpsAI (AI Workflow Orchestration)
OpsAI addresses gaps in system design, execution, and reliability by:
Translating natural language into structured, multi-step workflows
Implementing deterministic execution pipelines with validation and error handling
Introducing governance through human-in-the-loop approval flows
Supporting real-world integrations (e.g., external APIs, task systems)
Providing modular architecture that can be extended into production environments
This demonstrates the ability to build AI systems that move beyond analysis and actually perform controlled, real-world operations.
UX Research Synthesizer (AI Insight Generation)
The UX Research Synthesizer addresses gaps in AI product design and structured outputs by:
Converting unstructured research data into structured, schema-constrained insights
Enforcing deterministic JSON outputs to reduce hallucination and improve reliability
Designing human-interpretable outputs (themes, personas, insights) aligned with real UX workflows
Providing a user-facing interface for interacting with AI-generated analysis
This demonstrates the ability to design AI systems that are usable, interpretable, and directly integrated into real decision-making workflows.
Combined Impact
Together, these projects demonstrate the ability to build AI systems across two critical layers:
Insight Layer (UX Synthesizer): Structuring ambiguous human data into reliable, usable outputs
Execution Layer (OpsAI): Translating structured intent into governed, real-world actions
While infrastructure-level concerns (deployment, monitoring, scaling) remain as future work, these projects establish a strong foundation in:
Structured LLM integration
Workflow orchestration
Reliability and validation
Human-centered AI system design