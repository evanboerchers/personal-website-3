export type BlogFile = {
	metadata: BlogMetadata;
};

export type BlogMetadata = {
	title: string;
	description: string;
	date: string;
	tags: BlogTagEnum[];
	keywords: string[];
	publish: boolean;
};

export type BlogPostData = BlogMetadata & {
	slug: string;
	image: string;
};

export enum BlogTagEnum {
	Personal = 'personal',
	Tutorial = 'tutorial',
	WebDevelopment = 'web development'
}

export type BlogSearchEntry = Pick<
	BlogPostData,
	'slug' | 'title' | 'description' | 'tags'
>;
