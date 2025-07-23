<script lang="ts">
	import { BlogTagEnum, type BlogPostData } from '$content/blog/types';
	import { formatDate } from '$lib/utils';
	import BlogPreview from '$lib/components/blog/blog-preview.svelte';

	interface BlogListProps {
		posts: BlogPostData[];
		tags: {
			tag: BlogTagEnum;
			active: boolean;
		}[];
	}

	let { posts, tags }: BlogListProps = $props();

	const mergeTags = (
		postTag: BlogTagEnum[]
	): {
		tag: BlogTagEnum;
		active: boolean;
	}[] => {
		const activeMap = tags.reduce((acc, { tag, active }) => {
			acc.set(tag, active);
			return acc;
		}, new Map<BlogTagEnum, boolean>());
		return postTag.map((tag) => {
			return {
				tag,
				active: activeMap.get(tag) ?? false
			};
		});
	};
</script>

<div class="w-full">
	<ul class="mx-auto max-w-[var(--article-max-width-standard)]">
		{#each posts as post (post.slug)}
			<li class="mb-16">
				<BlogPreview
					title={post.title}
					image={post.image}
					date={formatDate(post.date)}
					description={post.description}
					tags={mergeTags(post.tags)}
					href="/blog/{post.slug}"
				/>
			</li>
		{/each}
	</ul>
</div>
