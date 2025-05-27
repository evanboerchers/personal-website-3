<script lang="ts">
	import BlogPreview from '$lib/blog/blog-preview.svelte';

    const { data } = $props()
</script>

<div class='mt-20'>
    <ul>
    {#each data.posts as post}
        <BlogPreview 
        title={post.title}
        image={post.image}
        date={post.date}
        description={post.description}
        tags={post.tags}
        href="/blog/{post.slug}"
        />
    {/each}
    </ul>
</div>