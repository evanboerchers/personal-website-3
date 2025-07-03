import type { PostFile, PostTag } from './types';

export const getMarkdownBlogPosts = async (tag?: PostTag) => {
	const allPostFiles = import.meta.glob('$content/blog/posts/*.svx', {
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
	const posts = Object.entries(allPostFiles)
		.map(([path, file]) => {
			if (file && typeof file === 'object' && 'metadata' in file) {
				const { metadata } = file as PostFile;
				if (tag && !metadata.tags.includes(tag)) return;
				const slug = path
					.split('/')
					.pop()
					?.replace(/\.[^/.]+$/, '');
				const blogNum = slug?.split('-').shift();
				const image = blogNum ? (blogNumToImage[blogNum] ?? null) : null;
				return {
					...metadata,
					slug,
					image
				};
			}
			return;
		})
		.filter((post) => !!post);
	return posts;
};
