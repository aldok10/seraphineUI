<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold';

  interface Props extends HTMLAttributes<HTMLElement> {
    as?: TypographyVariant;
    variant?: TypographyVariant;
    metric?: boolean;
    weight?: TypographyWeight;
    class?: string;
    children?: Snippet;
  }

  let {
    as = 'p',
    variant,
    metric = false,
    weight = 'normal',
    class: className,
    children,
    ...rest
  }: Props = $props();

  const variantClasses: Record<TypographyVariant, string> = {
    h1: 'text-4xl font-bold tracking-tight lg:text-5xl font-["Matter"]',
    h2: 'text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-["Matter"]',
    h3: 'text-2xl font-semibold tracking-tight font-["Matter"]',
    h4: 'text-xl font-semibold tracking-tight font-["Matter"]',
    p: 'leading-7 [&:not(:first-child)]:mt-6 font-["Matter"]',
    span: '',
    div: ''
  };

  const weightClasses: Record<TypographyWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };
</script>

<svelte:element
  this={as}
  class={cn(
    "text-os-border",
    variantClasses[variant || as],
    weight !== 'normal' && weightClasses[weight],
    metric && "tabular-nums font-['Matter_Mono']",
    className
  )}
  {...rest}
>
  {@render children?.()}
</svelte:element>
