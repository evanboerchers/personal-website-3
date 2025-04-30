<script lang='ts'>
	import BlogSidebar from '$lib/blog/blog-sidebar.svelte';

let { children } = $props()
</script>

<div class='grid grid-cols-2 gap-4'>
    <BlogSidebar></BlogSidebar>
    <div>
        {@render children()}
    </div>
</div>