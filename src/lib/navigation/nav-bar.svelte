<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { Menubar } from 'bits-ui';
	let isMobileMenuOpen = false;

	export interface NavItem {
		label: string;
		href: string;
	}

	const { navItems }: {navItems: NavItem[]} = $props()
</script>

{#snippet item(href: string, label: string)}
			<Menubar.Menu>
				<Menubar.Trigger>
					<a {href}>{label}</a>
				</Menubar.Trigger>
			</Menubar.Menu>
{/snippet}

<nav class="w-full top-0 left-0 px-4 py-3 flex justify-between items-center shadow-sm">
	<!-- Logo -->
	<Menubar.Root class="flex">
        <div class="text-xl font-bold text-blue-600">EB</div>
		<div class="flex gap-4">
			<ModeToggle />
			{#each navItems as navItem}
			{@render item(navItem.href, navItem.label)}
			{/each}
		</div>
	</Menubar.Root>
</nav>
