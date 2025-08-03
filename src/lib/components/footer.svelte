<script lang="ts">
	import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/link.svelte';
	import { myLinks } from '$lib/contact';
	import List from '$lib/components/ui/list.svelte';
</script>

{#snippet pages()}
	<div>
		<h3 class="font-bold">Pages</h3>
		<List class="mt-2 pl-5">
			{#each navItems as item (item.label)}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</List>
	</div>
{/snippet}

{#snippet links()}
	<div>
		<h3 class="font-bold">Links</h3>
		<List class="mt-2 list-disc pl-5">
			{#each myLinks as item (item.label)}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</List>
	</div>
{/snippet}

{#snippet details()}
	<div class="max-w-[16rem] text-sm">
		<p class="italic">©2025 Evan Boerchers</p>
		<p class="mt-2">
			Built using <Link href="https://svelte.dev/">SvelteKit</Link> and hosted with
			<Link href="https://www.cloudflare.com/">Cloudflare</Link>. Source code
			available on <Link
				href="https://github.com/evanboerchers/personal-website-3">Github</Link
			>
		</p>
	</div>
{/snippet}

<footer class="bg-primary-variant text-on-primary">
	<div class="mx-auto max-w-[var(--content-max-width)]">
		<div class="hidden flex-row justify-between p-16 sm:flex md:p-20">
			<div class="flex flex-row gap-10 md:gap-20">
				{@render pages()}
				{@render links()}
			</div>
			{@render details()}
		</div>
		<div class="flex flex-col justify-between p-8 sm:hidden">
			<div class="border-border border-b p-6">
				{@render pages()}
			</div>
			<div class="border-border border-b p-6">
				{@render links()}
			</div>
			<div class="p-6">
				{@render details()}
			</div>
		</div>
	</div>
</footer>
