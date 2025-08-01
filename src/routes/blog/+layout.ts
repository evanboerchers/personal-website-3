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
		pageName: 'Blog',
		pageDescription:
			'Explore blog posts by Evan Boerchers, a software engineer passionate about developer tooling, cloud architecture, and thoughtful writing on technology, philosophy, and more.',
		posts,
		tags,
		searchEntries
	};
};
