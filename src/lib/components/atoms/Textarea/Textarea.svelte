<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  interface Props extends HTMLTextareaAttributes {
    class?: string;
    value?: string;
  }

  let { class: className = '', value = $bindable(), ...rest }: Props = $props();
</script>

<textarea
  class={cn(
    'flex min-h-[80px] w-full rounded-md border border-os-border bg-os-window px-3 py-2 text-sm ring-offset-os-window placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
    className
  )}
  bind:value
  {...rest}
></textarea>
