<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Props = HTMLInputAttributes & {
		value?: string | number | string[] | null | undefined;
	};

	let { class: className = undefined, value = $bindable(), ...rest }: Props = $props();
</script>

<input
	class={cn(
		'flex h-10 w-full rounded-[6px] border border-os-border bg-os-window px-3 py-2 text-sm text-black',
		'file:border-0 file:bg-transparent file:text-sm file:font-medium',
		'placeholder:text-gray-500',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'transition-colors duration-200',
		className
	)}
	bind:value
	{...rest}
/>
