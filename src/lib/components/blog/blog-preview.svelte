<script lang="ts">
	import BlogTags from '$lib/components/blog/blog-tags.svelte';

	interface Props {
		title: string;
		image: string;
		date: string;
		description: string;
		tags: string[];
		href: string;
	}

	let { title, date, image, description, tags, href }: Props = $props();
</script>

<a class="" {href}>
	<article class="grid grid-cols-2 gap-6">
		<img
			class="aspect-[16/9] border-border object-cover border"
			src={image}
			alt={title}
		/>
		<section class='prose dark:prose-invert'>
			<h1>{title}</h1>
			<p class="text-text-secondary mt-2">{date}</p>
			<p>{description}</p>
			<BlogTags class='not-prose' {tags} />
		</section>
	</article>
</a>
