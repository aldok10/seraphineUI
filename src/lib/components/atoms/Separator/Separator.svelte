<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    class?: string;
  }

  let {
    orientation = 'horizontal',
    decorative = true,
    class: className,
    ...rest
  }: Props = $props();

  const baseClasses = "shrink-0 bg-os-border";
  const orientationClasses = {
    horizontal: "h-[1px] w-full",
    vertical: "h-full w-[1px]"
  };
</script>

<div
  role={decorative ? 'none' : 'separator'}
  aria-orientation={decorative ? undefined : orientation}
  class={cn(baseClasses, orientationClasses[orientation], className)}
  {...rest}
></div>
