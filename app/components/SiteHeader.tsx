import Image from 'next/image'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'
import type { Locale } from '@/lib/i18n'
import { appNames, appPath, apps, docsUrl, type App } from '@/lib/links'
import type { Messages } from '@/lib/messages'

/**
 * The header every page shares: the Hale mark home, the three apps, the docs,
 * the language, and on an app page the one action that page is for.
 */
export function SiteHeader({
  locale,
  copy,
  current,
  action
}: {
  locale: Locale
  copy: Messages
  current?: App
  action?: { href: string; label: string }
}) {
  return (
    <header className="site-header" aria-label={copy.nav.primary}>
      <a className="brand" href={`/${locale}/`} aria-label={copy.nav.home}>
        <Image
          className="brand-wordmark"
          src="/images/hale-wordmark.png"
          alt="Hale"
          width={82}
          height={32}
          priority
        />
      </a>
      <nav>
        {apps.map((app) => (
          <a
            key={app}
            href={appPath(locale, app)}
            aria-current={app === current ? 'page' : undefined}
          >
            {appNames[app]}
          </a>
        ))}
        <a href={docsUrl}>{copy.nav.docs}</a>
        <LanguageSwitcher locale={locale} label={copy.nav.language} />
        {action && (
          <a className="nav-action" href={action.href}>
            {action.label}
          </a>
        )}
      </nav>
    </header>
  )
}
