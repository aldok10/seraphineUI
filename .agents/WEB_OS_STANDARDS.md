# Web OS UI/UX Standards & Guidelines

Welcome! As an AI agent working within this repository, you must strictly follow these affirmative, whitelist-based design standards. These rules ensure that our Svelte + Tailwind setup perfectly emulates an interactive, quirky, and highly developer-centric Web OS (Neo-Brutalist) aesthetic.

## 1. The Web OS Metaphor
- **Always style components as OS primitives:** Treat modals exclusively as draggable desktop windows. Use desktop metaphors (e.g., icons, taskbars, start menus) for overall site navigation.
- **Always prioritize the active context:** Ensure the currently active window always possesses the highest z-index.
- **Always render dedicated Title Bars:** Exclusively provide draggable title bars for all modal/window components, ensuring they feature functional close/minimize actions.
- **Always support desktop icon state:** Treat the underlying page exclusively as a desktop canvas for icons and taskbars.

## 2. Neo-Brutalist Visual Identity
- **Always apply sharp, high-contrast borders:** Exclusively apply solid black borders (`border-os-border border-2` or `border-3`) to all interactive elements, windows, and panels.
- **Exclusively use solid drop shadows:** Always apply defined hard shadows (`shadow-brutal` or `shadow-brutal-lg`) to simulate physical layering. **Never** use soft, blurred, or standard CSS box-shadows.
- **Always enforce stark background contrasts:** Exclusively utilize stark white (`bg-os-window`), classic Windows-grey (`bg-os-bg`), or high-saturation accent colors to separate elements visually.

## 3. Typography & Symbology
- **Exclusively use monospaced or brutalist typography:** Always rely on `font-os` (e.g., Space Grotesk or system monospace fonts) for all text to emphasize the developer-centric, technical feel.
- **Always ensure clear, distinct legible typography:** Exclusively use solid black (`text-black`) or stark white (`text-white` on dark backgrounds like the titlebar) for text to maintain high contrast.
- **Always apply physical hover/active states:** Exclusively implement active states that simulate tactile depth (e.g., translating an element's position `active:translate-y-[2px] active:translate-x-[2px]` and simultaneously removing the shadow `active:shadow-none`, giving the illusion of a physical button press).

## 4. Component Construction (Svelte)
- **Always bind window state globally:** Exclusively utilize the central `osState` store to determine the visibility, position, minimization state, and stack order of OS elements.
- **Always utilize Svelte actions for DOM manipulation:** Exclusively use Svelte `use:action` directives (e.g., `use:draggable`) to manage pointer events and bounding-box math outside of the standard reactivity cycle.
