import { blogSearchEntries } from '$lib/content/blog';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json(blogSearchEntries);
};
