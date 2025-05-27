<script lang='ts'>
	import BlogTag from "./blog-tag.svelte";

    interface Props {
        title: string;
        image: string;
        date: Date;
        description: string;
        tags: string[];
        href: string;
    }

    let { title, date, image, description, tags, href }: Props = $props()
</script>

<a href={href}>
    <img src={image} alt={`${title}`}/>
    <h1>{title}</h1>
    <p>{date.toString()}</p>
    <p>{description}</p>
    {#each tags as tag}
        <BlogTag tag={tag}/>
    {/each}
</a>