import { getMarkdownBlogPosts } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	// disabled for static site adapter
	// const tag = url.searchParams.get('tag') ?? undefined;
	// const posts = await getMarkdownBlogPosts(tag?.toLowerCase() as BlogTag);
	const posts = await getMarkdownBlogPosts();
	return json(posts);
};
