<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface ProseProps {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className }: ProseProps = $props();
</script>

<div
	class={cn(
		'prose dark:prose-invert prose-neutral max-w-[var(--article-max-width)',
		className
	)}
>
	{@render children?.()}
</div>
