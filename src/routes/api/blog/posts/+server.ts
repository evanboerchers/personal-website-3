import type { BlogTag } from '$content/blog/types.js';
import { getMarkdownBlogPosts } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const tag = url.searchParams.get('tag') ?? undefined;
	const posts = await getMarkdownBlogPosts(tag?.toLowerCase() as BlogTag);
	return json(posts);
};
