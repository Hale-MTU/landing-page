import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { isLocale, localeTags, locales, type Locale } from '@/lib/i18n'
import { siteUrl } from '@/lib/links'
import '../globals.css'

export const viewport: Viewport = {
  themeColor: '#0f766e',
  width: 'device-width',
  initialScale: 1
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/** What every page shares; each page sets its own title, description and share image. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hale',
    template: '%s - Hale'
  },
  icons: {
    icon: '/images/hale-mark.png',
    apple: '/images/hale-mark.png'
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
