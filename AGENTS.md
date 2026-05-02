# Master UI/UX Design System Guidelines

Welcome to the pristine frontend architecture! As an AI agent working in this repository, you must strictly follow these affirmative, whitelist-based design standards. These rules ensure our Svelte and Tailwind CSS Design System remains infinitely scalable, highly performant, and consistently beautiful.

## 1. Core Architecture & Interactivity
- **Always verify dependencies:** Explicitly check `package.json` for libraries like `tailwind-merge` and `clsx` before utilizing them. Ensure you strictly install required packages when absent.
- **Always build isolated components:** Construct robust, highly reusable Svelte components using Svelte `<slot>`s and strongly-typed props.
- **Strictly enforce safe dynamic styling:** Exclusively use `tailwind-merge` paired with `clsx` to compute and pass custom class names, completely preventing utility class conflicts.

## 2. Structural Layouts & Spacing
- **Exclusively use CSS Grid:** Always implement structures using CSS Grid (e.g., `grid grid-cols-1 md:grid-cols-3`) for mathematically precise and reliable layouts.
- **Always ensure Viewport Stability:** Strictly enforce `min-h-[100dvh]` for full-height sections to guarantee flawless performance on mobile browsers.
- **Always standardise breakpoints:** Exclusively target standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- **Always implement Layout Diversification:** Force asymmetric layouts such as "Split Screen" (50/50) or "Left-Aligned content over Right-Aligned asset" to maintain visual intrigue.
- **Always build responsive fallbacks:** Aggressively collapse asymmetric layouts into single-column (`w-full px-4 py-8`) structures below the `md:` breakpoint.

## 3. Typography & Symbology
- **Exclusively use premium typography:** Limit display and headline font choices strictly to `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`.
- **Always pair Sans-Serif fonts:** For technical UIs and dashboards, strictly enforce clean pairings (e.g., `Geist` + `Geist Mono` or `Satoshi` + `JetBrains Mono`).
- **Always enforce the visual baseline:** Render Display/Headlines predominantly as `text-4xl md:text-6xl tracking-tighter leading-none` and Body text as `text-base text-gray-600 leading-relaxed max-w-[65ch]`.
- **Exclusively use vector icon systems:** Always rely on `@phosphor-icons/react` equivalent SVG primitives or clean vector icons. Maintain a standardized `stroke-width` (e.g., strictly `1.5` or `2.0`).

## 4. Color, Light, & Materiality
- **Strictly enforce singular accent colors:** Always limit palettes to a maximum of 1 Accent Color with saturation kept strictly below 80%.
- **Always utilize neutral foundations:** Exclusively ground designs in absolute neutral bases (e.g., Zinc or Slate).
- **Always apply "Liquid Glass" refraction appropriately:** When rendering glassmorphism, systematically implement a 1px inner border (`border-white/10`) and subtle inner shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`).
- **Exclusively apply shadow for depth:** Always tie elevation directly to functional z-index hierarchy, tinting shadows dynamically to the background hue.

## 5. Perpetual Micro-Interactions & States
- **Always implement full interaction cycles:** Systematically render Loading (skeletal layouts matching the exact layout size), Empty (beautifully composed suggestions), and Error states (clear inline reporting).
- **Strictly mandate tactile feedback:** Always enforce `:active` states with `-translate-y-[1px]` or `scale-[0.98]` to provide satisfying physical push mechanics.
- **Exclusively use Spring Physics:** Ensure motion utilizes spring physics (e.g., simulating stiffness: 100, damping: 20) to guarantee a premium, weighty feel.
