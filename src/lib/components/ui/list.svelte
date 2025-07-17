<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface LinkProps {
		children: Snippet;
		class?: string;
	}

	let { children, class: className }: LinkProps = $props();
</script>

<ul class={cn('marker:text-secondary list-disc', className)}>
	{@render children?.()}
</ul>
