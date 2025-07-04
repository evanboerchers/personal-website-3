<script lang="ts">
	import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/link.svelte';
	import { myLinks } from '$lib/contact';
	import List from '$lib/components/ui/list.svelte';
</script>

<footer class="bg-secondary flex w-full flex-row gap-20 p-20">
	<div>
		<h3 class="font-bold">Pages</h3>
		<List class="pl-5">
			{#each navItems as item}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</List>
	</div>
	<div>
		<h3 class="font-bold">Links</h3>
		<List class="marker:text-accent list-disc pl-5">
			{#each myLinks as item}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</List>
	</div>
	<div>
		<p>Evan Boerchers @ 2025</p>
	</div>
</footer>
