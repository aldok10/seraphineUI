<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string | Snippet;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  }

  let {
    src,
    alt = 'Avatar',
    fallback,
    size = 'md',
    class: className,
    ...rest
  }: Props = $props();

  let hasError = $state(false);

  const baseClasses = "relative flex shrink-0 overflow-hidden rounded-[6px] border-[1px] border-os-border bg-os-bg items-center justify-center";

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };
</script>

<div class={cn(baseClasses, sizeClasses[size], className)} {...rest}>
  {#if src && !hasError}
    <img
      {src}
      {alt}
      class="aspect-square h-full w-full object-cover"
      onerror={() => hasError = true}
    />
  {:else if typeof fallback === 'function'}
    {@render fallback()}
  {:else if fallback}
    <span class="font-os font-medium uppercase text-black">{fallback}</span>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-1/2 w-1/2 text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  {/if}
</div>
