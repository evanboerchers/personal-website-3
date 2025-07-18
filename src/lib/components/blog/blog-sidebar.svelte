<script lang="ts">
	import type { BlogTagEnum } from '$content/blog/types';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Link from '../ui/link.svelte';
	import List from '../ui/list.svelte';
	import BlogTags from './blog-tags.svelte';

	interface BlogSidebarProps {
		children?: Snippet;
		tags: {
			tag: BlogTagEnum;
			active?: boolean;
		}[];
		posts: {
			title: string;
			slug: string;
		}[];
		class?: string;
	}

	let { children, tags, posts, class: className }: BlogSidebarProps = $props();
</script>

<aside class={cn('p-4', className)}>
	<input
		class="border-border mb-6 border-1 px-4 py-1"
		placeholder="Search titles..."
	/>
	<div class="mb-4">
		<h2 class="border-border mb-4 border-b-1 pb-0.5 font-semibold">
			Recent Posts
		</h2>
		<List class="pl-4">
			{#each posts as post (post.slug)}
				<li>
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</li>
			{/each}
		</List>
	</div>
	<div class="mb-4">
		<h2 class="border-border mb-4 border-b-1 pb-0.5 font-semibold">Tags</h2>
		<BlogTags interactive={true} {tags} />
	</div>
	<div>
		<h2 class="border-border mb-4 border-b-1 pb-0.5 font-semibold">
			More Links
		</h2>
		<List class="pl-4">
			<li>
				<Link href="/blog">All Posts</Link>
			</li>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/about">About Me</Link>
			</li>
		</List>
	</div>
	{@render children?.()}
</aside>
