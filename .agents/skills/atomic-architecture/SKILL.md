# Atomic Architecture Skill

## Library Structure
The component library (50+ components) must strictly adhere to the Atomic Design methodology.

### Atoms (Dumb Components)
- Purely presentational. No side effects. No external data fetching. No complex state.
- Receives data and callbacks via props only.
- Examples: Buttons, Inputs, Labels, Icons.

### Molecules (Composed Elements)
- Composed of multiple Atoms or simple raw HTML elements.
- Handles minimal internal state (like a dropdown's open/close state) but delegates heavy logic up via events.
- Examples: Form Groups (Label + Input + Error Message), Search Bars (Input + Button + Icon).

### Organisms (State-Aware Structures)
- High-level, complex, state-aware structures.
- They compose Molecules and Atoms.
- They are allowed to interact with global stores (`osState`), handle complex data passing, and orchestrate layout logic.
- Examples: Data Tables, Window Frames, Desktop Taskbar, Navigation Sidebars.
