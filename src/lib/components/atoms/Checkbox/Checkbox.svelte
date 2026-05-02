<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type'> {
    class?: string;
  }

  let { class: className, checked = $bindable(false), disabled, ...rest }: Props = $props();

  let isChecked = $derived(checked);
</script>

<div class="relative inline-flex items-center justify-center">
  <input
    type="checkbox"
    bind:checked
    {disabled}
    class="peer absolute h-full w-full opacity-0 cursor-pointer disabled:cursor-not-allowed m-0"
    {...rest}
  />
  <div
    class={cn(
      "h-4 w-4 rounded-[6px] border border-os-border flex items-center justify-center transition-colors",
      "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-os-accent peer-focus-visible:ring-offset-2",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      isChecked ? "bg-os-accent border-os-accent text-white" : "bg-white",
      className
    )}
  >
    {#if isChecked}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-3 w-3"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    {/if}
  </div>
</div>
