<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { cn } from '$lib/utils/cn';

  export let value: string;
  let className: string | undefined | null = undefined;
  export { className as class };

  const { selectedValue, setValue } = getContext<{
    selectedValue: Writable<string>;
    setValue: (v: string) => void;
  }>('tabs');

  $: isSelected = $selectedValue === value;

  function handleClick() {
    setValue(value);
  }
</script>

<button
  type="button"
  role="tab"
  aria-selected={isSelected}
  data-state={isSelected ? 'active' : 'inactive'}
  class={cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent disabled:pointer-events-none disabled:opacity-50",
    "border border-transparent",
    isSelected
      ? "bg-os-accent text-white border-os-border cursor-default"
      : "text-gray-700 hover:text-black hover:bg-gray-200 cursor-os-pointer",
    className
  )}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button>
