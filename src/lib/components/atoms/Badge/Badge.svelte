<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type BadgeVariant = 'default' | 'warning' | 'outline';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
    tabular?: boolean;
    class?: string;
    children?: Snippet;
  }

  let { variant = 'default', tabular = false, class: className, children, ...rest }: Props = $props();

  const baseClasses = "inline-flex items-center justify-center rounded-[6px] border-[1px] px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    default: "border-os-border bg-os-accent text-white hover:opacity-80",
    warning: "border-os-border bg-[#FACC15] text-black hover:opacity-80",
    outline: "border-os-border text-current bg-transparent",
  };
</script>

<div class={cn(baseClasses, variantClasses[variant], tabular && "tabular-nums font-mono", className)} {...rest}>
  {@render children?.()}
</div>
