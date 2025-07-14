<script lang="ts">
	import List from '$lib/components/ui/list.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import { ChevronRight } from '@lucide/svelte';

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
		<h2 class="text-text-secondary mt-4 text-xl">
			I am Software Engineer, currently living in Victoria, British Columbia. I
			like to share both my work and my passions, whether that be my projects or
			my many hobbies and interests.
		</h2>
		<Button variant="outline" class="mt-4 pr-2" href="/blog"
			>My Blog <ChevronRight class="ml-1" />
		</Button>
	</div>
	<div class="col-start-1 mt-18 flex flex-row gap-15">
		<section>
			{@render header('Recent Posts')}
			<List class="mt-2 pl-4">
				{#each data.posts as post (post.slug)}
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
