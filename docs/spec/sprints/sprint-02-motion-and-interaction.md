# Sprint 02: Motion and Interaction Completion

Date: 2026-04-15
Status: Completed

## Goal

Finish the remaining motion and interaction requirements so the interface feels responsive without feeling flashy.

## Why this sprint exists

From the spec, the remaining work is mostly interaction-level polish:

- Complete section reveal behavior on scroll.
- Add explicit button state change behavior.
- Ensure motion remains subtle and accessibility-safe.

## Scope

- Portfolio site motion and interaction system only.
- No layout rewrites.

## Tasks

1. Completed: section reveal on scroll with subtle stagger.
2. Completed: button active/press state (`scale(0.98)` on click).
3. Completed: outline-to-fill transition for secondary buttons on hover.
4. Completed: reduced-motion fallback preserved.
5. Completed: lint/build/accessibility checks executed after updates.

## Acceptance Criteria

- Sections reveal on scroll with subtle movement.
- Buttons have hover + active state transitions.
- Motion does not feel distracting.
- `npm run lint` passes.
- `npm run a11y:check` passes.

## Risks

- Over-animation can reduce perceived professionalism.
- Some motion patterns can trigger false positives in automated checks if timing is not controlled.
