import defaultCover from '$assets/blog/default-cover.webp';
import type {
	BlogFile,
	BlogPostData,
	BlogSearchEntry,
	BlogTagEnum
} from './types';

const pathToSlug = (path: string): string => {
	return path
		.split('/')
		.pop()!
		.replace(/\.[^/.]+$/, '');
};

export const getMarkdownBlogPosts = (tag?: BlogTagEnum): BlogPostData[] => {
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
				const { metadata } = file as BlogFile;
				if (tag && !metadata.tags.includes(tag)) return;
				const slug = pathToSlug(path);
				const blogNum = slug.split('-').shift();
				const image = blogNum
					? (blogNumToImage[blogNum] ?? defaultCover)
					: defaultCover;
				return {
					...metadata,
					slug,
					image
				};
			}
			return;
		})
		.filter((post) => !!post)
		.sort((a, b) => {
			if (a.slug <= b.slug) {
				return 1;
			} else {
				return -1;
			}
		});
	return posts;
};

export const generateBlogSearchEntries = (): BlogSearchEntry[] => {
	const allPostFiles = import.meta.glob('$content/blog/posts/*.svx', {
		eager: true
	});
	const entries = Object.entries(allPostFiles)
		.map(([path, file]) => {
			if (file && typeof file === 'object' && 'metadata' in file) {
				const { metadata } = file as BlogFile;
				const slug = pathToSlug(path);
				const { title, description, tags } = metadata;
				return {
					slug,
					title,
					description,
					tags
				};
			}
		})
		.filter((post) => !!post);
	return entries;
};

export const blogSearchEntries = generateBlogSearchEntries();
