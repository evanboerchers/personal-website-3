<script lang="ts">
	import type { BlogTagEnum } from '$content/blog/types';
	import BlogTags from '$lib/components/blog/blog-tags.svelte';

	interface BlogPreviewProps {
		title: string;
		image: string;
		date: string;
		description: string;
		tags: {
			tag: BlogTagEnum;
			active?: boolean;
		}[];
		href: string;
	}

	let { title, date, image, description, tags, href }: BlogPreviewProps =
		$props();
</script>

<a class="" {href}>
	<article class="grid grid-cols-2 gap-6">
		<img
			class="border-border aspect-[16/9] border object-cover"
			src={image}
			alt={title}
		/>
		<section class="prose dark:prose-invert">
			<h1 class="text-3xl font-[700]">{title}</h1>
			<p class="text-text-secondary mt-2">{date}</p>
			<p>{description}</p>
			<BlogTags class="not-prose" {tags} />
		</section>
	</article>
</a>
