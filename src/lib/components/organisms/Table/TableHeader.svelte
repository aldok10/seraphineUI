<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { Typography } from '../../atoms/Typography/index.js';

	interface Props extends HTMLAttributes<HTMLTableCellElement> {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children, ...rest }: Props = $props();
</script>

<th
	class={cn(
		'h-10 px-4 text-left align-middle font-medium text-os-border border-b-[1px] border-os-border bg-os-bg [&:has([role=checkbox])]:pr-0',
		className
	)}
	{...rest}
>
	<Typography variant="span" class="font-semibold text-black">
		{@render children?.()}
	</Typography>
</th>
