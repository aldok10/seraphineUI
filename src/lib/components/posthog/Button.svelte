<script lang="ts">
  import { cn } from '$lib/utils/cn';

  export let variant: 'primary' | 'secondary' | 'personality' = 'primary';
  export let class: string = '';
  export let type: 'button' | 'submit' | 'reset' = 'button';

  const baseStyles = 'inline-flex items-center justify-center rounded-ph font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ph-accent focus-visible:ring-offset-1 disabled:opacity-50 px-[14px] py-[8px] text-[14px]';

  const variants = {
    primary: 'bg-ph-accent text-white hover:bg-ph-accent-hover shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]',
    secondary: 'bg-white text-ph-text border border-ph-border-strong hover:bg-ph-surface',
    personality: 'bg-ph-warning text-ph-text hover:brightness-95',
  };
</script>

<button
  {type}
  class={cn(baseStyles, variants[variant], $$props.class, class)}
  on:click
  {...$$restProps}
>
  <slot />
</button>
