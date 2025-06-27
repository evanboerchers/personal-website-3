import type { PostFile } from './types';

export const getMarkdownBlogPosts = async () => {
	const allPostFiles = import.meta.glob('$content/blog/posts/*.md', {
		eager: true
	});
	const coverImageFiles = import.meta.glob('$assets/blog/**/cover.webp', {
		eager: true
	});
	const blogNumToImage: Record<string, string> = {};
	for (const [filePath, mod] of Object.entries(coverImageFiles)) {
		const match = filePath.match(/\/blog\/(\d+)\/cover\.webp$/);
		if (match) {
			const blogNum = match[1];
			blogNumToImage[blogNum] = (mod as { default: string }).default;
		}
	}
	const posts = Object.entries(allPostFiles).map(([path, file]) => {
		if (file && typeof file === 'object' && 'metadata' in file) {
			const { metadata } = file as PostFile;
			const slug = path.split('/').pop()?.replace('.md', '');
			const blogNum = slug?.split('-').shift();
			const image = blogNum ? (blogNumToImage[blogNum] ?? null) : null;
			return {
				...metadata,
				slug,
				image
			};
		}
	});
	return posts;
};

export const getMarkdownProjects = async () => {
	const allPostFiles = import.meta.glob('$content/project/*.md', {
		eager: true
	});
	const coverImageFiles = import.meta.glob('$assets/blog/**/cover.webp', {
		eager: true
	});
	const blogNumToImage: Record<string, string> = {};
	for (const [filePath, mod] of Object.entries(coverImageFiles)) {
		const match = filePath.match(/\/blog\/(\d+)\/cover\.webp$/);
		if (match) {
			const blogNum = match[1];
			blogNumToImage[blogNum] = (mod as { default: string }).default;
		}
	}
	const posts = Object.entries(allPostFiles).map(([path, file]) => {
		if (file && typeof file === 'object' && 'metadata' in file) {
			const { metadata } = file as PostFile;
			const slug = path.split('/').pop()?.replace('.md', '');
			const blogNum = slug?.split('-').shift();
			const image = blogNum ? (blogNumToImage[blogNum] ?? null) : null;
			return {
				...metadata,
				slug,
				image
			};
		}
	});
	return posts;
};
