<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'outline' | 'warning' = 'default';

	let className: string | undefined = undefined;
	export { className as class };

	// Define variant-specific classes matching the aesthetic
	const variantClasses = {
		default: "bg-os-accent text-white border-transparent",
		outline: "bg-transparent text-black border-os-border",
		warning: "bg-os-warning text-black border-transparent" // Note: Assuming --warning maps to a configured color or standard yellow
	};
</script>

<div
	class={cn(
		"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-os-accent focus:ring-offset-2",
		variantClasses[variant],
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
