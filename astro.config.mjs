import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://manthanank.dev',
  output: 'server',
  integrations: [sitemap(), db()],
  adapter: netlify(),
});