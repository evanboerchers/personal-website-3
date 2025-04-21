<script lang="ts">
    const { data } = $props()
</script>

<div class='mt-20'>
    {#each data.posts as post}
        <a href="/blog/{post.slug}">
            {post.title}
        </a>
    {/each}
</div>