<script lang="ts">
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import Prose from '$lib/components/ui/typography/prose.svelte';
	import type { Snippet } from 'svelte';

	interface ProjectLayoutProps {
		title: string;
		children: Snippet;
		links: {
			label: string;
			href: string;
		}[];
		image: {
			src: string;
			alt: string;
		};
	}

	let { title, children, links, image }: ProjectLayoutProps = $props();
</script>

<section class="mt-8">
	<Prose>
		<h2 class="mb-0">{title}</h2>
		<div class="flex flex-row">
			<div>
				{@render children?.()}
			</div>
			<div class="mt-6 min-w-max">
				<img src={image.src} alt={image.alt} />
				<List class="mt-2 pl-4">
					{#each links as link (link.label)}
						<li>
							<Link href={link.href}>{link.label}</Link>
						</li>
					{/each}
				</List>
			</div>
		</div>
	</Prose>
</section>
