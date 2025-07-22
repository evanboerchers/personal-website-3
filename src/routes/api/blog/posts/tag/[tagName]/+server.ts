import type { BlogTagEnum } from '$content/blog/types.js';
import { getMarkdownBlogPosts } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const tag = params.tagName;
	const posts = getMarkdownBlogPosts(tag as BlogTagEnum);
	return json(posts);
};
