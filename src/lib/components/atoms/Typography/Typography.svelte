<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

  interface Props extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    metric?: boolean;
    class?: string;
    children?: Snippet;
  }

  let { variant = 'p', metric = false, class: className, children, ...rest }: Props = $props();

  const variantClasses = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    span: "",
  };

  let fontClass = $derived(metric ? "font-os tabular-nums" : "font-os");
</script>

{#if variant === 'h1'}
  <h1 class={cn(variantClasses.h1, fontClass, className)} {...rest}>
    {@render children?.()}
  </h1>
{:else if variant === 'h2'}
  <h2 class={cn(variantClasses.h2, fontClass, className)} {...rest}>
    {@render children?.()}
  </h2>
{:else if variant === 'h3'}
  <h3 class={cn(variantClasses.h3, fontClass, className)} {...rest}>
    {@render children?.()}
  </h3>
{:else if variant === 'h4'}
  <h4 class={cn(variantClasses.h4, fontClass, className)} {...rest}>
    {@render children?.()}
  </h4>
{:else if variant === 'p'}
  <p class={cn(variantClasses.p, fontClass, className)} {...rest}>
    {@render children?.()}
  </p>
{:else}
  <span class={cn(variantClasses.span, fontClass, className)} {...rest}>
    {@render children?.()}
  </span>
{/if}
