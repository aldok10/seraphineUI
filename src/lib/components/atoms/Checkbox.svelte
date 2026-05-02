<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let checked: boolean | 'indeterminate' = false;
	export let disabled: boolean = false;
	export let className: string | undefined = undefined;

	let inputRef: HTMLInputElement;

	$: if (inputRef) {
		inputRef.indeterminate = checked === 'indeterminate';
	}

	// Helper to handle standard boolean binding without error
	$: booleanChecked = checked === 'indeterminate' ? false : checked;
</script>

<div class={cn('relative inline-flex items-center justify-center', className)}>
	<input
		type="checkbox"
		bind:this={inputRef}
		bind:checked={booleanChecked}
		on:change={(e) => { checked = e.currentTarget.checked; }}
		{disabled}
		class="peer h-4 w-4 shrink-0 appearance-none rounded-[6px] border border-[--border] bg-[--os-window] focus:outline-none focus:ring-2 focus:ring-[--accent] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-[--accent] checked:border-transparent indeterminate:bg-[--accent] indeterminate:border-transparent transition-colors"
		{...$$restProps}
	/>
	{#if checked === true}
		<svg
			class="pointer-events-none absolute text-white h-3 w-3 peer-disabled:opacity-50"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	{:else if checked === 'indeterminate'}
		<svg
			class="pointer-events-none absolute text-white h-3 w-3 peer-disabled:opacity-50"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="5" y1="12" x2="19" y2="12" />
		</svg>
	{/if}
</div>
