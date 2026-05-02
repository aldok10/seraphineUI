<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		src?: string;
		alt?: string;
		fallback?: string;
		class?: string;
	}

	let {
		src,
		alt = '',
		fallback = 'U',
		class: className = '',
		...rest
	}: Props = $props();

	let imgError = $state(false);

	function handleError() {
		imgError = true;
	}
</script>

<div
	class={cn(
		'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-[6px] bg-[var(--os-bg,#C0C0C0)] border border-[var(--os-border,#000)]',
		className
	)}
>
	{#if src && !imgError}
		<img
			{src}
			{alt}
			class="aspect-square h-full w-full object-cover"
			onerror={handleError}
			{...rest}
		/>
	{:else}
		<span
			class="flex h-full w-full items-center justify-center rounded-[6px] bg-muted text-sm font-semibold text-black font-['Matter']"
			title={alt}
		>
			{fallback}
		</span>
	{/if}
</div>
