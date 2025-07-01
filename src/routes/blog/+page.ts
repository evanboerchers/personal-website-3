import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const tag = url.searchParams.get('tag')?.toLowerCase();
	const query = tag ? `?tag=${encodeURIComponent(tag)}` : '';
	const response = await fetch(`/api/blog/posts${query}`);
	const posts = await response.json();
	return {
		posts
	};
};
