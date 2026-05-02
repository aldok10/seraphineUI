<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Variant = 'default' | 'accent' | 'warning' | 'outline';
	type Size = 'sm' | 'md';

	export let variant: Variant = 'default';
	export let size: Size = 'md';
	export let className: string | undefined = undefined;

	$: baseStyles = 'inline-flex items-center justify-center font-medium rounded-[6px] border border-[--border] transition-colors tabular-nums focus:outline-none focus:ring-2 focus:ring-[--accent] focus:ring-offset-2';

	$: sizeStyles = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-2.5 py-0.5 text-sm'
	};

	$: variantStyles = {
		default: 'bg-[--os-bg] text-black',
		accent: 'bg-[--accent] text-white border-transparent',
		warning: 'bg-[--warning] text-black border-transparent',
		outline: 'bg-transparent text-black'
	};
</script>

<div
	class={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
	role="status"

	{...$$restProps}
>
	<slot />
</div>
