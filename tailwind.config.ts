import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/bits-ui/**/*.{js,ts,svelte}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				heading: ['"Space Grotesk"', 'sans-serif']
			},
			spacing: {
				layout: '1.5rem'
			},
			borderRadius: {
				xl: '1rem',
				'2xl': '1.5rem'
			},
			boxShadow: {
				soft: '0 2px 12px rgba(0, 0, 0, 0.05)'
			}
		}
	},
	plugins: [typography]
};

export default config;
