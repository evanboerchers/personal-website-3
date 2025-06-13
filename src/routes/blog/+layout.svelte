<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';

	let { children } = $props();
</script>

<div class="mt-20 flex flex-row">
	<div class="">
		<BlogSidebar></BlogSidebar>
	</div>
	<div class="w-full">
		{@render children()}
	</div>
</div>
