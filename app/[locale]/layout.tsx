import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { isLocale, localeTags, locales, ogLocales, type Locale } from '@/lib/i18n'
import { getMessages } from '@/lib/messages'
import '../globals.css'

export const viewport: Viewport = {
  themeColor: '#0f766e',
  width: 'device-width',
  initialScale: 1
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  const locale = rawLocale
  const copy = getMessages(locale)

  return {
    metadataBase: new URL('https://hale.ngo'),
    title: {
      default: copy.meta.title,
      template: '%s - Hale'
    },
    description: copy.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        ...Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}/`])),
        'x-default': '/en/'
      }
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.ogDescription,
      url: `https://hale.ngo/${locale}/`,
      siteName: 'Hale',
      images: [
        {
          url: `/images/screens/${locale}/dashboard.png`,
          width: 720,
          height: 1280,
          alt: copy.meta.title
        }
      ],
      locale: ogLocales[locale],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.twitterDescription,
      images: [`/images/screens/${locale}/dashboard.png`]
    },
    icons: {
      icon: '/images/hale-mark.png',
      apple: '/images/hale-mark.png'
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale

  return (
    <html lang={localeTags[locale]}>
      <body>{children}</body>
    </html>
  )
}
