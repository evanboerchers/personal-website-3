<script lang="ts">
	import BlogTag from '$lib/components/blog/blog-tag.svelte';
	import BlogTags from '$lib/components/blog/blog-tags.svelte';

	interface Props {
		title: string;
		image: string;
		date: Date;
		description: string;
		tags: string[];
		href: string;
	}

	let { title, date, image, description, tags, href }: Props = $props();
</script>

<a class="" {href}>
	<article class="flex flex-row gap-6">
		<img
			class="border-border aspect-3/2 border lg:w-[300px]"
			src={image}
			alt={`${title}`}
		/>
		<section class='prose dark:prose-invert'>
			<h1>{title}</h1>
			<p class="text-text-secondary mt-2">{date.toString()}</p>
			<p>{description}</p>
			<BlogTags class='not-prose' {tags} />
		</section>
	</article>
</a>
