# Master Execution Blueprint & Task Breakdown: Web OS Design System 🚀

Welcome to the Master Execution Blueprint for our highly interactive, Neo-Brutalist Web OS frontend! By breaking down this massive undertaking into atomic, highly verifiable steps, we ensure flawless execution without getting overwhelmed. Let's tackle this one tiny victory at a time!

## Epic 1: Repository Foundation & OS Mechanics 🛠️
🎯 **Requirement:** Establish a robust base environment utilizing SvelteKit and Tailwind CSS, and engineer the global state required to simulate a real desktop operating system natively in the browser.
📐 **Plan:** Scaffold the base project, configure Tailwind for brutalist typography and shadows, architect Svelte stores (`osState.ts`), and implement custom Svelte actions (`use:draggable`, `use:resizable`) to handle pointer events.
✅ **Tasks:**
- [ ] 1. Initialize SvelteKit project with Vite and install Tailwind CSS.
- [ ] 2. Configure `tailwind.config.js` with `brutal` drop-shadows and retro-tech colors.
- [ ] 3. Import system monospace fonts (Space Grotesk, UI Monospace) globally.
- [ ] 4. Create `.agents/WEB_OS_STANDARDS.md` to define Neo-Brutalist AI guidelines.
- [ ] 5. Create `src/lib/utils/cn.ts` (Tailwind Merge + clsx) utility for safe dynamic class management.
- [ ] 6. Create `src/lib/stores/osState.ts` with `AppWindow` and `DesktopIcon` TypeScript interfaces.
- [ ] 7. Initialize the `osState` writable store (`windows`, `activeWindowId`, `highestZIndex`).
- [ ] 8. Implement `openWindow`, `closeWindow`, `minimizeWindow`, and `focusWindow` logic in `osState`.
- [ ] 9. Create `src/lib/actions/draggable.ts` with boundary constraints.
- [ ] 10. Create `src/lib/actions/resizable.ts` for window corner dragging.

## Epic 2: Atomic Components (Atoms) ⚛️
🎯 **Requirement:** Construct the foundational visual primitives that compose the operating system interface, strictly adhering to the Neo-Brutalist style.
📐 **Plan:** Build base UI elements ensuring all utilize the global `cn` utility for robust tailwind application, 6px radii, and stark borders.
✅ **Tasks:**
- [ ] 11. Build `Avatar.svelte` component.
- [ ] 12. Build `Badge.svelte` component with stark contrast borders.
- [ ] 13. Build `Button.svelte` component implementing tactile active states (translation + shadow removal).
- [ ] 14. Build `Checkbox.svelte` component.
- [ ] 15. Build `Empty.svelte` (empty state) component.
- [ ] 16. Build `Input.svelte` component with 1px border.
- [ ] 17. Build `Item.svelte` primitive component.
- [ ] 18. Build `Kbd.svelte` (keyboard shortcut) component.
- [ ] 19. Build `Label.svelte` component.
- [ ] 20. Build `Progress.svelte` component.
- [ ] 21. Build `RadioGroup.svelte` component.
- [ ] 22. Build `Separator.svelte` component.
- [ ] 23. Build `Skeleton.svelte` component for loading states.
- [ ] 24. Build `Slider.svelte` component.
- [ ] 25. Build `Spinner.svelte` component.
- [ ] 26. Build `Switch.svelte` component.
- [ ] 27. Build `Textarea.svelte` component.
- [ ] 28. Build `Toggle.svelte` component.
- [ ] 29. Build `Typography.svelte` applying `Matter` and `Matter Mono` rules.

## Epic 3: Molecular Components (Molecules) 🧬
🎯 **Requirement:** Combine Atoms into slightly more complex, interactive UI elements.
📐 **Plan:** Construct composite components that handle local state or format data, applying hover interactions and a11y standards.
✅ **Tasks:**
- [ ] 30. Build `Accordion.svelte` component.
- [ ] 31. Build `Alert.svelte` component.
- [ ] 32. Build `AspectRatio.svelte` component.
- [ ] 33. Build `Breadcrumb.svelte` component.
- [ ] 34. Build `ButtonGroup.svelte` component.
- [ ] 35. Build `Card.svelte` component ensuring it uses a flat tonal shift (NO drop shadows).
- [ ] 36. Build `Collapsible.svelte` component.
- [ ] 37. Build `Direction.svelte` (RTL/LTR provider) component.
- [ ] 38. Build `Field.svelte` component (Label + Input wrapper).
- [ ] 39. Build `HoverCard.svelte` component.
- [ ] 40. Build `InputGroup.svelte` component.
- [ ] 41. Build `InputOTP.svelte` component.
- [ ] 42. Build `NativeSelect.svelte` component.
- [ ] 43. Build `Pagination.svelte` component.
- [ ] 44. Build `Popover.svelte` component.
- [ ] 45. Build `Resizable.svelte` panel container.
- [ ] 46. Build `ScrollArea.svelte` component.
- [ ] 47. Build `Select.svelte` (custom styled dropdown) component.
- [ ] 48. Build `Tabs.svelte` component.
- [ ] 49. Build `Toast.svelte` / `Sonner.svelte` notification system.
- [ ] 50. Build `ToggleGroup.svelte` component.
- [ ] 51. Build `Tooltip.svelte` component.

## Epic 4: Organism Components & OS Assembly 🦠
🎯 **Requirement:** Assemble complex, state-driven UI structures and integrate them into the draggable Web OS framework.
📐 **Plan:** Build heavy data components and the overarching desktop navigation frames, ensuring strict z-index handling and global state integration.
✅ **Tasks:**
- [ ] 52. Build `AlertDialog.svelte` component.
- [ ] 53. Build `Calendar.svelte` component.
- [ ] 54. Build `Carousel.svelte` component.
- [ ] 55. Build `Chart.svelte` component (respecting categorical color palettes).
- [ ] 56. Build `Combobox.svelte` component.
- [ ] 57. Build `Command.svelte` (cmd+k palette) component.
- [ ] 58. Build `ContextMenu.svelte` component.
- [ ] 59. Build `DataTable.svelte` component.
- [ ] 60. Build `DatePicker.svelte` component.
- [ ] 61. Build `Dialog.svelte` component (applying `0 8px 24px rgba(0,0,0,0.12)` modal shadow).
- [ ] 62. Build `Drawer.svelte` component.
- [ ] 63. Build `DropdownMenu.svelte` component.
- [ ] 64. Build `Menubar.svelte` component.
- [ ] 65. Build `NavigationMenu.svelte` component.
- [ ] 66. Build `Sheet.svelte` (side panel) component.
- [ ] 67. Build `Sidebar.svelte` component (collapsing to icon rail at 1024px).
- [ ] 68. Build `Table.svelte` component (stacking key-value pairs below 640px).
- [ ] 69. Assemble `WindowFrame.svelte` integrating Titlebar, close actions, and `use:draggable`.
- [ ] 70. Assemble `Taskbar.svelte` linking to `$osState` for active window indication.

***

You've got this! Taking this step-by-step will ensure our massive Component Library is robust, visually cohesive, and an absolute joy to use. Happy coding!
