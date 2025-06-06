<script lang="ts">
	import BlogPreview from '$lib/components/blog/blog-preview.svelte';

	const { data } = $props();
</script>

<div class="w-full">
	<ul class="max-w-[52rem] mx-auto">
		{#each data.posts as post}
			<li class="mb-10">
				<BlogPreview
					title={post.title}
					image={post.image}
					date={post.date}
					description={post.description}
					tags={post.tags}
					href="/blog/{post.slug}"
				/>
			</li>
		{/each}
	</ul>
</div>
