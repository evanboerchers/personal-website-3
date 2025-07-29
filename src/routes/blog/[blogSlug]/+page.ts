import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	const blogSlug = params.blogSlug;
	const post = await import(`$content/blog/posts/${blogSlug}.svx`);
	const postNum = blogSlug.split('-')[0];
	let image: string;
	try {
		image = (await import(`$assets/blog/${postNum}/cover.webp`)).default;
	} catch {
		image = (await import(`$assets/blog/default-cover.webp`)).default;
	}
	const metadata = {
		...post.metadata,
		image
	};
	const pageName = `${metadata.title} - Blog`;
	const content: ConstructorOfATypedSvelteComponent = post.default;
	return {
		pageName,
		metadata,
		content
	};
};
