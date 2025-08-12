<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/navigation/nav-bar.svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/state';
	import Seo from 'sk-seo';
	let { children } = $props();
</script>

<Seo />

<div
	id="app"
	class="bg-background text-on-background grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]"
>
	<ModeWatcher />
	<header>
		<NavBar />
	</header>
	<div class="grid grid-cols-[100%] grid-rows-[auto_1fr_auto]">
		<div class="mx-auto w-full max-w-[var(--content-max-width)]">
			{#key page.url.pathname}
				<div
					in:fly={{ easing: quintInOut, y: 10, duration: 300, delay: 350 }}
					out:fly={{ easing: quintInOut, y: 10, duration: 300 }}
					class="xs:mx-10 mx-6 mt-12 mb-32 sm:mx-16"
				>
					{@render children?.()}
				</div>
			{/key}
		</div>
		<div></div>
		{#key page.url.pathname + '-footer'}
			<div
				in:fly={{ easing: quintInOut, y: 20, duration: 300, delay: 400 }}
				out:fly={{ easing: quintInOut, y: 20, duration: 250 }}
			>
				<Footer />
			</div>
		{/key}
	</div>
</div>
