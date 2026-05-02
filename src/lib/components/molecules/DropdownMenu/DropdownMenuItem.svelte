<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import { cn } from '$lib/utils/cn.js';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		class?: string;
		inset?: boolean;
		disabled?: boolean;
	}

	let { children, class: className, inset, disabled = false, ...rest }: Props = $props();

	const dropdown = getContext<{
		open: Writable<boolean>;
		close: () => void;
	}>('dropdown');

	const { close } = dropdown;

	function handleClick(e: MouseEvent) {
		if (disabled) {
			e.preventDefault();
			return;
		}
		close();
		const onclick = (rest as any).onclick;
		if (typeof onclick === 'function') {
			onclick(e);
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	role="menuitem"
	tabindex="0"
	class={cn(
		'relative flex cursor-os-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-os-accent hover:text-white focus:bg-os-accent focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		inset && 'pl-8',
		disabled && 'opacity-50 cursor-not-allowed',
		className
	)}
	data-disabled={disabled ? '' : undefined}
	onclick={handleClick}
	{...rest}
>
	{@render children?.()}
</div>
