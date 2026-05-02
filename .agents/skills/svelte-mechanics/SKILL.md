# Svelte Mechanics Skill

## Core Reactivity Paradigms
- Svelte uses compiler-based reactivity. State is local unless explicitly shared via stores or context.
- Use `$:` for reactive declarations and statements to recalculate values when dependencies change.
- Never mutate state directly without assignment if you want reactivity to trigger. Always reassign to the variable (e.g., `array = [...array, newElement]`).

## Svelte Actions (`use:action`)
- Use actions for DOM manipulations specifically related to **dragging**, **resizing**, and **click-outside** events.
- An action is a function called when an element is created. It takes the node and optional parameters, returning an object with `update` and `destroy` methods.
- Example for click-outside:
  ```javascript
  export function clickOutside(node, handler) {
    const onClick = event => node && !node.contains(event.target) && !event.defaultPrevented && handler();
    document.addEventListener('click', onClick, true);
    return { destroy() { document.removeEventListener('click', onClick, true); } };
  }
  ```

## Global Svelte Stores
- Structure global state using Svelte stores (e.g., `osState`).
- Prefer derived stores to compute state from other stores instead of duplicating data.
- Subscribe to stores in components using the auto-subscription syntax (`$osState`).
- Isolate store definitions in dedicated files (e.g., `src/stores/osState.js`) and expose custom methods to encapsulate state mutations instead of allowing raw updates everywhere.

## Strict Restrictions
- **NO DEPRECATED SYNTAX:** Do not use deprecated syntax. Keep everything compatible with modern Svelte (v4+ conventions). Do not use the legacy `bind:this` on components unless absolutely necessary (prefer standard props and events).
- Do not overuse slots where simple props suffice.
