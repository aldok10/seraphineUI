<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Typography } from '../../atoms/Typography/index.js';

  type AlertVariant = 'default' | 'warning' | 'destructive';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    title?: string;
    class?: string;
    children?: Snippet;
  }

  let { variant = 'default', title, class: className, children, ...rest }: Props = $props();

  const baseClasses = "relative w-full rounded-[6px] border-[1px] p-4 text-sm font-os leading-relaxed tracking-tight";

  const variantClasses = {
    default: "bg-os-bg border-os-border text-os-border",
    warning: "bg-[#FACC15] border-os-border text-black", // Energetic yellow
    destructive: "bg-os-accent border-os-border text-white", // Cobalt/pop action color for destructive or high intent
  };
</script>

<div class={cn(baseClasses, variantClasses[variant], className)} role="alert" {...rest}>
  {#if title}
    <Typography variant="h4" class="mb-1 !text-base !font-semibold leading-none tracking-tight">{title}</Typography>
  {/if}
  <div class="text-sm opacity-90 [&_p]:leading-relaxed">
    {@render children?.()}
  </div>
</div>
