<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import { myLinks } from '$lib/contact';
</script>

<div class="mx-auto max-w-[var(--article-max-width-standard)]">
	<h1 class="text-4xl">Get in touch</h1>
	<div class="mt-4 grid grid-cols-[1fr_1fr] grid-rows-[100%] gap-12">
		<section>
			<p class="text-lg">Happy to chat! Feel free to drop me an email.</p>

			<!-- Wrap button and disclaimer in a container with inline alignment -->
			<div class="mt-6 inline-flex flex-col items-center text-center">
				<Button href="mailto:evan.boerchers@gmail.com">
					evan.boerchers@gmail.com
				</Button>
				<p class="text-text-secondary mt-1 text-sm">No solicitation please</p>
			</div>
		</section>
		<div>
			<h2 class="text-sm font-bold">My Links</h2>
			<List class="pl-4">
				{#each myLinks as item (item.label)}
					<li>
						<Link href={item.href}>{item.label}</Link>
					</li>
				{/each}
			</List>
		</div>
	</div>
</div>
