import { localeTags, type Locale } from './i18n'

export const siteUrl = 'https://hale.ngo'
export const orgUrl = 'https://github.com/Hale-MTU'

export const docsUrl = 'https://docs.hale.ngo'
/** The OpenVitals section of the docs; the docs give each app its own. */
export const openVitalsDocsUrl = `${docsUrl}/openvitals/`
export const installUrl = `${openVitalsDocsUrl}app/install/`
export const privacyUrl = `${openVitalsDocsUrl}app/privacy/`
export const supportUrl = `${openVitalsDocsUrl}support/`
export const healthConnectDocsUrl = `${openVitalsDocsUrl}app/health-connect/`

export const translateUrl = 'https://translate.codeberg.org/projects/openvitals/mobile-app/'
export const liberapayUrl = 'https://liberapay.com/manuel.mmarca.tech/donate'

export const openVitalsCodeUrl = `${orgUrl}/android-app`
export const openVitalsReleasesUrl = `${openVitalsCodeUrl}/releases`
export const openVitalsFdroidUrl = 'https://f-droid.org/en/packages/tech.mmarca.openvitals/'
export const openWatchCodeUrl = `${orgUrl}/OpenWatch`
export const openBridgeCodeUrl = `${orgUrl}/OpenBridge`

/** A Play listing in the page's language; each app language has one. */
export function playStoreHref(packageName: string, locale: Locale) {
  return `https://play.google.com/store/apps/details?id=${packageName}&hl=${localeTags[locale].replace('-', '_')}`
}

export const openVitalsPackage = 'tech.mmarca.openvitals'
export const openWatchPackage = 'tech.mmarca.openwatch'

/** The three apps, in the order the site lists them. */
export const apps = ['openvitals', 'openwatch', 'openbridge'] as const
export type App = (typeof apps)[number]

export const appNames: Record<App, string> = {
  openvitals: 'OpenVitals',
  openwatch: 'OpenWatch',
  openbridge: 'OpenBridge'
}

/** Each app's mark, drawn on the same square canvas so they line up side by side. */
export const appMarks: Record<App, string> = {
  openvitals: '/images/openvitals-mark.png',
  openwatch: '/images/openwatch-mark.png',
  openbridge: '/images/openbridge-mark.png'
}

export function appPath(locale: Locale, app: App, hash = '') {
  return `/${locale}/${app}/${hash}`
}
