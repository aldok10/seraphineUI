<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'accent' | 'warning' | 'outline' = 'default';
	let className: string | undefined | null = undefined;
	export { className as class };

	// Variant styles mapping
	const variants = {
		default: 'bg-gray-200 text-gray-800 border-transparent',
		accent: 'bg-[var(--accent)] text-white border-transparent',
		warning: 'bg-[var(--warning)] text-black border-transparent',
		outline: 'bg-transparent text-gray-800 border-[var(--border)] border'
	};
</script>

<div
	class={cn(
		'inline-flex items-center justify-center rounded-[6px] px-2.5 py-0.5 text-xs font-semibold transition-colors',
		'border',
		variants[variant],
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
