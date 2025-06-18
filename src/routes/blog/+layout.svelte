<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';

	let { children } = $props();
</script>

<div class="mt-20 grid gap-4 grid-rows-[100%] md:grid-cols-[var(--sidebar-width)_1fr] grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]">
	<div class="">
		<BlogSidebar></BlogSidebar>
	</div>
	<div class="w-full">
		{@render children()}
	</div>
	<div>
	</div>
</div>
