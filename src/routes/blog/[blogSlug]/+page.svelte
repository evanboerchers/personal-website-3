<script lang="ts">
	const { data } = $props();
	const { title } = data.metadata;
	const Content = data.content;
</script>

<svelte:head></svelte:head>

<article class='max-2-[500px] mx-auto prose dark:prose-invert'>
	<h1>{title}</h1>
	<Content />
</article>
