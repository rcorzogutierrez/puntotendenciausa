// @ts-check

import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://latendenciausa.web.app',
	integrations: [
		mdx(),
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
});
