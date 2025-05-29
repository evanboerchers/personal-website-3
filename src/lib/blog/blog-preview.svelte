<script lang='ts'>
	import BlogTag from "./blog-tag.svelte";
	import BlogTags from "./blog-tags.svelte";

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
    <article class='flex flex-row'>
        <img class= 'aspect-3/2 border border-border' src={image} alt={`${title}`}/>
        <div>
            <h1 class='text-2xl'>{title}</h1>
            <p>{date.toString()}</p>
            <p class=''>{description}</p>
            <BlogTags tags={tags }/>
        </div>
    </article>
</a>