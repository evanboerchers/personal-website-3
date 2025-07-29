import { BlogTagEnum } from '$content/blog/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const tagName = params.tagName;
	const tagFilter = tagName.replace('-', ' ') as BlogTagEnum;
	const allTags = Object.values(BlogTagEnum);
	if (!allTags.includes(tagFilter)) {
		error(404, `Not Found: ${tagFilter} is not a valid tag`);
	}
	const response = await fetch(`/api/blog/posts/tag/${tagFilter}`);
	const posts = await response.json();
	const tags = allTags.map((tag) => {
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
