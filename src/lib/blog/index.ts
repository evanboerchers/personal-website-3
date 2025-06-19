import type { PostFile } from './types';

export const getMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('$lib/blog/posts/*.md', {
		eager: true
	});
	// const coverImageFiles = import.meta.glob('$assets/blog/**/cover.webp', { eager: true })
	const posts = Object.entries(allPostFiles).map(([path, file]) => {
		if (file && typeof file === 'object' && 'metadata' in file) {
			const { metadata } = file as PostFile;
			const slug = path.split('/').pop()?.replace('.md', '');
			return {
				...metadata,
				slug
			};
		}
	});
	return posts;
};
