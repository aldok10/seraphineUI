<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import { cn } from '$lib/utils/cn.js';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		class?: string;
		align?: 'start' | 'end' | 'center';
	}

	let { children, class: className, align = 'start', ...rest }: Props = $props();

	const dropdown = getContext<{
		open: Writable<boolean>;
		close: () => void;
	}>('dropdown');

	const { open, close } = dropdown;

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node)) {
				close();
			}
		};

		// Use the capture phase, but since we have stopPropagation on the trigger,
		// clicking the trigger won't trigger this clickOutside handler.
		// Wait, stopPropagation on click prevents document listener? Yes, if it's not captured.
		// If we use true for capture, stopPropagation in bubble won't prevent it.
		// So we use false for capture phase.
		document.addEventListener('click', handleClick, false);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, false);
			}
		};
	}

	let alignmentClass = $derived.by(() => {
		if (align === 'start') {
			return 'left-0';
		} else if (align === 'end') {
			return 'right-0';
		} else if (align === 'center') {
			return 'left-1/2 -translate-x-1/2';
		}
		return '';
	});
</script>

{#if $open}
	<div
		use:clickOutside
		role="menu"
		tabindex="-1"
		class={cn(
			'absolute z-[100] mt-1 min-w-[8rem] overflow-hidden rounded-[6px] border-[1px] border-os-border bg-os-window p-1 text-black shadow-[0_8px_24px_rgba(0,0,0,0.12)] font-os',
			alignmentClass,
			className
		)}
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}
