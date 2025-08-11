import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/blog/posts/all');
	const posts = await response.json();
	posts.slice(0, 10);
	return {
		pageName: 'Home',
		pageDescription:
			'Home page of the personal site and blog for Evan Boerchers',
		posts
	};
};
