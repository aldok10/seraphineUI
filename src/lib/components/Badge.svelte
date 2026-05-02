<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'outline' | 'warning' = 'default';
	let className: string = '';
	export { className as class };

	$: variantClasses = {
		default: 'bg-os-accent text-white border-transparent',
		outline: 'bg-transparent text-os-border border-os-border',
		warning: 'bg-yellow-400 text-black border-transparent'
	}[variant];

</script>

<div
	class={cn(
		'inline-flex items-center rounded-md border border-solid border-[1px] px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-os-accent focus:ring-offset-2',
		variantClasses,
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
