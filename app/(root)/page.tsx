import type { Metadata } from 'next'
import { LocaleRedirect } from '@/app/components/LocaleRedirect'
import { localeLabels, localeTags, locales } from '@/lib/i18n'
import { getMessages } from '@/lib/messages'

export const metadata: Metadata = {
  metadataBase: new URL('https://hale.ngo'),
  title: 'OpenVitals',
  description: getMessages('en').meta.description,
  alternates: {
    languages: {
      ...Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}/`])),
      'x-default': '/en/'
    }
  },
  icons: {
    icon: '/images/openvitals-logo.png',
    apple: '/images/openvitals-logo.png'
  }
}

/** Without JavaScript there is no redirect, so the visitor picks a language from the list. */
export default function LanguageChooser() {
  return (
    <main>
      <LocaleRedirect />
      <noscript>
        <h1>OpenVitals</h1>
        <ul>
          {locales.map((code) => (
            <li key={code}>
              <a href={`/${code}/`} hrefLang={localeTags[code]} lang={localeTags[code]}>
                {localeLabels[code]}
              </a>
            </li>
          ))}
        </ul>
      </noscript>
    </main>
  )
}
