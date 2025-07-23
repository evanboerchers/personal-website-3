<script lang="ts">
	import { Search, X } from '@lucide/svelte';

	import type { BlogSearchEntry } from '$content/blog/types';
	import Fuse from 'fuse.js';
	import Link from '../ui/link.svelte';

	interface BlogSearchProps {
		searchEntries: BlogSearchEntry[];
	}

	let { searchEntries }: BlogSearchProps = $props();

	const searchCollection = new Fuse(searchEntries, {
		keys: ['slug', 'title', 'description', 'tags'],
		includeScore: true,
		threshold: 0.3
	});

	let searchString = $state('svellmmmte');

	const searchPosts = (query: string): BlogSearchEntry[] => {
		const results = searchCollection.search(query);
		results.sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
		return results.map((result) => result.item);
	};

	let foundEntries = $derived(searchPosts(searchString));
	let hasSearch = $derived(!!searchString);
	let hasResults = $derived(foundEntries.length >= 1);
</script>

<div class="relative">
	<Search class="text-border absolute top-2.25 left-2.25 h-4 w-4" />
	<input
		class="border-border mb-6 border-1 px-8 py-1.5 text-sm"
		placeholder="Search posts..."
		bind:value={searchString}
	/>
	{#if hasSearch}
		<X
			class="text-primary hover:text-secondary absolute top-2.25 right-2.25 h-4 w-4 hover:cursor-pointer"
			onclick={() => {
				searchString = '';
			}}
		/>
		<ul
			class="bg-background border-border absolute top-10 w-full border px-4 pt-2 pb-4 shadow-xl"
		>
			{#if hasResults}
				<p class="text-on-background-variant mb-1 text-xs italic">results</p>
				{#each foundEntries as entry (entry.slug)}
					<li>
						<Link href={`/blog/${entry.slug}`}>
							{entry.title}
						</Link>
					</li>
				{/each}
			{:else}
				<p class="text-on-background-variant mb-1 text-xs italic">No matches</p>
			{/if}
		</ul>
	{/if}
</div>
