# Tailwind Composition Skill

## Safe Utility Composition
- Always combine dynamic Tailwind classes using `tailwind-merge` and `clsx` (often abstracted as a `cn` utility function) within Svelte components.
- Example: `class={cn('base-classes', dynamicCondition && 'conditional-class', $$props.class)}`.
- Never use raw template literals to concatenate dynamic tailwind classes without `tailwind-merge` to prevent class collision.

## Aesthetic Rules ("Friendly Data-Dense")
- **Radii:** Always default to 6px radii (`rounded-md` typically, but verify the actual configuration aligns with 6px).
- **Numerals:** Ensure tabular numerals are used in all data tables and metrics (`tabular-nums`).
- **Color Palette:**
  - **Action/Primary:** Use Cobalt blue shades (e.g., `bg-blue-600` or the custom configured cobalt equivalent).
  - **Warning/Personality:** Use Yellow shades (e.g., `bg-yellow-400` or custom configured yellow).
- **Shadows:** **STRICT AVOIDANCE** of default card shadows (`shadow`, `shadow-md`, etc.). Use flat design or specific subtle borders to denote depth instead of drop shadows unless explicitly directed by a specific UI mock.
