import type { Messages } from '../messages'

const cs: Messages = {
  meta: {
    title: 'Hale: OpenVitals - Přehled zdraví pro Android, data zůstávají v telefonu',
    description:
      'OpenVitals je aplikace pro Android, ve které data z Health Connect prohlížíte, zapisujete, importujete a lépe jim rozumíte. Data zůstávají v telefonu. Bez účtu, reklam a analytiky.',
    ogDescription:
      'Přehled zdraví pro Android postavený na Health Connect. Data zůstávají v telefonu. Bez účtu, reklam a analytiky.',
    twitterDescription:
      'Nástroje pro zdraví na Androidu, které pracují s daty z Health Connect. Data zůstávají v telefonu. Bez účtu, reklam a analytiky.'
  },
  hale: {
    eyebrow: 'Bezplatné offline zdravotní aplikace pro Android',
    title: 'Vaše zdravotní data ve vašem telefonu a nikde jinde.',
    text: 'Hale MTÜ je estonský neziskový spolek, který stojí za aplikacemi OpenVitals, OpenWatch a OpenBridge: bez účtů, bez reklam, bez analytiky, bez cloudu.',
    appsLabel: 'Aplikace',
    apps: {
      openvitals: { text: 'Přehled. Čte vaše záznamy z Health Connect a převádí je na denní přehled; importuje, zaznamenává a eviduje, vše v telefonu.', link: 'O aplikaci OpenVitals' },
      openwatch: { text: 'Zařízení. Páruje hodinky Garmin a Wear OS a váhu Xiaomi přes Bluetooth a kopíruje, co zaznamenají, do Health Connect.', link: 'OpenWatch na Google Play' },
      openbridge: { text: 'Cesta ven. Volitelná aplikace, která předává data sdílená aplikací OpenVitals online službám. V rané fázi.', link: 'OpenBridge na GitHubu' }
    }
  },
  nav: {
    primary: 'Hlavní navigace',
    privacy: 'Soukromí',
    features: 'Funkce',
    docs: 'Dokumentace',
    install: 'Instalace',
    home: 'Domovská stránka Hale',
    language: 'Jazyk'
  },
  hero: {
    eyebrow: 'Nástroje pro zdraví na Androidu, data v telefonu',
    lede:
      'Soukromý přehled dat z Health Connect. Prohlížejte, zapisujte a importujte svá zdravotní data a lépe jim rozumějte. Bez účtu, reklam, analytiky i bez cloudu OpenVitals.',
    install: 'Nainstalovat na Android',
    docs: 'Přečíst dokumentaci',
    actionsLabel: 'Akce OpenVitals'
  },
  proof: {
    label: 'Záruky soukromí OpenVitals',
    points: [
      'Žádný účet v cloudu OpenVitals',
      'Aplikace nemá oprávnění k internetu',
      'Žádné reklamy ani analytické SDK',
      'Hlavním zdrojem dat zůstává Health Connect'
    ]
  },
  intro: {
    eyebrow: 'Pro lidi, ne pro profily',
    title: 'Zdravotní data mají být užitečná, aniž by skončila v cizí databázi.',
    text:
      'OpenVitals čte podporované záznamy z Health Connect, převádí je na přehledné denní souhrny a podrobné obrazovky a kontrolu nechává u vás v zařízení. Vy rozhodujete, jaká oprávnění udělíte a kdy se cokoli zapíše.'
  },
  privacy: {
    eyebrow: 'Postoj k soukromí',
    title: 'Žádný účet. Žádná sociální síť. Žádný obchod s daty v pozadí.',
    text:
      'Aplikace pro Android pracuje přímo v telefonu a vždy je jasné, co dělá. Čte Health Connect, nastavení aplikace ukládá v zařízení a zdravotní záznamy zapisuje jen tehdy, když něco uložíte, importujete, zaznamenáte, upravíte nebo smažete.',
    link: 'Projít podrobnosti o soukromí',
    detailsLabel: 'Podrobnosti o soukromí',
    items: [
      {
        title: 'Standardně v zařízení',
        text: 'Přehled v aplikaci nepotřebuje žádný server OpenVitals.'
      },
      {
        title: 'Přístup jen s vaším svolením',
        text: 'Oprávnění pro Health Connect jsou vždy vidět a udělujete je vědomě.'
      },
      {
        title: 'Otevřený zdrojový kód',
        text: 'Aplikace pro Android i dokumentace jsou k dispozici na GitHubu.'
      }
    ]
  },
  devices: {
    eyebrow: 'Nositelná zařízení',
    title: 'Funguje s vašimi hodinkami.',
    text:
      'Připojte jakékoli nositelné zařízení přes Gadgetbridge nebo oficiální aplikaci výrobce. Oznámení, tep v reálném čase, počasí a kalendář synchronizujte přímo přes Bluetooth. Vše putuje do Health Connect a OpenVitals to spojí do jednoho soukromého přehledu.',
    link: 'Jak funguje synchronizace s Health Connect',
    listLabel: 'Podpora hodinek a senzorů',
    points: [
      {
        title: 'Jakékoli zařízení, které zapisuje do Health Connect',
        text: 'Ať zařízení používá Gadgetbridge, nebo oficiální aplikaci výrobce: když doprovodná aplikace synchronizuje do Health Connect, OpenVitals data uvidí.'
      },
      {
        title: 'Spánek, srdeční tep, kroky a tréninky',
        text: 'Všechny metriky z vašeho zařízení končí v Health Connect: fáze spánku, srdeční tep, HRV, kroky a tréninky uvidíte v jednom srozumitelném přehledu.'
      },
      {
        title: 'Senzory v reálném čase se připojují přímo',
        text: 'Pásy na měření tepu přes BLE a senzory kadence a výkonu se dál připojují přímo k aplikaci a posílají data v reálném čase, když zaznamenáváte trénink.'
      }
    ]
  },
  features: {
    eyebrow: 'Co aplikace umí',
    title: 'Zobrazit, importovat, zaznamenat, zapsat a pochopit. Vše v telefonu.',
    cards: [
      {
        title: 'Všechny metriky na jednom místě',
        text: 'Aktivita, spánek, srdce, tělo, hydratace, výživa a cyklus v jednom denním přehledu. Trendy, statistiky a podrobné obrazovky máte o klepnutí dál, když chcete vědět, co se změnilo.',
        accent: '#0f766e'
      },
      {
        title: 'Importujte, co už máte',
        text: 'Přeneste si exporty z Apple Health a soubory FIT, GPX, KML/KMZ, TCX a CSV, po jednom nebo celé složky. CSV může obsahovat vážení z váhy, deník krevního tlaku, tabulku jídel nebo exportované tréninky. Historie, kterou jste nasbírali jinde, jde s vámi.',
        accent: '#2f6f9f'
      },
      {
        title: 'Zaznamenávejte aktivity a tréninky',
        text: 'Trasy GPS na offline mapách, které se otáčejí a sledují vaši polohu, navigace CoMaps v reálném čase s pokyny k odbočení a plánovanou trasou na mapě, senzory tepu, kadence a výkonu přes BLE, hlasová hlášení, kola a počítání opakování. Tréninkové plány vytvoříte jednou a pak je spouštíte jako řízené tréninky: série, váha a odpočinek u každého cviku, opakování počítá telefon a odpočinek se sám odpočítává. Importovaným i zaznamenaným trasám se opraví nadmořská výška podle výškových dlaždic uložených v telefonu. Každý trénink lze exportovat bez trasy jako TCX, FIT nebo CSV. Do Health Connect se zapíše, až když ho uložíte.',
        accent: '#d95c3f'
      },
      {
        title: 'Funguje s vašimi hodinkami',
        text: 'Připojte jakékoli nositelné zařízení přes Gadgetbridge nebo aplikaci výrobce: přes Bluetooth synchronizujte oznámení a příchozí hovory, tep v reálném čase, počasí, kalendář a ovládání hudby, a pokud chcete, i automaticky v pravidelných intervalech. Vše se synchronizuje přes Health Connect do jednoho společného přehledu. Stoupněte si na podporovanou váhu Xiaomi a vážení dorazí do Health Connect, i když je aplikace zavřená.',
        accent: '#a07b00'
      },
      {
        title: 'Zapisujte hodnoty, které znáte jen vy',
        text: 'Celé vážení na analytické váze, od hmotnosti a tělesného tuku po tělesnou vodu, výška, krevní tlak s okolnostmi měření a kategoriemi podle doporučení, které si vyberete (ACC/AHA, ESH, ESC nebo ISH), HRV, glykémie, VO2 max, jídla, nápoje, potraviny, které jednou zadáte i s živinami a pak zapisujete po porcích, denní součty libovolné živiny zadané přímo a minuty všímavosti. Rychlé ruční zadávání s připomínkami a widgety na domovské obrazovce.',
        accent: '#1f9d55'
      },
      {
        title: 'Zdravotní zpráva, kterou dáte lékaři do ruky',
        text: 'Vyberte metriky a období a aplikace vytvoří PDF přímo v telefonu: grafy, statistiky a klinické oddíly pro krevní tlak, glykémii, tréninky, spánek a sledování cyklu. Každá živina, kterou zapisujete, od vlákniny po selen, může mít vlastní graf. Sdílejte ho, nebo uložte; nic se nikam nenahrává.',
        accent: '#4f5d9e'
      },
      {
        title: 'Sledování cyklu, které zůstává jen vaše',
        text: 'Denní záznam krvácení, bolesti, nálady, energie, příznaků, poznámek a testů, vždy po jedné věci. Očekávané rozmezí příští menstruace vychází z vaší vlastní historie, schéma antikoncepční pilulky vám ve dny užívání připomene pilulku a Health Connect si nechává své záznamy, zatímco deník zůstává v telefonu, chráněný vlastním oprávněním.',
        accent: '#b03a5b'
      },
      {
        title: 'Vyhodnocení přímo v telefonu',
        text: 'Skóre spánku, tělesná energie a denní připravenost se počítají přímo v zařízení ve srovnání s vašimi vlastními základními hodnotami. Tělesná energie nehodnotí jen délku spánku, ale i to, jak dobře jste spali: efektivitu, dobu bdění, hluboký spánek a REM. Žádný cloud nečte vaše data, aby vám řekl, jak jste spali.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Snímky obrazovky OpenVitals',
    eyebrow: 'Ukázky z aplikace',
    title: 'Navrženo tak, abyste dnešek viděli na první pohled a do podrobností šli, když na tom záleží.',
    items: [
      {
        src: '/images/screens/cs/heart-rate-day.png',
        alt: 'OpenVitals: Srdeční tep',
        label: 'Srdeční tep'
      },
      {
        src: '/images/screens/cs/log-metrics.png',
        alt: 'OpenVitals: Přidat záznam',
        label: 'Přidat záznam'
      },
      {
        src: '/images/screens/cs/imports.png',
        alt: 'OpenVitals: Import a export',
        label: 'Import a export'
      },
      {
        src: '/images/screens/cs/health-report.png',
        alt: 'OpenVitals: Zdravotní zpráva',
        label: 'Zdravotní zpráva'
      }
    ]
  },
  reviews: {
    label: 'Recenze z Google Play',
    eyebrow: 'Z Google Play',
    title: 'Co říkají lidé, kteří aplikaci už nějakou dobu používají.',
    text: 'Doslovné citace veřejných recenzí z Google Play v původním jazyce.',
    link: 'Přečíst všechny recenze na Google Play',
    trackLabel: 'Karusel recenzí, další zobrazíte posunutím do strany',
    ratingLabel: '{rating} z 5 hvězdiček',
    translatedNote: 'Přeložil Google',
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
    eyebrow: 'Získejte OpenVitals',
    title: 'Nainstalujte si OpenVitals na Android.',
    text: 'Vyberte si zdroj, který odpovídá tomu, jak aktualizujete aplikace v Androidu. OpenVitals je k dispozici i jako podepsaná vydání pro ty, kdo raději stahují přímo od projektu.',
    moreLabel: 'Další zdroje k instalaci',
    guide: 'Návod k instalaci',
    cards: [
      {
        title: 'Google Play',
        text: 'Běžná cesta instalace a aktualizací v Androidu.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Nyní na Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Instalace z obchodu se svobodnými aplikacemi s otevřeným kódem pro Android.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Nyní na F-Droid'
      },
      {
        title: 'Vydání na GitHubu',
        text: 'Stáhněte si podepsané soubory APK přímo od projektu.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Nyní na GitHubu'
      }
    ]
  },
  support: {
    eyebrow: 'Podpořte projekt',
    title: 'Pomozte OpenVitals růst.',
    text: 'Napište kladnou recenzi na Google Play, přeložte aplikaci pro Android, aby ji mohlo používat víc lidí, nebo finančně podpořte průběžný vývoj, testování, dokumentaci, vydávání a údržbu tohoto svobodného projektu s otevřeným kódem.',
    actionsLabel: 'Podpořit OpenVitals',
    review: 'Ohodnotit na Google Play',
    translate: 'Přeložit OpenVitals',
    liberapayAlt: 'Podpořit OpenVitals na Liberapay',
    more: 'Další způsoby podpory'
  },
  footer: {
    publisher: 'Vydává Hale MTÜ, neziskový spolek se sídlem v Tallinnu v Estonsku.',
    nav: 'Navigace v zápatí',
    documentation: 'Dokumentace',
    privacy: 'Soukromí',
    source: 'Zdrojový kód',
    translate: 'Přeložit',
    support: 'Podpořit'
  }
}

export default cs
