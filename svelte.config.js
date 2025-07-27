import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogLayout = join(__dirname, './src/lib/content/layouts/blog.svelte');
const projectLayout = join(
	__dirname,
	'./src/lib/content/layouts/project.svelte'
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				project: projectLayout,
				blog: blogLayout
			},
			extensions: ['.md', '.svx']
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
