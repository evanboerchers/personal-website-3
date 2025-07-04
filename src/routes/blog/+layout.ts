import { BlogTagEnum } from '$content/blog/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const response = await fetch('/api/blog/posts');
	const tagParam = url.searchParams.get('tag')?.toLowerCase();
	const posts = await response.json();
	posts.slice(0, 10);
	const tags = Object.values(BlogTagEnum).map((tag) => {
		return {
			tag,
			active: tag.toLowerCase() === tagParam
		};
	});
	return {
		tags,
		posts
	};
};
