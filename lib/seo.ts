import type { Metadata } from 'next'
import { localeTags, locales, ogLocales, type Locale } from './i18n'
import { siteUrl } from './links'

type ShareImage = { url: string; width: number; height: number; alt: string }

/**
 * One page's metadata: its title and description, its share image, and its
 * address in every language. `path` is the part after the locale, '' for the
 * home and 'openwatch/' for an app page.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
  absoluteTitle = false
}: {
  locale: Locale
  path: string
  title: string
  description: string
  image: ShareImage
  absoluteTitle?: boolean
}): Metadata {
  const url = `/${locale}/${path}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}/${path}`])),
        'x-default': `/en/${path}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${url}`,
      siteName: 'Hale',
      images: [image],
      locale: ogLocales[locale],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url]
    }
  }
}
