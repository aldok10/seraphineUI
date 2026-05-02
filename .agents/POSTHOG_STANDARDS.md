# PostHog Design System Guidelines

As an AI agent constructing the PostHog UI, you must strictly follow these whitelist-based rules to ensure a friendly, data-dense interface.

## 1. Color Palette & Roles
- **Always use cobalt for primary action:** Utilize `bg-ph-accent` (`#1d4aff`) for primary buttons and interactions.
- **Always use yellow for brand personality:** Utilize `bg-ph-warning` (`#f9bd2b`) exclusively for "Try the playground" moments or personality accents. Never use yellow and cobalt simultaneously as primary CTAs on the same surface.
- **Always assign categorical chart palettes in order:** Strictly enforce the sequence `chart-1` through `chart-8` without deviating.

## 2. Typography Rules
- **Exclusively use defined font stacks:** Always apply `font-sans` (Matter/Inter) for UI/Body text and `font-mono` (Matter Mono/JetBrains Mono) for code and numerals.
- **Always render tabular figures for metrics:** Apply `tabular-nums` when rendering numbers on metric surfaces.
- **Always track headlines tightly:** Apply `tracking-ph-tight` (-1.5%) to `font-bold` headlines.

## 3. Component Stylings
- **Strictly enforce 6px border radii:** Always use `rounded-ph` (6px) for buttons, inputs, and cards. Do not soften corners beyond this point.
- **Always render strict borders:** Utilize `border-ph-border` for standard separators and `border-ph-border-strong` for input borders or card hover states.
- **Always apply inset highlights to primary buttons:** Add a 1px inset highlight (`shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`) to `bg-ph-accent` buttons.

## 4. Elevation & Layout
- **Exclusively use flat tonal shifts for cards:** Never use card shadows. Rely strictly on `bg-ph-bg` with a `border-ph-border`.
- **Always restrict shadows to modals:** Only apply `shadow-ph-modal` (`0 8px 24px rgba(0,0,0,0.12)`) to modal dialogues.
- **Always maintain a 1440px app shell:** Bound application layouts to a `max-w-[1440px]` 12-column grid.

## 5. Do's and Don'ts
- **DO** embrace the hedgehog mascot and micro-copy personality.
- **DON'T** use cobalt chart fills if the surrounding context features a cobalt CTA.
- **DON'T** employ dark-only themes, gradient charts, or three-decimal precision.
