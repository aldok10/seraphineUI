<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'outline' | 'warning' | 'destructive' = 'default';
	let className: string | undefined | null = undefined;
	export { className as class };

	const baseStyles = 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

	const variants = {
		default: 'border-transparent bg-[var(--accent)] text-white hover:bg-[var(--accent)]/80',
		warning: 'border-transparent bg-[var(--warning)] text-black hover:bg-[var(--warning)]/80',
		destructive: 'border-transparent bg-red-600 text-white hover:bg-red-600/80',
		outline: 'text-black border-black dark:text-white dark:border-white'
	};
</script>

<div class={cn(baseStyles, variants[variant], className)} {...$$restProps}>
	<slot />
</div>
