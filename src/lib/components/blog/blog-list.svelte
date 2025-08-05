<script lang="ts">
	import { BlogTagEnum, type BlogPostData } from '$content/blog/types';
	import { formatDate } from '$lib/utils';
	import BlogPreview, {
		type BlogPreviewVariant
	} from '$lib/components/blog/blog-preview.svelte';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	interface BlogListProps {
		posts: BlogPostData[];
		tags: {
			tag: BlogTagEnum;
			active: boolean;
		}[];
	}

	let { posts, tags }: BlogListProps = $props();
	let variant = $state<BlogPreviewVariant>('stacked');

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

	function getVariant(width: number): BlogPreviewVariant {
		return width > 640 ? 'default' : 'stacked';
	}

	function updateVariant(width: number) {
		variant = getVariant(width);
	}

	let width = 0;

	let blogContainerEl: HTMLElement | null = null;

	onMount(() => {
		if (!blogContainerEl) return;

		const observer = new ResizeObserver(([entry]) => {
			const newWidth = entry.contentRect.width;
			if (newWidth !== width) {
				width = newWidth;
				updateVariant(width);
			}
		});
		observer.observe(blogContainerEl);
		return () => observer.disconnect();
	});
</script>

<div class="w-full" bind:this={blogContainerEl}>
	<ul class="mx-auto max-w-[var(--article-max-width)]">
		{#each posts as post (post.slug)}
			<li class="mb-16">
				<BlogPreview
					{variant}
					title={post.title}
					image={post.image}
					date={formatDate(post.date)}
					description={post.description}
					tags={mergeTags(post.tags)}
					href="{base}/blog/{post.slug}"
				/>
			</li>
		{/each}
	</ul>
</div>
