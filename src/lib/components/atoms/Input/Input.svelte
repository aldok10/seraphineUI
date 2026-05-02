<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Props = HTMLInputAttributes & {
		value?: string;
		error?: boolean;
	};

	let { class: className, value = $bindable(), error = false, type = 'text', ...rest }: Props = $props();
</script>

<input
	type={type}
	bind:value
	class={cn(
		'flex h-10 w-full rounded-md border border-os-border bg-os-window px-3 py-2 text-sm text-black placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-accent disabled:cursor-not-allowed disabled:opacity-50',
		error && 'border-red-500 focus-visible:ring-red-500',
		className
	)}
	{...rest}
/>
