# Portfolio Polish Spec

Date: 2026-04-15
Owner: Adriana So
Status: Active

## 1. Objective

Create a professional, calm portfolio that is easy to scan, visually unified with So Studio, and clear about system-level execution.

## 2. Product Goals

- Showcase 3 flagship projects as the primary proof.
- Preserve brand unity with So Studio (palette and typography).
- Improve clarity and reduce visual overwhelm.
- Keep the interface accessible and intuitive.

## 3. Audience

- Startup founders and product leaders hiring technical AI builders.
- Teams evaluating systems-thinking, not only visual design.

## 4. Information Architecture

Current page order:

1. Top metadata strip
2. Hero (claim + intro + CTA)
3. Metrics
4. How I work
5. Faculty note
6. Selected systems (3 projects)
7. Contact / looking for
8. Footer metadata

Explicit decision:

- Experience section removed.

## 5. Visual and Brand Requirements

### 5.1 Color and Typography

- Match So Studio visual language.
- Warm light background with deep blue text and accents.
- Serif display style for major headings.
- Sans-serif body style for readability.

### 5.2 Tone

- Professional, calm, and precise.
- Minimal decorative noise.
- Strong hierarchy, low clutter.

## 6. Project Showcase Requirements

### 6.1 Layout

- Projects must be stacked vertically (one per row).
- Each project card should take more horizontal space on desktop.
- Card structure should support quick scan: title, summary, stack, outcome, proof.

### 6.2 Required Buttons

Each project card must include:

- Primary button: View Live System
- Secondary button: View Architecture (or View GitHub fallback)

### 6.3 Interaction

- Project cards should have subtle hover lift.
- Buttons should communicate clickability clearly.

## 7. Accessibility and UX Requirements

- Keyboard focus visible on interactive controls.
- Respect reduced-motion preferences.
- Maintain WCAG AA contrast for normal text.
- Keep copy concise and skimmable.
- Maintain semantic structure (clear headings, meaningful sections, quote semantics).

## 8. Motion Requirements

Implement these five interaction transformations.

### 8.1 Hover Lift (buttons + cards)

What it does:
- Makes controls feel responsive and clickable.

Behavior:
- Slight upward movement
- Subtle shadow
- Fast response

Baseline values:
- transform: translateY(-2px)
- transition: all 150ms ease

### 8.2 Fade + Slide In (content appearing)

What it does:
- Makes content feel revealed, not dumped.

Behavior:
- opacity: 0 -> 1
- translateY: 8px -> 0
- transition around 200ms ease

Use for:
- Outputs
- New content blocks

### 8.3 Button State Change

What it does:
- Signals state change after interaction.

Behavior:
- Outline button can fill on hover
- Border becomes solid
- Slight press on click (for example scale(0.98))

### 8.4 Input -> Output Transition (most important for So Studio)

What it does:
- Creates a clear cause-and-effect system response.

Behavior:
1. User submits input
2. Short delay (300ms to 600ms)
3. Output fades/enters (or types in)

Minimum version:
- Loading label
- Then result appears

### 8.5 Section Reveal on Scroll

What it does:
- Adds depth without clutter.

Behavior:
- Very subtle section fade/reveal as user scrolls.

## 9. Motion Guardrails

- Keep motion minimal.
- If animation is obvious, reduce it.
- Avoid bouncy animation.
- Avoid long delays.
- Avoid flashy gradient effects.
- Avoid heavy parallax.

## 10. Application Map

### Portfolio Site

- Buttons: hover lift + clear state transitions
- Project cards: hover lift
- Sections: subtle reveal

### So Studio

- Input -> output transition (critical)
- Response blocks: fade/slide in
- Buttons: state change

## 11. Technical Constraints

- Run all app commands from site folder.
- Keep lint and build passing.
- Keep accessibility scan script available and green.

## 12. Definition of Done

- 3-project stacked showcase implemented.
- Project cards include required primary and secondary CTAs.
- Visual system aligned with So Studio.
- Page feels calmer and less overwhelming.
- Lint and build pass.
- Accessibility checks remain part of workflow.

## 13. Remaining Work Sprint Roadmap

- Sprint 01 (baseline polish): docs/spec/sprints/sprint-01-plan.md
- Sprint 02 (motion and interaction completion): docs/spec/sprints/sprint-02-motion-and-interaction.md
- Sprint 03 (content quality and proof links): docs/spec/sprints/sprint-03-content-and-proof-links.md
- Sprint 04 (QA, accessibility, and release hardening): docs/spec/sprints/sprint-04-qa-accessibility-and-release.md
