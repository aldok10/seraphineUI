<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let value: number = 0;
	export let max: number = 100;

	let className: string | undefined | null = undefined;
	export { className as class };

	$: percentage = Math.min(Math.max((value / max) * 100, 0), 100);
</script>

<div
	role="progressbar"
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={value}
	class={cn(
		'relative h-4 w-full overflow-hidden rounded-md border border-os-border bg-os-window',
		className
	)}
	{...$$restProps}
>
	<div
		class="h-full w-full flex-1 bg-os-accent transition-all duration-300 ease-in-out"
		style="transform: translateX(-{100 - percentage}%)"
	></div>
</div>
