import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				project: 'src/lib/content/layouts/project.svelte',
				_: 'src/lib/content/layouts/project.svelte'
			},
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/lib/assets',
			$content: 'src/lib/content'
		}
	},
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
