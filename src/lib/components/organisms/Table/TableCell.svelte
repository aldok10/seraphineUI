<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { Typography } from '../../atoms/Typography/index.js';

	interface Props extends HTMLAttributes<HTMLTableCellElement> {
		class?: string;
		children?: Snippet;
		isNumeric?: boolean;
	}

	let { class: className, isNumeric = false, children, ...rest }: Props = $props();
</script>

<td
	class={cn(
		'p-4 align-middle [&:has([role=checkbox])]:pr-0 border-os-border',
		className
	)}
	{...rest}
>
	{#if isNumeric}
		<Typography variant="metric">
			{@render children?.()}
		</Typography>
	{:else}
		<Typography variant="span">
			{@render children?.()}
		</Typography>
	{/if}
</td>
