<script lang="ts">
	import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/link.svelte';
	import { myLinks } from '$lib/contact';
</script>

<footer
	class="bg-secondary fixed bottom-0 left-0 flex w-full flex-row gap-20 p-20"
>
	<div>
		<h3 class="font-bold">Pages</h3>
		<ul class="marker:text-accent list-disc pl-5">
			{#each navItems as item}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3 class="font-bold">Links</h3>
		<ul class="marker:text-accent list-disc pl-5">
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
