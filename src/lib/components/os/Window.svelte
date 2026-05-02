<script lang="ts">
  import { osState } from '$lib/stores/osState';

  export let id: string;

  $: windowData = $osState.windows.find(w => w.id === id);
  $: isActive = $osState.activeWindowId === id;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialWinX = 0;
  let initialWinY = 0;

  function handlePointerDown(e: PointerEvent) {
    if (!windowData) return;
    osState.focusWindow(id);

    // Only initiate drag on title bar
    const target = e.target as HTMLElement;
    if (target.closest('.title-bar')) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialWinX = windowData.x;
      initialWinY = windowData.y;

      // Ensure we capture pointer events outside the window
      target.setPointerCapture(e.pointerId);
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isDragging || !windowData) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    osState.updateWindowPosition(id, initialWinX + dx, initialWinY + dy);
  }

  function handlePointerUp(e: PointerEvent) {
    isDragging = false;
    const target = e.target as HTMLElement;
    if (target.hasPointerCapture(e.pointerId)) {
        target.releasePointerCapture(e.pointerId);
    }
  }

  function handleClose() {
    osState.closeWindow(id);
  }
</script>

<svelte:window on:pointermove={handlePointerMove} on:pointerup={handlePointerUp} />

{#if windowData?.isOpen && !windowData?.isMinimized}
  <div
    class="absolute border-3 border-os-border bg-os-window shadow-brutal flex flex-col transition-shadow duration-200"
    class:shadow-brutal-lg={isActive}
    style="left: {windowData.x}px; top: {windowData.y}px; z-index: {windowData.zIndex};"
    on:pointerdown={handlePointerDown}
  >
    <!-- Title Bar -->
    <div class="title-bar bg-os-titlebar border-b-3 border-os-border p-2 flex justify-between items-center cursor-move select-none" class:bg-os-accent={isActive}>
      <span class="font-os font-bold text-black px-2">{windowData.title}</span>
      <button
        class="w-6 h-6 border-2 border-black bg-white hover:bg-red-500 hover:text-white flex items-center justify-center font-bold active:translate-y-[1px] active:translate-x-[1px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
        on:click|stopPropagation={handleClose}
        aria-label="Close window"
      >
        ×
      </button>
    </div>

    <!-- Content Area -->
    <div class="p-4 font-os">
      <slot />
    </div>
  </div>
{/if}
