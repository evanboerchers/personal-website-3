<script lang="ts">
	import List from '$lib/components/ui/list.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';

	let { data } = $props();
</script>

{#snippet header(title: string)}
	<h3 class="border-border border-b-1 text-lg font-bold">{title}</h3>
{/snippet}

<div class="mt-10 grid-cols-2 lg:grid">
	<div>
		<h1
			class="decoration-accent text-5xl font-bold underline underline-offset-8"
		>
			Hi Im Evan
		</h1>
		<h2 class="text-text-secondary mt-4 text-2xl">
			I am Software Engineer, currently living in Victoria, British Columbia. I
			like to share both my work and my passions, whether that be my projects or
			the many hobbies I have.
		</h2>
		<Button class="mt-4" href="/blog">My Blog</Button>
	</div>
	<div class="col-start-1 mt-8 flex flex-row gap-15">
		<section>
			{@render header('Recent Posts')}
			<List class="mt-2 pl-4">
				{#each data.posts as post}
					<li>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</li>
				{/each}
			</List>
		</section>
		<section>
			{@render header('More')}
			<List class="mt-2 pl-4">
				<li>
					<Link href="/about">About me</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/projects">Some of my projects</Link>
				</li>
				<li>
					<Link href="/contact">Connect with me</Link>
				</li>
			</List>
		</section>
	</div>
</div>
