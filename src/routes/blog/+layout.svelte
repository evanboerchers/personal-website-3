<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';

	let { children, data } = $props();
</script>

<div
	class="my-20 grid grid-cols-[var(--sidebar-width)_1fr] grid-rows-[100%] gap-4 md:grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]"
>
	<div class="">
		<BlogSidebar tags={data.tags} posts={data.posts}></BlogSidebar>
	</div>
	<div class="w-full">
		{@render children()}
	</div>
	<div></div>
</div>
