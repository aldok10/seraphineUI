<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { cn } from '$lib/utils/cn';

  export let value: string;
  let className: string | undefined | null = undefined;
  export { className as class };

  const selectedValue = writable<string>(value);

  $: selectedValue.set(value);

  selectedValue.subscribe((v) => {
    value = v;
  });

  setContext('tabs', {
    selectedValue,
    setValue: (v: string) => {
      value = v;
    }
  });
</script>

<div class={cn("w-full", className)} {...$$restProps}>
  <slot />
</div>
