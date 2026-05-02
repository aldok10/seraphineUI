<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	let { class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn('animate-pulse rounded-md bg-os-bg/50', className)} {...rest}></div>
