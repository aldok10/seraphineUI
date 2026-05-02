# Master Web OS UI/UX Design System & AI Guidelines

Welcome to the pristine frontend architecture! As an AI agent working in this repository, you must strictly follow these affirmative, whitelist-based design standards. These rules ensure our Svelte and Tailwind CSS Design System perfectly emulates an interactive, quirky, and highly developer-centric Web OS (Neo-Brutalist) aesthetic.

## 1. The Web OS Metaphor & Core Architecture
- **Always verify dependencies:** Explicitly check `package.json` for libraries like `tailwind-merge` and `clsx` before utilizing them. Ensure you strictly install required packages when absent.
- **Always style components as OS primitives:** Treat modals exclusively as draggable desktop windows. Use desktop metaphors (e.g., icons, taskbars, start menus) for overall site navigation.
- **Always prioritize the active context:** Ensure the currently active window always possesses the highest z-index.
- **Always render dedicated Title Bars:** Exclusively provide draggable title bars for all modal/window components, ensuring they feature functional close/minimize actions.
- **Always support desktop icon state:** Treat the underlying page exclusively as a desktop canvas for icons and taskbars.
- **Always build isolated components:** Construct robust, highly reusable Svelte components using Svelte `<slot>`s and strongly-typed props.
- **Strictly enforce safe dynamic styling:** Exclusively use `tailwind-merge` paired with `clsx` to compute and pass custom class names, completely preventing utility class conflicts.

## 2. Neo-Brutalist Visual Identity & Structural Layouts
- **Always apply sharp, high-contrast borders:** Exclusively apply solid black borders (`border-os-border border-2` or `border-3`) to all interactive elements, windows, and panels.
- **Exclusively use solid drop shadows:** Always apply defined hard shadows (`shadow-brutal` or `shadow-brutal-lg`) to simulate physical layering. **Never** use soft, blurred, or standard CSS box-shadows.
- **Always enforce stark background contrasts:** Exclusively utilize stark white (`bg-os-window`), classic Windows-grey (`bg-os-bg`), or high-saturation accent colors to separate elements visually.
- **Exclusively use CSS Grid:** Always implement general macro structures using CSS Grid (e.g., `grid grid-cols-1 md:grid-cols-3`) for mathematically precise and reliable layouts.
- **Always ensure Viewport Stability:** Strictly enforce `min-h-[100dvh]` for full-height sections or desktop canvas containers to guarantee flawless performance on mobile browsers.
- **Always implement Layout Diversification:** When dealing with inner window contents, force asymmetric layouts such as "Split Screen" (50/50) or "Left-Aligned content over Right-Aligned asset" to maintain visual intrigue.

## 3. Typography & Symbology
- **Exclusively use monospaced or brutalist typography:** Always rely on `font-os` (e.g., Space Grotesk or system monospace fonts) for all text to emphasize the developer-centric, technical feel. (Alternatively use `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi` if the OS theme requires a sleeker modern touch).
- **Always ensure clear, distinct legible typography:** Exclusively use solid black (`text-black`) or stark white (`text-white` on dark backgrounds like the titlebar) for text to maintain high contrast.
- **Exclusively use vector icon systems:** Always rely on `@phosphor-icons/react` equivalent SVG primitives or clean vector icons. Maintain a standardized `stroke-width` (e.g., strictly `1.5` or `2.0`).

## 4. Component Construction, Mechanics & States (Svelte)
- **Always bind window state globally:** Exclusively utilize the central `osState` store to determine the visibility, position, minimization state, and stack order of OS elements.
- **Always utilize Svelte actions for DOM manipulation:** Exclusively use Svelte `use:action` directives (e.g., `use:draggable`) to manage pointer events and bounding-box math outside of the standard reactivity cycle.
- **Always apply physical hover/active states:** Exclusively implement active states that simulate tactile depth (e.g., translating an element's position `active:translate-y-[2px] active:translate-x-[2px]` and simultaneously removing the shadow `active:shadow-none`, giving the illusion of a physical button press).
- **Always implement full interaction cycles:** Systematically render Loading (skeletal layouts matching the exact layout size), Empty (beautifully composed suggestions), and Error states (clear inline reporting).
