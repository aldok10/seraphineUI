<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let class: string = '';
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';

	const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

	const variants = {
		primary: 'bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900',
		secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus-visible:ring-zinc-500',
		outline: 'border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-500',
		ghost: 'hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-500',
	};

	const sizes = {
		sm: 'h-9 px-3',
		md: 'h-10 py-2 px-4',
		lg: 'h-11 px-8 text-base',
	};
</script>

<button
	{type}
	{disabled}
	class={cn(baseStyles, variants[variant], sizes[size], $$props.class, class)}
	on:click
	{...$$restProps}
>
	<slot />
</button>
