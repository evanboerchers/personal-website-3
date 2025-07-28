<script lang="ts">
	import BlogTags from '$lib/components/blog/blog-tags.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import portrait from '$assets/portrait.webp';
	import { formatDate } from '$lib/utils';
	import type { BlogPostData } from '$content/blog/types';
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';
	interface BlogLayoutProps extends BlogPostData {
		children: Snippet;
	}
	const { title, date, tags, image, children }: BlogLayoutProps = $props();
	const formattedDate = formatDate(date);
</script>

<article id="blog" class="prose dark:prose-invert mx-auto">
	<h1 class="mb-2">{title}</h1>
	<p class="mb-2 font-semibold">{formattedDate}</p>
	<img
		class="aspect-[16/9] w-full border-1 object-cover"
		src={image}
		alt="blog header"
	/>
	{@render children?.()}
	<aside class="mt-6 inline-block">
		<div class="flex items-center gap-6 border-y-2">
			<img class="w-[100px] rounded-full" src={portrait} alt="Evan Boerchers" />
			<div>
				<p class="mb-2">
					I am Evan Boerchers, a Software Engineer from Victoria, British
					Columbia. I love writing about my knowledge and passions.
				</p>
				<a class="mb-4 inline-block" href={`${base}/about`}>More about me</a>
			</div>
		</div>
		<div class="not-prose mt-4">
			<p class="text-xl font-semibold">Blog Tags</p>
			<BlogTags
				class="mt-4"
				tags={tags.map((tag) => {
					return { tag };
				})}
			/>
			<Link class="mt-8 inline-block" href="#app">Back to Top</Link>
		</div>
	</aside>
</article>
