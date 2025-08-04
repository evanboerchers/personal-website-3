<script lang="ts">
	import BlogList from '$lib/components/blog/blog-list.svelte';
	import type { BlogPreviewVariant } from '$lib/components/blog/blog-preview.svelte';
	const { data } = $props();

	function getVariant(width: number): BlogPreviewVariant {
		return width > 400 ? 'default' : 'stacked';
	}

	let variant = $derived(getVariant(200));
</script>

<div>
	<BlogList {variant} tags={data.tags} posts={data.posts} />
</div>
