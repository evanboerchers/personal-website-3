import { escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript']
});

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md', '.svx'],
	layout: {
		project: import.meta.dirname + '/src/lib/content/layouts/project.svelte',
		blog: import.meta.dirname + '/src/lib/content/layouts/blog.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	}
};

export default config;
