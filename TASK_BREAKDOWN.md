# Master Execution Blueprint & Task Breakdown: Web OS Design System 🚀

Welcome to the Master Execution Blueprint for our highly interactive, Neo-Brutalist Web OS frontend! This document translates our vast architectural vision into digestible, highly actionable Epics using a strict "Requirement -> Plan -> Task" hierarchy. By breaking down this massive undertaking into atomic, highly verifiable steps, we ensure flawless execution without getting overwhelmed.

## Epic 1: Repository Foundation & AI Rules 🛠️
🎯 **Requirement:** Establish a robust base environment utilizing SvelteKit and Tailwind CSS, deeply integrating our Neo-Brutalist visual identity and strict AI-agent guidelines.
📐 **Plan:** Scaffold the base SvelteKit project, configure Tailwind for brutalist typography and shadows, and formulate the `.agents` rules to govern the exact styling outputs.
✅ **Tasks:**
- [ ] 1. Initialize a new SvelteKit project with Vite.
- [ ] 2. Install Tailwind CSS, PostCSS, and Autoprefixer.
- [ ] 3. Generate `tailwind.config.js` and `postcss.config.js`.
- [ ] 4. Define `brutal-sm`, `brutal`, and `brutal-lg` solid box-shadows in `tailwind.config.js`.
- [ ] 5. Define retro-tech color palette (`os.bg`, `os.window`, `os.border`, `os.titlebar`, `os.accent`) in `tailwind.config.js`.
- [ ] 6. Import system monospace fonts (Space Grotesk, UI Monospace) into the global CSS.
- [ ] 7. Define `border-3` utility in `tailwind.config.js`.
- [ ] 8. Add custom OS cursor configurations (`cursor-os-default`, `cursor-os-pointer`) to Tailwind.
- [ ] 9. Create `src/app.css` and import Tailwind base, components, and utilities.
- [ ] 10. Disable native body scrolling in `src/app.css` (`overflow: hidden`).
- [ ] 11. Create `.agents/` directory in the repository root.
- [ ] 12. Author `.agents/WEB_OS_STANDARDS.md` utilizing exclusively affirmative, whitelist-based commands (e.g., "Always apply solid black borders").
- [ ] 13. Write the "Web OS Metaphor" rules (draggable windows, active context) into the standards file.
- [ ] 14. Write the "Neo-Brutalist Visual Identity" rules (solid borders, stark contrasts) into the standards file.
- [ ] 15. Write the "Typography & Symbology" rules into the standards file.
- [ ] 16. Install `clsx` and `tailwind-merge` packages.
- [ ] 17. Create `src/lib/utils/cn.ts` (Tailwind Merge + clsx) utility for safe dynamic class management.

## Epic 2: Global State and Core Logic 🧠
🎯 **Requirement:** Engineer the global state and DOM manipulation logic required to simulate a real desktop operating system natively in the browser.
📐 **Plan:** Architect Svelte stores (`osState.ts`, `time.ts`, `fileSystem.ts`) to manage arrays of open windows, desktop icons, and track the `activeWindowId` (for z-index elevation), paired with custom Svelte actions (`use:draggable`, `use:resizable`) to handle pointer events.
✅ **Tasks:**
- [ ] 18. Create `src/lib/stores/osState.ts`.
- [ ] 19. Define the `AppWindow` TypeScript interface (id, title, isOpen, isMinimized, zIndex, x, y).
- [ ] 20. Define the `DesktopIcon` TypeScript interface (id, label, iconSrc, targetAppId).
- [ ] 21. Initialize the `osState` writable store with `windows`, `desktopIcons`, `activeWindowId`, and `highestZIndex`.
- [ ] 22. Implement `openWindow` logic: check if window exists, elevate z-index if it does.
- [ ] 23. Implement `openWindow` logic: push new window to array if it doesn't exist, calculate default spawn coordinates.
- [ ] 24. Implement `closeWindow` logic: remove or set `isOpen` to false.
- [ ] 25. Implement `minimizeWindow` logic: set `isMinimized` to true, clear `activeWindowId`.
- [ ] 26. Implement `focusWindow` logic: increment `highestZIndex` and assign to the target window.
- [ ] 27. Implement `updateWindowPosition` logic: update `x` and `y` coordinates for a specific window ID.
- [ ] 28. Create `src/lib/stores/time.ts`.
- [ ] 29. Implement a readable store that updates the current `Date` object every 60 seconds to drive the taskbar time.
- [ ] 30. Create `src/lib/stores/fileSystem.ts` for mock file directory state.
- [ ] 31. Create `src/lib/actions/draggable.ts`.
- [ ] 32. Implement `handlePointerDown` to initialize dragging offsets.
- [ ] 33. Ensure `handlePointerDown` fires the `focusWindow` callback to bring the window to the front.
- [ ] 34. Implement `handlePointerMove` to calculate dx/dy.
- [ ] 35. Implement optimistic UI updates in `handlePointerMove` for 60fps dragging performance.
- [ ] 36. Implement viewport boundary constraints to prevent windows from being dragged completely off-screen.
- [ ] 37. Implement `handlePointerUp` to finalize coordinate updates to the global store and release pointer capture.
- [ ] 38. Create `src/lib/actions/resizable.ts` for bottom-right corner dragging.
- [ ] 39. Create `src/lib/actions/clickOutside.ts` for closing context menus.

## Epic 3: Atomic Components (Atoms and Molecules) 🪟
🎯 **Requirement:** Construct the visual primitives that compose the operating system interface, adhering strictly to the Neo-Brutalist style.
📐 **Plan:** Break down the UI into Atoms (Buttons, Icons) and Molecules (Titlebars, Taskbar Items), ensuring all utilize the global `cn` utility for robust tailwind application.
✅ **Tasks:**
- [ ] 40. Create `src/lib/components/atoms/Button.svelte`.
- [ ] 41. Define `primary`, `secondary`, and `ghost` variants in `Button.svelte`.
- [ ] 42. Implement tactile active states (`active:translate-y-[2px] active:translate-x-[2px] active:shadow-none`) for the button.
- [ ] 43. Ensure focus rings (`focus-visible:ring-2`) are correctly applied for accessibility.
- [ ] 44. Create `src/lib/components/atoms/Icon.svelte`.
- [ ] 45. Add prop to accept raw SVG or image path for `Icon.svelte`.
- [ ] 46. Create `src/lib/components/atoms/WindowControlBtn.svelte`.
- [ ] 47. Style the close button variant (red hover state).
- [ ] 48. Style the minimize button variant (gray hover state).
- [ ] 49. Create `src/lib/components/molecules/Titlebar.svelte`.
- [ ] 50. Bind `use:draggable` strictly to the `.title-bar` element.
- [ ] 51. Ensure child control buttons prevent event propagation (`stopPropagation`) to avoid dragging when clicked.
- [ ] 52. Implement active vs. inactive background colors for the Titlebar based on focus state.
- [ ] 53. Create `src/lib/components/molecules/DesktopShortcut.svelte`.
- [ ] 54. Implement double-click event listener to trigger `openWindow`.
- [ ] 55. Add a single-click selection state (highlight background).
- [ ] 56. Create `src/lib/components/molecules/TaskbarItem.svelte`.
- [ ] 57. Style the Taskbar Item as a recessed button when its corresponding window is active.
- [ ] 58. Style the Taskbar Item as a raised button when the window is inactive or minimized.
- [ ] 59. Add `on:click` event to toggle `focusWindow` or un-minimize.
- [ ] 60. Create `src/lib/components/molecules/Clock.svelte` referencing the `time.ts` store.
- [ ] 61. Format the time output in `Clock.svelte` (e.g., "12:45 PM").
- [ ] 62. Create `src/lib/components/molecules/StartButton.svelte`.
- [ ] 63. Implement brutalist active states for the Start Button.
- [ ] 64. Create `src/lib/components/molecules/ContextMenuList.svelte`.

## Epic 4: Organisms and OS Mechanics 🧩
🎯 **Requirement:** Assemble the complex OS primitives into functional, state-driven interfaces.
📐 **Plan:** Combine Titlebars and Content slots into the Window Frame, assemble the Taskbar, and build the Start Menu context panel.
✅ **Tasks:**
- [ ] 65. Create `src/lib/components/organisms/WindowFrame.svelte`.
- [ ] 66. Implement the `absolute` positioning logic bound to `x` and `y` from `osState.ts`.
- [ ] 67. Bind the `z-index` dynamically to the `highestZIndex` value.
- [ ] 68. Import and place the `Titlebar.svelte` within the WindowFrame.
- [ ] 69. Render a `<slot />` below the Titlebar for dynamic app content.
- [ ] 70. Apply `shadow-brutal-lg` conditionally when the window is focused.
- [ ] 71. Apply a fallback `shadow-brutal` when the window is unfocused.
- [ ] 72. Implement CSS transitions for minimizing (scale down/fade out to taskbar).
- [ ] 73. Create `src/lib/components/organisms/Taskbar.svelte`.
- [ ] 74. Position the Taskbar fixed at the bottom of the viewport (`bottom-0 w-full`).
- [ ] 75. Place `StartButton.svelte` on the far left.
- [ ] 76. Render an `#each` loop mapping over `$osState.windows` to display `TaskbarItem.svelte` instances.
- [ ] 77. Place `Clock.svelte` on the far right within a recessed tray UI.
- [ ] 78. Add a solid top border (`border-t-3 border-os-border`) to the Taskbar container.
- [ ] 79. Create `src/lib/components/organisms/StartMenu.svelte`.
- [ ] 80. Position the StartMenu absolutely above the StartButton.
- [ ] 81. Bind the StartMenu visibility to a local boolean toggled by the StartButton.
- [ ] 82. Utilize `use:clickOutside` to close the StartMenu when clicking the desktop.
- [ ] 83. Render a list of system applications within the StartMenu.
- [ ] 84. Create `src/lib/components/organisms/Desktop.svelte`.
- [ ] 85. Set the desktop container to fill the remaining viewport height (`h-[calc(100vh-40px)]`).
- [ ] 86. Render an `#each` loop over `$osState.desktopIcons` to display `DesktopShortcut.svelte` instances.
- [ ] 87. Implement a grid layout (`grid-cols-auto-fit`) for the desktop icons.
- [ ] 88. Add a global pointer-down listener on the Desktop to unfocus all windows (clear `activeWindowId`).

## Epic 5: Integration, Apps, & Deployment 🌐
🎯 **Requirement:** Assemble the entire desktop environment, construct mock applications, and configure automated deployment.
📐 **Plan:** Wire the Organisms into the root `+page.svelte` layout, create functional mock apps (Settings, Browser) to validate the system, and set up CI/CD to Cloudflare Pages.
✅ **Tasks:**
- [ ] 89. Edit `src/routes/+page.svelte`.
- [ ] 90. Wrap the entire page in an `overflow-hidden` container.
- [ ] 91. Mount `Desktop.svelte` inside the page layout.
- [ ] 92. Mount `Taskbar.svelte` fixed at the bottom of the layout.
- [ ] 93. Create an `#each` loop rendering `WindowFrame.svelte` for every open window in `$osState`.
- [ ] 94. Create `src/lib/apps/SettingsApp.svelte`.
- [ ] 95. Build a layout within SettingsApp to toggle global themes or background colors.
- [ ] 96. Create `src/lib/apps/BrowserApp.svelte`.
- [ ] 97. Build a mock URL bar and an iframe container within BrowserApp.
- [ ] 98. Create `src/lib/apps/TerminalApp.svelte`.
- [ ] 99. Implement a read-only simulated command history for TerminalApp.
- [ ] 100. Dynamically render the correct app component inside the `WindowFrame` `<slot />` based on the window's `targetAppId`.
- [ ] 101. Test application on mobile viewports; verify windows collapse or stack gracefully if screen width `< 768px`.
- [ ] 102. Set up GitHub repository and commit the base project.
- [ ] 103. Create `.github/workflows/deploy.yml`.
- [ ] 104. Configure GitHub Actions to run `npm run build` on push to `main`.
- [ ] 105. Configure GitHub Actions to deploy the `build/` output to Cloudflare Pages via Wrangler action.
- [ ] 106. Validate accessibility: ensure keyboard navigation (Tab) cycles through Taskbar items and Window controls.
- [ ] 107. Perform final QA pass validating all Z-Index stacking, brutalist shadow consistency, and time formatting.

***

You've got this! Taking this step-by-step will ensure the Web OS is robust, maintainable, and an absolute joy to use. Happy coding!
