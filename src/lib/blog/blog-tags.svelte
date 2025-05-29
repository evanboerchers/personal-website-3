<script lang="ts">
	import BlogTag from "./blog-tag.svelte";


let { tags }: {tags: string[]} = $props()
</script>

<ul class='flex flex-wrap gap-2'>
    {#each tags as tag}
        <li>
            <BlogTag tag={tag}/>
        </li>
    {/each}
</ul>