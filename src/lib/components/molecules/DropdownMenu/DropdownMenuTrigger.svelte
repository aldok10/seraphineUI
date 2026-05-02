<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import { cn } from '$lib/utils/cn.js';

	interface Props extends HTMLAttributes<HTMLButtonElement> {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...rest }: Props = $props();

	const dropdown = getContext<{
		open: Writable<boolean>;
		toggle: () => void;
	}>('dropdown');

	const { open, toggle } = dropdown;

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		toggle();
		const onclick = (rest as any).onclick;
		if (typeof onclick === 'function') {
			onclick(e);
		}
	}
</script>

<button
	type="button"
	aria-haspopup="menu"
	aria-expanded={$open}
	class={cn("inline-flex cursor-os-pointer outline-none focus:ring-2 focus:ring-os-border focus:ring-offset-1 rounded-sm", className)}
	{...rest}
	onclick={handleClick}
	onmousedown={(e) => e.stopPropagation()}
>
	{@render children?.()}
</button>
