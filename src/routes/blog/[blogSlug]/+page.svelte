<script lang="ts">
	import BlogTags from '$lib/components/blog/blog-tags.svelte'; 
	import Link from '$lib/components/ui/link.svelte'; 
	import portrait from '$assets/portrait.webp'
	import header from '$assets/blog/1/header.webp'
	import { formatDate } from '$lib/utils'
	const { data } = $props();
	const { title, date, tags, image } = data.metadata;
	const Content = data.content;
	const formattedDate = formatDate(date)
</script>

<svelte:head></svelte:head>

<article id='blog' class='max-2-[500px] mx-auto prose dark:prose-invert'>
	<h1 class='mb-2'>{title}</h1>
	<p class='font-semibold mb-2'>{formattedDate}</p>
	<img class='border-1 w-full aspect-3/2' src={image} alt='blog header'/>
	<Content />
	<aside class='inline-block mt-6'>
		<div class='border-y-2 flex gap-6 items-center'>
			<img class='rounded-full w-[100px]' src={portrait} alt='Evan Boerchers'/>
			<div>
				<p class='mb-2'>
					I am Evan Boerchers, a Software Engineer from Victoria, British Columbia. I love writing about my knowledge and passions.  
				</p>
				<a class='inline-block mb-4' href='/about '>More about me</a>
			</div>
		</div>
		<div class='mt-4 not-prose'>
			<p class='text-xl font-semibold'>Blog Tags</p>
			<BlogTags class='mt-4' {tags}/>
			<Link class='inline-block mt-8' href='#app'>Back to Top</Link>
		</div>
	</aside>
</article>
