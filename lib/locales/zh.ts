import type { Messages } from '../messages'

const zh: Messages = {
  meta: {
    title: 'OpenVitals - 数据留在本机的 Android 健康概览',
    description:
      'OpenVitals 是一款数据留在本机的 Android 应用，用来查看、记录、导入和读懂 Health Connect 数据。无需账号，没有广告，也不做使用统计。',
    ogDescription:
      '基于 Health Connect 的 Android 健康概览，数据留在本机。无需账号，没有广告，也不做使用统计。',
    twitterDescription:
      '在本机处理 Health Connect 数据的 Android 健康工具。无需账号，没有广告，也不做使用统计。'
  },
  hale: {
    eyebrow: '面向 Android 的免费离线健康应用',
    title: '你的健康数据只在你的手机里，不在别处。',
    text: 'Hale MTÜ 是 OpenVitals、OpenWatch 和 OpenBridge 背后的爱沙尼亚非营利协会：没有账户、没有广告、没有分析、没有云端。',
    appsLabel: '应用',
    apps: {
      openvitals: { text: '仪表板。读取你的 Health Connect 记录并整理成每日视图；导入、记录和手动录入，全部在手机上完成。', link: '关于 OpenVitals' },
      openwatch: { text: '设备。通过蓝牙配对 Garmin 和 Wear OS 手表以及小米体重秤，并把它们的记录写入 Health Connect。', link: '关于 OpenWatch' },
      openbridge: { text: '对外的桥。一个可选应用，把 OpenVitals 共享的数据传给在线服务。尚处早期。', link: '关于 OpenBridge' }
    },
    metaTitle: 'Hale - 面向 Android 的免费离线健康应用',
    metaDescription: 'Hale MTÜ 是 OpenVitals、OpenWatch 和 OpenBridge 背后的爱沙尼亚非营利协会：免费开源的 Android 健康应用，没有账户、没有广告、没有云端。',
    principlesTitle: '三款应用的共同点',
    principles: [
      { title: '没有账户，没有 Hale 云', text: '无需注册，也没有 Hale 服务器。除非你自己选择转出，你的记录一直留在 Android 的 Health Connect 中。' },
      { title: '没有广告，没有分析', text: '所有应用都不含追踪 SDK，也没有任何基于你数据的生意。' },
      { title: '自由开源', text: '每款应用都是采用 AGPL-3.0-or-later 许可的自由软件，源代码在 GitHub 上。' },
      { title: '由非营利协会运营', text: 'Hale MTÜ 注册于爱沙尼亚塔林。它的收入只用于章程目标，从不分配。' }
    ],
    aboutTitle: '关于 Hale',
    aboutText: 'Hale 是一个古老的英语单词，意思是健康，如 “hale and hearty”。协会发布这些应用，并维护它们的代码和社区。联系邮箱 hello@hale.ngo。'
  },
  openwatch: {
    metaTitle: 'OpenWatch - 为 Health Connect 连接手表和体重秤',
    metaDescription: 'OpenWatch 通过蓝牙配对 Garmin 和 Wear OS 手表以及小米体重秤，并把它们的记录写入 Health Connect。无需账户、无需服务器、没有联网权限。',
    eyebrow: '为 Health Connect 连接手表和体重秤',
    lede: 'OpenWatch 通过蓝牙配对你的手表和体重秤，把它们的记录写入 Health Connect，并管理这些设备。无需账户、无需服务器、没有联网权限。',
    devicesTitle: '支持的设备',
    devices: [
      { title: 'Garmin 手表', text: '通过 Garmin 自己的蓝牙协议同步活动、睡眠和健康数据，还支持通知、音乐控制、天气、日历、闹钟和查找手表。' },
      { title: 'Wear OS 手表', text: 'OpenWatch 手表应用记录心率、步数和爬楼层数，一键或按计划同步，每晚估算睡眠和静息心率。' },
      { title: '小米 S400 体重秤', text: '每次称重都会立即写入 Health Connect，无论应用是否打开。体脂、去脂体重和身体水分由手机估算。' }
    ],
    privacyTitle: '你的数据去向',
    privacy: [
      { title: '没有联网权限', text: '手机应用无法访问互联网。所有数据都通过蓝牙在设备和手机之间传输。' },
      { title: '写入 Health Connect', text: '设备记录的数据进入 Android 的健康数据存储，OpenVitals 和你授权的任何应用都可以读取。' },
      { title: '其余留在手机上', text: 'Health Connect 无法保存的数据，例如压力或 Body Battery，保存在 OpenWatch 自己的数据库中。' }
    ],
    pairText: 'OpenWatch 负责把数据带进来，OpenVitals 负责让你查看。'
  },
  openbridge: {
    metaTitle: 'OpenBridge - 把 OpenVitals 的数据传给在线服务',
    metaDescription: 'OpenBridge 是一款可选的 Android 应用，读取 OpenVitals 共享的数据，并可以把它传给在线服务。尚处早期。',
    eyebrow: '可选，尚处早期',
    lede: 'OpenVitals 从不联网。OpenBridge 是能够联网的独立应用：它只读取你允许 OpenVitals 共享的数据，并可以把它传给在线服务。',
    stepsTitle: '它如何获取数据',
    steps: [
      '在 OpenVitals 的设置中开启与其他应用共享。默认是关闭的。',
      '在 OpenBridge 中请求你想共享的数据组。Android 会对十一个数据组逐一询问一次，之后可以在系统设置中更改。',
      '读取一个或全部数据组：最近一周的每日汇总、最近一天的采样、最近一个月的运动和路线。'
    ],
    statusTitle: '目前进展',
    statusText: '目前还没有连接任何在线服务，共享 API 暂时只在 OpenVitals 的测试版本中提供。可以在 GitHub 上关注进展。'
  },
  nav: {
    primary: '主导航',
    docs: '文档',
    install: '安装',
    home: 'Hale 首页',
    language: '语言'
  },
  hero: {
    eyebrow: '数据留在本机的 Android 健康工具',
    lede:
      '一个私密的 Health Connect 健康概览，帮你查看、记录、导入并读懂自己的健康数据。无需账号，没有广告和使用统计，也没有 OpenVitals 云端。',
    install: '在 Android 上安装',
    docs: '阅读文档',
    actionsLabel: 'OpenVitals 操作'
  },
  proof: {
    label: 'OpenVitals 隐私承诺',
    points: [
      '没有 OpenVitals 云端账号',
      '应用本身没有联网权限',
      '没有广告或统计 SDK',
      'Health Connect 始终是数据的权威来源'
    ]
  },
  intro: {
    eyebrow: '为人服务，而非用户画像',
    title: '健康数据应当为你所用，而不是成为别人手里的数据。',
    text:
      'OpenVitals 读取受支持的 Health Connect 记录，整理成清晰的每日视图和详情页面，并把掌控权留在设备上。授予哪些权限、何时写入任何内容，都由你决定。'
  },
  privacy: {
    eyebrow: '隐私立场',
    title: '无需账号。没有信息流。没有暗中的数据生意。',
    text:
      '这款 Android 应用围绕本机上、由你明确发起的操作来设计。它读取 Health Connect，把应用设置保存在设备上，并且只在你保存、导入、记录、编辑或删除之后才写入健康记录。',
    link: '查看隐私详情',
    detailsLabel: '隐私详情',
    items: [
      {
        title: '默认在本机',
        text: '使用应用概览无需 OpenVitals 服务器。'
      },
      {
        title: '由你授权',
        text: '每项 Health Connect 权限都清楚可见，由你主动决定是否授予。'
      },
      {
        title: '开源',
        text: 'Android 应用和文档都在 GitHub 上公开。'
      }
    ]
  },
  devices: {
    eyebrow: '可穿戴设备',
    title: '与你的手表配合使用。',
    text:
      '通过 Gadgetbridge 或厂商官方应用，连接任何可穿戴设备。通知、实时心率、天气和日历，都能通过蓝牙直接同步。所有数据汇入 Health Connect，再由 OpenVitals 汇总到一个私密的概览中。',
    link: '了解 Health Connect 同步的原理',
    listLabel: '手表和传感器支持',
    points: [
      {
        title: '任何写入 Health Connect 的可穿戴设备',
        text: '无论使用 Gadgetbridge 还是厂商官方应用，只要配套应用能同步到 Health Connect，OpenVitals 就能看到这些数据。'
      },
      {
        title: '睡眠、心率、步数和锻炼',
        text: '可穿戴设备的各项指标都会进入 Health Connect：睡眠分期、心率、HRV、步数和锻炼，都显示在一个清晰的概览中。'
      },
      {
        title: '实时传感器直接连接',
        text: '记录锻炼时，BLE 心率带、踏频传感器和功率传感器仍会直接连接应用，提供实时数据。'
      }
    ]
  },
  features: {
    eyebrow: '主要功能',
    title: '查看、导入、记录运动、手动录入，并读懂数据。一切都在手机上完成。',
    cards: [
      {
        title: '所有指标，集中一处',
        text: '活动、睡眠、心脏、身体、饮水、营养和周期，都在同一个每日概览中。想知道哪里有变化时，轻点一下即可查看趋势、统计和详情页面。',
        accent: '#0f766e'
      },
      {
        title: '带上你已有的数据',
        text: '可导入 Apple Health 导出数据，以及 FIT、GPX、KML/KMZ、TCX 和 CSV 文件，既能逐个导入，也能整个文件夹导入。CSV 可以是体重秤的称重记录、血压记录、餐食表格，或你导出的锻炼记录。你在别处积累的历史记录，都能一起带过来。',
        accent: '#2f6f9f'
      },
      {
        title: '记录活动与锻炼',
        text: 'GPS 路线绘制在离线地图上，地图会随你转向并跟随你移动；CoMaps 实时提供转弯导航，并在地图上显示规划路线；支持 BLE 心率、踏频和功率传感器，还有语音播报、计圈和次数计数。训练计划只需创建一次，之后即可按引导逐步完成：每个动作可设置组数、重量和休息时间，次数由手机计数，休息时自动倒计时。导入和记录的路线，会用手机上存储的海拔瓦片校正海拔。任何锻炼都可以导出为 TCX、FIT 或 CSV（不含路线）。只有在你保存时，才会写入 Health Connect。',
        accent: '#d95c3f'
      },
      {
        title: '与你的手表配合使用',
        text: '通过 Gadgetbridge 或厂商应用连接任何可穿戴设备：通过蓝牙同步通知和来电、实时心率、天气、日历和音乐控制，如有需要还可以定时自动同步。所有数据都经由 Health Connect 汇入同一个概览。 站上受支持的小米体重秤，即使应用已关闭，称重也会保存到 Health Connect。',
        accent: '#a07b00'
      },
      {
        title: '记录只有你知道的数据',
        text: '体脂秤的全部读数（从体重、体脂到身体水分）、身高、血压（附带测量时的情况，并按你选择的指南分类：ACC/AHA、ESH、ESC 或 ISH）、HRV、血糖、最大摄氧量、餐食、饮品、自定义食物（只需设定一次营养素，之后按份量记录）、直接输入的任意营养素每日总量，以及正念分钟数。手动录入快速方便，还有提醒和主屏幕小组件。',
        accent: '#1f9d55'
      },
      {
        title: '一份能交给医生的健康报告',
        text: '选择指标和时间范围，应用就会在手机上生成 PDF：包括图表、统计数据，以及供医生查看的血压、血糖、锻炼、睡眠和周期追踪章节。你记录的每种营养素，从膳食纤维到硒，都能拥有自己的图表。可以分享，也可以保存；不会上传任何内容。',
        accent: '#4f5d9e'
      },
      {
        title: '只属于你的周期追踪',
        text: '每日记录出血、疼痛、心情、精力、症状、备注和测试，一次记录一项。下次经期的预估范围来自你自己的历史记录；设置避孕药服用方案后，会在服药日提醒你。Health Connect 保存它自己的记录，而周期日志留在你的手机上，并受单独的权限保护。',
        accent: '#b03a5b'
      },
      {
        title: '分析都在手机上完成',
        text: '睡眠评分、身体电量和每日就绪状态，都在设备上对照你自己的平时水平计算。身体电量不只看睡了多久，还会看你睡得好不好：睡眠效率、清醒时间、深睡和 REM 睡眠。没有任何云端会读取你的数据来告诉你睡得怎样。',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'OpenVitals 截图',
    eyebrow: '产品界面',
    title: '今天的情况一眼看清，需要时再深入了解。',
    items: [
      {
        src: '/images/screens/zh/heart-rate-day.png',
        alt: 'OpenVitals: 心率',
        label: '心率'
      },
      {
        src: '/images/screens/zh/log-metrics.png',
        alt: 'OpenVitals: 添加记录',
        label: '添加记录'
      },
      {
        src: '/images/screens/zh/imports.png',
        alt: 'OpenVitals: 导入与导出',
        label: '导入与导出'
      },
      {
        src: '/images/screens/zh/health-report.png',
        alt: 'OpenVitals: 健康报告',
        label: '健康报告'
      }
    ]
  },
  reviews: {
    label: 'Google Play 评价',
    eyebrow: '来自 Google Play',
    title: '用过一段时间后，大家怎么说。',
    text: '引自 Google Play 上的公开评价，保留评价原本的语言。',
    link: '在 Google Play 上查看全部评价',
    trackLabel: '评价轮播，左右滑动查看更多',
    ratingLabel: '{rating} 星，满分 5 星',
    translatedNote: '由 Google 翻译',
    // Verbatim from the Google Play listing, newest first. Kept in English.
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
    eyebrow: '获取 OpenVitals',
    title: '在 Android 上安装 OpenVitals。',
    text: '按你更新应用的习惯，选择合适的 Android 渠道。喜欢直接从项目下载的用户，也可以使用已签名的发布版本。',
    moreLabel: '更多安装资源',
    guide: '安装指南',
    cards: [
      {
        title: 'Google Play',
        text: '使用 Android 标准的安装和更新方式。',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: '下载应用，请到 Google Play'
      },
      {
        title: 'F-Droid',
        text: '通过自由开源的 Android 应用商店安装。',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: '在 F-Droid 上获取'
      },
      {
        title: 'GitHub 发布版本',
        text: '直接从项目下载已签名的 APK 发布版本。',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: '在 GitHub 上获取'
      }
    ]
  },
  support: {
    eyebrow: '支持项目',
    title: '帮助 OpenVitals 成长。',
    text: '你可以在 Google Play 上留下好评，把 Android 应用翻译给更多人使用，或者资助这个自由开源项目背后持续的开发、测试、文档、发布和维护工作。',
    actionsLabel: '支持 OpenVitals',
    review: '在 Google Play 上评价',
    translate: '翻译 OpenVitals',
    liberapayAlt: '在 Liberapay 上支持 OpenVitals',
    more: '更多支持方式'
  },
  footer: {
    publisher: '由 Hale MTÜ 发布，一家位于爱沙尼亚塔林的非营利协会。',
    nav: '页脚导航',
    documentation: '文档',
    privacy: '隐私',
    source: '源代码',
    translate: '翻译',
    support: '支持'
  }
}

export default zh
