# Web OS UI/UX Standards & Guidelines

Welcome! As an AI agent working within this repository, you must strictly follow these affirmative, whitelist-based design standards. These rules ensure that our Svelte + Tailwind setup maintains a consistent, delightful, and highly interactive Web OS / Neo-Brutalist aesthetic.

## 1. The Web OS Metaphor
- **Always style components as OS primitives:** Treat modals exclusively as draggable desktop windows. Use desktop metaphors (e.g., icons, taskbars, start menus) for overall site navigation.
- **Always prioritize the active context:** Ensure the currently active window always possesses the highest z-index. Ensure inactive windows receive a visual dimming or lowered shadow intensity.
- **Always render dedicated Title Bars:** Exclusively provide draggable title bars for all modal/window components, ensuring they feature functional close/minimize actions.

## 2. Neo-Brutalist Visual Identity
- **Always apply sharp, high-contrast borders:** Exclusively apply solid black borders (`border-os-border border-2` or `border-3`) to all interactive elements, windows, and panels.
- **Exclusively use solid drop shadows:** Always apply defined hard shadows (`shadow-brutal` or `shadow-brutal-lg`) to simulate physical layering. **Never** use soft or blurred box-shadows.
- **Always enforce stark background contrasts:** Exclusively utilize stark white (`bg-os-window`) or high-saturation accent colors against the muted neutral canvas (`bg-os-bg`).

## 3. Typography & Symbology
- **Exclusively use monospaced or brutalist typography:** Always rely on `font-os` (e.g., Space Grotesk or system monospace fonts) for all text to emphasize the developer-centric, technical feel.
- **Always ensure clear, distinct legible typography:** Exclusively use solid black (`text-black`) for primary text to maintain high contrast.
- **Always apply distinct hover states:** Exclusively implement hover states that simulate tactile depth (e.g., translating an element's position to reduce the solid drop shadow, giving the illusion of a physical button press).

## 4. Component Construction (Svelte)
- **Always bind window state globally:** Exclusively utilize the central `osState` store to determine the visibility, position, and stack order of OS elements.
- **Always handle absolute positioning safely:** For window instances, strictly manage `top` and `left` properties dynamically, ensuring they remain bounded within the viewport to prevent unreachable elements.
