<script lang='ts'>
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';

let { children } = $props()
</script>

<div class='flex flex-row mt-20'>
    <div class=''>
        <BlogSidebar></BlogSidebar>
    </div>
    <div class='w-full'>
        {@render children()}
    </div>
</div>