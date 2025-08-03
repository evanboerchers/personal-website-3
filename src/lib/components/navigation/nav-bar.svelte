<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import SiteIcon from './site-icon.svelte';
	import { navItems } from '$lib/navigation';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { fade as itemTransition, slide } from 'svelte/transition';
	import { circOut, circIn } from 'svelte/easing';
	import { base } from '$app/paths';
	import Button from '../ui/button/button.svelte';
	import { Menu, X } from '@lucide/svelte';

	interface NavbarProps {
		class?: string;
	}

	let { class: className }: NavbarProps = $props();

	const isCurrent = (href: string) => {
		return href === page.url.pathname;
	};

	let menuOpen = $state(false);
</script>

{#snippet item(href: string, label: string)}
	<div>
		<a {href} class="font-heading relative">
			<span
				class={cn(
					{ 'font-bold': isCurrent(href) },
					{ 'hover:text-secondary': !isCurrent(href) }
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
	</div>
{/snippet}

{#snippet menuItem(href: string, label: string)}
	<div class="pr-2">
		<a
			{href}
			class="font-heading text-on-background relative block text-right text-2xl"
		>
			<span
				class={cn(
					{ 'font-bold': isCurrent(href) },
					{ 'hover:text-secondary': !isCurrent(href) }
				)}
			>
				{label}
				{#if isCurrent(href)}
					<span
						class="bg-secondary absolute right-0 -bottom-0.5 h-0.5 w-[100%]"
						in:itemTransition={{ easing: circOut, delay: 0, duration: 400 }}
						out:itemTransition={{ easing: circIn, delay: 0, duration: 400 }}
					></span>
				{/if}
			</span>
		</a>
	</div>
{/snippet}

{#snippet topContent()}
	<div class="w-full">
		<div
			class="mx-auto flex max-w-[var(--content-max-width)] justify-between px-6 py-3 md:px-14"
		>
			<a href={`${base}/`}>
				<SiteIcon />
			</a>
			<div class="hidden items-center gap-6 sm:flex">
				{#each navItems as navItem (navItem.label)}
					{@render item(navItem.href, navItem.label)}
				{/each}
				<ModeToggle class="ml-4" />
			</div>

			<div class="flex items-center gap-4 sm:hidden">
				<ModeToggle />
				<Button
					title={menuOpen ? 'Close menu' : 'Open menu'}
					variant="outline"
					class="relative rounded-full p-2"
					onclick={() => (menuOpen = !menuOpen)}
				>
					{#if !menuOpen}
						<Menu class="h-6 w-6" />
					{:else}
						<X class="h-6 w-6" />
					{/if}
				</Button>
			</div>
		</div>
	</div>
{/snippet}

{#snippet mobileMenu()}
	<div
		class="bg-background border-border w-full border-b px-6 pb-4 sm:hidden"
		in:slide={{ easing: circIn, axis: 'y', duration: 200 }}
		out:slide={{ easing: circIn, axis: 'y', duration: 200 }}
	>
		<div class="flex flex-col items-end gap-3 text-right">
			{#each navItems as navItem (navItem.label)}
				{@render menuItem(navItem.href, navItem.label)}
			{/each}
		</div>
	</div>
{/snippet}

<nav class={cn(className, 'px-4 py-3')}>
	<div class="relative flex w-full items-center justify-between">
		{@render topContent()}
	</div>
	{#if menuOpen}
		{@render mobileMenu()}
	{/if}
</nav>
