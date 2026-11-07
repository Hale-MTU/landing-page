import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowIcon, ExternalIcon } from '@/app/components/Icons'
import { SiteFooter } from '@/app/components/SiteFooter'
import { SiteHeader } from '@/app/components/SiteHeader'
import { isLocale, type Locale } from '@/lib/i18n'
import { appMarks, appPath, openBridgeCodeUrl } from '@/lib/links'
import { getMessages } from '@/lib/messages'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const copy = getMessages(locale)
  return pageMetadata({
    locale,
    path: 'openbridge/',
    title: copy.openbridge.metaTitle,
    description: copy.openbridge.metaDescription,
    image: { url: '/images/social-openbridge.png', width: 1280, height: 640, alt: 'OpenBridge' }
  })
}

export default async function OpenBridgePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const copy = getMessages(locale)
  const page = copy.openbridge

  return (
    <main>
      <SiteHeader locale={locale} copy={copy} current="openbridge" />

      <section className="product-hero" id="top">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>OpenBridge</h1>
          <p className="product-lede">{page.lede}</p>
          <div className="product-actions">
            <a className="button button-primary" href={openBridgeCodeUrl}>
              {copy.footer.source}
              <ExternalIcon />
            </a>
            <a className="button button-secondary" href={appPath(locale, 'openvitals')}>
              {copy.hale.apps.openvitals.link}
              <ArrowIcon />
            </a>
          </div>
        </div>
        <Image
          className="product-mark"
          src={appMarks.openbridge}
          alt=""
          width={320}
          height={320}
          priority
        />
      </section>

      <section className="product-section" aria-labelledby="steps-heading">
        <h2 id="steps-heading">{page.stepsTitle}</h2>
        <ol className="steps">
          {page.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="product-pair product-status" aria-labelledby="status-heading">
        <div>
          <h2 id="status-heading">{page.statusTitle}</h2>
          <p>{page.statusText}</p>
        </div>
        <a className="text-link" href={openBridgeCodeUrl}>
          {copy.footer.source}
          <ExternalIcon />
        </a>
      </section>

      <SiteFooter locale={locale} copy={copy} />
    </main>
  )
}
