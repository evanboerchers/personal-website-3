<script lang="ts">
	import BlogTags from '$lib/components/blog/blog-tags.svelte'; 
	import Link from '$lib/components/ui/link.svelte'; 
	import portrait from '$assets/portrait.webp'
	import { formatDate } from '$lib/utils'
	const { data } = $props();
	const { title, date, tags, image } = data.metadata;
	const Content = data.content;
	const formattedDate = formatDate(date)

</script>

<svelte:head></svelte:head>

<Content image={image}/>

