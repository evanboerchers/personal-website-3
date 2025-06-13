<script lang="ts">
	import List from '$lib/components/ui/list.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';

	let { data } = $props();
</script>

{#snippet header(title: string)}
	<h3 class="border-border border-b-1 text-lg font-bold">{title}</h3>
{/snippet}

<div class="mt-10">
	<h1 class="text-5xl">Hi Im Evan</h1>
	<h2 class="text-xl">
		I am Software Engineer, Fitness Enthusiast and Coffee Addict. This is the
		place where I share what my work and interests.
	</h2>
	<Button href="/blog">My Blog</Button>
	<div class="flex flex-row gap-15 mt-4">
		<section>
			{@render header('Recent Posts')}
			<List class="mt-2 pl-4">
				{#each data.posts as post}
					<li>
						<Link href={`/${post.slug}`}>{post.title}</Link>
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
