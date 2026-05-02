<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<SVGSVGElement> {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		class?: string | null | undefined;
	}

	export let size: $$Props['size'] = 'md';
	let className: string | undefined | null = undefined;
	export { className as class };

	const sizeClasses = {
		sm: 'h-4 w-4',
		md: 'h-6 w-6',
		lg: 'h-8 w-8',
		xl: 'h-12 w-12'
	};
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={cn('animate-spin text-accent', sizeClasses[size || 'md'], className)}
	{...$$restProps}
>
	<path d="M21 12a9 9 0 1 1-6.219-8.56" />
</svg>
