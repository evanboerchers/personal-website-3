import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	const blogSlug = params.blogSlug;
	const post = await import(`$content/blog/posts/${blogSlug}.md`);
	const postNum = blogSlug.split('-')[0];
	const image = (await import(`$assets/blog/${postNum}/cover.webp`)).default;
	const metadata = {
		...post.metadata,
		image
	};
	const content: ConstructorOfATypedSvelteComponent = post.default;
	return {
		metadata,
		content
	};
};
