<script lang="ts">
	import BlogPreview from '$lib/components/blog/blog-preview.svelte';
	import { formatDate } from '$lib/utils.js';

	const { data } = $props();
</script>

<div class="w-full">
	<ul class="mx-auto max-w-[52rem]">
		{#each data.posts as post}
			<li class="mb-10">
				<BlogPreview
					title={post.title}
					image={post.image}
					date={formatDate(post.date)}
					description={post.description}
					tags={post.tags}
					href="/blog/{post.slug}"
				/>
			</li>
		{/each}
	</ul>
</div>
