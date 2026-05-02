# Master Execution Blueprint: Web OS Design System 🚀

Welcome to the Master Execution Blueprint for our highly interactive, Neo-Brutalist Web OS frontend! This document translates our vast architectural vision into digestible, highly actionable Epics using a strict "Requirement -> Plan -> Task" hierarchy. Let's build something delightful and robust.

## Epic 1: Project Foundation & AI Standards 🛠️
🎯 **Requirement:** Establish a robust base environment utilizing SvelteKit and Tailwind CSS, deeply integrating our Neo-Brutalist visual identity and strict AI-agent guidelines.
📐 **Plan:** Scaffold the base SvelteKit project, overwrite `tailwind.config.js` with brutalist custom shadows and retro-tech colors, and formulate `.agents/WEB_OS_STANDARDS.md` to guarantee AI agents consistently enforce the OS metaphor and aesthetic.
✅ **Tasks:**
  - [ ] Scaffold the SvelteKit + Vite application and install Tailwind CSS.
  - [ ] Configure `tailwind.config.js` to inject `brutal` and `brutal-lg` drop-shadows and system font stacks.
  - [ ] Author `.agents/WEB_OS_STANDARDS.md` utilizing exclusively affirmative, whitelist-based commands (e.g., "Always apply solid black borders").
  - [ ] Create `cn.ts` (Tailwind Merge + clsx) utility for safe dynamic class management.

## Epic 2: OS Core Mechanics & State 🧠
🎯 **Requirement:** Engineer the global state and DOM manipulation logic required to simulate a real desktop operating system natively in the browser.
📐 **Plan:** Architect a robust Svelte store (`osState.ts`) to manage arrays of open windows, desktop icons, and track the `activeWindowId` (for z-index elevation), paired with custom Svelte actions (`use:draggable`) to handle complex pointer events outside the standard Reactivity loop.
✅ **Tasks:**
  - [ ] Create `src/lib/stores/osState.ts` defining the `AppWindow` type (id, x, y, zIndex, isMinimized, isOpen).
  - [ ] Implement global methods within the store to handle `openWindow`, `closeWindow`, `focusWindow`, and `minimizeWindow`.
  - [ ] Write a `draggable.ts` Svelte action to intercept pointer events, update window coordinates, and bound movement within the viewport.
  - [ ] Implement a central global clock store to drive the taskbar time.

## Epic 3: Atomic Design System 🪟
🎯 **Requirement:** Construct the visual primitives that compose the operating system interface, adhering strictly to the Neo-Brutalist style.
📐 **Plan:** Break down the UI into Atoms (e.g., Brutalist Buttons, Desktop Icons), Molecules (Taskbar groupings, Titlebars), and Organisms (The `Window.svelte` frame, The Start Menu), ensuring all Organisms bind correctly to the `osState`.
✅ **Tasks:**
  - [ ] Develop Atoms: `Button.svelte` (translating active states to simulate physical button pushes) and `Icon.svelte`.
  - [ ] Develop Molecules: `Titlebar.svelte` featuring draggable properties and close/minimize actions.
  - [ ] Develop Organisms: `Window.svelte` slot wrapper combining the titlebar and a content area, applying the `brutal-lg` shadow when active.
  - [ ] Develop Organisms: `Taskbar.svelte` and `Desktop.svelte` to act as the primary navigational anchors.

## Epic 4: Integration & Deployment 🚀
🎯 **Requirement:** Assemble the individual OS primitives into a cohesive desktop environment and deploy the application to a robust CDN.
📐 **Plan:** Create the root `+page.svelte` acting as the desktop environment, embed sample "Applications" (like a mock Settings pane or iframe browser), and establish a CI/CD pipeline targeting Cloudflare Pages.
✅ **Tasks:**
  - [ ] Assemble `Desktop`, `Taskbar`, and `Window` components within `src/routes/+page.svelte`.
  - [ ] Build a functional mock application (e.g., "Theme Settings") to demonstrate data passing into a Window.
  - [ ] Audit the desktop layout against mobile viewports, potentially implementing a simplified single-app fallback.
  - [ ] Configure GitHub/GitLab Actions to automatically build and deploy to Cloudflare Pages upon merging to main.
