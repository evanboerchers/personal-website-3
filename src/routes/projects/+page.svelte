<script lang="ts">
	// import CoffeeChessImg from '$lib/assets/coffee-chess.png'
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
</script>

<div class="mx-auto max-w-[500px]">
	<h1 class="text-4xl">My Stuff</h1>
	<section class="prose dark:prose-invert mt-8">
		<h2 class='mb-0'>Coffee Chess</h2>
		<div class="flex flex-row">
			<div>
				<p>
					Coffee Chess is a chess game,themed after my favourite hot beverage.
					Includes both local play and open multiplayer so you can play with
					others!
				</p>
				<p>
					The codebase is organized into a monorepo with packages for the
					client, server and core library. The client is built using with Phaser
					game engine with Vite and Typescript. Art is a hybrid of self made and
					AI generated. This static site is hosted on cloudflare.
				</p>
				<p>
					Server side, an express server is configured with sockets.io to handle
					multiplayer. This is containerized and hosted on a linode instance. In
					addition I also built a generic chess-core library to handle all the
					game logic from a single class! This is completely reusable for any
					chess game.
				</p>
			</div>
			<div class="mt-6 min-w-max">
				<img src="" alt="coffee chess homescreen" />
				<List class="mt-2 pl-4">
					<li>
						<Link href="https://github.com/evanboerchers/coffee-chess"
							>Github Repo</Link
						>
					</li>
					<li>
						<Link href="https://coffee-chess.evanboerchers.com/"
							>Play Coffee Chess!</Link
						>
					</li>
				</List>
			</div>
		</div>
	</section>
</div>
