import { BlogTagEnum } from '$content/blog/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const tagFilter = params.tagName.replace('-', ' ');
	const response = await fetch(`/api/blog/posts/tag/${tagFilter}`);
	const posts = await response.json();
	const tags = Object.values(BlogTagEnum).map((tag) => {
		return {
			tag,
			active: tag === tagFilter
		};
	});
	return {
		posts,
		tags
	};
};
