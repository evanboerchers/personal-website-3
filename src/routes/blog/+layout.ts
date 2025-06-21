import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/blog/posts');
	const posts = await response.json();
	posts.slice(0, 10);
	return {
		posts
	};
};
