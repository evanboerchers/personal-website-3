<script lang="ts">
	import type { BlogTagEnum } from '$content/blog/types';
	import BlogTags from '$lib/components/blog/blog-tags.svelte';

	export type BlogPreviewVariant = 'default' | 'stacked';

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
		variant?: BlogPreviewVariant;
	}

	let {
		title,
		date,
		image,
		description,
		tags,
		href,
		variant = 'default'
	}: BlogPreviewProps = $props();
</script>

<a {href}>
	{#if variant === 'stacked'}
		<article class="flex w-full flex-col">
			<img
				class="border-border aspect-[16/9] border object-cover"
				src={image}
				alt={title}
			/>
			<section class="mt-4">
				<h1 class="text-3xl font-[700]">{title}</h1>
				<p class="text-on-background-variant mt-2 font-bold">{date}</p>
				<p class="text-on-background-variant mt-4 italic">{description}</p>
				<BlogTags class="mt-4 " {tags} />
			</section>
		</article>
	{:else}
		<article class="grid grid-cols-2 gap-6">
			<img
				class="border-border mt-2 aspect-[16/9] border object-cover"
				src={image}
				alt={title}
			/>
			<section>
				<h1 class="text-3xl font-[700]">{title}</h1>
				<p class="text-on-background-variant mt-2 font-bold">{date}</p>
				<p class="text-on-background-variant mt-4 italic">{description}</p>
				<BlogTags class="mt-4" {tags} />
			</section>
		</article>
	{/if}
</a>
