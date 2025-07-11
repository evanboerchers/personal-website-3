<script lang="ts">
	import AboutMe from '$content/about/about.svx';
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import { myLinks } from '$lib/contact';
</script>

<article
	class="prose dark:prose-invert mx-auto max-w-[var(--article-max-width-standard)]"
>
	<h1>About Me</h1>
	<AboutMe />
	<div class="not-prose">
		<h2 class="text-lg font-bold">More</h2>
		<List class="marker:text-accent list-disc pl-5">
			<li>
				<Link href="/contact">Contact Me</Link>
			</li>
			<li>
				<Link href="/blog">My Blog</Link>
			</li>
			{#each myLinks as item (item.label)}
				<li>
					<Link href={item.href}>{item.label}</Link>
				</li>
			{/each}
		</List>
		<div />
	</div>
</article>
