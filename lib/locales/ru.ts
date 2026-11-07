import type { Messages } from '../messages'

const ru: Messages = {
  meta: {
    title: 'Hale: OpenVitals - Панель здоровья для Android, данные остаются на телефоне',
    description:
      'OpenVitals — приложение для Android, в котором можно просматривать, вносить, импортировать и лучше понимать данные Health Connect. Данные остаются на телефоне. Без аккаунтов, рекламы и аналитики.',
    ogDescription:
      'Панель здоровья для Android на основе Health Connect. Данные остаются на телефоне. Без аккаунтов, рекламы и аналитики.',
    twitterDescription:
      'Инструменты для здоровья на Android, которые работают с данными Health Connect. Данные остаются на телефоне. Без аккаунтов, рекламы и аналитики.'
  },
  hale: {
    eyebrow: 'Бесплатные офлайн-приложения для здоровья на Android',
    title: 'Ваши данные о здоровье в вашем телефоне и больше нигде.',
    text: 'Hale MTÜ, эстонская некоммерческая организация, стоит за OpenVitals, OpenWatch и OpenBridge: без аккаунтов, без рекламы, без аналитики, без облака.',
    appsLabel: 'Приложения',
    apps: {
      openvitals: { text: 'Панель. Читает ваши записи Health Connect и превращает их в дневной обзор; импортирует, записывает и ведёт журнал, всё в телефоне.', link: 'Об OpenVitals' },
      openwatch: { text: 'Устройства. Подключает часы Garmin и Wear OS и весы Xiaomi по Bluetooth и копирует их записи в Health Connect.', link: 'OpenWatch в Google Play' },
      openbridge: { text: 'Мост наружу. Необязательное приложение, передающее данные, которыми делится OpenVitals, онлайн-сервисам. Ранняя стадия.', link: 'OpenBridge на GitHub' }
    }
  },
  nav: {
    primary: 'Основная навигация',
    privacy: 'Приватность',
    features: 'Возможности',
    docs: 'Документация',
    install: 'Установка',
    home: 'Главная Hale',
    language: 'Язык'
  },
  hero: {
    eyebrow: 'Инструменты для здоровья на Android, данные на телефоне',
    lede:
      'Приватная панель данных Health Connect: просматривайте, вносите, импортируйте свои данные о здоровье и лучше их понимайте. Без аккаунтов, рекламы, аналитики и облака OpenVitals.',
    install: 'Установить на Android',
    docs: 'Читать документацию',
    actionsLabel: 'Действия OpenVitals'
  },
  proof: {
    label: 'Гарантии приватности OpenVitals',
    points: [
      'Без облачного аккаунта OpenVitals',
      'У приложения нет разрешения на доступ к интернету',
      'Без рекламы и SDK аналитики',
      'Health Connect остаётся основным источником данных'
    ]
  },
  intro: {
    eyebrow: 'Для людей, а не для профилей',
    title: 'Данные о здоровье должны приносить пользу, а не пополнять чужие базы данных.',
    text:
      'OpenVitals читает поддерживаемые записи Health Connect, превращает их в понятные сводки за день и подробные экраны и оставляет контроль на устройстве. Вы сами решаете, какие разрешения дать и когда что-либо будет записано.'
  },
  privacy: {
    eyebrow: 'Подход к приватности',
    title: 'Без аккаунта. Без ленты. Без торговли данными за кулисами.',
    text:
      'Приложение для Android работает на устройстве, и всегда понятно, что оно делает. Оно читает Health Connect, хранит настройки на устройстве и изменяет данные о здоровье только тогда, когда вы что-то сохраняете, импортируете, записываете, редактируете или удаляете.',
    link: 'Подробнее о приватности',
    detailsLabel: 'Подробности о приватности',
    items: [
      {
        title: 'По умолчанию на устройстве',
        text: 'Для панели в приложении не нужен сервер OpenVitals.'
      },
      {
        title: 'Доступ только с вашего разрешения',
        text: 'Разрешения Health Connect всегда на виду, и вы выдаёте их осознанно.'
      },
      {
        title: 'Открытый код',
        text: 'Приложение для Android и документация доступны на GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Носимые устройства',
    title: 'Работает с вашими часами.',
    text:
      'Подключите любое носимое устройство через Gadgetbridge или официальное приложение производителя. Синхронизируйте уведомления, пульс в реальном времени, погоду и календарь напрямую по Bluetooth. Всё попадает в Health Connect, а OpenVitals собирает это в одной приватной панели.',
    link: 'Как работает синхронизация с Health Connect',
    listLabel: 'Поддержка часов и датчиков',
    points: [
      {
        title: 'Любое устройство, которое записывает данные в Health Connect',
        text: 'Будь то Gadgetbridge или официальное приложение производителя: если приложение-компаньон синхронизирует данные с Health Connect, OpenVitals их видит.'
      },
      {
        title: 'Сон, пульс, шаги и тренировки',
        text: 'Все показатели с вашего устройства попадают в Health Connect: стадии сна, пульс, HRV, шаги и тренировки видны в одной понятной панели.'
      },
      {
        title: 'Датчики в реальном времени подключаются напрямую',
        text: 'BLE-пульсометры, датчики каденса и мощности по-прежнему подключаются к приложению напрямую и передают данные в реальном времени, пока вы записываете тренировку.'
      }
    ]
  },
  features: {
    eyebrow: 'Что умеет',
    title: 'Смотрите, импортируйте, записывайте, отмечайте и разбирайтесь. Всё на телефоне.',
    cards: [
      {
        title: 'Все показатели в одном месте',
        text: 'Активность, сон, сердце, тело, гидратация, питание и цикл на одной панели за день. Тенденции, статистика и подробные экраны — в одном касании, когда хотите узнать, что изменилось.',
        accent: '#0f766e'
      },
      {
        title: 'Импортируйте то, что уже есть',
        text: 'Загрузите экспорт Apple Health и файлы FIT, GPX, KML/KMZ, TCX и CSV — по одному или целыми папками. В CSV могут быть взвешивания с весов, дневник давления, таблица приёмов пищи или экспортированные тренировки. История, которую вы собрали в другом месте, переедет вместе с вами.',
        accent: '#2f6f9f'
      },
      {
        title: 'Записывайте активности и тренировки',
        text: 'GPS-маршруты на офлайн-картах, которые поворачиваются и следуют за вами, навигация CoMaps в реальном времени с пошаговыми инструкциями и запланированным маршрутом на карте, BLE-датчики пульса, каденса и мощности, голосовые оповещения, круги и подсчёт повторений. Планы тренировок создаются один раз и запускаются как тренировки с подсказками: подходы, вес и отдых для каждого упражнения, повторения считает телефон, а для отдыха идёт обратный отсчёт. Высота импортированных и записанных маршрутов корректируется по тайлам высот, которые хранятся на телефоне. Любую тренировку можно экспортировать без маршрута в TCX, FIT или CSV. В Health Connect тренировка попадает только после сохранения.',
        accent: '#d95c3f'
      },
      {
        title: 'Работает с вашими часами',
        text: 'Подключите любое носимое устройство через Gadgetbridge или приложение производителя: синхронизируйте по Bluetooth уведомления и входящие звонки, пульс в реальном времени, погоду, календарь и управление музыкой, при желании — автоматически по расписанию. Всё синхронизируется через Health Connect в одну общую панель. Встаньте на поддерживаемые весы Xiaomi, и взвешивание попадёт в Health Connect, даже при закрытом приложении.',
        accent: '#a07b00'
      },
      {
        title: 'Вносите цифры, которые знаете только вы',
        text: 'Все показатели весов-анализаторов, от веса и жира до воды в организме, рост, артериальное давление с условиями измерения и категориями по выбранным вами рекомендациям (ACC/AHA, ESH, ESC или ISH), HRV, глюкоза, VO2 max, приёмы пищи, напитки, продукты, которые вы один раз заводите вместе с питательными веществами и потом добавляете порциями, дневные суммы любых питательных веществ, введённые напрямую, и минуты осознанности. Быстрый ручной ввод с напоминаниями и виджетами на главном экране.',
        accent: '#1f9d55'
      },
      {
        title: 'Отчёт о здоровье, который можно отдать врачу',
        text: 'Выберите показатели и период, и приложение создаст PDF прямо на телефоне: графики, статистика и клинические разделы по артериальному давлению, глюкозе, тренировкам, сну и отслеживанию цикла. Каждый нутриент, который вы записываете, от клетчатки до селена, может получить свой график. Поделитесь им или сохраните; ничего никуда не загружается.',
        accent: '#4f5d9e'
      },
      {
        title: 'Отслеживание цикла, которое остаётся вашим',
        text: 'В записи дня отмечаются кровотечение, боль, настроение, энергия, симптомы, заметки и тесты — по одному пункту за раз. Ожидаемые сроки следующей менструации рассчитываются по вашей собственной истории, схема приёма противозачаточных таблеток напоминает о приёме в нужные дни, а Health Connect хранит свои записи, пока журнал остаётся на телефоне под отдельным разрешением.',
        accent: '#b03a5b'
      },
      {
        title: 'Оценки рассчитываются на телефоне',
        text: 'Оценка сна, энергия тела и ежедневная готовность рассчитываются на устройстве относительно ваших собственных базовых уровней. Энергия тела учитывает не только продолжительность сна, но и то, насколько хорошо вы спали: эффективность, время бодрствования, глубокий сон и фазу REM. Никакое облако не читает ваши данные, чтобы сказать вам, как вы спали.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Снимки экрана OpenVitals',
    eyebrow: 'Экраны приложения',
    title: 'Сегодняшний день видно с одного взгляда, а подробности — когда это важно.',
    items: [
      {
        src: '/images/screens/ru/heart-rate-day.png',
        alt: 'OpenVitals: Частота сердечных сокращений',
        label: 'Частота сердечных сокращений'
      },
      {
        src: '/images/screens/ru/log-metrics.png',
        alt: 'OpenVitals: Добавить запись',
        label: 'Добавить запись'
      },
      {
        src: '/images/screens/ru/imports.png',
        alt: 'OpenVitals: Импорт и экспорт',
        label: 'Импорт и экспорт'
      },
      {
        src: '/images/screens/ru/health-report.png',
        alt: 'OpenVitals: Отчёт о здоровье',
        label: 'Отчёт о здоровье'
      }
    ]
  },
  reviews: {
    label: 'Отзывы в Google Play',
    eyebrow: 'Из Google Play',
    title: 'Что говорят те, кто пользуется приложением не первый день.',
    text: 'Дословные цитаты из публичных отзывов в Google Play на языке оригинала.',
    link: 'Читать все отзывы в Google Play',
    trackLabel: 'Карусель отзывов, прокрутите в сторону, чтобы увидеть больше',
    ratingLabel: '{rating} из 5 звёзд',
    translatedNote: 'Переведено Google',
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
    eyebrow: 'Скачать OpenVitals',
    title: 'Установите OpenVitals на Android.',
    text: 'Выберите источник, который подходит под то, как вы обновляете приложения на Android. OpenVitals также доступен в виде подписанных выпусков для тех, кто предпочитает скачивать приложение напрямую у проекта.',
    moreLabel: 'Ещё об установке',
    guide: 'Руководство по установке',
    cards: [
      {
        title: 'Google Play',
        text: 'Стандартный способ установки и обновления на Android.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Доступно в Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Установка из каталога свободных приложений с открытым кодом для Android.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Доступно в F-Droid'
      },
      {
        title: 'Выпуски на GitHub',
        text: 'Скачайте подписанные APK-файлы прямо у проекта.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Доступно на GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Поддержите проект',
    title: 'Помогите OpenVitals развиваться.',
    text: 'Оставьте положительный отзыв в Google Play, переведите приложение для Android, чтобы им могло пользоваться больше людей, или поддержите деньгами текущую разработку, тестирование, документацию, выпуски и сопровождение этого свободного проекта с открытым кодом.',
    actionsLabel: 'Поддержать OpenVitals',
    review: 'Оценить в Google Play',
    translate: 'Перевести OpenVitals',
    liberapayAlt: 'Поддержать OpenVitals на Liberapay',
    more: 'Другие способы поддержки'
  },
  footer: {
    publisher: 'Издатель: Hale MTÜ, некоммерческая организация в Таллине, Эстония.',
    nav: 'Навигация внизу страницы',
    documentation: 'Документация',
    privacy: 'Приватность',
    source: 'Исходный код',
    translate: 'Перевести',
    support: 'Поддержать'
  }
}

export default ru
