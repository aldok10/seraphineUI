<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'accent' | 'warning' | 'outline' = 'default';
	let className: string | undefined | null = undefined;
	export { className as class };

	const variants = {
		default: 'bg-os-bg text-black border-os-border',
		accent: 'bg-os-accent text-white border-os-border',
		warning: 'bg-yellow-400 text-black border-os-border',
		outline: 'bg-transparent text-black border-os-border'
	};
</script>

<div
	class={cn(
		'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors',
		'rounded-[6px] border border-os-border',
		'tabular-nums font-os',
		variants[variant],
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
