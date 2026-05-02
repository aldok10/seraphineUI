<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let name: string = '';
  export let id: string = '';

  let className: string = '';
  export { className as class };

  function handleClick() {
    if (disabled) return;
    checked = !checked;
    dispatch('change', { checked });
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }
</script>

<button
  type="button"
  role="switch"
  aria-checked={checked}
  {disabled}
  {id}
  {name}
  class={cn(
    "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-md border border-os-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-border focus-visible:ring-offset-2 focus-visible:ring-offset-os-window disabled:cursor-not-allowed disabled:opacity-50",
    checked ? "bg-os-accent" : "bg-os-bg",
    className
  )}
  on:click={handleClick}
  on:keydown={handleKeyDown}
>
  <span
    class={cn(
      "pointer-events-none block h-5 w-5 rounded-[4px] bg-os-window border border-os-border shadow-none ring-0 transition-transform",
      checked ? "translate-x-[20px]" : "translate-x-0"
    )}
  />
</button>
