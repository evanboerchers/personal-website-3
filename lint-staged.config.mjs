/**
 * @filename: format-only.lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.{js,jsx,cjs,mjs,ts,tsx,json,css,scss,md,html,svelte}': [
		'prettier --write'
	],
	'*.{js,jsx,ts,tsx,cjs,mjs,svelte}': [
		'eslint --no-warn-ignored --max-warnings 0'
	]
};
