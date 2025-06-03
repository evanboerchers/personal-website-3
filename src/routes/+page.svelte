<script lang='ts'>
	import Button from "$lib/components/ui/button/button.svelte";

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
			<ul class='pl-4 mt-2 list-disc'>
				{#each data.posts as post}
				<li>
					<a href={`/${post.slug}`}>{post.title}</a>
				</li>	
				{/each}
			</ul>
		</section>
		<section>
			{@render header('More')}
			<ul class='pl-4 mt-2 list-disc'>
				<li>
					<a href="/about">About me</a>
				</li>
				<li>
					<a href="/blog">blog</a>
				</li>
				<li>
					<a href="/projects">some of my projects</a>
				</li>
				<li>
					<a href="/contact">connect with me</a>
				</li>
			</ul>
		</section>
	</div>
</div>
