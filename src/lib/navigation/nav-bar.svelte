<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { Menubar } from 'bits-ui';
	import SiteIcon from './site-icon.svelte';
	let isMobileMenuOpen = false;

	export interface NavItem {
		label: string;
		href: string;
	}

	const { navItems }: {navItems: NavItem[]} = $props()
</script>

{#snippet item(href: string, label: string)}
			<Menubar.Menu>
				<Menubar.Trigger class='text-lg text-bold hover:text-accent'>
					<a {href}>{label}</a>
				</Menubar.Trigger>
			</Menubar.Menu>
{/snippet}

<nav class="w-full top-0 left-0 px-4 py-3 flex justify-between items-center shadow-sm">
	<!-- Logo -->
	<Menubar.Root class="w-full">
		<!-- TODO: Change to some max content width -->
		<div class='flex max-w-[200rem] mx-auto justify-between py-3 px-15'>
			<SiteIcon/>
			<div class="flex gap-4">
				<ModeToggle />
				{#each navItems as navItem}
				{@render item(navItem.href, navItem.label)}
				{/each}
			</div>
		</div>
	</Menubar.Root>
</nav>
