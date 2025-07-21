<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/state';

	let { children, data } = $props();
	let sidebarOpen = $state(true);
</script>

<div
	class={cn(
		'grid grid-rows-[100%] transition-[grid-template-columns] duration-300',
		sidebarOpen
			? 'grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_250px]'
			: 'grid-cols-[40px_1fr] lg:grid-cols-[40px_1fr_40px]'
	)}
>
	<div class="sticky top-5 flex flex-col items-end self-start p-4">
		<Button
			class="mb-4 rounded-full p-2"
			variant="outline"
			onclick={() => (sidebarOpen = !sidebarOpen)}
		>
			{#if sidebarOpen}
				<ChevronLeft class="h-5 w-5" />
			{:else}
				<ChevronRight class="h-5 w-5" />
			{/if}
		</Button>

		{#if sidebarOpen}
			<div
				in:fly={{ easing: quintInOut, x: 10, duration: 300 }}
				out:fly={{ easing: quintInOut, x: 10, duration: 300 }}
			>
				<BlogSidebar tags={page.data.tags} posts={data.posts} />
			</div>
		{/if}
	</div>
	<div class="w-full px-5">
		{@render children()}
	</div>
	<div></div>
</div>
