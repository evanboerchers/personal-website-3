import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const postsResponse = await fetch('/api/blog/posts/all');
	const posts = await postsResponse.json();
	return {
		posts
	};
};
