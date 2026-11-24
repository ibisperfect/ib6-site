import { defineConfig } from 'astro/config';

// Static output — deploys to Cloudflare Pages with no adapter.
export default defineConfig({
  site: 'https://ib6.uk',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
