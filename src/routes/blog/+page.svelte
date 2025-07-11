<script lang="ts">
	import { BlogTagEnum } from '$content/blog/types.js';
	import BlogPreview from '$lib/components/blog/blog-preview.svelte';
	import { formatDate } from '$lib/utils.js';

	const { data } = $props();
</script>

<div class="w-full">
	<ul class="mx-auto max-w-[var(--article-max-width-standard)]">
		{#each data.posts as post (post.slug)}
			<li class="mb-10">
				<BlogPreview
					title={post.title}
					image={post.image}
					date={formatDate(post.date)}
					description={post.description}
					tags={post.tags.map((tag: BlogTagEnum) => {
						return { tag };
					})}
					href="/blog/{post.slug}"
				/>
			</li>
		{/each}
	</ul>
</div>
