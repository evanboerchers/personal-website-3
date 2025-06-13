<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';
</script>

<div class="mx-auto max-w-[500px]">
	<h1 class="text-4xl">Get in touch</h1>
	<div class="flex flex-col gap-4">
		<section class="mt-4">
			<p class="text-lg">Happy to chat! Feel free to drop me an email</p>
			<Button class="mt-2 block" href="mailto:evan.boerchers@gmail.com"
				>evan.boerchers@gmail.com</Button
			>
			<p class="text-text-secondary text-sm">No solicitation please</p>
		</section>
		<div>
			<h2 class="text-sm font-bold">My Links</h2>
			<ul class="marker:text-accent list-disc pl-4">
				<li>
					<Link>LinkedIn</Link>
				</li>
				<li>
					<Link>Github</Link>
				</li>
			</ul>
		</div>
	</div>
</div>
