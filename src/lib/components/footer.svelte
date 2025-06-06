<script lang="ts">
	import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/button/link.svelte';
	import { myLinks } from '$lib/contact';
</script>

<footer class="bg-secondary fixed left-0 bottom-0 w-full p-20 flex flex-row gap-20">
	<div>
		<h3 class="font-bold">Pages</h3>
		<ul class="list-disc marker:text-accent">
			{#each navItems as item}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3 class="font-bold">Links</h3>
		<ul class="list-disc marker:text-accent">
			{#each myLinks as item}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<p>Evan Boerchers @ 2025</p>
	</div>
</footer>
