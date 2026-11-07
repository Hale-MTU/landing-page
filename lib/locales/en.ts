import type { Messages } from '../messages'

const en: Messages = {
  meta: {
    title: 'OpenVitals - Local-first Android health dashboard',
    description:
      'OpenVitals is a local-first Android app for viewing, logging, importing, and understanding Health Connect data without accounts, ads, or analytics.',
    ogDescription:
      'A local-first Android health dashboard powered by Health Connect, built without accounts, ads, or analytics.',
    twitterDescription:
      'Local-first Android health tools for Health Connect data, without accounts, ads, or analytics.'
  },
  hale: {
    eyebrow: 'Free, offline health apps for Android',
    title: 'Your health data, on your phone and nowhere else.',
    text: 'Hale MTÜ is the non-profit association behind OpenVitals, OpenWatch and OpenBridge: no accounts, no ads, no analytics, no cloud.',
    appsLabel: 'The apps',
    apps: {
      openvitals: { text: 'The dashboard. Reads your Health Connect records and turns them into a daily view; imports, records and logs, all on the phone.', link: 'About OpenVitals' },
      openwatch: { text: 'The devices. Pairs Garmin and Wear OS watches and a Xiaomi scale over Bluetooth and copies what they record into Health Connect.', link: 'About OpenWatch' },
      openbridge: { text: 'The way out. An optional app that passes the data OpenVitals shares on to online services. Early stage.', link: 'About OpenBridge' }
    },
    metaTitle: 'Hale - Free, offline health apps for Android',
    metaDescription: 'Hale MTÜ is the non-profit association behind OpenVitals, OpenWatch and OpenBridge: free, open-source health apps for Android with no accounts, no ads and no cloud.',
    principlesTitle: 'What the three apps share',
    principles: [
      { title: 'No account, no Hale cloud', text: 'Nothing to sign up for and no Hale server. Your records stay in Android\'s Health Connect unless you choose to pass them on.' },
      { title: 'No ads, no analytics', text: 'No tracking SDKs in any app, and no business built on your data.' },
      { title: 'Free and open source', text: 'Every app is free software under the AGPL-3.0-or-later, with its source on GitHub.' },
      { title: 'Run by a non-profit', text: 'Hale MTÜ is a non-profit association. Its income goes only to its aims and is never shared out.' }
    ],
    aboutTitle: 'About Hale',
    aboutText: 'Hale is the old English word for healthy, as in “hale and hearty”. The association publishes the apps and looks after their code and community. Write to hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Watches and a scale for Health Connect',
    metaDescription: 'OpenWatch pairs Garmin and Wear OS watches and a Xiaomi scale over Bluetooth and copies what they record into Health Connect. No account, no server, no internet permission.',
    eyebrow: 'Watches and a scale for Health Connect',
    lede: 'OpenWatch pairs your watch and your scale over Bluetooth, copies what they record into Health Connect, and manages them. No account, no server, no internet permission.',
    devicesTitle: 'The devices it works with',
    devices: [
      { title: 'Garmin watches', text: 'Activities, sleep and wellness synced over Garmin\'s own Bluetooth protocol, plus notifications, music controls, weather, calendar, alarms and find my watch.' },
      { title: 'Wear OS watches', text: 'The OpenWatch watch app records heart rate, steps and floors and syncs them on a tap or a schedule, with an estimated sleep session and resting heart rate each night.' },
      { title: 'Xiaomi S400 scale', text: 'Every weigh-in saved to Health Connect as it happens, with the app open or closed. Body fat, lean mass and body water are estimated on the phone.' }
    ],
    privacyTitle: 'Where your data goes',
    privacy: [
      { title: 'No internet permission', text: 'The phone app cannot reach the internet. Everything travels over Bluetooth between the device and the phone.' },
      { title: 'Into Health Connect', text: 'What a device records lands in Android\'s health store, where OpenVitals and any app you allow can read it.' },
      { title: 'The rest stays on the phone', text: 'Measurements Health Connect cannot hold, such as stress or Body Battery, stay in OpenWatch\'s own database.' }
    ],
    pairText: 'OpenWatch is where the data comes from; OpenVitals is where you look at it.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - Pass OpenVitals data on to online services',
    metaDescription: 'OpenBridge is an optional Android app that reads the data OpenVitals shares and can pass it on to online services. Early stage.',
    eyebrow: 'Optional, early stage',
    lede: 'OpenVitals never reaches the internet. OpenBridge is the separate app that can: it reads only what you let OpenVitals share and can pass it on to online services.',
    stepsTitle: 'How it gets data',
    steps: [
      'In OpenVitals, turn on sharing with other apps in the settings. It starts off.',
      'In OpenBridge, ask for the groups you want. Android asks once for each of the eleven groups, and you can change your answer later in its settings.',
      'Read one group or all of them: daily totals for the last week, samples for the last day, sessions and routes for the last month.'
    ],
    statusTitle: 'Where it stands',
    statusText: 'No online service is connected yet, and the sharing API is only in test builds of OpenVitals for now. Follow the work on GitHub.'
  },
  nav: {
    primary: 'Primary navigation',
    docs: 'Docs',
    install: 'Install',
    home: 'Hale home',
    language: 'Language'
  },
  hero: {
    eyebrow: 'Local-first health tools for Android',
    lede:
      'A private Health Connect dashboard for viewing, logging, importing, and understanding your health data without accounts, ads, analytics, or an OpenVitals cloud.',
    install: 'Install on Android',
    docs: 'Read the docs',
    actionsLabel: 'OpenVitals actions'
  },
  proof: {
    label: 'OpenVitals privacy guarantees',
    points: [
      'No OpenVitals cloud account',
      'No app-level internet permission',
      'No ads or analytics SDK',
      'Health Connect stays the source of truth'
    ]
  },
  intro: {
    eyebrow: 'Built for people, not profiles',
    title: "Health data should be useful without becoming someone else's dataset.",
    text:
      'OpenVitals reads supported Health Connect records, turns them into clear daily views and detail screens, and keeps control close to the device. You decide which permissions to grant and when anything gets written.'
  },
  privacy: {
    eyebrow: 'Privacy stance',
    title: 'No account. No feed. No background data business.',
    text:
      'The Android app is designed around explicit local flows. It reads Health Connect, stores app preferences on device, and writes health records only after a save, import, record, edit, or delete action.',
    link: 'Review the privacy details',
    detailsLabel: 'Privacy details',
    items: [
      {
        title: 'Local by default',
        text: 'No OpenVitals server is needed for the app dashboard.'
      },
      {
        title: 'User-granted access',
        text: 'Health Connect permissions stay visible and deliberate.'
      },
      {
        title: 'Open source',
        text: 'The Android app and documentation are available on GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Wearables',
    title: 'Works with your watch.',
    text:
      "Connect any wearable through Gadgetbridge or your vendor's official app. Sync notifications, live heart rate, weather, and your calendar directly over Bluetooth. Everything flows into Health Connect, and OpenVitals brings it all together into one private dashboard.",
    link: 'How Health Connect syncing works',
    listLabel: 'Watch and sensor support',
    points: [
      {
        title: 'Any wearable that writes to Health Connect',
        text: 'Whether it uses Gadgetbridge or your vendor\'s official app, if the companion app syncs to Health Connect, OpenVitals sees it.'
      },
      {
        title: 'Sleep, heart rate, steps, and workouts',
        text: 'All your wearable metrics land in Health Connect: sleep stages, heart rate, HRV, steps, and workouts appear in one clear dashboard.'
      },
      {
        title: 'Live sensors stay direct',
        text: 'BLE heart-rate straps and cadence and power sensors still connect to the app for live data while you record a workout.'
      }
    ]
  },
  features: {
    eyebrow: 'What it does',
    title: 'See it, import it, record it, log it, and understand it. All on the phone.',
    cards: [
      {
        title: 'Every metric in one place',
        text: 'Activity, sleep, heart, body, hydration, nutrition, and cycle on one daily dashboard. Trends, statistics, and detail screens are one tap deeper when you want to know what changed.',
        accent: '#0f766e'
      },
      {
        title: 'Import what you already have',
        text: 'Bring in Apple Health exports, FIT, GPX, KML/KMZ, TCX, and CSV files, one at a time or whole folders. A CSV can hold a scale\'s weigh-ins, a blood pressure log, a spreadsheet of meals or the workouts you exported. The history you built elsewhere comes with you.',
        accent: '#2f6f9f'
      },
      {
        title: 'Record activities and workouts',
        text: 'GPS routes drawn on offline maps that rotate and follow you, live CoMaps turn-by-turn guidance with the planned route on the map, BLE heart-rate, cadence, and power sensors, voice announcements, laps, and rep counting. Workout plans built once and run as guided sessions, with sets, weight and rest per exercise, reps counted by the phone and rests that count down. Imported and recorded routes get their altitude corrected from elevation tiles stored on the phone. Any workout exports without its route as TCX, FIT, or CSV. Written to Health Connect only when you save.',
        accent: '#d95c3f'
      },
      {
        title: 'Works with your watch',
        text: "Connect any wearable through Gadgetbridge or your vendor's app: sync notifications and ringing calls, live heart rate, weather, calendar, and music controls over Bluetooth, on a schedule if you want. Everything syncs through Health Connect into one unified dashboard. Step on a supported Xiaomi scale and the weigh-in lands in Health Connect, even with the app closed.",
        accent: '#a07b00'
      },
      {
        title: 'Log the numbers only you know',
        text: 'A body analysis scale\'s whole weigh-in, from weight and body fat to body water, height, blood pressure with its measurement context and categories from the guideline you choose (ACC/AHA, ESH, ESC, or ISH), HRV, glucose, VO2 max, meals, drinks, foods you define once with their nutrients and log by portion, daily totals of any nutrient typed in directly, and mindfulness minutes. Quick manual entry, with reminders and home-screen widgets.',
        accent: '#1f9d55'
      },
      {
        title: 'A report your doctor can hold',
        text: 'Pick metrics and a time range, and the app builds a PDF on your phone: charts, statistics, and clinical sections for blood pressure, glucose, workouts, sleep, and cycle tracking. Every nutrient you log, from fibre to selenium, can get a chart of its own. Share it or save it; nothing is uploaded.',
        accent: '#4f5d9e'
      },
      {
        title: 'Cycle tracking that stays yours',
        text: 'A day log for bleeding, pain, mood, energy, symptoms, notes, and tests, logged one thing at a time. Next-period ranges come from your own history, a contraceptive pill scheme reminds you on taking days, and Health Connect keeps its records while the journal stays on your phone behind its own permission.',
        accent: '#b03a5b'
      },
      {
        title: 'Insights made on your phone',
        text: 'Sleep scores, Body Energy, and daily readiness are computed on-device against your own baselines. Body Energy reads how well you slept - efficiency, time awake, deep and REM - not just how long. No cloud reads your data to tell you how you slept.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'OpenVitals screenshots',
    eyebrow: 'Product views',
    title: 'Designed for scanning today, then going deeper when it matters.',
    items: [
      {
        src: '/images/screens/en/heart-rate-day.png',
        alt: 'OpenVitals: Heart rate',
        label: 'Heart rate'
      },
      {
        src: '/images/screens/en/log-metrics.png',
        alt: 'OpenVitals: Add entry',
        label: 'Add entry'
      },
      {
        src: '/images/screens/en/imports.png',
        alt: 'OpenVitals: Import & export',
        label: 'Import & export'
      },
      {
        src: '/images/screens/en/health-report.png',
        alt: 'OpenVitals: Health report',
        label: 'Health report'
      }
    ]
  },
  reviews: {
    label: 'Google Play reviews',
    eyebrow: 'From Google Play',
    title: 'What people say after living with it.',
    text: 'Quoted verbatim from public reviews on the Google Play listing.',
    link: 'Read all reviews on Google Play',
    trackLabel: 'Reviews carousel, scroll sideways to see more',
    ratingLabel: '{rating} out of 5 stars',
    translatedNote: 'Translated by Google',
    // Verbatim from the Google Play listing, newest first.
    items: [
      {
        author: 'Peter',
        rating: 5,
        date: '2026-08-31',
        text: 'fantastic app, no account no cloud and much better features than google health. And the vest part: it is open source.'
      },
      {
        author: 'James Wiles',
        rating: 5,
        date: '2026-08-27',
        text: "It's like the Fitbit app from back when the Fitbit app was good. Fantastic work!"
      },
      {
        author: 'Vlastní Cestou',
        rating: 5,
        date: '2026-08-25',
        text: "Refreshing to find a health app that actually respects privacy - no account, no ads, no tracking, and it reads Health Connect data more reliably than Google's own Fit app. Daily Readiness and Body Energy insights are genuinely useful, and the dev is quick to respond to feedback. Open source too - impressive work for a solo project!"
      },
      {
        author: 'Przemyslaw Kusiak',
        rating: 5,
        date: '2026-08-23',
        text: 'Great app! I use it to import FIT and TCX workouts to Google Health'
      },
      {
        author: 'José Papaianni',
        rating: 5,
        date: '2026-08-10',
        text: 'Finally! A transparent health tracking app'
      },
      {
        author: 'Ezequiel Aciar',
        rating: 5,
        date: '2026-08-10',
        text: 'everything I was looking for!'
      },
      {
        author: 'aniket kadam',
        rating: 5,
        date: '2026-07-06',
        text: "great app! The developer deserves big praise. He's great with feedback and resolution. Thank you!"
      },
      {
        author: 'Joshua King',
        rating: 5,
        date: '2026-07-04',
        text: 'Exactly what I wanted from the Google Health app but better! Great work man! 👏'
      },
      {
        author: 'Karan Dhillon',
        rating: 5,
        date: '2026-06-13',
        text: "as an android engineer, i am really disappointed how google's own google health app cannot correct query their own health connect repo. Yet this app does that job flawlessly!"
      },
      {
        author: 'Rob Pitt',
        rating: 5,
        date: '2026-06-05',
        text: "Cool little tool that displays health data with no forced data collection, in fact according to Gemini, it currently doesn't even have system level permission to access the Internet."
      }
    ]
  },
  install: {
    eyebrow: 'Get OpenVitals',
    title: 'Install OpenVitals on Android.',
    text: 'Choose the Android channel that fits how you update apps. OpenVitals is also available as signed releases for people who prefer direct project downloads.',
    moreLabel: 'More install resources',
    guide: 'Install guide',
    cards: [
      {
        title: 'Google Play',
        text: 'Use the standard Android install and update path.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Get it on Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Install through the free and open-source Android app store.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Get it on F-Droid'
      },
      {
        title: 'GitHub releases',
        text: 'Download signed APK releases directly from the project.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Get it on GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Support the project',
    title: 'Help OpenVitals grow.',
    text: 'Leave a positive review on Google Play, translate the Android app for more people, or fund the ongoing development, testing, documentation, releases, and maintenance behind this free and open-source project.',
    actionsLabel: 'Support OpenVitals',
    review: 'Review on Google Play',
    translate: 'Translate OpenVitals',
    liberapayAlt: 'Support OpenVitals on Liberapay',
    more: 'More ways to support'
  },
  footer: {
    publisher: 'Published by Hale MTÜ, a non-profit association.',
    nav: 'Footer navigation',
    documentation: 'Documentation',
    privacy: 'Privacy',
    source: 'Source',
    translate: 'Translate',
    support: 'Support'
  }
}

export default en
