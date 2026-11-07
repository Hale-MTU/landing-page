import type { MetadataRoute } from 'next'
import { locales } from '../lib/i18n'

// Written once at build time; the site is a static export.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: 'https://hale.ngo/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1
    },
    ...locales.map((locale) => ({
      url: `https://hale.ngo/${locale}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1
    }))
  ]
}
