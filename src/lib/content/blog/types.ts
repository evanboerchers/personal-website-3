export type BlogFile = {
	metadata: BlogMetadata;
};

export type BlogMetadata = {
	title: string;
	description: string;
	date: string;
	tags: BlogTagEnum[];
	publish: boolean;
};

export type BlogPostData = BlogMetadata & {
	slug: string | undefined;
	image: string;
};

export enum BlogTagEnum {
	Personal = 'personal',
	Tutorial = 'tutorial',
	WebDevelopment = 'web development'
}
