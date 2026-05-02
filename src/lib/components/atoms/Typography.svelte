<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'metric';
	type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

	export let variant: Variant = 'p';
	export let as: Tag | undefined = undefined;
	export let className: string | undefined = undefined;

	$: Component = as || (variant === 'metric' ? 'span' : variant);

	$: baseStyles = variant === 'metric' ? 'font-mono tabular-nums' : 'font-sans';

	$: variantStyles = {
		h1: 'text-4xl font-bold tracking-tight',
		h2: 'text-3xl font-semibold tracking-tight',
		h3: 'text-2xl font-semibold tracking-tight',
		h4: 'text-xl font-semibold tracking-tight',
		p: 'leading-7',
		metric: 'text-sm font-medium'
	};
</script>

<svelte:element
	this={Component}
	class={cn(baseStyles, variantStyles[variant], className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
