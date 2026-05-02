<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let variant: 'default' | 'action' | 'warning' | 'outline' = 'default';
  let className: string = '';
  export { className as class };

  const variants = {
    default: 'bg-gray-200 text-gray-900 border-transparent',
    action: 'bg-[var(--accent)] text-white border-transparent',
    warning: 'bg-[var(--warning)] text-black border-transparent',
    outline: 'bg-transparent border-[var(--border)] text-gray-900'
  };
</script>

<div
  class={cn(
    'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold font-sans transition-colors',
    'rounded-[6px] border',
    variants[variant],
    className
  )}
  {...$$restProps}
>
  <slot />
</div>
