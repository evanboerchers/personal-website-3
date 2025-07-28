<script lang="ts">
	import type { BlogSearchEntry, BlogTagEnum } from '$content/blog/types';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Link from '../ui/link.svelte';
	import List from '../ui/list.svelte';
	import BlogTags from './blog-tags.svelte';
	import BlogSearch from './blog-search.svelte';
	import { base } from '$app/paths';

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
		searchEntries: BlogSearchEntry[];
		class?: string;
	}

	let {
		children,
		tags,
		posts,
		searchEntries,
		class: className
	}: BlogSidebarProps = $props();
</script>

<aside class={cn(className)}>
	<div class="mb-4">
		<BlogSearch {searchEntries} />
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
				<Link href={`${base}/blog`}>All Posts</Link>
			</li>
			<li>
				<Link href={`${base}/`}>Home</Link>
			</li>
			<li>
				<Link href={`${base}/about`}>About Me</Link>
			</li>
		</List>
	</div>
	{@render children?.()}
</aside>
