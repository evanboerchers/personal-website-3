<script lang="ts">
	import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/link.svelte';
	import { myLinks } from '$lib/contact';
	import List from '$lib/components/ui/list.svelte';
</script>

<footer class="bg-primary-variant text-on-primary">
	<div class="mx-auto max-w-[var(--content-max-width)]">
		<div class="flex flex-row justify-between p-20">
			<div class="flex flex-row gap-20">
				<div>
					<h3 class="font-bold">Pages</h3>
					<List class="pl-5">
						{#each navItems as item (item.label)}
							<li>
								<Link href={item.href}>{item.label}</Link>
							</li>
						{/each}
					</List>
				</div>
				<div>
					<h3 class="font-bold">Links</h3>
					<List class="list-disc pl-5">
						{#each myLinks as item (item.label)}
							<li>
								<Link href={item.href}>{item.label}</Link>
							</li>
						{/each}
					</List>
				</div>
			</div>
			<div class="max-w-[250px] text-sm">
				<p class="italic">©2025 Evan Boerchers</p>
				<p class="mt-2">
					Built using <Link href="https://svelte.dev/">SvelteKit</Link> and hosted
					with <Link href="https://www.cloudflare.com/">Cloudflare</Link>.
					Source code available on <Link
						href="https://github.com/evanboerchers/personal-website-3"
						>Github</Link
					>
				</p>
			</div>
		</div>
	</div>
</footer>
