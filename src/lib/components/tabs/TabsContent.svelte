<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { cn } from '$lib/utils/cn';

  export let value: string;
  let className: string | undefined | null = undefined;
  export { className as class };

  const { selectedValue } = getContext<{
    selectedValue: Writable<string>;
  }>('tabs');

  $: isSelected = $selectedValue === value;
</script>

{#if isSelected}
  <div
    role="tabpanel"
    data-state="active"
    class={cn(
      "mt-2 border border-os-border bg-os-window rounded-md p-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent",
      className
    )}
    tabindex="0"
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
