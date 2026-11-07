import type { Locale } from './i18n'
import cs from './locales/cs'
import de from './locales/de'
import en from './locales/en'
import es from './locales/es'
import et from './locales/et'
import fi from './locales/fi'
import fr from './locales/fr'
import gl from './locales/gl'
import it from './locales/it'
import ja from './locales/ja'
import pl from './locales/pl'
import pt from './locales/pt'
import ru from './locales/ru'
import zh from './locales/zh'

export type Messages = {
  meta: {
    title: string
    description: string
    ogDescription: string
    twitterDescription: string
  }
  hale: {
    eyebrow: string
    title: string
    text: string
    /** Accessible name of the app cards. */
    appsLabel: string
    apps: Record<'openvitals' | 'openwatch' | 'openbridge', { text: string; link: string }>
    metaTitle: string
    metaDescription: string
    principlesTitle: string
    principles: { title: string; text: string }[]
    aboutTitle: string
    aboutText: string
  }
  openwatch: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    lede: string
    devicesTitle: string
    devices: { title: string; text: string }[]
    privacyTitle: string
    privacy: { title: string; text: string }[]
    /** One line that places OpenWatch next to OpenVitals. */
    pairText: string
  }
  openbridge: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    lede: string
    stepsTitle: string
    /** In order: the steps are numbered on the page. */
    steps: string[]
    statusTitle: string
    statusText: string
  }
  nav: {
    primary: string
    docs: string
    install: string
    home: string
    language: string
  }
  hero: {
    eyebrow: string
    lede: string
    install: string
    docs: string
    /** Accessible name of the hero's button group. */
    actionsLabel: string
  }
  proof: {
    label: string
    points: string[]
  }
  intro: {
    eyebrow: string
    title: string
    text: string
  }
  privacy: {
    eyebrow: string
    title: string
    text: string
    link: string
    items: { title: string; text: string }[]
    detailsLabel: string
  }
  devices: {
    eyebrow: string
    title: string
    text: string
    link: string
    listLabel: string
    points: { title: string; text: string }[]
  }
  features: {
    eyebrow: string
    title: string
    cards: { title: string; text: string; accent: string }[]
  }
  screens: {
    label: string
    eyebrow: string
    title: string
    items: { src: string; alt: string; label: string }[]
  }
  reviews: {
    label: string
    eyebrow: string
    title: string
    text: string
    link: string
    trackLabel: string
    /** Accessible rating text; `{rating}` is replaced with the star count. */
    ratingLabel: string
    /** Shown on cards whose text is Google's translation of the original. */
    translatedNote: string
    items: {
      author: string
      rating: 1 | 2 | 3 | 4 | 5
      /** ISO date (YYYY-MM-DD) of the review, formatted per locale. */
      date: string
      text: string
      translated?: boolean
    }[]
  }
  install: {
    eyebrow: string
    title: string
    text: string
    moreLabel: string
    guide: string
    cards: {
      title: string
      text: string
      hrefKey: 'playStore' | 'fdroid' | 'releases'
      badge: string
      alt: string
    }[]
  }
  support: {
    eyebrow: string
    title: string
    text: string
    actionsLabel: string
    review: string
    translate: string
    liberapayAlt: string
    more: string
  }
  footer: {
    /** The publisher line under the footer brand. */
    publisher: string
    nav: string
    documentation: string
    privacy: string
    source: string
    translate: string
    support: string
  }
}

export const messages: Record<Locale, Messages> = {
  en,
  es,
  cs,
  de,
  et,
  fi,
  fr,
  gl,
  it,
  ja,
  pl,
  pt,
  ru,
  zh
}

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}
