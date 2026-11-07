'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { localeCookieName, localeLabels, locales } from '@/lib/i18n'

/** Remembers the language for the next visit to `/`. */
function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
}

export function LanguageSwitcher({
  locale,
  label
}: {
  locale: Locale
  label: string
}) {
  const router = useRouter()
  const pathname = usePathname()

  // Every language page remembers its language, as the server's middleware did
  // before the site went static.
  useEffect(() => rememberLocale(locale), [locale])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale
    rememberLocale(newLocale)
    // Stay on the same page: /en/openwatch/ becomes /de/openwatch/.
    const rest = pathname.split('/').slice(2).join('/')
    router.push(`/${newLocale}/${rest}`)
  }

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      aria-label={label}
      className="language-switcher"
    >
      {locales.map((option) => (
        <option key={option} value={option}>
          {localeLabels[option]}
        </option>
      ))}
    </select>
  )
}
