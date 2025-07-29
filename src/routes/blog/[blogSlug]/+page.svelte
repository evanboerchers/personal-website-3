<script lang="ts">
	const { data } = $props();
	const { image } = data.metadata;
	const Content = data.content;
</script>

<Content {image} />
