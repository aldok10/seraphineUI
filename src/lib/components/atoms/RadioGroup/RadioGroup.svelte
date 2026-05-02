<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils/cn";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	let {
		class: className = "",
		value = $bindable(""),
		name,
		disabled = false,
		children,
		...rest
	}: {
		class?: string;
		value?: string;
		name: string;
		disabled?: boolean;
		children?: import("svelte").Snippet;
	} & HTMLAttributes<HTMLDivElement> = $props();

	const groupValue = writable(value);

	$effect(() => {
		if (value !== undefined) {
			$groupValue = value;
		}
	});

	$effect(() => {
		value = $groupValue;
	});

	setContext("RadioGroup", {
		get name() { return name; },
		groupValue,
		get groupDisabled() { return disabled; },
	});
</script>

<div class={cn("flex flex-col gap-2", className)} role="radiogroup" {...rest}>
	{@render children?.()}
</div>
