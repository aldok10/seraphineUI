<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = Omit<HTMLInputAttributes, 'type'> & {
		checked?: boolean;
	};

	let { class: className, checked = $bindable(false), ...rest }: Props = $props();
</script>

<div class="relative flex items-center justify-center">
	<input
		type="checkbox"
		bind:checked
		class={cn(
			'peer h-4 w-4 shrink-0 appearance-none rounded-[6px] border border-[var(--border)] bg-[var(--window)]',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
			'disabled:cursor-not-allowed disabled:opacity-50',
			'checked:bg-[var(--accent)] checked:border-[var(--accent)]',
			className
		)}
		{...rest}
	/>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block"
	>
		<polyline points="20 6 9 17 4 12"></polyline>
	</svg>
</div>
