import adapter from '@sveltejs/adapter-auto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import preprocess from 'svelte-preprocess';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/`;

/** @type {import('@sveltejs/kit').Config} */

const config = {
	extensions: ['.svelte'],
	adapter: adapter(),
	preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}global.scss';`
		}
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					$api: path.resolve('./src/lib/api'),
					$components: path.resolve('./src/components'),
					$layout: path.resolve('./src/stores/layoutStore'),
					$lib: path.resolve('./src/lib'),
					$post: path.resolve('./src/components/post'),
					$sanity: path.resolve('./src/lib/sanity'),
					$stores: path.resolve('./src/stores')
				}
			},
			optimizeDeps: {
				include: ['highlight.js/lib/core']
			}
		})
	},
	ssr: true
};

export default config;
