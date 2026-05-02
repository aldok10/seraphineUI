<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type Variant = 'default' | 'secondary' | 'outline' | 'warning';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		variant?: Variant;
	}

	export let variant: Variant = 'default';

	const variantClasses: Record<Variant, string> = {
		default: 'bg-os-accent text-white border-transparent',
		secondary: 'bg-os-bg text-black border-os-border',
		outline: 'bg-transparent text-black border-os-border',
		warning: 'bg-yellow-400 text-black border-os-border'
	};
</script>

<div
	{...$$restProps}
	class={cn(
		'inline-flex items-center rounded-[6px] border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-os-border focus:ring-offset-2',
		variantClasses[variant],
		$$props.class
	)}
>
	<slot />
</div>
