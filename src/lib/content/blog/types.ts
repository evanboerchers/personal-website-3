export type PostFile = {
	metadata: PostMetadata;
};

export type PostMetadata = {
	title: string;
	description: string;
	date: string;
	tags: PostTags[];
	author: string;
	image: string;
	publish: boolean;
};

export enum PostTags {
	Personal = 'personal',
	Opinion = 'opinion'
}
