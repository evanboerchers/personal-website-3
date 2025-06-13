<script lang="ts">
	let { children } = $props();
	import '../app.css';
	import NavBar from '$lib/components/navigation/nav-bar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';
</script>

<div id="app" class="bg-primary min-h-screen">
	<ModeWatcher />
	<header>
		<NavBar></NavBar>
	</header>
	<div id="layout" class="mt-8 mr-16 mb-8 ml-16">
		{@render children()}
	</div>
	<Footer />
</div>
