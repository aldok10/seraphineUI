<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils/cn";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let {
		class: className = "",
		value,
		id,
		disabled = false,
		...rest
	}: {
		class?: string;
		value: string;
		id?: string;
		disabled?: boolean;
	} & Omit<HTMLAttributes<HTMLInputElement>, "type" | "value" | "disabled" | "name" | "id"> = $props();

	const { name, groupValue, groupDisabled } = getContext<{
		name: string;
		groupValue: Writable<string>;
		groupDisabled: boolean;
	}>("RadioGroup");

	let isChecked = $derived($groupValue === value);
	let isDisabled = $derived(disabled || groupDisabled);

	function handleChange() {
		if (!isDisabled) {
			$groupValue = value;
		}
	}
</script>

<div class="relative inline-flex items-center">
	<input
		type="radio"
		{id}
		{name}
		{value}
		checked={isChecked}
		disabled={isDisabled}
		onchange={handleChange}
		class="peer sr-only"
		{...rest}
	/>
	<div
		class={cn(
			"flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-os-border bg-os-window text-current transition-colors",
			"peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-os-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-os-window",
			"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			isChecked && "border-os-accent",
			className
		)}
		aria-hidden="true"
	>
		{#if isChecked}
			<span class="block h-2 w-2 rounded-full bg-os-accent"></span>
		{/if}
	</div>
</div>
