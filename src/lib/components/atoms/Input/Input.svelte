<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    class?: string;
    value?: string | number | string[];
  }

  let { class: className = '', value = $bindable(), type = 'text', ...rest }: Props = $props();

  let inputClass = $derived(cn(
    "flex h-10 w-full rounded-md border border-os-border bg-os-window px-3 py-2 text-sm text-black transition-colors",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-gray-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "font-os tabular-nums",
    className
  ));
</script>

{#if type === 'text'}
  <input
    type="text"
    bind:value
    class={inputClass}
    {...rest}
  />
{:else if type === 'password'}
  <input
    type="password"
    bind:value
    class={inputClass}
    {...rest}
  />
{:else if type === 'email'}
  <input
    type="email"
    bind:value
    class={inputClass}
    {...rest}
  />
{:else if type === 'number'}
  <input
    type="number"
    bind:value
    class={inputClass}
    {...rest}
  />
{:else}
  <input
    {type}
    value={value as string}
    oninput={(e) => value = e.currentTarget.value}
    class={inputClass}
    {...rest}
  />
{/if}
