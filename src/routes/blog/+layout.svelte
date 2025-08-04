<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/state';
	import { sidebarStore } from '$lib/stores/sidebar.svelte';

	let { children, data } = $props();
	let isMobileLayout = false;
</script>

{#if isMobileLayout}
	<div class="relative">
		{#if sidebarStore.open}
			<div
				class="absolute h-full w-full"
				in:fly={{ easing: quintInOut, x: 10, duration: 300 }}
				out:fly={{ easing: quintInOut, x: 10, duration: 300 }}
			>
				<Button
					class="mb-4 rounded-full p-2"
					variant="outline"
					onclick={() => (sidebarStore.open = !sidebarStore.open)}
					title={sidebarStore.open ? 'Close sidebar' : 'Open sidebar'}
				>
					<ChevronLeft class="h-5 w-5" />
				</Button>
				<BlogSidebar
					tags={page.data.tags}
					posts={data.posts}
					searchEntries={data.searchEntries}
				/>
			</div>
		{:else}
			<div class="absolute top-0 left-0">
				<Button
					class="mb-4 rounded-full p-2"
					variant="outline"
					onclick={() => (sidebarStore.open = !sidebarStore.open)}
					title={sidebarStore.open ? 'Close sidebar' : 'Open sidebar'}
				>
					<ChevronRight class="h-5 w-5" />
				</Button>
			</div>
		{/if}
		<div class="w-full px-5">
			{@render children()}
		</div>
	</div>
{:else}
	<div
		class={cn(
			'grid grid-rows-[100%] transition-[grid-template-columns] duration-300',
			sidebarStore.open
				? 'grid-cols-[250px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)_250px]'
				: 'grid-cols-[40px_minmax(0,1fr)] lg:grid-cols-[40px_minmax(0,1fr)_40px]'
		)}
	>
		<div class="sticky top-5 flex flex-col items-end self-start p-4">
			<Button
				class="mb-4 rounded-full p-2"
				variant="outline"
				onclick={() => (sidebarStore.open = !sidebarStore.open)}
				title={sidebarStore.open ? 'Close sidebar' : 'Open sidebar'}
			>
				{#if sidebarStore.open}
					<ChevronLeft class="h-5 w-5" />
				{:else}
					<ChevronRight class="h-5 w-5" />
				{/if}
			</Button>

			{#if sidebarStore.open}
				<div
					in:fly={{ easing: quintInOut, x: 10, duration: 300 }}
					out:fly={{ easing: quintInOut, x: 10, duration: 300 }}
				>
					<BlogSidebar
						tags={page.data.tags}
						posts={data.posts}
						searchEntries={data.searchEntries}
					/>
				</div>
			{/if}
		</div>
		<div class="w-full px-5">
			{@render children()}
		</div>
		<div></div>
	</div>
{/if}
