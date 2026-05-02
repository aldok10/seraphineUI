# Web OS Engineering Skill

## The OS UI Challenges
Building an OS inside a browser requires handling complex constraints not found in standard web apps.

## Z-Index & Stacking Contexts
- Strict management of active vs. background windows is required.
- Maintain a global Z-index manager (via store) to track the highest focused window.
- When a window receives focus (mousedown), its z-index must be updated to be the highest.
- Establish baseline z-indices: Desktop Layer (0), Desktop Icons (10), Inactive Windows (100+), Active Window (highest), Taskbar (9000), Modals/Context Menus (9999).

## Absolute Positioning & Boundaries
- Windows are positioned absolutely.
- **Boundary Constraints:** Draggable windows must implement logic to prevent being dragged entirely out of the viewport. Ensure title bars always remain accessible to allow dragging back.
- Use `getBoundingClientRect()` relative to the OS container, not the document body, if the OS does not take up the full screen.

## Responsiveness & Layout
- The OS environment must degrade gracefully.
- Sidebars and tool panels must collapse or convert to drawer overlays on smaller viewports.
- Utilize CSS grid and flexbox inside Organisms to manage complex window layouts.
