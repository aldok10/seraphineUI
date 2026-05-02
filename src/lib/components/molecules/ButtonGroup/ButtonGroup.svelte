<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...rest }: Props = $props();

  let baseClasses = $derived(cn(
    "inline-flex -space-x-px",
    "[&>button]:rounded-none",
    "[&>button:first-child]:rounded-l-[6px]",
    "[&>button:last-child]:rounded-r-[6px]",
    className
  ));
</script>

<div class={baseClasses} role="group" {...rest}>
  {@render children?.()}
</div>
