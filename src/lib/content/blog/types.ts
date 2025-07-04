export type BlogFile = {
	metadata: BlogMetadata;
};

export type BlogMetadata = {
	title: string;
	description: string;
	date: string;
	tags: BlogTagEnum[];
	author: string;
	image: string;
	publish: boolean;
};

export enum BlogTagEnum {
	Personal = 'personal',
	Opinion = 'opinion'
}
