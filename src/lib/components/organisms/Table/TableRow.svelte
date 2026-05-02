<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLTableRowElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<tr
	class={cn(
		'border-b-[1px] border-os-border transition-colors hover:bg-black/5 data-[state=selected]:bg-os-accent/10',
		className
	)}
	{...rest}
>
	{@render children?.()}
</tr>
