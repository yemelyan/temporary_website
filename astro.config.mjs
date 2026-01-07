// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	integrations: [
		keystatic({
			configPath: './keystatic.config.ts',
		}),
	],
});
