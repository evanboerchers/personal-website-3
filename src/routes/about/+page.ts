import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		title: 'Evan Boerchers | About',
		description:
			'Evan Boerchers is a Software Engineer based in Victoria, BC, with experience in web development, data science, and cloud architecture. Passionate about developer tooling, fitness, climbing, and non-fiction literature.',
		keywords: [
			'Evan',
			'Boerchers',
			'About',
			'software',
			'engineer',
			'developer'
		]
	};
};
