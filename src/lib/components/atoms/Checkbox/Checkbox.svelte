<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type'> {
    class?: string;
    checked?: boolean;
    value?: string;
  }

  let { class: className = '', checked = $bindable(false), value, ...rest }: Props = $props();
</script>

<div class="relative flex items-center justify-center">
  <input
    type="checkbox"
    class={cn(
      'peer h-5 w-5 appearance-none rounded-md border border-os-border bg-os-window checked:bg-os-accent checked:border-os-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent focus-visible:ring-offset-2 focus-visible:ring-offset-os-window disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 cursor-os-pointer',
      className
    )}
    bind:checked
    {value}
    {...rest}
  />
  <svg
    class="pointer-events-none absolute hidden h-3.5 w-3.5 text-white peer-checked:block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
</div>
