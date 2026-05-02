<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		open?: boolean;
	}

	let { children, open = $bindable(false), ...rest }: Props = $props();

	// Use writable store for context to allow sub-components to react
	const openStore = writable(open);

	// Update store when prop changes
	$effect(() => {
		openStore.set(open);
	});

	// Context for subcomponents
	setContext('dropdown', {
		open: openStore,
		toggle: () => {
			openStore.update(n => !n);
			open = !open;
		},
		close: () => {
			openStore.set(false);
			open = false;
		}
	});
</script>

<div class="relative inline-block text-left" {...rest}>
	{@render children?.()}
</div>
