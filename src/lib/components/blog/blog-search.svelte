<script lang="ts">
	import { Search } from '@lucide/svelte';

	import type { BlogSearchEntry } from '$content/blog/types';
	import Fuse from 'fuse.js';

	interface BlogSearchProps {
		searchEntries: BlogSearchEntry[];
	}

	let { searchEntries }: BlogSearchProps = $props();

	const searchCollection = new Fuse(searchEntries, {
		keys: ['slug', 'title', 'description', 'tags'],
		includeScore: true,
		threshold: 0.3
	});

	let searchString = $state('');

	const searchPosts = (query: string): BlogSearchEntry[] => {
		const results = searchCollection.search(query);
		results.sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
		return results.map((result) => result.item);
	};

	let foundEntries = $derived(searchPosts(searchString));
</script>

<div>
	<div class="relative">
		<Search class="text-border absolute top-2.25 left-2.25 h-4 w-4" />
		<input
			class="border-border mb-6 border-1 px-8 py-1.5 text-sm"
			placeholder="Search posts..."
			bind:value={searchString}
		/>
	</div>
	<ul>
		{#each foundEntries as entry (entry.slug)}
			<li>
				{entry.slug}
			</li>
		{/each}
	</ul>
</div>
