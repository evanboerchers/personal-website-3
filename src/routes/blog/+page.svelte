<script lang="ts">
	import BlogList from '$lib/components/blog/blog-list.svelte';
	import type { BlogPreviewVariant } from '$lib/components/blog/blog-preview.svelte';
	import { onMount } from 'svelte';
	const { data } = $props();

	let variant = $state<BlogPreviewVariant>('stacked');

	function getVariant(width: number): BlogPreviewVariant {
		return width > 475 ? 'default' : 'stacked';
	}

	function updateVariant(width: number) {
		variant = getVariant(width);
	}

	let width = 0;

	let blogContainerEl: HTMLElement | null = null;

	onMount(() => {
		if (!blogContainerEl) return;

		const observer = new ResizeObserver(([entry]) => {
			const newWidth = entry.contentRect.width;
			if (newWidth !== width) {
				width = newWidth;
				updateVariant(width);
			}
		});
		observer.observe(blogContainerEl);
		return () => observer.disconnect();
	});
</script>

<div bind:this={blogContainerEl}>
	<BlogList {variant} tags={data.tags} posts={data.posts} />
</div>
