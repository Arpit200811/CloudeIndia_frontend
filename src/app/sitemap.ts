import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cloude-india.com';

    const routes = [
        '',
        '/about',
        '/services',
        '/solutions',
        '/careers',
        '/newsroom',
        '/case-studies',
        '/contact',
        '/privacy',
        '/terms',
        '/cookies',
        '/security',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return routes;
}
