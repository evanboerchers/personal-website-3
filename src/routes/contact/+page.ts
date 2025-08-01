import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		pageName: 'Contact',
		pageDescription:
			'Contact Evan Boerchers for professional inquiries, collaborations, or networking. Software engineer with experience in web, data, and cloud technologies.'
	};
};
