import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	return {
		pathname
	};
};
