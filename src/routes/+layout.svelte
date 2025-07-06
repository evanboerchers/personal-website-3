<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/navigation/nav-bar.svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
	let { children, data } = $props();
</script>

<div
	id="app"
	class="bg-primary grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]"
>
	<ModeWatcher />
	<header>
		<NavBar />
	</header>
	<div class="grid grid-cols-[100%] grid-rows-[auto_1fr_auto]">
		{#key data.pathname}
			<div
				in:fly={{ easing: quintInOut, y: 10, duration: 300, delay: 350 }}
				out:fly={{ easing: quintInOut, y: 10, duration: 300 }}
				class="mt-8 mr-16 mb-8 ml-16"
			>
				{@render children?.()}
			</div>
		{/key}
		<div></div>
		{#key data.pathname + '-footer'}
			<div
				in:fly={{ easing: quintInOut, y: 20, duration: 300, delay: 400 }}
				out:fly={{ easing: quintInOut, y: 20, duration: 250 }}
			>
				<Footer />
			</div>
		{/key}
	</div>
</div>
