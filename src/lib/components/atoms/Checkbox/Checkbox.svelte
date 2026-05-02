<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    class?: string;
    checked?: boolean | 'indeterminate';
  }

  let { class: className = '', checked = $bindable(false), ...rest }: Props = $props();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
  }
</script>

<div class={cn("relative flex items-center justify-center h-4 w-4 shrink-0 rounded-sm border border-os-border focus-within:ring-2 focus-within:ring-os-accent focus-within:ring-offset-2", className)}>
  <input
    type="checkbox"
    class="peer absolute h-full w-full cursor-os-pointer opacity-0"
    checked={checked === true}
    onchange={handleChange}
    {...rest}
  />

  {#if checked === true}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="pointer-events-none h-3 w-3 text-os-accent peer-checked:block"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  {:else if checked === 'indeterminate'}
    <div class="pointer-events-none h-2 w-2 rounded-sm bg-os-accent peer-checked:block"></div>
  {/if}
</div>
