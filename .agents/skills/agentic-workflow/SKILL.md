# Agentic Workflow Skill

## Core Directives for the AI
You are the AI tasked with maintaining and expanding this Web OS. Your execution must be flawless, adhering to the following strict rules:

- **Verification:** Always verify component existence in `TASK_BREAKDOWN.md` before writing any new code. Do not duplicate existing Atoms or Molecules.
- **Cognitive Process:** Think step-by-step. Analyze the requirements, map them to the Atomic Architecture, plan the Svelte reactivity, and ensure Tailwind aesthetic compliance before issuing code.
- **Code Output:** Always write full, non-truncated code. Never output placeholder comments like `// ... existing code ...`. Provide the complete functional component.
- **Master Rules:** Prioritize reading `AGENTS.md` for overarching master rules and project context. The rules in `AGENTS.md` supersede local rules if conflicts arise.
- **Validation:** After writing code, mentally trace the execution path. Does the Svelte action leak memory? Is the tailwind-merge handling prop overrides correctly?
