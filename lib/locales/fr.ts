import type { Messages } from '../messages'

const fr: Messages = {
  meta: {
    title: 'OpenVitals - Tableau de bord santé Android, en local',
    description:
      "OpenVitals est une application Android qui fonctionne en local pour consulter, noter, importer et comprendre vos données Santé Connect, sans compte, sans publicité ni analyse d'usage.",
    ogDescription:
      "Un tableau de bord santé Android qui fonctionne en local, alimenté par Santé Connect, sans compte, sans publicité ni analyse d'usage.",
    twitterDescription:
      "Des outils santé Android qui fonctionnent en local avec vos données Santé Connect, sans compte, sans publicité ni analyse d'usage."
  },
  hale: {
    eyebrow: 'Des applis santé gratuites et hors ligne pour Android',
    title: 'Vos données de santé, sur votre téléphone et nulle part ailleurs.',
    text: 'Hale MTÜ est l\'association à but non lucratif derrière OpenVitals, OpenWatch et OpenBridge : pas de compte, pas de publicité, pas d\'analytique, pas de cloud.',
    appsLabel: 'Les applis',
    apps: {
      openvitals: { text: 'Le tableau de bord. Lit vos enregistrements Health Connect et en fait une vue quotidienne ; importe, enregistre et consigne, tout sur le téléphone.', link: 'À propos d\'OpenVitals' },
      openwatch: { text: 'Les appareils. Appaire les montres Garmin et Wear OS et une balance Xiaomi en Bluetooth et copie leurs enregistrements dans Health Connect.', link: 'À propos d\'OpenWatch' },
      openbridge: { text: 'La sortie. Une appli facultative qui transmet les données partagées par OpenVitals à des services en ligne. À un stade précoce.', link: 'À propos d\'OpenBridge' }
    },
    metaTitle: 'Hale - Des applis santé gratuites et hors ligne pour Android',
    metaDescription: 'Hale MTÜ est l\'association à but non lucratif derrière OpenVitals, OpenWatch et OpenBridge : des applis santé libres et gratuites pour Android, sans compte, sans publicité et sans cloud.',
    principlesTitle: 'Ce que les trois applis ont en commun',
    principles: [
      { title: 'Pas de compte, pas de cloud Hale', text: 'Rien à créer et aucun serveur Hale. Vos données restent dans Health Connect sur Android, sauf si vous choisissez de les transmettre.' },
      { title: 'Pas de publicité, pas d\'analytique', text: 'Aucun SDK de suivi dans aucune appli, et aucun commerce fondé sur vos données.' },
      { title: 'Libres et open source', text: 'Chaque appli est un logiciel libre sous licence AGPL-3.0-or-later, avec son code source sur GitHub.' },
      { title: 'Portées par une association', text: 'Hale MTÜ est une association à but non lucratif. Ses revenus servent uniquement ses objectifs et ne sont jamais distribués.' }
    ],
    aboutTitle: 'À propos de Hale',
    aboutText: 'Hale est un vieux mot anglais qui signifie en bonne santé, comme dans « hale and hearty ». L\'association publie les applis et prend soin de leur code et de leur communauté. Écrivez à hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Des montres et une balance pour Health Connect',
    metaDescription: 'OpenWatch appaire les montres Garmin et Wear OS et une balance Xiaomi en Bluetooth et copie leurs enregistrements dans Health Connect. Sans compte, sans serveur, sans autorisation d\'accès à internet.',
    eyebrow: 'Des montres et une balance pour Health Connect',
    lede: 'OpenWatch appaire votre montre et votre balance en Bluetooth, copie leurs enregistrements dans Health Connect et les gère. Sans compte, sans serveur, sans autorisation d\'accès à internet.',
    devicesTitle: 'Les appareils pris en charge',
    devices: [
      { title: 'Montres Garmin', text: 'Activités, sommeil et bien-être synchronisés avec le protocole Bluetooth de Garmin, plus les notifications, le contrôle de la musique, la météo, l\'agenda, les alarmes et la recherche de la montre.' },
      { title: 'Montres Wear OS', text: 'L\'appli OpenWatch pour la montre enregistre la fréquence cardiaque, les pas et les étages et les synchronise d\'une touche ou selon un horaire, avec chaque nuit une estimation du sommeil et du rythme au repos.' },
      { title: 'Balance Xiaomi S400', text: 'Chaque pesée est enregistrée dans Health Connect aussitôt, appli ouverte ou fermée. La masse grasse, la masse maigre et l\'eau corporelle sont estimées sur le téléphone.' }
    ],
    privacyTitle: 'Où vont vos données',
    privacy: [
      { title: 'Pas d\'accès à internet', text: 'L\'appli du téléphone ne peut pas accéder à internet. Tout passe en Bluetooth entre l\'appareil et le téléphone.' },
      { title: 'Vers Health Connect', text: 'Ce qu\'un appareil enregistre arrive dans le stockage santé d\'Android, où OpenVitals et toute appli que vous autorisez peuvent le lire.' },
      { title: 'Le reste reste sur le téléphone', text: 'Les mesures que Health Connect ne sait pas stocker, comme le stress ou Body Battery, restent dans la base de données propre à OpenWatch.' }
    ],
    pairText: 'OpenWatch fait entrer les données ; OpenVitals vous les montre.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - Transmettre les données OpenVitals à des services en ligne',
    metaDescription: 'OpenBridge est une appli Android facultative qui lit les données partagées par OpenVitals et peut les transmettre à des services en ligne. À un stade précoce.',
    eyebrow: 'Facultative, à un stade précoce',
    lede: 'OpenVitals ne se connecte jamais à internet. OpenBridge est l\'appli séparée qui le peut : elle ne lit que ce que vous laissez OpenVitals partager et peut le transmettre à des services en ligne.',
    stepsTitle: 'Comment elle obtient les données',
    steps: [
      'Dans les réglages d\'OpenVitals, activez le partage avec d\'autres applis. Il est désactivé au départ.',
      'Dans OpenBridge, demandez les groupes que vous voulez partager. Android pose la question une fois pour chacun des onze groupes, et vous pouvez changer la réponse plus tard dans ses réglages.',
      'Lisez un groupe ou tous : les totaux quotidiens de la dernière semaine, les mesures du dernier jour, les séances et parcours du dernier mois.'
    ],
    statusTitle: 'Où elle en est',
    statusText: 'Aucun service en ligne n\'est encore connecté, et l\'API de partage n\'existe pour l\'instant que dans les versions de test d\'OpenVitals. Suivez le travail sur GitHub.'
  },
  nav: {
    primary: 'Navigation principale',
    docs: 'Documentation',
    install: 'Installer',
    home: 'Accueil Hale',
    language: 'Langue'
  },
  hero: {
    eyebrow: 'Des outils santé en local pour Android',
    lede:
      "Un tableau de bord Santé Connect (Health Connect) privé pour consulter, noter, importer et comprendre vos données de santé, sans compte, sans publicité, sans analyse d'usage et sans cloud OpenVitals.",
    install: 'Installer sur Android',
    docs: 'Lire la documentation',
    actionsLabel: 'Actions OpenVitals'
  },
  proof: {
    label: 'Garanties de confidentialité OpenVitals',
    points: [
      'Aucun compte cloud OpenVitals',
      "Aucune autorisation Internet dans l'application",
      "Aucune publicité, aucun SDK d'analyse d'usage",
      'Santé Connect reste la source de référence'
    ]
  },
  intro: {
    eyebrow: 'Pensé pour des personnes, pas pour des profils',
    title: "Vos données de santé doivent vous être utiles, pas finir dans la base de données de quelqu'un d'autre.",
    text:
      "OpenVitals lit les enregistrements Santé Connect pris en charge, les transforme en vues quotidiennes claires et en écrans détaillés, et garde le contrôle sur l'appareil. C'est vous qui choisissez les autorisations à accorder et le moment où quelque chose est écrit."
  },
  privacy: {
    eyebrow: 'Notre approche de la confidentialité',
    title: "Pas de compte. Pas de fil d'actualité. Pas de commerce de données en coulisse.",
    text:
      "L'application Android repose sur des actions locales et explicites. Elle lit Santé Connect, stocke ses préférences sur l'appareil et n'écrit des données de santé qu'après une sauvegarde, une importation, un enregistrement d'activité, une modification ou une suppression.",
    link: 'Voir les détails sur la confidentialité',
    detailsLabel: 'Détails sur la confidentialité',
    items: [
      {
        title: 'En local par défaut',
        text: "Le tableau de bord de l'application ne nécessite aucun serveur OpenVitals."
      },
      {
        title: "C'est vous qui accordez l'accès",
        text: 'Les autorisations Santé Connect restent visibles et sont accordées en connaissance de cause.'
      },
      {
        title: 'Open source',
        text: "L'application Android et sa documentation sont disponibles sur GitHub."
      }
    ]
  },
  devices: {
    eyebrow: 'Objets connectés',
    title: 'Fonctionne avec votre montre.',
    text:
      "Associez n'importe quel objet connecté via Gadgetbridge ou l'application officielle de son fabricant. Synchronisez les notifications, la fréquence cardiaque en direct, la météo et votre calendrier directement en Bluetooth. Tout arrive dans Santé Connect, et OpenVitals rassemble le tout dans un seul tableau de bord privé.",
    link: 'Comment fonctionne la synchronisation avec Santé Connect',
    listLabel: 'Montres et capteurs compatibles',
    points: [
      {
        title: 'Tout objet connecté qui écrit dans Santé Connect',
        text: "Qu'il passe par Gadgetbridge ou par l'application officielle du fabricant, si l'application compagnon synchronise ses données avec Santé Connect, OpenVitals les voit."
      },
      {
        title: 'Sommeil, fréquence cardiaque, pas et entraînements',
        text: "Toutes les mesures de votre objet connecté arrivent dans Santé Connect : phases de sommeil, fréquence cardiaque, VFC, pas et entraînements s'affichent dans un tableau de bord clair."
      },
      {
        title: 'Les capteurs en direct restent reliés directement',
        text: "Les ceintures cardiaques BLE et les capteurs de cadence et de puissance continuent de se connecter directement à l'application pour les données en direct pendant l'enregistrement d'un entraînement."
      }
    ]
  },
  features: {
    eyebrow: 'Ce que fait OpenVitals',
    title: 'Consulter, importer, enregistrer, noter et comprendre. Le tout sur votre téléphone.',
    cards: [
      {
        title: 'Toutes vos mesures au même endroit',
        text: "Activité, sommeil, cœur, corps, hydratation, nutrition et cycle sur un seul tableau de bord quotidien. Tendances, statistiques et écrans détaillés s'ouvrent d'un simple appui quand vous voulez savoir ce qui a changé.",
        accent: '#0f766e'
      },
      {
        title: 'Importez ce que vous avez déjà',
        text: "Importez vos exports Apple Santé et vos fichiers FIT, GPX, KML/KMZ, TCX et CSV, un par un ou par dossiers entiers. Un CSV peut contenir les pesées d'une balance, un relevé de tension, un tableau de vos repas ou les entraînements que vous avez exportés. L'historique que vous avez construit ailleurs vous suit.",
        accent: '#2f6f9f'
      },
      {
        title: 'Enregistrez activités et entraînements',
        text: "Itinéraires GPS tracés sur des cartes hors ligne qui pivotent et vous suivent, guidage CoMaps étape par étape en direct avec l'itinéraire prévu sur la carte, capteurs BLE de fréquence cardiaque, de cadence et de puissance, annonces vocales, tours et comptage des répétitions. Des plans d'entraînement créés une fois puis suivis en séances guidées, avec séries, charge et repos pour chaque exercice, répétitions comptées par le téléphone et temps de repos avec compte à rebours. Les itinéraires importés et enregistrés voient leur altitude corrigée grâce aux tuiles d'altitude stockées sur le téléphone. Tout entraînement s'exporte sans son itinéraire en TCX, FIT ou CSV. Rien n'est écrit dans Santé Connect tant que vous n'avez pas sauvegardé.",
        accent: '#d95c3f'
      },
      {
        title: 'Fonctionne avec votre montre',
        text: "Associez n'importe quel objet connecté via Gadgetbridge ou l'application du fabricant : synchronisez en Bluetooth les notifications et les appels entrants, la fréquence cardiaque en direct, la météo, le calendrier et les commandes de musique, à intervalles réguliers si vous le souhaitez. Tout se synchronise via Santé Connect dans un seul tableau de bord. Montez sur une balance Xiaomi compatible et la pesée arrive dans Santé Connect, même appli fermée.",
        accent: '#a07b00'
      },
      {
        title: "Notez les chiffres que personne d'autre ne connaît",
        text: "La pesée complète d'une balance impédancemètre, du poids et de la masse grasse à l'eau corporelle, taille, tension artérielle avec son contexte de mesure et ses catégories selon les recommandations de votre choix (ACC/AHA, ESH, ESC ou ISH), VFC, glycémie, VO2 max, repas, boissons, aliments définis une fois avec leurs nutriments puis notés par portion, totaux quotidiens de n'importe quel nutriment saisis directement, et minutes de pleine conscience. Saisie manuelle rapide, avec rappels et widgets pour l'écran d'accueil.",
        accent: '#1f9d55'
      },
      {
        title: 'Un rapport à remettre à votre médecin',
        text: "Choisissez des mesures et une période, et l'application crée un PDF sur votre téléphone : graphiques, statistiques et sections cliniques pour la tension artérielle, la glycémie, les entraînements, le sommeil et le suivi du cycle. Chaque nutriment que vous saisissez, des fibres au sélénium, peut avoir son propre graphique. Partagez-le ou enregistrez-le ; rien n'est mis en ligne.",
        accent: '#4f5d9e'
      },
      {
        title: 'Un suivi du cycle qui reste le vôtre',
        text: "Un journal du jour pour noter, un élément à la fois, saignements, douleur, humeur, énergie, symptômes, notes et tests. Les fourchettes des prochaines règles viennent de votre propre historique, un schéma de pilule contraceptive vous rappelle les jours de prise, et Santé Connect conserve ses enregistrements tandis que le journal reste sur votre téléphone, protégé par sa propre autorisation.",
        accent: '#b03a5b'
      },
      {
        title: 'Des indicateurs calculés sur votre téléphone',
        text: "Scores de sommeil, Énergie corporelle et Forme du jour sont calculés sur l'appareil, par rapport à vos propres références. L'Énergie corporelle tient compte de la qualité de votre sommeil, pas seulement de sa durée : efficacité, temps éveillé, sommeil profond et sommeil paradoxal (REM). Aucun cloud ne lit vos données pour vous dire comment vous avez dormi.",
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: "Captures d'écran d'OpenVitals",
    eyebrow: "Aperçu de l'application",
    title: "Pensé pour voir la journée d'un coup d'œil, puis entrer dans le détail quand c'est important.",
    items: [
      {
        src: '/images/screens/fr/heart-rate-day.png',
        alt: 'OpenVitals: Fréquence cardiaque',
        label: 'Fréquence cardiaque'
      },
      {
        src: '/images/screens/fr/log-metrics.png',
        alt: 'OpenVitals: Ajouter une entrée',
        label: 'Ajouter une entrée'
      },
      {
        src: '/images/screens/fr/imports.png',
        alt: 'OpenVitals: Import & export',
        label: 'Import & export'
      },
      {
        src: '/images/screens/fr/health-report.png',
        alt: 'OpenVitals: Rapport de santé',
        label: 'Rapport de santé'
      }
    ]
  },
  reviews: {
    label: 'Avis Google Play',
    eyebrow: 'Sur Google Play',
    title: "Ce qu'en disent les personnes qui l'utilisent au quotidien.",
    text: "Avis publics de la fiche Google Play, cités mot pour mot dans leur langue d'origine.",
    link: 'Lire tous les avis sur Google Play',
    trackLabel: 'Carrousel des avis, faites défiler horizontalement pour en voir plus',
    ratingLabel: '{rating} étoiles sur 5',
    translatedNote: 'Traduit par Google',
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
    eyebrow: 'Obtenir OpenVitals',
    title: 'Installez OpenVitals sur Android.',
    text: "Choisissez la source Android qui correspond à votre façon de mettre à jour vos applications. OpenVitals est aussi proposé en versions signées pour qui préfère télécharger directement depuis le projet.",
    moreLabel: "Plus de ressources d'installation",
    guide: "Guide d'installation",
    cards: [
      {
        title: 'Google Play',
        text: "Passez par la voie standard d'installation et de mise à jour d'Android.",
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Disponible sur Google Play'
      },
      {
        title: 'F-Droid',
        text: "Installez-la depuis le catalogue d'applications Android libres et open source.",
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Disponible sur F-Droid'
      },
      {
        title: 'Versions sur GitHub',
        text: 'Téléchargez les APK signés directement depuis le projet.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Disponible sur GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Soutenir le projet',
    title: 'Aidez OpenVitals à grandir.',
    text: "Laissez un avis positif sur Google Play, traduisez l'application Android pour toucher plus de monde, ou financez le travail continu de développement, de tests, de documentation, de publication et de maintenance de ce projet libre et open source.",
    actionsLabel: 'Soutenir OpenVitals',
    review: 'Donner un avis sur Google Play',
    translate: 'Traduire OpenVitals',
    liberapayAlt: 'Soutenir OpenVitals sur Liberapay',
    more: "D'autres façons de soutenir le projet"
  },
  footer: {
    publisher: 'Publié par Hale MTÜ, association à but non lucratif.',
    nav: 'Navigation du pied de page',
    documentation: 'Documentation',
    privacy: 'Confidentialité',
    source: 'Code source',
    translate: 'Traduire',
    support: 'Soutenir'
  }
}

export default fr
