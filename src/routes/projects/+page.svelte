<script lang="ts">
	import CoffeeChess from '$content/project/coffee-chess.svx';
	import CoffeeChessImg from '$assets/project/coffee-chess.webp';
	import PersonalBlog from '$content/project/personal-blog.svx';
	import PersonalBlogImg from '$assets/project/personal-blog.webp';
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import Prose from '$lib/components/ui/typography/prose.svelte';
</script>

<div class="mx-auto max-w-[var(--project-max-width)]">
	<section class="border-primary-variant border-b pb-8">
		<PageHeading class="text-4xl">My Stuff</PageHeading>
		<CoffeeChess
			image={{
				src: CoffeeChessImg,
				alt: 'Screenshot of a online chess game with a coffee theme'
			}}
		/>
		<PersonalBlog
			image={{
				src: PersonalBlogImg,
				alt: 'Screenshot of this website'
			}}
		/>
	</section>
	<section class="mt-12">
		<Prose>
			<h1>Other Stuff</h1>
			<List>
				<li>
					<Link>Website</Link> showing how sorting algorithms work in real time.
					Built with Reactjs source on <Link href="">Github</Link>
				</li>
			</List>
		</Prose>
	</section>
</div>
