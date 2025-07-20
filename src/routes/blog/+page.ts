import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	//disabled for static rendering
	// const tag = url.searchParams.get('tag')?.toLowerCase();
	// const query = tag ? `?tag=${encodeURIComponent(tag)}` : '';
	// const response = await fetch(`/api/blog/posts${query}`);
	const response = await fetch('/api/blog/posts');
	const posts = await response.json();
	return {
		posts
	};
};
