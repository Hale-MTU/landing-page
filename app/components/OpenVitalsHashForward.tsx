'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/i18n'

/** Sections that lived on the home page before OpenVitals got its own page. */
const openVitalsSections = ['#install', '#privacy', '#features', '#devices', '#openvitals']

/** Sends an old link such as /en/#install on to the same section of the OpenVitals page. */
export function OpenVitalsHashForward({ locale }: { locale: Locale }) {
  useEffect(() => {
    const { hash } = window.location
    if (!openVitalsSections.includes(hash)) return
    const section = hash === '#openvitals' ? '' : hash
    window.location.replace(`/${locale}/openvitals/${section}`)
  }, [locale])

  return null
}
