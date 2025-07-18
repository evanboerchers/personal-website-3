<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';

	let { children, data } = $props();

	let sidebarOpen = $state(false);
</script>

<div
	class={cn(
		'my-20 grid grid-rows-[100%]',
		sidebarOpen
			? 'grid-cols-[var(--sidebar-width)_1fr] lg:grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]'
			: 'grid-cols-[auto_1fr] lg:grid-cols-[20_1fr_20]'
	)}
>
	<div class="sticky top-20 self-start">
		<Button class="" onclick={() => (sidebarOpen = !sidebarOpen)}>
			{#if sidebarOpen}
				<ChevronLeft />
			{:else}
				<ChevronRight />
			{/if}
		</Button>
		{#if sidebarOpen}
			<BlogSidebar tags={data.tags} posts={data.posts}></BlogSidebar>
		{/if}
	</div>
	<div class="w-full">
		{@render children()}
	</div>
	<div></div>
</div>
