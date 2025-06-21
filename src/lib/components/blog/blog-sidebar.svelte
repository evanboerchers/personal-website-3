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
		<input class='mb-6 border-1 border-border py-1 px-4' placeholder="Search titles..." />
		<div class='mb-4'>
			<h2 class='font-semibold border-b-1 mb-4 pb-0.5 border-border'>Recent Posts</h2>
			<List class='pl-4'>
				{#each posts as post}
				<li>
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</li>
				{/each}
			</List>
		</div>
		<div class='mb-4'>
			<h2 class='mb-4 font-semibold border-b-1 pb-0.5 border-border'>Tags</h2>
			<BlogTags {tags} />
		</div>
		<div>
			<h2 class='mb-4 font-semibold border-b-1 pb-0.5 border-border'>More Links</h2>
			<List class='pl-4'>
				<li>
					<Link href={'/blog'}>All Posts</Link>
				</li>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/about'}>About Me</Link>
				</li>
			</List>
		</div>
</aside>
