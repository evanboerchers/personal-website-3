import { BlogTagEnum } from '$content/blog/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const postsResponse = await fetch('/api/blog/posts/all');
	const posts = await postsResponse.json();
	const searchEntriesResponse = await fetch('/api/blog/posts/search');
	const searchEntries = await searchEntriesResponse.json();
	posts.slice(0, 10);
	const tags = Object.values(BlogTagEnum).map((tag) => {
		return {
			tag,
			active: false
		};
	});
	return {
		posts,
		tags,
		searchEntries
	};
};
