<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'metric' | 'span' = 'p';
	export let element: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };

	// Define base classes per variant
	const variantClasses = {
		h1: "font-['Matter'] text-4xl font-bold tracking-tight",
		h2: "font-['Matter'] text-3xl font-semibold tracking-tight",
		h3: "font-['Matter'] text-2xl font-semibold tracking-tight",
		h4: "font-['Matter'] text-xl font-semibold tracking-tight",
		h5: "font-['Matter'] text-lg font-semibold tracking-tight",
		h6: "font-['Matter'] text-base font-semibold tracking-tight",
		p: "font-['Matter'] text-base leading-7",
		span: "font-['Matter'] text-base",
		metric: "font-['Matter_Mono'] tabular-nums font-medium text-base"
	};

	// Determine the HTML element to render
	$: Element = element || (variant === 'metric' ? 'span' : variant);
</script>

<svelte:element
	this={Element}
	class={cn(variantClasses[variant], className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
