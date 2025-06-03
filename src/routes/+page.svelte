<script lang='ts'>
	import Button from "$lib/components/ui/button/button.svelte";
	import Link from "$lib/components/ui/button/link.svelte";

	let { data } = $props()
</script>

{#snippet header(title: string)}
<h3 class='text-lg font-bold border-border border-b-1'>{title}</h3>
{/snippet}

<div class="mt-10 flex flex-col gap-4">
	<h1 class="text-5xl">
		Hi Im Evan 
	</h1>
	<h2 class="text-xl">
		I am Software Engineer, Fitness Enthusiast and Coffee Addict. This is the place where I share what my work and interests.
	</h2>
	<Button href='/blog'> My Blog </Button>
	<div class="flex flex-row gap-15">
		<section>
			{@render header('Recent Posts')}
			<ul class='pl-4 mt-2 list-disc marker:text-accent'>
				{#each data.posts as post}
				<li>
					<Link href={`/${post.slug}`}>{post.title}</Link>
				</li>	
				{/each}
			</ul>
		</section>
		<section>
			{@render header('More')}
			<ul class='pl-4 mt-2 list-disc marker:text-accent'>
				<li>
					<Link href="/about">About me</Link>
				</li>
				<li>
					<Link href="/blog">blog</Link>
				</li>
				<li>
					<Link href="/projects">some of my projects</Link>
				</li>
				<li>
					<Link href="/contact">connect with me</Link>
				</li>
			</ul>
		</section>
	</div>
</div>
