<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'solid' | 'outline' | 'ghost' | 'warning' = 'solid';
	export let size: 'sm' | 'md' | 'lg' | 'icon' = 'md';

	let className: string | undefined | null = undefined;
	export { className as class };

	const variantStyles = {
		solid: 'bg-os-accent text-white hover:bg-opacity-90 border border-transparent',
		outline: 'bg-transparent border-[1px] border-os-border text-black hover:bg-black/5',
		ghost: 'bg-transparent text-black hover:bg-black/5 border border-transparent',
		warning: 'bg-yellow-400 text-black hover:bg-yellow-500 border border-transparent'
	};

	const sizeStyles = {
		sm: 'h-8 px-3 text-xs',
		md: 'h-10 px-4 py-2 text-sm',
		lg: 'h-12 px-8 text-base',
		icon: 'h-10 w-10 p-2'
	};
</script>

<button
	class={cn(
		'inline-flex items-center justify-center rounded-[6px] font-os transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-os-border disabled:pointer-events-none disabled:opacity-50 tabular-nums',
		variantStyles[variant],
		sizeStyles[size],
		className
	)}
	on:click
	on:keydown
	on:focus
	on:blur
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</button>
