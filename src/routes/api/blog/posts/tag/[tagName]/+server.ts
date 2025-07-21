import { getMarkdownBlogPosts } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const tag = params.tagName;
	const posts = await getMarkdownBlogPosts(tag);
	return json(posts);
};
