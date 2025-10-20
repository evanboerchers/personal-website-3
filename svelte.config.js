import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = 'one-dark-pro';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'markdown', 'svelte', 'shellscript']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				project:
					import.meta.dirname + '/src/lib/content/layouts/project.svelte',
				blog: import.meta.dirname + '/src/lib/content/layouts/blog.svelte'
			},
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme })
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: {
		prerender: {
			origin: 'https://evanboerchers.com'
		},
		adapter: adapter(),
		alias: {
			$assets: 'src/lib/assets',
			$content: 'src/lib/content',
			$svx: 'src/lib/components/blog/content'
		}
	},
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
