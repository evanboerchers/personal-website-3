<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface PageHeadingProps {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className }: PageHeadingProps = $props();
</script>

<h1 class={cn(className, 'mb-8 text-4xl font-[800]')}>
	{@render children?.()}
</h1>
