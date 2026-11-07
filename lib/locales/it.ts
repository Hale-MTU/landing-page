import type { Messages } from '../messages'

const it: Messages = {
  meta: {
    title: 'OpenVitals - Dashboard per la salute su Android che funziona in locale',
    description:
      "OpenVitals è un'app Android che funziona in locale per vedere, registrare, importare e capire i dati di Health Connect, senza account, pubblicità né statistiche d'uso.",
    ogDescription:
      "Una dashboard per la salute su Android che funziona in locale con Health Connect, senza account, pubblicità né statistiche d'uso.",
    twitterDescription:
      "Strumenti per la salute su Android che funzionano in locale con i dati di Health Connect, senza account, pubblicità né statistiche d'uso."
  },
  hale: {
    eyebrow: 'App per la salute gratuite e offline per Android',
    title: 'I tuoi dati sulla salute, sul tuo telefono e da nessun\'altra parte.',
    text: 'Hale MTÜ è l\'associazione estone senza scopo di lucro dietro OpenVitals, OpenWatch e OpenBridge: niente account, niente pubblicità, niente analitiche, niente cloud.',
    appsLabel: 'Le app',
    apps: {
      openvitals: { text: 'Il cruscotto. Legge i tuoi record di Health Connect e li trasforma in una vista giornaliera; importa, registra e annota, tutto sul telefono.', link: 'Informazioni su OpenVitals' },
      openwatch: { text: 'I dispositivi. Associa orologi Garmin e Wear OS e una bilancia Xiaomi via Bluetooth e copia ciò che registrano in Health Connect.', link: 'Informazioni su OpenWatch' },
      openbridge: { text: 'La via d\'uscita. Un\'app facoltativa che passa i dati condivisi da OpenVitals a servizi online. In fase iniziale.', link: 'Informazioni su OpenBridge' }
    },
    metaTitle: 'Hale - App per la salute gratuite e offline per Android',
    metaDescription: 'Hale MTÜ è l\'associazione estone senza scopo di lucro dietro OpenVitals, OpenWatch e OpenBridge: app per la salute libere e gratuite per Android, senza account, pubblicità o cloud.',
    principlesTitle: 'Cosa hanno in comune le tre app',
    principles: [
      { title: 'Nessun account, nessun cloud Hale', text: 'Niente da registrare e nessun server Hale. I tuoi dati restano in Health Connect di Android, a meno che tu non scelga di inoltrarli.' },
      { title: 'Niente pubblicità, niente analitiche', text: 'Nessun SDK di tracciamento in nessuna app e nessun business costruito sui tuoi dati.' },
      { title: 'Libere e open source', text: 'Ogni app è software libero con licenza AGPL-3.0-or-later e il suo codice è su GitHub.' },
      { title: 'Gestite da un\'associazione senza scopo di lucro', text: 'Hale MTÜ è registrata a Tallinn, in Estonia. Le sue entrate servono solo ai suoi scopi e non vengono mai distribuite.' }
    ],
    aboutTitle: 'Chi è Hale',
    aboutText: 'Hale è l\'antica parola inglese per sano, come in «hale and hearty». L\'associazione pubblica le app e si prende cura del loro codice e della loro comunità. Scrivi a hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Orologi e una bilancia per Health Connect',
    metaDescription: 'OpenWatch associa orologi Garmin e Wear OS e una bilancia Xiaomi via Bluetooth e copia ciò che registrano in Health Connect. Senza account, senza server, senza permesso di accesso a internet.',
    eyebrow: 'Orologi e una bilancia per Health Connect',
    lede: 'OpenWatch associa il tuo orologio e la tua bilancia via Bluetooth, copia ciò che registrano in Health Connect e li gestisce. Senza account, senza server, senza permesso di accesso a internet.',
    devicesTitle: 'I dispositivi supportati',
    devices: [
      { title: 'Orologi Garmin', text: 'Attività, sonno e benessere sincronizzati con il protocollo Bluetooth di Garmin, oltre a notifiche, controllo della musica, meteo, calendario, sveglie e trova orologio.' },
      { title: 'Orologi Wear OS', text: 'L\'app OpenWatch per l\'orologio registra battito, passi e piani e li sincronizza con un tocco o secondo una pianificazione, con una stima del sonno e del battito a riposo ogni notte.' },
      { title: 'Bilancia Xiaomi S400', text: 'Ogni pesata viene salvata subito in Health Connect, con l\'app aperta o chiusa. Massa grassa, massa magra e acqua corporea sono stimate sul telefono.' }
    ],
    privacyTitle: 'Dove vanno i tuoi dati',
    privacy: [
      { title: 'Nessun permesso internet', text: 'L\'app del telefono non può accedere a internet. Tutto passa via Bluetooth tra il dispositivo e il telefono.' },
      { title: 'In Health Connect', text: 'Ciò che un dispositivo registra finisce nell\'archivio salute di Android, dove OpenVitals e qualsiasi app che autorizzi possono leggerlo.' },
      { title: 'Il resto resta sul telefono', text: 'Le misure che Health Connect non può conservare, come lo stress o Body Battery, restano nel database di OpenWatch.' }
    ],
    pairText: 'OpenWatch è da dove arrivano i dati; OpenVitals è dove li guardi.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - Inoltrare i dati di OpenVitals a servizi online',
    metaDescription: 'OpenBridge è un\'app Android facoltativa che legge i dati condivisi da OpenVitals e può inoltrarli a servizi online. In fase iniziale.',
    eyebrow: 'Facoltativa, in fase iniziale',
    lede: 'OpenVitals non si collega mai a internet. OpenBridge è l\'app separata che può farlo: legge solo ciò che lasci condividere a OpenVitals e può inoltrarlo a servizi online.',
    stepsTitle: 'Come ottiene i dati',
    steps: [
      'Nelle impostazioni di OpenVitals, attiva la condivisione con altre app. All\'inizio è disattivata.',
      'In OpenBridge, richiedi i gruppi che vuoi condividere. Android chiede una volta per ciascuno degli undici gruppi e puoi cambiare la risposta più tardi nelle sue impostazioni.',
      'Leggi un gruppo o tutti: i totali giornalieri dell\'ultima settimana, i campioni dell\'ultimo giorno, le sessioni e i percorsi dell\'ultimo mese.'
    ],
    statusTitle: 'A che punto è',
    statusText: 'Nessun servizio online è ancora collegato e per ora l\'API di condivisione è presente solo nelle versioni di prova di OpenVitals. Segui il lavoro su GitHub.'
  },
  nav: {
    primary: 'Navigazione principale',
    docs: 'Documentazione',
    install: 'Installa',
    home: 'Home di Hale',
    language: 'Lingua'
  },
  hero: {
    eyebrow: 'Strumenti per la salute in locale su Android',
    lede:
      "Una dashboard privata per Health Connect con cui vedere, registrare, importare e capire i tuoi dati sulla salute, senza account, pubblicità, statistiche d'uso né un cloud di OpenVitals.",
    install: 'Installa su Android',
    docs: 'Leggi la documentazione',
    actionsLabel: 'Azioni di OpenVitals'
  },
  proof: {
    label: 'Garanzie di privacy di OpenVitals',
    points: [
      'Nessun account cloud di OpenVitals',
      "Nessun permesso di accesso a Internet per l'app",
      "Nessuna pubblicità, nessun SDK di statistiche d'uso",
      'Health Connect resta la fonte di riferimento'
    ]
  },
  intro: {
    eyebrow: 'Pensata per le persone, non per i profili',
    title: 'I dati sulla salute dovrebbero essere utili senza finire nel database di qualcun altro.',
    text:
      "OpenVitals legge i dati compatibili di Health Connect, li trasforma in viste giornaliere chiare e schermate di dettaglio, e lascia il controllo sul dispositivo. Sei tu a decidere quali autorizzazioni concedere e quando viene scritto qualcosa."
  },
  privacy: {
    eyebrow: 'Il nostro approccio alla privacy',
    title: 'Nessun account. Nessun feed. Nessun commercio di dati dietro le quinte.',
    text:
      "L'app Android è progettata attorno ad azioni locali ed esplicite. Legge Health Connect, salva le sue preferenze sul dispositivo e scrive dati sulla salute solo dopo che salvi, importi, registri, modifichi o elimini qualcosa.",
    link: 'Leggi i dettagli sulla privacy',
    detailsLabel: 'Dettagli sulla privacy',
    items: [
      {
        title: 'In locale per impostazione predefinita',
        text: "La dashboard dell'app non ha bisogno di alcun server di OpenVitals."
      },
      {
        title: 'Accesso concesso da te',
        text: 'Le autorizzazioni di Health Connect restano visibili e le concedi tu, consapevolmente.'
      },
      {
        title: 'Open source',
        text: "L'app Android e la documentazione sono disponibili su GitHub."
      }
    ]
  },
  devices: {
    eyebrow: 'Dispositivi indossabili',
    title: 'Funziona con il tuo orologio.',
    text:
      "Collega qualsiasi dispositivo indossabile tramite Gadgetbridge o l'app ufficiale del produttore. Sincronizza notifiche, frequenza cardiaca in tempo reale, meteo e calendario direttamente via Bluetooth. Tutto confluisce in Health Connect e OpenVitals lo riunisce in un'unica dashboard privata.",
    link: 'Come funziona la sincronizzazione con Health Connect',
    listLabel: 'Orologi e sensori supportati',
    points: [
      {
        title: 'Qualsiasi indossabile che scriva in Health Connect',
        text: "Che usi Gadgetbridge o l'app ufficiale del produttore, se l'app abbinata sincronizza con Health Connect, OpenVitals vede i dati."
      },
      {
        title: 'Sonno, frequenza cardiaca, passi e allenamenti',
        text: 'Tutte le metriche del tuo indossabile arrivano in Health Connect: fasi del sonno, frequenza cardiaca, HRV, passi e allenamenti compaiono in una dashboard chiara.'
      },
      {
        title: 'I sensori in tempo reale restano collegati direttamente',
        text: "Le fasce cardio BLE e i sensori di cadenza e potenza continuano a collegarsi direttamente all'app per i dati in tempo reale mentre registri un allenamento."
      }
    ]
  },
  features: {
    eyebrow: 'Cosa fa',
    title: 'Vedere, importare, registrare, annotare e capire. Tutto sul telefono.',
    cards: [
      {
        title: 'Tutte le metriche in un unico posto',
        text: "Attività, sonno, cuore, corpo, idratazione, nutrizione e ciclo in un'unica dashboard giornaliera. Tendenze, statistiche e schermate di dettaglio sono a un tocco di distanza quando vuoi capire cosa è cambiato.",
        accent: '#0f766e'
      },
      {
        title: 'Importa quello che hai già',
        text: 'Aggiungi le esportazioni di Apple Health e i file FIT, GPX, KML/KMZ, TCX e CSV, uno alla volta o per cartelle intere. Un CSV può contenere le pesate di una bilancia, un diario della pressione, un foglio con i tuoi pasti o gli allenamenti che hai esportato. Lo storico che hai costruito altrove ti segue.',
        accent: '#2f6f9f'
      },
      {
        title: 'Registra attività e allenamenti',
        text: "Percorsi GPS su mappe offline che ruotano e ti seguono, indicazioni svolta per svolta di CoMaps in tempo reale con il percorso pianificato sulla mappa, sensori BLE di frequenza cardiaca, cadenza e potenza, annunci vocali, giri e conteggio delle ripetizioni. Piani di allenamento creati una volta e seguiti come sessioni guidate, con serie, peso e riposo per ogni esercizio, ripetizioni contate dal telefono e conto alla rovescia dei riposi. I percorsi importati e registrati ricevono l'altitudine corretta dai riquadri di elevazione salvati sul telefono. Qualsiasi allenamento si può esportare, senza il percorso, in TCX, FIT o CSV. Viene scritto in Health Connect solo quando salvi.",
        accent: '#d95c3f'
      },
      {
        title: 'Funziona con il tuo orologio',
        text: "Collega qualsiasi dispositivo indossabile tramite Gadgetbridge o l'app del produttore: sincronizza via Bluetooth notifiche e chiamate in arrivo, frequenza cardiaca in tempo reale, meteo, calendario e controlli musicali, anche a intervalli programmati se vuoi. Tutto si sincronizza tramite Health Connect in un'unica dashboard. Sali su una bilancia Xiaomi supportata e la pesata arriva in Health Connect, anche con l'app chiusa.",
        accent: '#a07b00'
      },
      {
        title: 'Annota i valori che conosci solo tu',
        text: 'L\'intera pesata di una bilancia impedenziometrica, dal peso e grasso corporeo all\'acqua corporea, altezza, pressione sanguigna con il contesto della misurazione e le categorie della linea guida che scegli (ACC/AHA, ESH, ESC o ISH), HRV, glucosio nel sangue, VO2 max, pasti, bevande, alimenti che definisci una volta con i loro nutrienti e registri per porzione, totali giornalieri di qualsiasi nutriente inseriti direttamente, e minuti di consapevolezza. Inserimento manuale rapido, con promemoria e widget per la schermata Home.',
        accent: '#1f9d55'
      },
      {
        title: 'Un report che il tuo medico può tenere in mano',
        text: "Scegli le metriche e un intervallo di tempo, e l'app crea un PDF sul tuo telefono: grafici, statistiche e sezioni cliniche per pressione sanguigna, glucosio nel sangue, allenamenti, sonno e tracciamento del ciclo. Ogni nutriente che registri, dalle fibre al selenio, può avere un suo grafico. Condividilo o salvalo: non viene caricato nulla.",
        accent: '#4f5d9e'
      },
      {
        title: 'Un tracciamento del ciclo che resta tuo',
        text: "Un diario del giorno per sanguinamento, dolore, umore, energia, sintomi, note e test, da compilare una voce alla volta. La finestra prevista per le prossime mestruazioni si basa sul tuo storico, uno schema della pillola anticoncezionale ti ricorda i giorni di assunzione, e Health Connect conserva i suoi dati mentre il diario resta sul telefono, protetto da un'autorizzazione tutta sua.",
        accent: '#b03a5b'
      },
      {
        title: 'Indicatori calcolati sul tuo telefono',
        text: 'Punteggi del sonno, Energia corporea e Prontezza giornaliera vengono calcolati sul dispositivo rispetto alla tua linea di base personale. Energia corporea guarda a come hai dormito (efficienza, tempo di veglia, sonno profondo e REM), non solo a quanto. Nessun cloud legge i tuoi dati per dirti come hai dormito.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Schermate di OpenVitals',
    eyebrow: "Uno sguardo all'app",
    title: "Pensata per dare un'occhiata alla giornata e poi approfondire quando serve.",
    items: [
      {
        src: '/images/screens/it/heart-rate-day.png',
        alt: 'OpenVitals: Frequenza cardiaca',
        label: 'Frequenza cardiaca'
      },
      {
        src: '/images/screens/it/log-metrics.png',
        alt: 'OpenVitals: Aggiungi voce',
        label: 'Aggiungi voce'
      },
      {
        src: '/images/screens/it/imports.png',
        alt: 'OpenVitals: Importazione ed esportazione',
        label: 'Importazione ed esportazione'
      },
      {
        src: '/images/screens/it/health-report.png',
        alt: 'OpenVitals: Report sulla salute',
        label: 'Report sulla salute'
      }
    ]
  },
  reviews: {
    label: 'Recensioni su Google Play',
    eyebrow: 'Da Google Play',
    title: 'Cosa dice chi la usa ogni giorno.',
    text: 'Citazioni testuali da recensioni pubbliche sulla scheda Google Play, nella loro lingua originale.',
    link: 'Leggi tutte le recensioni su Google Play',
    trackLabel: 'Carosello delle recensioni, scorri di lato per vederne altre',
    ratingLabel: '{rating} stelle su 5',
    translatedNote: 'Tradotto da Google',
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
    eyebrow: 'Scarica OpenVitals',
    title: 'Installa OpenVitals su Android.',
    text: "Scegli il canale Android più adatto al modo in cui aggiorni le app. OpenVitals è disponibile anche come versioni firmate per chi preferisce scaricarle direttamente dal progetto.",
    moreLabel: "Altre risorse per l'installazione",
    guide: "Guida all'installazione",
    cards: [
      {
        title: 'Google Play',
        text: 'Usa il percorso standard di installazione e aggiornamento di Android.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Disponibile su Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Installala dallo store Android di app libere e open source.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Disponibile su F-Droid'
      },
      {
        title: 'Versioni su GitHub',
        text: 'Scarica gli APK firmati direttamente dal progetto.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Disponibile su GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Sostieni il progetto',
    title: 'Aiuta OpenVitals a crescere.',
    text: "Lascia una recensione positiva su Google Play, traduci l'app Android per raggiungere più persone o finanzia lo sviluppo, i test, la documentazione, i rilasci e la manutenzione continui di questo progetto libero e open source.",
    actionsLabel: 'Sostieni OpenVitals',
    review: 'Recensisci su Google Play',
    translate: 'Traduci OpenVitals',
    liberapayAlt: 'Sostieni OpenVitals su Liberapay',
    more: 'Altri modi per sostenerci'
  },
  footer: {
    publisher: 'Pubblicato da Hale MTÜ, associazione senza scopo di lucro di Tallinn, Estonia.',
    nav: 'Navigazione del piè di pagina',
    documentation: 'Documentazione',
    privacy: 'Privacy',
    source: 'Codice sorgente',
    translate: 'Traduci',
    support: 'Sostieni'
  }
}

export default it
