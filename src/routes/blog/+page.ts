import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/blog/posts');
	const posts = await response.json();
	console.log(posts);
	return {
		posts
	};
};
