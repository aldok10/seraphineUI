<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		class: className = '',
		...restProps
	}: {
		class?: string;
		[key: string]: any;
	} = $props();
</script>

<div
	class={cn('animate-pulse rounded-md bg-os-bg/50', className)}
	{...restProps}
></div>
