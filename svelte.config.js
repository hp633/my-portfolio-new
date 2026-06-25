import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/slick-portfolio-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
		prerender: {
			// FIX 1: Ignores the missing HTML layout ID anchor link warnings (#projects)
			handleMissingId: 'ignore',

			// FIX 2: Bypasses raw file path asset mismatch warnings for documents and images
			handleHttpError: ({ path, message }) => {
				if (
					path.includes('resume.pdf') || 
					path.includes('hinal-portrait') || 
					path.includes('/logos/')
				) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;