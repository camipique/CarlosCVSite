// @ts-check
import { defineConfig } from 'astro/config';

// Replace with the Cloudflare Pages URL, or a custom domain, before deploying.
// example.com is reserved, so canonical and hreflang links stay valid until then.
export default defineConfig({
	site: 'https://example.com',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pt'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		build: {
			// Keep the language switch as its own file so script-src 'self' allows it.
			assetsInlineLimit: 0,
		},
	},
});
