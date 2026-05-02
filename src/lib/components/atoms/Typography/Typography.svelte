<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn';

	type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'inline-code' | 'lead' | 'large' | 'small' | 'muted' | 'metric';
	type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'span' | 'div';

	let {
		children,
		class: className = '',
		variant = 'p',
		tag,
		...rest
	}: {
		children: Snippet;
		class?: string;
		variant?: TypographyVariant;
		tag?: TagName;
		[key: string]: any;
	} = $props();

	// Determine default tag based on variant if not explicitly provided
	const resolveTag = (): TagName => {
		if (tag) return tag;
		switch (variant) {
			case 'h1': return 'h1';
			case 'h2': return 'h2';
			case 'h3': return 'h3';
			case 'h4': return 'h4';
			case 'blockquote': return 'blockquote';
			case 'inline-code': return 'code';
			case 'metric': return 'span';
			case 'p':
			case 'lead':
			case 'large':
			case 'small':
			case 'muted':
			default:
				return 'p';
		}
	};

	const resolvedTag = resolveTag();

	const variantClasses: Record<TypographyVariant, string> = {
		h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-["Matter"]',
		h2: 'scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-["Matter"]',
		h3: 'scroll-m-20 text-2xl font-semibold tracking-tight font-["Matter"]',
		h4: 'scroll-m-20 text-xl font-semibold tracking-tight font-["Matter"]',
		p: 'leading-7 [&:not(:first-child)]:mt-6 font-["Matter"]',
		blockquote: 'mt-6 border-l-2 border-slate-300 pl-6 italic font-["Matter"]',
		'inline-code': 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold font-["Matter_Mono"]',
		lead: 'text-xl text-slate-700 font-["Matter"]',
		large: 'text-lg font-semibold font-["Matter"]',
		small: 'text-sm font-medium leading-none font-["Matter"]',
		muted: 'text-sm text-slate-500 font-["Matter"]',
		metric: 'font-["Matter_Mono"] tabular-nums',
	};

</script>

<svelte:element
	this={resolvedTag}
	class={cn(variantClasses[variant], className)}
	{...rest}
>
	{@render children()}
</svelte:element>
