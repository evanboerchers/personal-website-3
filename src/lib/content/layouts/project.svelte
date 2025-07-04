<script lang="ts">
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';

	interface ProjectLayoutProps {
		title: string;
		children: any;
		links: {
			label: string;
			href: String;
		}[];
		image: {
			src: string;
			alt: string;
		};
	}

	let { title, children, links, image }: ProjectLayoutProps = $props();
</script>

<section class="prose dark:prose-invert mt-8">
	<h2 class="mb-0">{title}</h2>
	<div class="flex flex-row">
		<div>
			{@render children?.()}
		</div>
		<div class="mt-6 min-w-max">
			<img src={image.src} alt={image.alt} />
			<List class="mt-2 pl-4">
				{#each links as link}
					<li>
						<Link href={link.href}>{link.label}</Link>
					</li>
				{/each}
			</List>
		</div>
	</div>
</section>
