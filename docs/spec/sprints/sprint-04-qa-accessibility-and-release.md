# Sprint 04: QA, Accessibility, and Release Hardening

Date: 2026-04-15
Status: Planned

## Goal

Finalize confidence for shipping: accessibility, responsive behavior, and release readiness.

## Why this sprint exists

Automated checks are in place, but final manual validation and release hardening are still needed.

## Scope

- Quality assurance across devices and viewport ranges.
- Accessibility and performance confidence checks.
- Final release checklist.

## Tasks

1. Execute manual accessibility pass (keyboard-only, zoom/reflow, heading order).
2. Validate desktop and mobile layouts for all sections.
3. Run and record results for `lint`, `build`, and `a11y:check`.
4. Capture a final pre-release checklist in docs.
5. Confirm docs reflect the latest workflow and architecture.

## Acceptance Criteria

- Manual UX/accessibility checklist completed.
- No blocking issues in desktop/mobile validation.
- Build, lint, and accessibility checks pass.
- Release checklist documented.

## Risks

- Last-mile browser-specific rendering differences.
- Accessibility regressions from final copy or style tweaks.
