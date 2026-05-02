<script lang="ts">
  import { osState } from '$lib/stores/osState';
  import { draggable } from '$lib/actions/draggable';

  export let id: string;

  $: windowData = $osState.windows.find(w => w.id === id);
  $: isActive = $osState.activeWindowId === id;

  function handleClose() {
    osState.closeWindow(id);
  }

  function handleMinimize() {
    osState.minimizeWindow(id);
  }
</script>

{#if windowData?.isOpen && !windowData?.isMinimized}
  <div
    use:draggable={{
      id: windowData.id,
      updatePosition: osState.updateWindowPosition,
      handleFocus: osState.focusWindow
    }}
    class="absolute border-3 border-os-border bg-os-window shadow-brutal flex flex-col transition-shadow duration-200"
    class:shadow-brutal-lg={isActive}
    style="left: {windowData.x}px; top: {windowData.y}px; z-index: {windowData.zIndex}; min-width: 300px; min-height: 200px;"
  >
    <!-- Title Bar -->
    <div class="title-bar bg-os-titlebar border-b-3 border-os-border p-2 flex justify-between items-center cursor-os-pointer select-none" class:bg-os-accent={isActive}>
      <span class="font-os font-bold text-white px-2 pointer-events-none">{windowData.title}</span>
      <div class="flex gap-1">
        <!-- Minimize Button -->
        <button
          class="window-control-btn w-6 h-6 border-2 border-black bg-os-bg hover:bg-gray-300 flex items-center justify-center font-bold active:translate-y-[2px] active:translate-x-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          on:click|stopPropagation={handleMinimize}
          aria-label="Minimize window"
        >
          _
        </button>
        <!-- Close Button -->
        <button
          class="window-control-btn w-6 h-6 border-2 border-black bg-os-bg hover:bg-red-500 hover:text-white flex items-center justify-center font-bold active:translate-y-[2px] active:translate-x-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          on:click|stopPropagation={handleClose}
          aria-label="Close window"
        >
          ×
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-4 font-os flex-1 overflow-auto bg-os-window">
      <slot />
    </div>
  </div>
{/if}
