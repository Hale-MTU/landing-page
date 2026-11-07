import type { Messages } from '../messages'

const pl: Messages = {
  meta: {
    title: 'OpenVitals - Panel zdrowia na Androida, dane zostają w telefonie',
    description:
      'OpenVitals to aplikacja na Androida do przeglądania, zapisywania, importowania i lepszego rozumienia danych z Health Connect. Dane zostają w telefonie. Bez konta, reklam i analityki.',
    ogDescription:
      'Panel zdrowia na Androida oparty na Health Connect. Dane zostają w telefonie. Bez konta, reklam i analityki.',
    twitterDescription:
      'Narzędzia zdrowotne na Androida dla danych z Health Connect. Dane zostają w telefonie. Bez konta, reklam i analityki.'
  },
  hale: {
    eyebrow: 'Bezpłatne aplikacje zdrowotne offline na Androida',
    title: 'Twoje dane o zdrowiu w Twoim telefonie i nigdzie indziej.',
    text: 'Hale MTÜ to estońskie stowarzyszenie non-profit stojące za OpenVitals, OpenWatch i OpenBridge: bez kont, bez reklam, bez analityki, bez chmury.',
    appsLabel: 'Aplikacje',
    apps: {
      openvitals: { text: 'Pulpit. Odczytuje Twoje rekordy Health Connect i zamienia je w dzienny widok; importuje, rejestruje i zapisuje, wszystko w telefonie.', link: 'O OpenVitals' },
      openwatch: { text: 'Urządzenia. Paruje zegarki Garmin i Wear OS oraz wagę Xiaomi przez Bluetooth i kopiuje ich zapisy do Health Connect.', link: 'O OpenWatch' },
      openbridge: { text: 'Wyjście na zewnątrz. Opcjonalna aplikacja, która przekazuje dane udostępnione przez OpenVitals do usług online. Wczesna faza.', link: 'O OpenBridge' }
    },
    metaTitle: 'Hale - Bezpłatne aplikacje zdrowotne offline na Androida',
    metaDescription: 'Hale MTÜ to estońskie stowarzyszenie non-profit stojące za OpenVitals, OpenWatch i OpenBridge: bezpłatne aplikacje zdrowotne na Androida z otwartym kodem, bez kont, reklam i chmury.',
    principlesTitle: 'Co łączy trzy aplikacje',
    principles: [
      { title: 'Bez konta, bez chmury Hale', text: 'Nie trzeba się rejestrować i nie ma serwera Hale. Twoje dane zostają w Health Connect na Androidzie, chyba że sam zdecydujesz się je przekazać.' },
      { title: 'Bez reklam, bez analityki', text: 'Żadna aplikacja nie zawiera SDK śledzących i nikt nie robi interesów na Twoich danych.' },
      { title: 'Wolne i otwarte oprogramowanie', text: 'Każda aplikacja to wolne oprogramowanie na licencji AGPL-3.0-or-later, z kodem źródłowym na GitHubie.' },
      { title: 'Prowadzone przez stowarzyszenie non-profit', text: 'Hale MTÜ jest zarejestrowane w Tallinie w Estonii. Jego przychody służą wyłącznie jego celom i nigdy nie są dzielone.' }
    ],
    aboutTitle: 'O Hale',
    aboutText: 'Hale to stare angielskie słowo oznaczające zdrowy, jak w „hale and hearty”. Stowarzyszenie wydaje aplikacje i dba o ich kod i społeczność. Napisz na hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Zegarki i waga dla Health Connect',
    metaDescription: 'OpenWatch paruje zegarki Garmin i Wear OS oraz wagę Xiaomi przez Bluetooth i kopiuje ich zapisy do Health Connect. Bez konta, bez serwera, bez uprawnienia do internetu.',
    eyebrow: 'Zegarki i waga dla Health Connect',
    lede: 'OpenWatch paruje Twój zegarek i wagę przez Bluetooth, kopiuje ich zapisy do Health Connect i nimi zarządza. Bez konta, bez serwera, bez uprawnienia do internetu.',
    devicesTitle: 'Obsługiwane urządzenia',
    devices: [
      { title: 'Zegarki Garmin', text: 'Aktywności, sen i samopoczucie synchronizowane własnym protokołem Bluetooth Garmina, a do tego powiadomienia, sterowanie muzyką, pogoda, kalendarz, alarmy i znajdowanie zegarka.' },
      { title: 'Zegarki Wear OS', text: 'Aplikacja OpenWatch na zegarek zapisuje tętno, kroki i piętra i synchronizuje je jednym dotknięciem lub według harmonogramu, co noc z szacunkiem snu i tętna spoczynkowego.' },
      { title: 'Waga Xiaomi S400', text: 'Każde ważenie trafia od razu do Health Connect, przy otwartej lub zamkniętej aplikacji. Tkankę tłuszczową, beztłuszczową masę ciała i wodę szacuje telefon.' }
    ],
    privacyTitle: 'Dokąd trafiają Twoje dane',
    privacy: [
      { title: 'Bez uprawnienia do internetu', text: 'Aplikacja w telefonie nie ma dostępu do internetu. Wszystko przechodzi przez Bluetooth między urządzeniem a telefonem.' },
      { title: 'Do Health Connect', text: 'To, co zapisze urządzenie, trafia do magazynu danych zdrowotnych Androida, gdzie może to odczytać OpenVitals i każda aplikacja, której na to pozwolisz.' },
      { title: 'Reszta zostaje w telefonie', text: 'Pomiary, których Health Connect nie przechowuje, na przykład stres lub Body Battery, zostają we własnej bazie danych OpenWatch.' }
    ],
    pairText: 'OpenWatch to źródło danych; OpenVitals to miejsce, w którym je oglądasz.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - Przekazywanie danych z OpenVitals do usług online',
    metaDescription: 'OpenBridge to opcjonalna aplikacja na Androida, która odczytuje dane udostępniane przez OpenVitals i może przekazywać je do usług online. Wczesna faza.',
    eyebrow: 'Opcjonalna, wczesna faza',
    lede: 'OpenVitals nigdy nie łączy się z internetem. OpenBridge to osobna aplikacja, która to potrafi: odczytuje tylko to, co pozwolisz udostępnić OpenVitals, i może przekazać to do usług online.',
    stepsTitle: 'Jak otrzymuje dane',
    steps: [
      'W ustawieniach OpenVitals włącz udostępnianie innym aplikacjom. Domyślnie jest wyłączone.',
      'W OpenBridge poproś o grupy, które chcesz udostępnić. Android zapyta raz o każdą z jedenastu grup, a odpowiedź możesz później zmienić w jego ustawieniach.',
      'Odczytaj jedną grupę lub wszystkie: dzienne sumy z ostatniego tygodnia, próbki z ostatniego dnia, sesje i trasy z ostatniego miesiąca.'
    ],
    statusTitle: 'Na jakim jest etapie',
    statusText: 'Żadna usługa online nie jest jeszcze podłączona, a interfejs udostępniania jest na razie tylko w testowych wersjach OpenVitals. Śledź prace na GitHubie.'
  },
  nav: {
    primary: 'Główna nawigacja',
    docs: 'Dokumentacja',
    install: 'Instalacja',
    home: 'Strona główna Hale',
    language: 'Język'
  },
  hero: {
    eyebrow: 'Narzędzia zdrowotne na Androida, dane w telefonie',
    lede:
      'Prywatny panel danych z Health Connect, w którym przeglądasz, zapisujesz, importujesz i lepiej rozumiesz swoje dane zdrowotne. Bez konta, reklam, analityki i bez chmury OpenVitals.',
    install: 'Zainstaluj na Androidzie',
    docs: 'Przeczytaj dokumentację',
    actionsLabel: 'Działania OpenVitals'
  },
  proof: {
    label: 'Gwarancje prywatności OpenVitals',
    points: [
      'Bez konta w chmurze OpenVitals',
      'Aplikacja nie ma uprawnienia do internetu',
      'Bez reklam i bez SDK analitycznych',
      'Health Connect pozostaje głównym źródłem danych'
    ]
  },
  intro: {
    eyebrow: 'Dla ludzi, nie dla profili',
    title: 'Dane o zdrowiu mają Ci służyć, a nie zasilać cudze bazy danych.',
    text:
      'OpenVitals odczytuje obsługiwane dane z Health Connect, zamienia je w czytelne widoki dnia i ekrany szczegółów, a kontrola zostaje na urządzeniu. To Ty decydujesz, jakie uprawnienia przyznać i kiedy cokolwiek zostanie zapisane.'
  },
  privacy: {
    eyebrow: 'Podejście do prywatności',
    title: 'Bez konta. Bez portalu społecznościowego. Bez handlu danymi w tle.',
    text:
      'Aplikacja na Androida działa na urządzeniu i zawsze wiadomo, co robi. Odczytuje Health Connect, przechowuje ustawienia w telefonie, a zmiany w danych zdrowotnych wprowadza tylko wtedy, gdy coś zapiszesz, zaimportujesz, nagrasz, zmienisz lub usuniesz.',
    link: 'Zobacz szczegóły prywatności',
    detailsLabel: 'Szczegóły prywatności',
    items: [
      {
        title: 'Domyślnie na urządzeniu',
        text: 'Panel w aplikacji nie potrzebuje serwera OpenVitals.'
      },
      {
        title: 'Dostęp tylko za Twoją zgodą',
        text: 'Uprawnienia Health Connect są zawsze widoczne i przyznawane świadomie.'
      },
      {
        title: 'Otwarty kod źródłowy',
        text: 'Aplikacja na Androida i dokumentacja są dostępne na GitHubie.'
      }
    ]
  },
  devices: {
    eyebrow: 'Urządzenia noszone',
    title: 'Działa z Twoim zegarkiem.',
    text:
      'Połącz dowolne urządzenie noszone przez Gadgetbridge lub oficjalną aplikację producenta. Synchronizuj powiadomienia, tętno na żywo, pogodę i kalendarz bezpośrednio przez Bluetooth. Wszystko trafia do Health Connect, a OpenVitals zbiera to w jednym prywatnym panelu.',
    link: 'Jak działa synchronizacja z Health Connect',
    listLabel: 'Obsługa zegarków i czujników',
    points: [
      {
        title: 'Każde urządzenie, które zapisuje do Health Connect',
        text: 'Niezależnie od tego, czy korzysta z Gadgetbridge, czy z oficjalnej aplikacji producenta: jeśli aplikacja towarzysząca przesyła dane do Health Connect, OpenVitals je widzi.'
      },
      {
        title: 'Sen, tętno, kroki i treningi',
        text: 'Wszystkie pomiary z urządzenia trafiają do Health Connect: fazy snu, tętno, HRV, kroki i treningi widzisz w jednym czytelnym panelu.'
      },
      {
        title: 'Czujniki na żywo łączą się bezpośrednio',
        text: 'Pasy BLE do pomiaru tętna oraz czujniki kadencji i mocy nadal łączą się bezpośrednio z aplikacją i przesyłają dane na żywo, gdy rejestrujesz trening.'
      }
    ]
  },
  features: {
    eyebrow: 'Co potrafi',
    title: 'Zobacz, zaimportuj, nagraj, zapisz i zrozum. Wszystko w telefonie.',
    cards: [
      {
        title: 'Wszystkie wskaźniki w jednym miejscu',
        text: 'Aktywność, sen, serce, ciało, nawodnienie, odżywianie i cykl w jednym dziennym panelu. Trendy, statystyki i ekrany szczegółów są o jedno dotknięcie dalej, gdy chcesz wiedzieć, co się zmieniło.',
        accent: '#0f766e'
      },
      {
        title: 'Zaimportuj to, co już masz',
        text: 'Wczytaj eksporty z Apple Health oraz pliki FIT, GPX, KML/KMZ, TCX i CSV, pojedynczo albo całymi folderami. Plik CSV może zawierać pomiary z wagi, dziennik ciśnienia krwi, arkusz posiłków albo wyeksportowane treningi. Historia zebrana gdzie indziej przechodzi razem z Tobą.',
        accent: '#2f6f9f'
      },
      {
        title: 'Rejestruj aktywności i treningi',
        text: 'Trasy GPS na mapach offline, które obracają się i podążają za Tobą, nawigacja CoMaps na żywo ze wskazówkami zakręt po zakręcie i zaplanowaną trasą na mapie, czujniki BLE tętna, kadencji i mocy, komunikaty głosowe, okrążenia i liczenie powtórzeń. Plany treningowe tworzysz raz i uruchamiasz jako sesje prowadzone krok po kroku: serie, ciężar i przerwa dla każdego ćwiczenia, powtórzenia liczone przez telefon i przerwy z odliczaniem. Zaimportowane i nagrane trasy mają poprawianą wysokość na podstawie kafelków wysokościowych zapisanych w telefonie. Każdy trening możesz wyeksportować bez trasy jako TCX, FIT lub CSV. Do Health Connect trafia dopiero wtedy, gdy go zapiszesz.',
        accent: '#d95c3f'
      },
      {
        title: 'Działa z Twoim zegarkiem',
        text: 'Połącz dowolne urządzenie noszone przez Gadgetbridge lub aplikację producenta: synchronizuj przez Bluetooth powiadomienia i przychodzące połączenia, tętno na żywo, pogodę, kalendarz i sterowanie muzyką, a jeśli chcesz, także automatycznie w regularnych odstępach. Wszystko synchronizuje się przez Health Connect do jednego wspólnego panelu. Stań na obsługiwanej wadze Xiaomi, a ważenie trafi do Health Connect, nawet przy zamkniętej aplikacji.',
        accent: '#a07b00'
      },
      {
        title: 'Zapisuj liczby, które znasz tylko Ty',
        text: 'Cały pomiar z wagi analitycznej, od wagi i tłuszczu po wodę w organizmie, wzrost, ciśnienie krwi z okolicznościami pomiaru i kategoriami według wybranych wytycznych (ACC/AHA, ESH, ESC lub ISH), HRV, glukoza, VO2 max, posiłki, napoje, produkty, które raz definiujesz razem ze składnikami odżywczymi i zapisujesz porcjami, dzienne sumy dowolnych składników odżywczych wpisywane bezpośrednio, oraz minuty mindfulness. Szybkie ręczne wpisy z przypomnieniami i widżetami na ekranie głównym.',
        accent: '#1f9d55'
      },
      {
        title: 'Raport zdrowotny, który wręczysz lekarzowi',
        text: 'Wybierz wskaźniki i okres, a aplikacja utworzy PDF na Twoim telefonie: wykresy, statystyki i sekcje kliniczne dotyczące ciśnienia krwi, glukozy, treningów, snu i śledzenia cyklu. Każdy składnik, który zapisujesz, od błonnika po selen, może mieć własny wykres. Udostępnij go lub zapisz; nic nie jest nigdzie wysyłane.',
        accent: '#4f5d9e'
      },
      {
        title: 'Śledzenie cyklu, które zostaje Twoje',
        text: 'Dziennik dnia: krwawienie, ból, nastrój, energia, objawy, notatki i testy, zapisywane po jednej rzeczy naraz. Przewidywany zakres dat następnej miesiączki wynika z Twojej własnej historii, schemat pigułki antykoncepcyjnej przypomina o niej w dni, w które ją bierzesz, a Health Connect przechowuje swoje wpisy, podczas gdy dziennik zostaje w telefonie, chroniony osobnym uprawnieniem.',
        accent: '#b03a5b'
      },
      {
        title: 'Oceny liczone w Twoim telefonie',
        text: 'Wynik snu, energia ciała i codzienna gotowość są liczone na urządzeniu względem Twoich własnych poziomów bazowych. Energia ciała ocenia nie tylko długość snu, ale też to, jak dobrze Ci się spało: efektywność, czas czuwania, sen głęboki i REM. Żadna chmura nie czyta Twoich danych, żeby ocenić Twój sen.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Zrzuty ekranu OpenVitals',
    eyebrow: 'Widoki aplikacji',
    title: 'Zaprojektowane tak, by szybko przejrzeć dzień i zajrzeć głębiej, gdy to ważne.',
    items: [
      {
        src: '/images/screens/pl/heart-rate-day.png',
        alt: 'OpenVitals: Tętno',
        label: 'Tętno'
      },
      {
        src: '/images/screens/pl/log-metrics.png',
        alt: 'OpenVitals: Dodaj wpis',
        label: 'Dodaj wpis'
      },
      {
        src: '/images/screens/pl/imports.png',
        alt: 'OpenVitals: Import i eksport',
        label: 'Import i eksport'
      },
      {
        src: '/images/screens/pl/health-report.png',
        alt: 'OpenVitals: Raport zdrowotny',
        label: 'Raport zdrowotny'
      }
    ]
  },
  reviews: {
    label: 'Opinie z Google Play',
    eyebrow: 'Z Google Play',
    title: 'Co mówią ludzie, którzy używają aplikacji od jakiegoś czasu.',
    text: 'Dosłowne cytaty z publicznych opinii w Google Play, w oryginalnym języku.',
    link: 'Przeczytaj wszystkie opinie w Google Play',
    trackLabel: 'Karuzela opinii, przewiń w bok, aby zobaczyć więcej',
    ratingLabel: '{rating} z 5 gwiazdek',
    translatedNote: 'Przetłumaczone przez Google',
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
    eyebrow: 'Pobierz OpenVitals',
    title: 'Zainstaluj OpenVitals na Androidzie.',
    text: 'Wybierz źródło, które pasuje do tego, jak aktualizujesz aplikacje na Androidzie. OpenVitals jest też dostępny jako podpisane wydania dla osób, które wolą pobierać bezpośrednio od projektu.',
    moreLabel: 'Więcej o instalacji',
    guide: 'Instrukcja instalacji',
    cards: [
      {
        title: 'Google Play',
        text: 'Standardowa instalacja i aktualizacje na Androidzie.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Pobierz z Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Instalacja przez sklep z wolnymi aplikacjami o otwartym kodzie na Androida.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Pobierz z F-Droid'
      },
      {
        title: 'Wydania na GitHubie',
        text: 'Pobierz podpisane pliki APK bezpośrednio od projektu.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Pobierz z GitHuba'
      }
    ]
  },
  support: {
    eyebrow: 'Wesprzyj projekt',
    title: 'Pomóż OpenVitals się rozwijać.',
    text: 'Zostaw pozytywną opinię w Google Play, przetłumacz aplikację na Androida dla większej liczby osób albo wesprzyj finansowo bieżący rozwój, testy, dokumentację, wydania i utrzymanie tego wolnego projektu o otwartym kodzie.',
    actionsLabel: 'Wesprzyj OpenVitals',
    review: 'Oceń w Google Play',
    translate: 'Przetłumacz OpenVitals',
    liberapayAlt: 'Wesprzyj OpenVitals w Liberapay',
    more: 'Więcej sposobów wsparcia'
  },
  footer: {
    publisher: 'Wydawca: Hale MTÜ, stowarzyszenie non-profit z Tallina w Estonii.',
    nav: 'Nawigacja w stopce',
    documentation: 'Dokumentacja',
    privacy: 'Prywatność',
    source: 'Kod źródłowy',
    translate: 'Przetłumacz',
    support: 'Wesprzyj'
  }
}

export default pl
