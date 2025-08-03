<script lang="ts">
	import BlogList from '$lib/components/blog/blog-list.svelte';
	const { data } = $props();
</script>

<BlogList variant="default" tags={data.tags} posts={data.posts} />
