import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		pageName: 'Projects',
		description: 'All the projects and work Evan Boerchers has done.'
	};
};
