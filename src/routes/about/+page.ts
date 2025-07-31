import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		pageName: 'About',
		description: 'All about Evan Boerchers and who he is.'
	};
};
