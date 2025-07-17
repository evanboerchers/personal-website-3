<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { Menubar } from 'bits-ui';
	import SiteIcon from './site-icon.svelte';
	import { navItems } from '$lib/navigation';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { fade as itemTransition } from 'svelte/transition';
	import { circOut, circIn } from 'svelte/easing';
	const isCurrent = (href: string) => {
		return href === page.url.pathname;
	};
</script>

{#snippet item(href: string, label: string)}
	<Menubar.Menu>
		<Menubar.Trigger>
			<a {href} class="font-heading relative">
				<span
					class={cn(
						{ 'font-bold': isCurrent(href) },
						{ 'hover:text-accent': !isCurrent(href) }
					)}
				>
					{label}
					{#if isCurrent(href)}
						<span
							class="bg-secondary absolute -bottom-0.5 left-0 h-0.5 w-[100%]"
							in:itemTransition={{ easing: circOut, delay: 0, duration: 400 }}
							out:itemTransition={{ easing: circIn, delay: 0, duration: 400 }}
						>
						</span>
					{/if}
				</span>
			</a>
		</Menubar.Trigger>
	</Menubar.Menu>
{/snippet}

<nav class="top-0 left-0 flex w-full items-center justify-between px-4 py-3">
	<Menubar.Root class="w-full">
		<div
			class="mx-auto flex max-w-[var(--content-max-width)] justify-between px-15 py-3"
		>
			<a href="/">
				<SiteIcon />
			</a>
			<div class="flex gap-6">
				{#each navItems as navItem (navItem.label)}
					{@render item(navItem.href, navItem.label)}
				{/each}
				<ModeToggle class="ml-4" />
			</div>
		</div>
	</Menubar.Root>
</nav>
