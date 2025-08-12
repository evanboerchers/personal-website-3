import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const postsResponse = await fetch('/api/blog/posts/all');
	const posts = await postsResponse.json();
	return {
		title: 'Evan Boerchers | Blog',
		description:
			'Explore blog posts by Evan Boerchers, a software engineer passionate about developer tooling, cloud architecture, and thoughtful writing on technology, philosophy, and more.',
		keywords: [
			'blog',
			'Evan',
			'Boerchers',
			'software',
			'development',
			'engineering'
		],
		posts
	};
};
