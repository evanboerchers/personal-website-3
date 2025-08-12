import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/blog/posts/all');
	const posts = await response.json();
	posts.slice(0, 10);
	return {
		title: 'Evan Boerchers',
		description:
			'Personal blog of Evan Boerchers, a software engineer from Victoria BC, Canada. Read articles, explore projects and learn more about Evan Boerchers.',
		keywords: [
			'Evan',
			'Boerchers',
			'blog',
			'software',
			'engineer',
			'developer'
		],
		posts
	};
};
