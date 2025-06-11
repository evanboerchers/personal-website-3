<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Link from "$lib/components/ui/button/link.svelte";

</script>

<div class= 'max-w-[500px] mx-auto'>
	<h1 class='text-4xl'>Get in touch</h1>
	<div class='flex flex-col gap-4'>
		<section class='mt-4'>
			<p class='text-lg'>Happy to chat! Feel free to drop me an email </p>
			<Button class="block mt-2" href="mailto:evan.boerchers@gmail.com">evan.boerchers@gmail.com</Button>
			<p class='text-text-secondary text-sm'>No solicitation please</p>
		</section>
		<div>
			<h2 class='font-bold text-sm'>My Links</h2>
			<ul class='list-disc marker:text-accent pl-4'>
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
