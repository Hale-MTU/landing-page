import Image from 'next/image'
import type { CSSProperties } from 'react'
import { notFound } from 'next/navigation'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'
import { isLocale, localeTags, type Locale } from '@/lib/i18n'
import { getMessages } from '@/lib/messages'

const docsUrl = 'https://docs.hale.ngo'
const installUrl = `${docsUrl}/app/install`
const privacyUrl = `${docsUrl}/app/privacy`
const supportUrl = `${docsUrl}/support`
const codeUrl = 'https://github.com/Hale-MTU/android-app'
const translateUrl = 'https://translate.codeberg.org/projects/openvitals/mobile-app/'
const liberapayUrl = 'https://liberapay.com/manuel.mmarca.tech/donate'
const releasesUrl = `${codeUrl}/releases`
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=tech.mmarca.openvitals'
const fdroidUrl = 'https://f-droid.org/en/packages/tech.mmarca.openvitals/'
const healthConnectDocsUrl = `${docsUrl}/app/health-connect`

/** The Play listing in the page's language; each app language has one. */
function playStoreHref(locale: Locale) {
  return `${playStoreUrl}&hl=${localeTags[locale].replace('-', '_')}`
}

function installHref(key: 'playStore' | 'fdroid' | 'releases', locale: Locale) {
  if (key === 'playStore') return playStoreHref(locale)
  return key === 'fdroid' ? fdroidUrl : releasesUrl
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h12.1m-4.6-5 5 5-5 5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m5 12 4.1 4.1L19 6.2" />
    </svg>
  )
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

export default async function Home({
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
      <header className="site-header" aria-label={copy.nav.primary}>
        <a className="brand" href={`/${locale}/#top`} aria-label={copy.nav.home}>
          <Image
            src="/images/openvitals-logo.png"
            alt=""
            width={40}
            height={28}
            priority
          />
          <span>OpenVitals</span>
        </a>
        <nav>
          <a href={`/${locale}/#privacy`}>{copy.nav.privacy}</a>
          <a href={`/${locale}/#features`}>{copy.nav.features}</a>
          <a href={docsUrl}>{copy.nav.docs}</a>
          <LanguageSwitcher locale={locale} label={copy.nav.language} />
          <a className="nav-action" href={`/${locale}/#install`}>
            {copy.nav.install}
          </a>
        </nav>
      </header>

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
            <a className="button button-primary" href={`/${locale}/#install`}>
              {copy.hero.install}
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href={docsUrl}>
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
          <a className="text-link" href={playStoreHref(locale)}>
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
          <a className="button button-primary" href={playStoreHref(locale)}>
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

      <footer className="site-footer">
        <a className="brand" href={`/${locale}/#top`} aria-label={copy.nav.home}>
          <Image src="/images/openvitals-logo.png" alt="" width={34} height={24} />
          <span>OpenVitals</span>
        </a>
        <nav aria-label={copy.footer.nav}>
          <a href={docsUrl}>{copy.footer.documentation}</a>
          <a href={privacyUrl}>{copy.footer.privacy}</a>
          <a href={codeUrl}>{copy.footer.source}</a>
          <a href={translateUrl}>{copy.footer.translate}</a>
          <a href={supportUrl}>{copy.footer.support}</a>
        </nav>
      </footer>
    </main>
  )
}
