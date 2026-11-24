import type { APIRoute } from 'astro';
import { site, services, serviceSeo } from '../data/site';

// Generated at build time, so it always matches the pages that exist.
export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const pages: [string, string][] = [
    ['/', '1.0'],
    ['/services', '0.9'],
    ...services.map((s) => [`/services/${serviceSeo[s.id].slug}`, '0.9'] as [string, string]),
    ['/approach', '0.6'],
    ['/about', '0.7'],
    ['/contact', '0.7'],
    ['/privacy', '0.2'],
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr]) => `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
