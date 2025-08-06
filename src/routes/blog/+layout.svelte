<script lang="ts">
	import BlogSidebar from '$lib/components/blog/blog-sidebar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/state';
	import { sidebarStore } from '$lib/stores/sidebar.svelte';
	import { breakpoint, type Breakpoint } from '$lib/stores/breakpoints';

	let { children, data } = $props();
	let currentBreakpoint = $state<Breakpoint>('sm');

	breakpoint.subscribe((value) => {
		currentBreakpoint = value;
	});

	let isMobileLayout = $derived(['xs', 'sm'].includes(currentBreakpoint));
</script>

{#if isMobileLayout}
	<div class="relative">
		{#if sidebarStore.open}
			<div
				class="bg-background absolute h-full w-full"
				in:fly={{ easing: quintInOut, x: -100, duration: 400 }}
				out:fly={{ easing: quintInOut, x: -100, duration: 400 }}
			>
				<div class="sticky top-6 p-4">
					<div class="flex flex-col items-end">
						<Button
							class="mb-4 rounded-full p-2"
							variant="outline"
							onclick={() => (sidebarStore.open = !sidebarStore.open)}
							title={sidebarStore.open ? 'Close sidebar' : 'Open sidebar'}
						>
							<ChevronLeft class="h-5 w-5" />
						</Button>
					</div>
					<BlogSidebar
						class="p-4"
						tags={page.data.tags}
						posts={data.posts}
						searchEntries={data.searchEntries}
					/>
				</div>
			</div>
		{:else}
			<div
				class="absolute h-full"
				in:fly={{ easing: quintInOut, x: -100, duration: 300 }}
				out:fly={{ easing: quintInOut, x: -100, duration: 300 }}
			>
				<div class="sticky top-6">
					<Button
						class="xs:right-2 absolute -right-2 mb-4 overflow-hidden rounded-r-full p-2 pl-6 sm:right-6"
						variant="default"
						onclick={() => (sidebarStore.open = !sidebarStore.open)}
						title={sidebarStore.open ? 'Close sidebar' : 'Open sidebar'}
					>
						<ChevronRight class="h-5 w-5" />
					</Button>
				</div>
			</div>
		{/if}
		<div class="w-full px-5">
			{@render children()}
		</div>
	</div>
{:else}
	<div
		class={cn(
			'grid grid-rows-[100%] gap-4 transition-[grid-template-columns] duration-300',
			sidebarStore.open
				? 'grid-cols-[var(--sidebar-width)_minmax(0,1fr)] xl:grid-cols-[var(--sidebar-width)_minmax(0,1fr)_var(--sidebar-width)]'
				: 'grid-cols-[40px_minmax(0,1fr)] xl:grid-cols-[40px_minmax(0,1fr)_40px]'
		)}
	>
		<div class="sticky top-6 flex flex-col items-end self-start px-4">
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
					in:fly={{ easing: quintInOut, x: -10, duration: 300 }}
					out:fly={{ easing: quintInOut, x: -10, duration: 300 }}
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
