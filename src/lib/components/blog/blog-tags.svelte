<script lang="ts">
	import clsx from 'clsx';
	import BlogTag from './blog-tag.svelte';
	import type { BlogTagEnum } from '$content/blog/types';

	interface BlogTagProps {
		tags: {
			tag: BlogTagEnum;
			active?: boolean;
		}[];
		class?: string;
		interactive?: boolean;
	}

	let { class: className, tags, interactive }: BlogTagProps = $props();
</script>

<ul class={clsx('flex flex-wrap gap-2', className)}>
	{#each tags as tag}
		<li>
			{#if interactive}
				<a href={tag.active ? '/blog' : `/blog?tag=${tag.tag}`}>
					<BlogTag {...tag} />
				</a>
			{:else}
				<BlogTag {...tag} />
			{/if}
		</li>
	{/each}
</ul>
