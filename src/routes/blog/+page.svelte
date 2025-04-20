<script lang="ts">
    const { data } = $props()
</script>

<div class='mt-20'>
    {#each data.posts as post }
        <div>
            {post.title}
        </div>
    {/each}
</div>