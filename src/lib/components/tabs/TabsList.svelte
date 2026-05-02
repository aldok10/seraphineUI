<script lang="ts">
  import { cn } from '$lib/utils/cn';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<div
  role="tablist"
  class={cn(
    "flex items-center justify-center p-1 bg-os-bg border border-os-border rounded-md text-sm",
    className
  )}
  {...$$restProps}
>
  <slot />
</div>
