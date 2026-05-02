<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils/cn";

	let {
		class: className = "",
		checked = $bindable(false),
		disabled = false,
		id,
		...rest
	}: {
		class?: string;
		checked?: boolean;
		disabled?: boolean;
		id?: string;
	} & Omit<HTMLAttributes<HTMLInputElement>, "type" | "checked" | "disabled" | "id"> = $props();
</script>

<div class="relative inline-flex items-center">
	<input
		type="checkbox"
		{id}
		bind:checked
		{disabled}
		class="peer sr-only"
		{...rest}
	/>
	<div
		class={cn(
			"flex h-4 w-4 shrink-0 items-center justify-center rounded-[6px] border border-os-border bg-os-window text-current transition-colors",
			"peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-os-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-os-window",
			"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			checked && "bg-os-accent border-os-accent text-white",
			className
		)}
		aria-hidden="true"
	>
		{#if checked}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-3 w-3"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		{/if}
	</div>
</div>
