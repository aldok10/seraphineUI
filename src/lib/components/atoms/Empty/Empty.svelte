<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<div
	class={cn(
		'flex flex-col items-center justify-center p-8 text-center',
		'rounded-[6px] border border-[var(--border)] bg-[var(--bg)]',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
