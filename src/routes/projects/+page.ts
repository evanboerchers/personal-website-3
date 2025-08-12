import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		title: 'Evan Boerchers | Projects',
		description:
			'Browse projects by Evan Boerchers, showcasing work in web development, cloud architecture, developer tooling, and creative side experiments.',
		keywords: [
			'Evan',
			'Boerchers',
			'projects',
			'software',
			'development',
			'engineering'
		]
	};
};
