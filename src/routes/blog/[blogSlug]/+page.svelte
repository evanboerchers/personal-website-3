<script lang="ts">
	const { data } = $props();
	const { title } = data.metadata;
	const Content = data.content;
</script>

<svelte:head></svelte:head>

<article>
	<h1>{title}</h1>
	<Content />
</article>
