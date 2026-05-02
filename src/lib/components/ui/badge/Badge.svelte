<script lang="ts">
	import { cn } from '../../../utils/cn';

	export let variant: 'default' | 'warning' | 'outline' = 'default';
	let className: string | undefined | null = undefined;
	export { className as class };

	// 6px radius, matter font
	const baseClass = "inline-flex items-center px-2.5 py-0.5 font-['Matter'] tabular-nums text-xs font-semibold rounded-[6px] focus:outline-none focus:ring-2 focus:ring-os-accent focus:ring-offset-2 transition-colors";

	const variantClasses = {
		default: 'bg-os-accent text-white border border-transparent',
		warning: 'bg-yellow-400 text-black border border-transparent', // Fallback to yellow-400 since we only have os-accent in config
		outline: 'bg-transparent text-os-border border border-os-border'
	};
</script>

<div class={cn(baseClass, variantClasses[variant], className)} {...$$restProps}>
	<slot />
</div>
