import { MetadataRoute } from 'next';

// TODO: Update with actual domain when available
const BASE_URL = 'https://faheywindowcleaning.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}


