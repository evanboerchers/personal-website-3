<script lang='ts'>
	import Hero from "$lib/sections/hero.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="mt-10 flex flex-col gap-4">
	<h1 class="text-5xl">
		Hi Im Evan 
	</h1>
	<h2 class="text-xl">
		I am Software Engineer, Fitness Enthusiast and Coffee Addict. This is the place where I share what my work and interests.
	</h2>
	<Button href='/blog'> My Blog </Button>
	<div class="flex flex-row gap-6">
		<div>
			<h3>recent posts</h3>
		</div>
	<div>
			<h3>More</h3>
			<a href="/about">About me</a>
			<a href="/projects">Projects</a>
			<a href="/projects">Contact</a>
		</div>
	</div>
</div>
