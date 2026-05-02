<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'metric';

	interface Props extends HTMLAttributes<HTMLElement> {
		variant?: TypographyVariant;
		tabular?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { variant = 'p', tabular = false, class: className, children, ...rest }: Props = $props();

	// Web OS Design constraints dictate Matter for standard text and Matter Mono for metrics
	const variantClasses: Record<TypographyVariant, string> = {
		h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-os',
		h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-os border-os-border',
		h3: 'scroll-m-20 text-2xl font-semibold tracking-tight font-os',
		h4: 'scroll-m-20 text-xl font-semibold tracking-tight font-os',
		p: 'leading-7 [&:not(:first-child)]:mt-6 font-os',
		span: 'font-os',
		metric: 'font-os font-mono tabular-nums text-lg font-medium' // Matter Mono emulation using font-os and font-mono + tabular-nums
	};

	let element: string = $derived(
		variant === 'metric' ? 'span' : variant
	);
</script>

<svelte:element
	this={element}
	class={cn(variantClasses[variant], tabular && 'tabular-nums', className)}
	{...rest}
>
	{@render children?.()}
</svelte:element>
