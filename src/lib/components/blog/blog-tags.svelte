<script lang="ts">
	import clsx from 'clsx';
import BlogTag from './blog-tag.svelte';

	let { class: className, tags }: {class: string; tags: string[] } = $props();
</script>

<ul class={clsx(className, "flex flex-wrap gap-2")}>
	{#each tags as tag}
		<li>
			<BlogTag {tag} />
		</li>
	{/each}
</ul>
