import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		title: 'Evan Boerchers | Contact',
		description:
			'Contact Evan Boerchers for professional inquiries, collaborations, or networking. Software engineer with experience in web, data, and cloud technologies.',
		keywords: ['Evan', 'Boerchers', 'contact']
	};
};
