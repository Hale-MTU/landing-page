import type { Messages } from '../messages'

const de: Messages = {
  meta: {
    title: 'OpenVitals - Gesundheitsübersicht für Android, lokal auf deinem Telefon',
    description:
      'OpenVitals ist eine Android-App, die lokal auf deinem Telefon arbeitet: Health-Connect-Daten ansehen, eintragen, importieren und verstehen, ohne Konto, Werbung oder Nutzungsanalyse.',
    ogDescription:
      'Eine Gesundheitsübersicht für Android, die lokal arbeitet und auf Health Connect aufbaut. Ohne Konto, Werbung oder Nutzungsanalyse.',
    twitterDescription:
      'Gesundheits-Tools für Android, die lokal mit deinen Health-Connect-Daten arbeiten. Ohne Konto, Werbung oder Nutzungsanalyse.'
  },
  hale: {
    eyebrow: 'Kostenlose Offline-Gesundheits-Apps für Android',
    title: 'Deine Gesundheitsdaten, auf deinem Telefon und nirgendwo sonst.',
    text: 'Hale MTÜ ist der estnische gemeinnützige Verein hinter OpenVitals, OpenWatch und OpenBridge: keine Konten, keine Werbung, keine Analytik, keine Cloud.',
    appsLabel: 'Die Apps',
    apps: {
      openvitals: { text: 'Das Dashboard. Liest deine Health-Connect-Einträge und macht daraus eine Tagesansicht; importiert, zeichnet auf und protokolliert, alles auf dem Telefon.', link: 'Über OpenVitals' },
      openwatch: { text: 'Die Geräte. Koppelt Garmin- und Wear-OS-Uhren und eine Xiaomi-Waage per Bluetooth und kopiert ihre Aufzeichnungen nach Health Connect.', link: 'Über OpenWatch' },
      openbridge: { text: 'Der Weg nach draußen. Eine optionale App, die von OpenVitals freigegebene Daten an Online-Dienste weitergibt. In früher Phase.', link: 'Über OpenBridge' }
    },
    metaTitle: 'Hale - Kostenlose Offline-Gesundheits-Apps für Android',
    metaDescription: 'Hale MTÜ ist der estnische gemeinnützige Verein hinter OpenVitals, OpenWatch und OpenBridge: kostenlose Open-Source-Gesundheits-Apps für Android, ohne Konten, Werbung oder Cloud.',
    principlesTitle: 'Was die drei Apps gemeinsam haben',
    principles: [
      { title: 'Kein Konto, keine Hale-Cloud', text: 'Keine Anmeldung und kein Hale-Server. Deine Einträge bleiben in Androids Health Connect, außer du gibst sie selbst weiter.' },
      { title: 'Keine Werbung, keine Analytik', text: 'Keine Tracking-SDKs in irgendeiner App und kein Geschäft mit deinen Daten.' },
      { title: 'Frei und quelloffen', text: 'Jede App ist freie Software unter der AGPL-3.0-or-later, mit ihrem Quellcode auf GitHub.' },
      { title: 'Getragen von einem gemeinnützigen Verein', text: 'Hale MTÜ ist in Tallinn, Estland, eingetragen. Seine Einnahmen dienen nur seinen Zwecken und werden nie ausgeschüttet.' }
    ],
    aboutTitle: 'Über Hale',
    aboutText: 'Hale ist das alte englische Wort für gesund, wie in „hale and hearty“. Der Verein veröffentlicht die Apps und kümmert sich um ihren Code und ihre Gemeinschaft. Schreib an hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Uhren und eine Waage für Health Connect',
    metaDescription: 'OpenWatch koppelt Garmin- und Wear-OS-Uhren und eine Xiaomi-Waage per Bluetooth und kopiert ihre Aufzeichnungen nach Health Connect. Ohne Konto, ohne Server, ohne Internetberechtigung.',
    eyebrow: 'Uhren und eine Waage für Health Connect',
    lede: 'OpenWatch koppelt deine Uhr und deine Waage per Bluetooth, kopiert ihre Aufzeichnungen nach Health Connect und verwaltet sie. Ohne Konto, ohne Server, ohne Internetberechtigung.',
    devicesTitle: 'Die unterstützten Geräte',
    devices: [
      { title: 'Garmin-Uhren', text: 'Aktivitäten, Schlaf und Wellness über Garmins eigenes Bluetooth-Protokoll synchronisiert, dazu Benachrichtigungen, Musiksteuerung, Wetter, Kalender, Wecker und Uhr finden.' },
      { title: 'Wear-OS-Uhren', text: 'Die OpenWatch-Uhren-App zeichnet Herzfrequenz, Schritte und Etagen auf und synchronisiert sie per Tipp oder nach Zeitplan, mit geschätztem Schlaf und Ruhepuls jede Nacht.' },
      { title: 'Xiaomi-Waage S400', text: 'Jede Wägung landet sofort in Health Connect, ob die App offen ist oder nicht. Körperfett, Magermasse und Körperwasser schätzt das Telefon.' }
    ],
    privacyTitle: 'Wohin deine Daten gehen',
    privacy: [
      { title: 'Keine Internetberechtigung', text: 'Die Telefon-App kann das Internet nicht erreichen. Alles läuft per Bluetooth zwischen Gerät und Telefon.' },
      { title: 'Nach Health Connect', text: 'Was ein Gerät aufzeichnet, landet in Androids Gesundheitsspeicher, wo OpenVitals und jede App, die du zulässt, es lesen kann.' },
      { title: 'Der Rest bleibt auf dem Telefon', text: 'Messwerte, die Health Connect nicht aufnehmen kann, etwa Stress oder Body Battery, bleiben in der eigenen Datenbank von OpenWatch.' }
    ],
    pairText: 'Mit OpenWatch kommen die Daten herein; mit OpenVitals schaust du sie dir an.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - OpenVitals-Daten an Online-Dienste weitergeben',
    metaDescription: 'OpenBridge ist eine optionale Android-App, die von OpenVitals freigegebene Daten liest und an Online-Dienste weitergeben kann. In früher Phase.',
    eyebrow: 'Optional, in früher Phase',
    lede: 'OpenVitals geht nie ins Internet. OpenBridge ist die separate App, die es kann: Sie liest nur, was du OpenVitals freigeben lässt, und kann es an Online-Dienste weitergeben.',
    stepsTitle: 'Wie sie an die Daten kommt',
    steps: [
      'Schalte in den Einstellungen von OpenVitals das Teilen mit anderen Apps ein. Es ist zunächst aus.',
      'Fordere in OpenBridge die Gruppen an, die du teilen willst. Android fragt einmal für jede der elf Gruppen, und du kannst die Antwort später in seinen Einstellungen ändern.',
      'Lies eine Gruppe oder alle: Tageswerte der letzten Woche, Messpunkte des letzten Tages, Einheiten und Routen des letzten Monats.'
    ],
    statusTitle: 'Wo sie steht',
    statusText: 'Noch ist kein Online-Dienst angebunden, und die Teilen-Schnittstelle gibt es vorerst nur in Testversionen von OpenVitals. Verfolge die Arbeit auf GitHub.'
  },
  nav: {
    primary: 'Hauptnavigation',
    docs: 'Doku',
    install: 'Installieren',
    home: 'Hale Startseite',
    language: 'Sprache'
  },
  hero: {
    eyebrow: 'Gesundheits-Tools für Android, die lokal arbeiten',
    lede:
      'Eine private Übersicht für Health Connect, mit der du deine Gesundheitsdaten ansiehst, einträgst, importierst und verstehst. Ohne Konto, Werbung, Nutzungsanalyse und ohne OpenVitals-Cloud.',
    install: 'Auf Android installieren',
    docs: 'Dokumentation lesen',
    actionsLabel: 'OpenVitals-Aktionen'
  },
  proof: {
    label: 'Datenschutzzusagen von OpenVitals',
    points: [
      'Kein Cloud-Konto bei OpenVitals',
      'Keine Internetberechtigung in der App',
      'Keine Werbung, keine eingebaute Nutzungsanalyse',
      'Health Connect bleibt die maßgebliche Datenquelle'
    ]
  },
  intro: {
    eyebrow: 'Für Menschen gemacht, nicht für Profile',
    title: 'Gesundheitsdaten sollen dir nützen, ohne in fremden Datensammlungen zu landen.',
    text:
      'OpenVitals liest unterstützte Einträge aus Health Connect und macht daraus übersichtliche Tagesansichten und Detailseiten. Die Kontrolle bleibt bei dir auf dem Gerät: Du entscheidest, welche Berechtigungen du erteilst und wann etwas geschrieben wird.'
  },
  privacy: {
    eyebrow: 'Datenschutz',
    title: 'Kein Konto. Kein soziales Netzwerk. Kein Datenhandel im Hintergrund.',
    text:
      'Die Android-App setzt auf klare, lokale Abläufe. Sie liest Health Connect, speichert App-Einstellungen auf dem Gerät und schreibt Gesundheitsdaten nur, wenn du speicherst, importierst, aufzeichnest, bearbeitest oder löschst.',
    link: 'Details zum Datenschutz ansehen',
    detailsLabel: 'Datenschutzdetails',
    items: [
      {
        title: 'Standardmäßig lokal',
        text: 'Für die Übersicht in der App braucht es keinen OpenVitals-Server.'
      },
      {
        title: 'Zugriff nur mit deiner Erlaubnis',
        text: 'Health-Connect-Berechtigungen bleiben sichtbar und werden bewusst erteilt.'
      },
      {
        title: 'Open Source',
        text: 'Die Android-App und die Dokumentation findest du auf GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Wearables',
    title: 'Funktioniert mit deiner Uhr.',
    text:
      'Verbinde jedes Wearable über Gadgetbridge oder die offizielle App des Herstellers. Synchronisiere Benachrichtigungen, Live-Herzfrequenz, Wetter und deinen Kalender direkt über Bluetooth. Alles fließt in Health Connect, und OpenVitals führt es in einer privaten Übersicht zusammen.',
    link: 'So funktioniert die Synchronisierung mit Health Connect',
    listLabel: 'Unterstützte Uhren und Sensoren',
    points: [
      {
        title: 'Jedes Wearable, das in Health Connect schreibt',
        text: 'Ob über Gadgetbridge oder die offizielle App des Herstellers: Wenn die Begleit-App mit Health Connect synchronisiert, sieht OpenVitals die Daten.'
      },
      {
        title: 'Schlaf, Herzfrequenz, Schritte und Trainings',
        text: 'Alle Messwerte deines Wearables landen in Health Connect: Schlafphasen, Herzfrequenz, HRV, Schritte und Trainings erscheinen in einer klaren Übersicht.'
      },
      {
        title: 'Live-Sensoren bleiben direkt verbunden',
        text: 'BLE-Herzfrequenzgurte sowie Trittfrequenz- und Leistungssensoren verbinden sich weiterhin direkt mit der App und liefern Live-Werte, während du ein Training aufzeichnest.'
      }
    ]
  },
  features: {
    eyebrow: 'Was die App kann',
    title: 'Ansehen, importieren, aufzeichnen, eintragen und verstehen. Alles auf dem Telefon.',
    cards: [
      {
        title: 'Alle Messwerte an einem Ort',
        text: 'Aktivität, Schlaf, Herz, Körper, Hydrierung, Ernährung und Zyklus auf einer Tagesübersicht. Trends, Statistiken und Detailseiten sind nur einen Tipp entfernt, wenn du wissen willst, was sich verändert hat.',
        accent: '#0f766e'
      },
      {
        title: 'Importiere, was du schon hast',
        text: 'Übernimm Exporte aus Apple Health sowie FIT-, GPX-, KML/KMZ-, TCX- und CSV-Dateien, einzeln oder als ganze Ordner. Eine CSV-Datei kann die Messungen einer Waage, ein Blutdruckprotokoll, eine Tabelle deiner Mahlzeiten oder exportierte Trainings enthalten. Was du anderswo gesammelt hast, kommt mit.',
        accent: '#2f6f9f'
      },
      {
        title: 'Aktivitäten und Trainings aufzeichnen',
        text: 'GPS-Routen auf Offline-Karten, die sich mitdrehen und dir folgen, Live-Abbiegehinweise von CoMaps mit der geplanten Route auf der Karte, BLE-Sensoren für Herzfrequenz, Trittfrequenz und Leistung, Sprachansagen, Runden und Wiederholungszählung. Trainingspläne legst du einmal an und absolvierst sie als geführte Einheiten: Sätze, Gewicht und Pause pro Übung, das Telefon zählt die Wiederholungen, und Pausen laufen als Countdown. Importierte und aufgezeichnete Routen erhalten korrigierte Höhenwerte aus Höhenkacheln, die auf dem Telefon gespeichert sind. Jedes Training lässt sich ohne Route als TCX, FIT oder CSV exportieren. In Health Connect wird erst geschrieben, wenn du speicherst.',
        accent: '#d95c3f'
      },
      {
        title: 'Funktioniert mit deiner Uhr',
        text: 'Verbinde jedes Wearable über Gadgetbridge oder die App des Herstellers: Synchronisiere Benachrichtigungen und eingehende Anrufe, Live-Herzfrequenz, Wetter, Kalender und Musiksteuerung über Bluetooth, auf Wunsch nach Zeitplan. Alles läuft über Health Connect in einer gemeinsamen Übersicht zusammen. Stell dich auf eine unterstützte Xiaomi-Waage, und die Messung landet in Health Connect, auch bei geschlossener App.',
        accent: '#a07b00'
      },
      {
        title: 'Trag die Werte ein, die nur du kennst',
        text: 'Die ganze Messung einer Körperanalysewaage, von Gewicht und Körperfett bis Körperwasser, Größe, Blutdruck mit Messumständen und Kategorien nach der Leitlinie deiner Wahl (ACC/AHA, ESH, ESC oder ISH), HRV, Blutzucker, VO2 max, Mahlzeiten, Getränke, Lebensmittel, die du einmal mit ihren Nährstoffen anlegst und dann portionsweise einträgst, Tagessummen beliebiger Nährstoffe direkt eingegeben, und Achtsamkeitsminuten. Schnell von Hand eingetragen, mit Erinnerungen und Widgets für den Startbildschirm.',
        accent: '#1f9d55'
      },
      {
        title: 'Ein Gesundheitsbericht für deinen Arzt',
        text: 'Wähle Messwerte und einen Zeitraum, und die App erstellt auf deinem Telefon ein PDF: Diagramme, Statistiken und klinische Abschnitte zu Blutdruck, Blutzucker, Trainings, Schlaf und Zyklusverfolgung. Jeder Nährstoff, den du erfasst, von Ballaststoffen bis Selen, kann ein eigenes Diagramm bekommen. Teile oder speichere es. Hochgeladen wird nichts.',
        accent: '#4f5d9e'
      },
      {
        title: 'Zyklusverfolgung, die dir gehört',
        text: 'Ein Tagesprotokoll für Blutung, Schmerz, Stimmung, Energie, Symptome, Notizen und Tests, eins nach dem anderen eingetragen. Die geschätzten Zeiträume für die nächste Periode beruhen auf deiner eigenen Historie, ein Pillenschema erinnert dich an den Einnahmetagen, und Health Connect behält seine Einträge, während das Tagebuch mit eigener Berechtigung geschützt auf deinem Telefon bleibt.',
        accent: '#b03a5b'
      },
      {
        title: 'Einblicke, auf deinem Telefon berechnet',
        text: 'Schlafwerte, Körperenergie und tägliche Bereitschaft werden auf dem Gerät berechnet, gemessen an deinen eigenen Basiswerten. Körperenergie berücksichtigt, wie gut du geschlafen hast (Effizienz, Wachzeit, Tief- und REM-Schlaf), nicht nur wie lange. Keine Cloud liest deine Daten, um dir zu sagen, wie du geschlafen hast.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Screenshots von OpenVitals',
    eyebrow: 'Ansichten der App',
    title: 'Gemacht, um den Tag schnell zu überblicken und tiefer einzusteigen, wenn es darauf ankommt.',
    items: [
      {
        src: '/images/screens/de/heart-rate-day.png',
        alt: 'OpenVitals: Herzfrequenz',
        label: 'Herzfrequenz'
      },
      {
        src: '/images/screens/de/log-metrics.png',
        alt: 'OpenVitals: Eintrag hinzufügen',
        label: 'Eintrag hinzufügen'
      },
      {
        src: '/images/screens/de/imports.png',
        alt: 'OpenVitals: Import & Export',
        label: 'Import & Export'
      },
      {
        src: '/images/screens/de/health-report.png',
        alt: 'OpenVitals: Gesundheitsbericht',
        label: 'Gesundheitsbericht'
      }
    ]
  },
  reviews: {
    label: 'Bewertungen auf Google Play',
    eyebrow: 'Von Google Play',
    title: 'Was Leute sagen, nachdem sie die App eine Weile genutzt haben.',
    text: 'Wörtlich zitiert aus öffentlichen Bewertungen auf Google Play, in der Originalsprache.',
    link: 'Alle Bewertungen auf Google Play lesen',
    trackLabel: 'Bewertungskarussell, seitlich scrollen für mehr',
    ratingLabel: '{rating} von 5 Sternen',
    translatedNote: 'Von Google übersetzt',
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
    eyebrow: 'OpenVitals holen',
    title: 'OpenVitals auf Android installieren.',
    text: 'Wähle den Android-Kanal, der dazu passt, wie du Apps aktualisierst. OpenVitals gibt es auch als signierte Versionen für alle, die lieber direkt beim Projekt herunterladen.',
    moreLabel: 'Weitere Hilfen zur Installation',
    guide: 'Installationsanleitung',
    cards: [
      {
        title: 'Google Play',
        text: 'Der übliche Weg, Android-Apps zu installieren und zu aktualisieren.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Jetzt bei Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Installiere über den App-Store für freie und quelloffene Android-Apps.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Jetzt bei F-Droid'
      },
      {
        title: 'Versionen auf GitHub',
        text: 'Signierte APK-Dateien direkt vom Projekt herunterladen.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Jetzt bei GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Unterstütze das Projekt',
    title: 'Hilf OpenVitals beim Wachsen.',
    text: 'Hinterlasse eine positive Bewertung auf Google Play, übersetze die Android-App für mehr Menschen oder finanziere die laufende Entwicklung, Tests, Dokumentation, Veröffentlichungen und Pflege dieses freien Open-Source-Projekts.',
    actionsLabel: 'OpenVitals unterstützen',
    review: 'Auf Google Play bewerten',
    translate: 'OpenVitals übersetzen',
    liberapayAlt: 'OpenVitals auf Liberapay unterstützen',
    more: 'Weitere Wege zu helfen'
  },
  footer: {
    publisher: 'Herausgegeben von Hale MTÜ, einem gemeinnützigen Verein in Tallinn, Estland.',
    nav: 'Fußzeilennavigation',
    documentation: 'Dokumentation',
    privacy: 'Datenschutz',
    source: 'Quellcode',
    translate: 'Übersetzen',
    support: 'Unterstützen'
  }
}

export default de
