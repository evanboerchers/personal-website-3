<script lang="ts">
	import { PostTags } from '$lib/content/blog/types.js';
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';

	let { children, data  } = $props();
</script>

<div class="my-20 grid gap-4 grid-rows-[100%] md:grid-cols-[var(--sidebar-width)_1fr] grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]">
	<div class="">
		<BlogSidebar tags={Object.keys(PostTags)} posts={data.posts}></BlogSidebar>
	</div>
	<div class="w-full">
		{@render children()}
	</div>
	<div>
	</div>
</div>
 