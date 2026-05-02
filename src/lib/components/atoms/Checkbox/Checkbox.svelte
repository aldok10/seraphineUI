<script lang="ts">
  import { cn } from "$lib/utils";

  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let id: string = "";

  let className: string = "";
  export { className as class };

  function handleChange(event: Event) {
    checked = (event.target as HTMLInputElement).checked;
  }
</script>

<div class="relative inline-flex items-center">
  <input
    type="checkbox"
    {id}
    {disabled}
    {checked}
    on:change={handleChange}
    class="peer sr-only"
    {...$$restProps}
  />
  <div
    class={cn(
      "flex h-4 w-4 items-center justify-center rounded-[6px] border border-os-border bg-os-window text-os-window transition-colors focus-within:ring-2 focus-within:ring-os-accent/50 focus-within:ring-offset-2",
      checked && "bg-os-accent border-os-accent text-os-window",
      disabled && "cursor-not-allowed opacity-50",
      "peer-focus-visible:ring-2 peer-focus-visible:ring-os-accent/50 peer-focus-visible:ring-offset-2",
      className
    )}
    aria-hidden="true"
  >
    {#if checked}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-3 w-3"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    {/if}
  </div>
</div>
