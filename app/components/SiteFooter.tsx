import Image from 'next/image'
import type { Locale } from '@/lib/i18n'
import { docsUrl, orgUrl, privacyUrl, supportUrl, translateUrl } from '@/lib/links'
import type { Messages } from '@/lib/messages'

/** The footer every page shares: the publisher, and the links that belong to all three apps. */
export function SiteFooter({ locale, copy }: { locale: Locale; copy: Messages }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="brand" href={`/${locale}/`} aria-label={copy.nav.home}>
          <Image
          className="brand-wordmark"
          src="/images/hale-wordmark.png"
          alt="Hale"
          width={71}
          height={28}
        />
        </a>
        <p className="footer-publisher">{copy.footer.publisher}</p>
      </div>
      <nav aria-label={copy.footer.nav}>
        <a href={docsUrl}>{copy.footer.documentation}</a>
        <a href={privacyUrl}>{copy.footer.privacy}</a>
        <a href={orgUrl}>{copy.footer.source}</a>
        <a href={translateUrl}>{copy.footer.translate}</a>
        <a href={supportUrl}>{copy.footer.support}</a>
      </nav>
    </footer>
  )
}
