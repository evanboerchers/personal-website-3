import { getMarkdownBlogPosts } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await getMarkdownBlogPosts();
	return json(posts);
};
