<script lang="ts">
	import Link from '../ui/link.svelte';
	import List from '../ui/list.svelte';
	import BlogTags from './blog-tags.svelte';

	interface BlogSidebarProps {
		tags: string[];
		posts: {
			title: string;
			slug: string;
		}[];
	}

	let { tags, posts }: BlogSidebarProps = $props();
</script>

<aside>
	<input placeholder="Search posts" />
	<h2>Latest Posts</h2>
	<List>
		{#each posts as post}
			<li>
				<Link href={`/blog/${post.slug}`}>{post.title}</Link>
			</li>
		{/each}
	</List>
	<h2>Tags</h2>
	<BlogTags {tags} />
</aside>
