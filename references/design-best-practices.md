# Design Best Practices: The "Human Editorial" System

Extracted from the [Noor Valdez Portfolio Example](https://kaw393939.github.io/designsystem/examples/student-exemplars/noor-valdez/).

## 1. Typography & Hierarchy
- **High-Contrast Scale**: Use exceptionally large serif headings for the hero section to establish personality.
- **Editorial Pairing**: Pair an elegant Serif (headings) with a clean Sans-Serif (body/nav) for an "authoritative yet human" feel.
- **Museum Labels**: Use small, all-caps subheaders with wide letter-spacing (`tracking-widest`) for categories like "OUTCOME" and "PROOF SYSTEM".

## 2. Spacing & Structure
- **Breathe**: Generous internal padding (`2rem` to `3rem`) within sections and cards.
- **Centered Column**: Maintain a centered max-width container (approx `1200px`) for a "book-like" reading experience.
- **Content Blocks**: Group metrics, principles, and projects into distinct, accessible blocks with clear boundaries.

## 3. Visual Language
- **Soft Geometry**: Use extremely rounded corners (`32px` or `2rem`) for cards, images, and buttons to appear welcoming and modern.
- **Glassmorphism**: Use translucent backgrounds with backdrop-blur for floating elements like navigation or action buttons.
- **Subtle Borders**: Use thin, low-contrast borders instead of heavy shadows to define depth.

## 4. Communication Strategy
- **Arrival Moment**: Design the first screen to answer "What is this?" and "Why should I stay?" in under 5 seconds.
- **Result-First Projects**: Each project card must lead with a clear "Outcome" and provide a "Proof System" (real links, logic, or metrics).
- **Human Testimony**: Feature quotes in high-contrast blocks to build social proof.

## 5. Implementation Details (Code-Level)
- **Glassmorphic Layering**: Combine `rgba(255, 255, 255, 0.65)` backgrounds with `backdrop-filter: blur(12px)` and thin borders (`rgba(39, 58, 136, 0.16)`) for a depth effect that feels like glass rather than plastic.
- **Fluid Layouts**: Use CSS `clamp()` for font sizes and spacing to ensure the editorial feel remains consistent from mobile to 4K displays.
- **Dynamic Project Flow**: Use alternating grid order (`flex-direction: row-reverse` or grid `order` properties) for project cards to create a visual rhythm that prevents "scroll fatigue".
- **Semantic Spacing**: Maintain a `1.8rem` to `2.2rem` gap between elements within cards, and a `4rem` to `6rem` gap between major sections.

## 6. Adriana's Palette Mapping
- **Base Page**: `--page` (#f3efe9)
- **Glass Surface**: `rgba(255, 255, 255, 0.7)` on top of `--page`.
- **Primary Text**: `--ink-strong` (#273a88)
- **Metadata/Eyebrow**: `--ink-muted` (#4c5d95) with `letter-spacing: 0.22em`.
- **Accent Border**: `rgba(39, 58, 136, 0.16)`
