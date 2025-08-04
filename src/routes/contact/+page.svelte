<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import { myLinks } from '$lib/contact';
</script>

<div class="mx-auto max-w-[var(--article-max-width)]">
	<PageHeading class="text-4xl">Get in touch</PageHeading>
	<div
		class="mt-4 sm:grid sm:grid-cols-[1fr_1fr] sm:grid-rows-[100%] sm:gap-12"
	>
		<section>
			<p class="text-lg">Happy to chat! Feel free to drop me an email.</p>
			<div class="mt-6 inline-flex flex-col items-center text-center">
				<Button variant="outline" href="mailto:evan.boerchers@gmail.com">
					evan.boerchers@gmail.com
				</Button>
				<p class="text-on-background-variant mt-2 text-xs italic">
					No solicitation please...
				</p>
			</div>
		</section>
		<div class="mt-4 p-2 sm:mt-0">
			<h2 class="text-sm font-bold">My Links</h2>
			<List class="mt-2 pl-4">
				{#each myLinks as item (item.label)}
					<li>
						<Link href={item.href}>{item.label}</Link>
					</li>
				{/each}
			</List>
		</div>
	</div>
</div>
