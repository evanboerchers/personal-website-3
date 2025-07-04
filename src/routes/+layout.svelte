<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/navigation/nav-bar.svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
	let { children, data } = $props();
</script>

<div id="app" class="bg-primary min-h-screen grid grid-cols-[100%] grid-rows-[auto_1fr_auto]">
	<ModeWatcher />
	<header>
		<NavBar></NavBar>
	</header>
	{#key data.pathname}
		<div id='transition' in:fly={{easing: quintInOut, y: 10, duration: 300, delay: 350 }} out:fly={{easing: quintInOut,y: 10, duration: 300}}>
			<div id="layout" class="mt-8 mr-16 mb-8 ml-16">
				{@render children?.()}
			</div>
			<Footer />
		</div>
	{/key}
</div>
