export type PostFile = {
	metadata: PostMetadata;
};

export type PostMetadata = {
	title: string;
	description: string;
	date: string;
	tags: PostTag[];
	author: string;
	image: string;
	publish: boolean;
};

export enum PostTag {
	Personal = 'personal',
	Opinion = 'opinion'
}
