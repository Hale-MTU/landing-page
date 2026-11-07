import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowIcon, CheckIcon, ExternalIcon } from '@/app/components/Icons'
import { SiteFooter } from '@/app/components/SiteFooter'
import { SiteHeader } from '@/app/components/SiteHeader'
import { isLocale, type Locale } from '@/lib/i18n'
import {
  appMarks,
  appPath,
  openWatchCodeUrl,
  openWatchPackage,
  playStoreHref
} from '@/lib/links'
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
    path: 'openwatch/',
    title: copy.openwatch.metaTitle,
    description: copy.openwatch.metaDescription,
    image: { url: '/images/social-openwatch.png', width: 1280, height: 640, alt: 'OpenWatch' }
  })
}

export default async function OpenWatchPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const copy = getMessages(locale)
  const page = copy.openwatch
  const playHref = playStoreHref(openWatchPackage, locale)
  const playBadge = copy.install.cards.find((card) => card.hrefKey === 'playStore')

  return (
    <main>
      <SiteHeader
        locale={locale}
        copy={copy}
        current="openwatch"
        action={{ href: playHref, label: copy.nav.install }}
      />

      <section className="product-hero" id="top">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>OpenWatch</h1>
          <p className="product-lede">{page.lede}</p>
          <div className="product-actions">
            {playBadge && (
              <a className="badge-link" href={playHref}>
                <img src={playBadge.badge} alt={playBadge.alt} height="56" />
              </a>
            )}
            <a className="button button-secondary" href={openWatchCodeUrl}>
              {copy.footer.source}
              <ExternalIcon />
            </a>
          </div>
        </div>
        <Image
          className="product-mark"
          src={appMarks.openwatch}
          alt=""
          width={320}
          height={320}
          priority
        />
      </section>

      <section className="product-section" aria-labelledby="devices-heading">
        <h2 id="devices-heading">{page.devicesTitle}</h2>
        <div className="product-grid">
          {page.devices.map((device) => (
            <article className="product-card" key={device.title}>
              <h3>{device.title}</h3>
              <p>{device.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">{page.privacyTitle}</h2>
        <div className="principles-grid principles-grid-3">
          {page.privacy.map((point) => (
            <div key={point.title}>
              <CheckIcon />
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="product-pair">
        <Image src={appMarks.openvitals} alt="" width={72} height={72} />
        <p>{page.pairText}</p>
        <a className="text-link" href={appPath(locale, 'openvitals')}>
          {copy.hale.apps.openvitals.link}
          <ArrowIcon />
        </a>
      </section>

      <SiteFooter locale={locale} copy={copy} />
    </main>
  )
}
