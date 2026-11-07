import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowIcon, CheckIcon } from '@/app/components/Icons'
import { OpenVitalsHashForward } from '@/app/components/OpenVitalsHashForward'
import { SiteFooter } from '@/app/components/SiteFooter'
import { SiteHeader } from '@/app/components/SiteHeader'
import { isLocale, type Locale } from '@/lib/i18n'
import { appMarks, appNames, appPath, apps } from '@/lib/links'
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
    path: '',
    title: copy.hale.metaTitle,
    description: copy.hale.metaDescription,
    image: { url: '/images/social-hale.png', width: 1280, height: 640, alt: 'Hale' },
    absoluteTitle: true
  })
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const copy = getMessages(locale)

  return (
    <main>
      <OpenVitalsHashForward locale={locale} />
      <SiteHeader locale={locale} copy={copy} />

      <section className="hale-hero" id="top">
        <div>
          <p className="eyebrow">{copy.hale.eyebrow}</p>
          <h1>{copy.hale.title}</h1>
          <p className="hale-lede">{copy.hale.text}</p>
        </div>
        <Image
          className="hale-hero-mark"
          src="/images/hale-mark.png"
          alt=""
          width={300}
          height={300}
          priority
        />
      </section>

      <section className="apps-grid" aria-label={copy.hale.appsLabel}>
        {apps.map((app) => (
          <a className="app-card" href={appPath(locale, app)} key={app}>
            <Image src={appMarks[app]} alt="" width={96} height={96} />
            <h2>{appNames[app]}</h2>
            <p>{copy.hale.apps[app].text}</p>
            <span className="text-link">
              {copy.hale.apps[app].link}
              <ArrowIcon />
            </span>
          </a>
        ))}
      </section>

      <section className="principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading">{copy.hale.principlesTitle}</h2>
        <div className="principles-grid">
          {copy.hale.principles.map((principle) => (
            <div key={principle.title}>
              <CheckIcon />
              <strong>{principle.title}</strong>
              <span>{principle.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-hale" aria-labelledby="about-heading">
        <h2 id="about-heading">{copy.hale.aboutTitle}</h2>
        <p>{copy.hale.aboutText}</p>
      </section>

      <SiteFooter locale={locale} copy={copy} />
    </main>
  )
}
