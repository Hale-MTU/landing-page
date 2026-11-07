import type { Messages } from '../messages'

const gl: Messages = {
  meta: {
    title: 'Hale: OpenVitals - Panel de saúde para Android que funciona en local',
    description:
      'OpenVitals é unha app Android que funciona en local para ver, rexistrar, importar e entender os datos de Health Connect, sen contas, anuncios nin analíticas.',
    ogDescription:
      'Un panel de saúde para Android que funciona en local sobre Health Connect, sen contas, anuncios nin analíticas.',
    twitterDescription:
      'Ferramentas de saúde para Android que funcionan en local cos datos de Health Connect, sen contas, anuncios nin analíticas.'
  },
  hale: {
    eyebrow: 'Apps de saúde gratuítas e sen conexión para Android',
    title: 'Os teus datos de saúde, no teu teléfono e en ningún outro sitio.',
    text: 'Hale MTÜ é a asociación estoniana sen ánimo de lucro detrás de OpenVitals, OpenWatch e OpenBridge: sen contas, sen anuncios, sen analíticas, sen nube.',
    appsLabel: 'As apps',
    apps: {
      openvitals: { text: 'O panel. Le os teus rexistros de Health Connect e convérteos nunha vista diaria; importa, rexistra e anota, todo no teléfono.', link: 'Sobre OpenVitals' },
      openwatch: { text: 'Os dispositivos. Emparella reloxos Garmin e Wear OS e unha báscula Xiaomi por Bluetooth e copia o que rexistran en Health Connect.', link: 'OpenWatch en Google Play' },
      openbridge: { text: 'A saída. Unha app opcional que pasa os datos que OpenVitals comparte a servizos en liña. En fase inicial.', link: 'OpenBridge en GitHub' }
    }
  },
  nav: {
    primary: 'Navegación principal',
    privacy: 'Privacidade',
    features: 'Funcións',
    docs: 'Documentación',
    install: 'Instalar',
    home: 'Inicio de Hale',
    language: 'Idioma'
  },
  hero: {
    eyebrow: 'Ferramentas de saúde en local para Android',
    lede:
      'Un panel privado de Health Connect para ver, rexistrar, importar e entender os teus datos de saúde sen contas, anuncios, analíticas nin nube de OpenVitals.',
    install: 'Instalar en Android',
    docs: 'Ler a documentación',
    actionsLabel: 'Accións de OpenVitals'
  },
  proof: {
    label: 'Garantías de privacidade de OpenVitals',
    points: [
      'Sen conta na nube de OpenVitals',
      'A app non ten permiso de internet',
      'Sen anuncios nin SDK de analíticas',
      'Health Connect segue sendo a fonte de referencia'
    ]
  },
  intro: {
    eyebrow: 'Feita para persoas, non para perfís',
    title: 'Os datos de saúde deberían ser útiles sen acabar na base de datos doutra persoa.',
    text:
      'OpenVitals le os rexistros compatibles de Health Connect, convérteos en vistas diarias claras e pantallas de detalle, e mantén o control no dispositivo. Ti decides que permisos concedes e cando se escribe algo.'
  },
  privacy: {
    eyebrow: 'A nosa postura sobre a privacidade',
    title: 'Sen conta. Sen fío de novas. Sen negocio de datos ás agachadas.',
    text:
      'A app de Android está pensada arredor de accións locais e explícitas. Le Health Connect, garda as súas preferencias no dispositivo e só escribe rexistros de saúde despois de que gardes, importes, graves, edites ou borres algo.',
    link: 'Revisar os detalles de privacidade',
    detailsLabel: 'Detalles de privacidade',
    items: [
      {
        title: 'Local por defecto',
        text: 'O panel da app non precisa ningún servidor de OpenVitals.'
      },
      {
        title: 'Acceso que ti concedes',
        text: 'Os permisos de Health Connect seguen á vista e concédense a propósito.'
      },
      {
        title: 'Código aberto',
        text: 'A app de Android e a documentación están dispoñibles en GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Wearables',
    title: 'Funciona co teu reloxo.',
    text:
      'Conecta calquera wearable con Gadgetbridge ou coa app oficial do fabricante. Sincroniza notificacións, frecuencia cardíaca en directo, o tempo e o teu calendario directamente por Bluetooth. Todo chega a Health Connect, e OpenVitals xúntao nun só panel privado.',
    link: 'Como funciona a sincronización con Health Connect',
    listLabel: 'Compatibilidade con reloxos e sensores',
    points: [
      {
        title: 'Calquera wearable que escriba en Health Connect',
        text: 'Tanto se usa Gadgetbridge como a app oficial do fabricante, se a app que o acompaña sincroniza con Health Connect, OpenVitals ve os datos.'
      },
      {
        title: 'Sono, frecuencia cardíaca, pasos e adestramentos',
        text: 'Todas as métricas do teu wearable chegan a Health Connect: fases do sono, frecuencia cardíaca, VFC, pasos e adestramentos aparecen nun panel claro.'
      },
      {
        title: 'Os sensores en directo conéctanse sen intermediarios',
        text: 'As bandas de frecuencia cardíaca BLE e os sensores de cadencia e potencia seguen conectándose á app para darche datos en directo mentres gravas un adestramento.'
      }
    ]
  },
  features: {
    eyebrow: 'Que fai',
    title: 'Ver, importar, gravar, rexistrar e entender. Todo no teléfono.',
    cards: [
      {
        title: 'Todas as métricas nun só lugar',
        text: 'Actividade, sono, corazón, corpo, hidratación, nutrición e ciclo nun panel diario. As tendencias, as estatísticas e as pantallas de detalle están a un toque cando queres saber que cambiou.',
        accent: '#0f766e'
      },
      {
        title: 'Importa o que xa tes',
        text: 'Trae exportacións de Apple Health e ficheiros FIT, GPX, KML/KMZ, TCX e CSV, dun en un ou por cartafoles enteiros. Un CSV pode traer as pesaxes dunha báscula, un rexistro de presión arterial, unha folla de comidas ou os adestramentos que exportaches. O historial que fixeches noutro sitio vén contigo.',
        accent: '#2f6f9f'
      },
      {
        title: 'Grava actividades e adestramentos',
        text: 'Rutas GPS sobre mapas sen conexión que xiran e te seguen, guía xiro a xiro de CoMaps en directo coa ruta planificada no mapa, sensores BLE de frecuencia cardíaca, cadencia e potencia, avisos de voz, voltas e reconto de repeticións. Plans de adestramento que creas unha vez e segues como sesións guiadas, con series, peso e descanso por exercicio, repeticións contadas polo teléfono e descansos con conta atrás. As rutas importadas e gravadas corrixen a súa altitude coas teselas de elevación gardadas no teléfono. Calquera adestramento pódese exportar sen a súa ruta como TCX, FIT ou CSV. Só se escribe en Health Connect cando gardas.',
        accent: '#d95c3f'
      },
      {
        title: 'Funciona co teu reloxo',
        text: 'Conecta calquera wearable con Gadgetbridge ou coa app do fabricante: sincroniza por Bluetooth as notificacións e as chamadas entrantes, a frecuencia cardíaca en directo, o tempo, o calendario e os controis de música, de forma programada se queres. Todo se sincroniza a través de Health Connect nun único panel. Sube a unha báscula Xiaomi compatible e a pesaxe chega a Health Connect, mesmo coa app pechada.',
        accent: '#a07b00'
      },
      {
        title: 'Rexistra os números que só ti coñeces',
        text: 'Toda a pesaxe dunha báscula de composición corporal, do peso e a graxa á auga corporal, altura, presión arterial co seu contexto de medición e categorías segundo a guía que escollas (ACC/AHA, ESH, ESC ou ISH), VFC, glicosa en sangue, VO2 máx, comidas, bebidas, alimentos que defines unha vez cos seus nutrientes e rexistras por porción, totais diarios de calquera nutriente escritos directamente, e minutos de atención plena. Entrada manual rápida, con recordatorios e widgets na pantalla de inicio.',
        accent: '#1f9d55'
      },
      {
        title: 'Un informe que o teu médico pode ter na man',
        text: 'Escolle métricas e un intervalo de tempo, e a app crea un PDF no teu teléfono: gráficos, estatísticas e seccións clínicas de presión arterial, glicosa en sangue, adestramentos, sono e seguimento do ciclo. Cada nutriente que rexistras, da fibra ao selenio, pode ter o seu propio gráfico. Compárteo ou gárdao; non se sobe nada.',
        accent: '#4f5d9e'
      },
      {
        title: 'Un seguimento do ciclo que segue sendo teu',
        text: 'Un rexistro do día para sangrado, dor, ánimo, enerxía, síntomas, notas e tests, cousa a cousa. O intervalo previsto para o seguinte período sae do teu propio historial, unha pauta de pílula anticonceptiva lémbrache os días de toma, e Health Connect garda os seus rexistros mentres o diario queda no teu teléfono, protexido polo seu propio permiso.',
        accent: '#b03a5b'
      },
      {
        title: 'Indicadores calculados no teu teléfono',
        text: 'A puntuación do sono, a Enerxía corporal e a Preparación diaria calcúlanse no dispositivo comparando coas túas propias liñas base. A Enerxía corporal mira que tal durmiches (eficiencia, tempo esperto, sono profundo e REM), non só canto. Ningunha nube le os teus datos para dicirche como durmiches.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Capturas de pantalla de OpenVitals',
    eyebrow: 'A app por dentro',
    title: 'Pensada para ver o día dunha ollada e afondar cando importa.',
    items: [
      {
        src: '/images/screens/gl/heart-rate-day.png',
        alt: 'OpenVitals: Frecuencia cardíaca',
        label: 'Frecuencia cardíaca'
      },
      {
        src: '/images/screens/gl/log-metrics.png',
        alt: 'OpenVitals: Engadir entrada',
        label: 'Engadir entrada'
      },
      {
        src: '/images/screens/gl/imports.png',
        alt: 'OpenVitals: Importar e exportar',
        label: 'Importar e exportar'
      },
      {
        src: '/images/screens/gl/health-report.png',
        alt: 'OpenVitals: Informe de saúde',
        label: 'Informe de saúde'
      }
    ]
  },
  reviews: {
    label: 'Opinións de Google Play',
    eyebrow: 'Desde Google Play',
    title: 'O que di a xente despois de usala no día a día.',
    text: 'Citas literais de opinións públicas na ficha de Google Play, na súa lingua orixinal.',
    link: 'Ler todas as opinións en Google Play',
    trackLabel: 'Carrusel de opinións, despraza cara aos lados para ver máis',
    ratingLabel: '{rating} de 5 estrelas',
    translatedNote: 'Traducido por Google',
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
    eyebrow: 'Consegue OpenVitals',
    title: 'Instala OpenVitals en Android.',
    text: 'Escolle a canle de Android que mellor encaixe coa túa forma de actualizar as apps. OpenVitals tamén está dispoñible en versións asinadas para quen prefira descargalas directamente do proxecto.',
    moreLabel: 'Máis recursos de instalación',
    guide: 'Guía de instalación',
    cards: [
      {
        title: 'Google Play',
        text: 'Usa a vía habitual de instalación e actualización de Android.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Dispoñible en Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Instálaa desde a tenda de apps libres e de código aberto para Android.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Dispoñible en F-Droid'
      },
      {
        title: 'Versións en GitHub',
        text: 'Descarga os APK asinados directamente do proxecto.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Dispoñible en GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Apoia o proxecto',
    title: 'Axuda a que OpenVitals medre.',
    text: 'Deixa unha opinión positiva en Google Play, traduce a app de Android para chegar a máis xente ou financia o desenvolvemento, as probas, a documentación, as versións e o mantemento continuos deste proxecto libre e de código aberto.',
    actionsLabel: 'Apoiar OpenVitals',
    review: 'Valorar en Google Play',
    translate: 'Traducir OpenVitals',
    liberapayAlt: 'Apoiar OpenVitals en Liberapay',
    more: 'Máis formas de apoiar'
  },
  footer: {
    publisher: 'Publicado por Hale MTÜ, unha asociación sen ánimo de lucro de Tallinn, Estonia.',
    nav: 'Navegación do pé de páxina',
    documentation: 'Documentación',
    privacy: 'Privacidade',
    source: 'Código fonte',
    translate: 'Traducir',
    support: 'Apoiar'
  }
}

export default gl
