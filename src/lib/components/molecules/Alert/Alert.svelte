<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn';

	type Intent = 'default' | 'warning' | 'error' | 'success';

	let {
		children,
		class: className = '',
		intent = 'default',
		title,
		icon,
		...rest
	}: {
		children: Snippet;
		class?: string;
		intent?: Intent;
		title?: string;
		icon?: Snippet;
		[key: string]: any;
	} = $props();
</script>

<div
	role="alert"
	class={cn(
		'relative w-full rounded-[6px] border border-[var(--border,#000)] p-4 font-["Matter"] text-sm shadow-none',
		intent === 'default' && 'bg-transparent text-black',
		intent === 'warning' && 'border-[var(--warning,#eab308)] bg-[var(--warning,#eab308)]/10 text-[var(--warning,#eab308)]',
		intent === 'error' && 'border-red-500 bg-red-500/10 text-red-500',
		intent === 'success' && 'border-green-500 bg-green-500/10 text-green-500',
		className
	)}
	{...rest}
>
	{#if icon}
		<span class="absolute left-4 top-4 flex h-4 w-4 items-center justify-center">
			{@render icon()}
		</span>
	{/if}

	<div class={cn(icon && 'pl-7')}>
		{#if title}
			<h5 class="mb-1 font-medium leading-none tracking-tight">
				{title}
			</h5>
		{/if}
		<div class="text-sm opacity-90 [&_p]:leading-relaxed">
			{@render children()}
		</div>
	</div>
</div>
