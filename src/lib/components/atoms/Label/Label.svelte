<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Props = HTMLLabelAttributes;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<label
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black',
		className
	)}
	{...rest}
>
	{@render children?.()}
</label>
