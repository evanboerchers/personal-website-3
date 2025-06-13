<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { Menubar } from 'bits-ui';
	import SiteIcon from './site-icon.svelte';
	import { navItems } from '$lib/navigation';
	let isMobileMenuOpen = false;
</script>

{#snippet item(href: string, label: string)}
	<Menubar.Menu>
		<Menubar.Trigger class="text-bold hover:text-accent text-lg">
			<a {href}>{label}</a>
		</Menubar.Trigger>
	</Menubar.Menu>
{/snippet}

<nav
	class="top-0 left-0 flex w-full items-center justify-between px-4 py-3 shadow-sm"
>
	<!-- Logo -->
	<Menubar.Root class="w-full">
		<!-- TODO: Change to some max content width -->
		<div class="mx-auto flex max-w-[200rem] justify-between px-15 py-3">
			<a href="/">
				<SiteIcon />
			</a>
			<div class="flex gap-4">
				<ModeToggle />
				{#each navItems as navItem}
					{@render item(navItem.href, navItem.label)}
				{/each}
			</div>
		</div>
	</Menubar.Root>
</nav>
