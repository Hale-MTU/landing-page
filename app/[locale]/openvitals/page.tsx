import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowIcon, CheckIcon, ExternalIcon } from '@/app/components/Icons'
import { SiteFooter } from '@/app/components/SiteFooter'
import { SiteHeader } from '@/app/components/SiteHeader'
import { isLocale, localeTags, type Locale } from '@/lib/i18n'
import {
  healthConnectDocsUrl,
  installUrl,
  liberapayUrl,
  openVitalsCodeUrl,
  openVitalsDocsUrl,
  openVitalsFdroidUrl,
  openVitalsPackage,
  openVitalsReleasesUrl,
  playStoreHref,
  privacyUrl,
  supportUrl,
  translateUrl
} from '@/lib/links'
import { getMessages } from '@/lib/messages'
import { pageMetadata } from '@/lib/seo'

function installHref(key: 'playStore' | 'fdroid' | 'releases', locale: Locale) {
  if (key === 'playStore') return playStoreHref(openVitalsPackage, locale)
  return key === 'fdroid' ? openVitalsFdroidUrl : openVitalsReleasesUrl
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={filled ? 'star star-filled' : 'star'}
    >
      <path d="m12 2.8 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.7l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />
    </svg>
  )
}

function ReviewStars({ rating, label }: { rating: number; label: string }) {
  return (
    <span className="review-stars" role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((step) => (
        <StarIcon key={step} filled={step <= rating} />
      ))}
    </span>
  )
}

function PhoneShot({
  src,
  alt,
  priority = false,
  className = ''
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={`phone-shot ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 56vw, 260px"
      />
    </div>
  )
}

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
    path: 'openvitals/',
    title: copy.meta.title,
    description: copy.meta.description,
    image: {
      url: `/images/screens/${locale}/dashboard.png`,
      width: 720,
      height: 1280,
      alt: copy.meta.title
    }
  })
}

export default async function OpenVitalsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const copy = getMessages(locale)
  // Review dates are rendered as "August 2026" / "agosto de 2026", in UTC so
  // the ISO day never shifts across the server's timezone.
  const reviewDate = new Intl.DateTimeFormat(localeTags[locale], {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC'
  })

  return (
    <main>
      <SiteHeader
        locale={locale}
        copy={copy}
        current="openvitals"
        action={{ href: '#install', label: copy.nav.install }}
      />

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <PhoneShot
            src={`/images/screens/${locale}/dashboard.png`}
            alt=""
            priority
            className="phone-shot-primary"
          />
          <PhoneShot
            src={`/images/screens/${locale}/steps-day.png`}
            alt=""
            priority
            className="phone-shot-secondary"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>OpenVitals</h1>
          <p className="hero-lede">{copy.hero.lede}</p>
          <div className="hero-actions" aria-label={copy.hero.actionsLabel}>
            <a className="button button-primary" href="#install">
              {copy.hero.install}
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href={openVitalsDocsUrl}>
              {copy.hero.docs}
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label={copy.proof.label}>
        {copy.proof.points.map((point) => (
          <div className="proof-item" key={point}>
            <CheckIcon />
            <span>{point}</span>
          </div>
        ))}
      </section>

      <section className="section section-intro">
        <div className="section-copy">
          <p className="eyebrow">{copy.intro.eyebrow}</p>
          <h2>{copy.intro.title}</h2>
        </div>
        <p className="section-text">{copy.intro.text}</p>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-copy">
          <p className="eyebrow">{copy.privacy.eyebrow}</p>
          <h2>{copy.privacy.title}</h2>
          <p>{copy.privacy.text}</p>
          <a className="text-link" href={privacyUrl}>
            {copy.privacy.link}
            <ArrowIcon />
          </a>
        </div>
        <div className="privacy-list" aria-label={copy.privacy.detailsLabel}>
          {copy.privacy.items.map((item) => (
            <div key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="devices-section" id="devices">
        <div className="devices-copy">
          <p className="eyebrow">{copy.devices.eyebrow}</p>
          <h2>{copy.devices.title}</h2>
          <p>{copy.devices.text}</p>
          <a className="text-link" href={healthConnectDocsUrl}>
            {copy.devices.link}
            <ArrowIcon />
          </a>
        </div>
        <div className="devices-list" aria-label={copy.devices.listLabel}>
          {copy.devices.points.map((point) => (
            <div key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="section-heading">
          <p className="eyebrow">{copy.features.eyebrow}</p>
          <h2>{copy.features.title}</h2>
        </div>
        <div className="feature-grid">
          {copy.features.cards.map((feature) => (
            <article
              className="feature-card"
              key={feature.title}
              style={{ '--accent': feature.accent } as CSSProperties}
            >
              <span aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" aria-label={copy.screens.label}>
        <div className="section-heading">
          <p className="eyebrow">{copy.screens.eyebrow}</p>
          <h2>{copy.screens.title}</h2>
        </div>
        <div className="screens-grid">
          {copy.screens.items.map((screenshot) => (
            <figure key={screenshot.label}>
              <PhoneShot src={screenshot.src} alt={screenshot.alt} />
              <figcaption>{screenshot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reviews-section" aria-label={copy.reviews.label}>
        <div className="section-heading reviews-heading">
          <div>
            <p className="eyebrow">{copy.reviews.eyebrow}</p>
            <h2>{copy.reviews.title}</h2>
            <p className="section-text">{copy.reviews.text}</p>
          </div>
          <a className="text-link" href={playStoreHref(openVitalsPackage, locale)}>
            {copy.reviews.link}
            <ExternalIcon />
          </a>
        </div>
        <div
          className="reviews-track"
          role="region"
          aria-label={copy.reviews.trackLabel}
          tabIndex={0}
        >
          {copy.reviews.items.map((review, index) => (
            <figure className="review-card" key={`${review.author}-${index}`}>
              <ReviewStars
                rating={review.rating}
                label={copy.reviews.ratingLabel.replace(
                  '{rating}',
                  String(review.rating)
                )}
              />
              <blockquote>
                <p>{review.text}</p>
              </blockquote>
              <figcaption>
                <span>{review.author}</span>
                <time dateTime={review.date}>
                  {reviewDate.format(new Date(review.date))}
                </time>
                {review.translated && (
                  <small className="review-translated">
                    {copy.reviews.translatedNote}
                  </small>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="install-section" id="install">
        <div>
          <p className="eyebrow">{copy.install.eyebrow}</p>
          <h2>{copy.install.title}</h2>
          <p>{copy.install.text}</p>
        </div>
        <div className="install-card-grid">
          {copy.install.cards.map((card) => (
            <a
              className="install-card"
              href={installHref(card.hrefKey, locale)}
              key={card.title}
            >
              <span className="badge-frame">
                <img src={card.badge} alt={card.alt} loading="lazy" />
              </span>
              <span>
                <strong>{card.title}</strong>
                <small>{card.text}</small>
              </span>
            </a>
          ))}
        </div>
        <div className="install-links" aria-label={copy.install.moreLabel}>
          <a href={installUrl}>
            {copy.install.guide}
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="support-section" aria-labelledby="support-heading">
        <div>
          <p className="eyebrow">{copy.support.eyebrow}</p>
          <h2 id="support-heading">{copy.support.title}</h2>
          <p>{copy.support.text}</p>
        </div>
        <div className="support-actions" aria-label={copy.support.actionsLabel}>
          <a className="button button-primary" href={playStoreHref(openVitalsPackage, locale)}>
            {copy.support.review}
            <ExternalIcon />
          </a>
          <a className="button button-secondary" href={translateUrl}>
            {copy.support.translate}
            <ExternalIcon />
          </a>
          <a className="liberapay-badge" href={liberapayUrl}>
            <img
              src="https://liberapay.com/assets/widgets/donate.svg"
              alt={copy.support.liberapayAlt}
              width="83"
              height="30"
              loading="lazy"
            />
          </a>
          <a className="button button-secondary" href={supportUrl}>
            {copy.support.more}
            <ArrowIcon />
          </a>
        </div>
      </section>

      <SiteFooter locale={locale} copy={copy} />
    </main>
  )
}
