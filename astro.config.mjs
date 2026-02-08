import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manthanank.dev',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  }
});
