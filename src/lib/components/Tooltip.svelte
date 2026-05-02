<script lang="ts">
  import { cn } from '$lib/utils/cn';

  // Props
  export let text: string;
  let clazz: string = '';
  export { clazz as class };
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  let isVisible = false;

  function showTooltip() {
    isVisible = true;
  }

  function hideTooltip() {
    isVisible = false;
  }
</script>

<div
  class="relative inline-block"
  on:mouseenter={showTooltip}
  on:mouseleave={hideTooltip}
  on:focusin={showTooltip}
  on:focusout={hideTooltip}
>
  <slot />

  {#if isVisible}
    <div
      role="tooltip"
      class={cn(
        'absolute z-[100] px-2 py-1 text-xs font-os text-white bg-black border border-black rounded-md pointer-events-none whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-opacity duration-150',
        position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        position === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2',
        position === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2',
        position === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2',
        clazz
      )}
    >
      {text}
      <!-- Optional: Add a small triangle/arrow here based on position if desired, but a simple box is also fine for 'small black box with white Matter text, 6px radius' -->
    </div>
  {/if}
</div>
