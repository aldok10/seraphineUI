# Iterative Task Breakdown: Web OS Design System

## Phase 1: Environment & Config 🛠️
- [x] Scaffold SvelteKit project and install Tailwind CSS.
- [x] Configure `tailwind.config.js` with brutalist shadows, robust borders, and OS typography.
- [x] Author `.agents/WEB_OS_STANDARDS.md` to dictate affirmative neo-brutalist AI logic.

## Phase 2: Core OS State & Mechanics 🧠
- [x] Architect global Svelte store (`osState.ts`) to track window dimensions, visibility, active status, and stack ordering (`zIndex`).
- [x] Implement global pointer event management to accurately capture window dragging and active focus logic.
- [ ] Create OS viewport constraints to prevent dragged windows from escaping the visible area.

## Phase 3: Base UI Components 🪟
- [x] Develop `Window.svelte` primitive featuring title bar, close function, and dynamic dragging.
- [ ] Develop `Desktop.svelte` primitive to act as the base canvas and handle desktop icon click events.
- [ ] Develop `Taskbar.svelte` featuring a Start button, clock, and list of minimized/open applications.
- [ ] Develop `Button.svelte` standardizing the brutalist click effect (translation and shadow reduction).

## Phase 4: Apps Integration & Polish 🚀
- [ ] Create a "Settings" mock application demonstrating dynamic theme/color updates.
- [ ] Create a "Browser" mock application implementing iframe embedding.
- [ ] Integrate startup animations mimicking a legacy boot sequence.
- [ ] Audit application against mobile devices to ensure responsive fallbacks for the desktop metaphor.
