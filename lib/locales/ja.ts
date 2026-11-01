import type { Messages } from '../messages'

const ja: Messages = {
  meta: {
    title: 'OpenVitals - データを手元に置く Android 健康ダッシュボード',
    description:
      'OpenVitals は、Health Connect のデータを表示、記録、インポートし、読み解くための Android アプリです。データは手元に置いたまま。アカウントも広告も利用状況の分析もありません。',
    ogDescription:
      'Health Connect と連携する、データを手元に置く Android 向け健康ダッシュボードです。アカウントも広告も利用状況の分析も使わずに作られています。',
    twitterDescription:
      'Health Connect のデータを手元で扱う Android 向け健康ツールです。アカウントも広告も利用状況の分析もありません。'
  },
  nav: {
    primary: 'メインナビゲーション',
    privacy: 'プライバシー',
    features: '機能',
    docs: 'ドキュメント',
    install: 'インストール',
    home: 'OpenVitals ホーム',
    language: '言語'
  },
  hero: {
    eyebrow: 'データを手元に置く Android 向け健康ツール',
    lede:
      'Health Connect の健康データを表示、記録、インポートし、読み解くためのプライベートなダッシュボードです。アカウントも、広告も、利用状況の分析も、OpenVitals のクラウドもありません。',
    install: 'Android にインストール',
    docs: 'ドキュメントを読む',
    actionsLabel: 'OpenVitals の操作'
  },
  proof: {
    label: 'OpenVitals のプライバシー保証',
    points: [
      'OpenVitals のクラウドアカウントなし',
      'アプリ自体にインターネット権限なし',
      '広告 SDK も分析 SDK もなし',
      'データの基本の保存先は、いつも Health Connect'
    ]
  },
  intro: {
    eyebrow: 'プロファイリングではなく、人のために',
    title: '健康データは、誰かのデータ集めの材料にならずに、役に立つべきです。',
    text:
      'OpenVitals は、対応する Health Connect の記録を読み取り、わかりやすい日ごとの画面と詳細画面にまとめます。主導権は手元の端末に残ります。どの権限を許可するか、いつ書き込むかは、あなたが決めます。'
  },
  privacy: {
    eyebrow: 'プライバシーへの姿勢',
    title: 'アカウントなし。SNS のようなタイムラインなし。裏でのデータビジネスなし。',
    text:
      'Android アプリは、端末の中で、あなたの操作をきっかけに動くように設計されています。Health Connect を読み取り、アプリの設定は端末に保存します。健康記録を書き込むのは、保存、インポート、記録、編集、削除のいずれかを行ったときだけです。',
    link: 'プライバシーの詳細を見る',
    detailsLabel: 'プライバシーの詳細',
    items: [
      {
        title: '基本は端末の中',
        text: 'アプリのダッシュボードを使うのに、OpenVitals のサーバーは必要ありません。'
      },
      {
        title: 'アクセスはあなたが許可',
        text: 'Health Connect の権限はいつでも確認でき、許可するかどうかは自分で選べます。'
      },
      {
        title: 'オープンソース',
        text: 'Android アプリとドキュメントは GitHub で公開しています。'
      }
    ]
  },
  devices: {
    eyebrow: 'ウェアラブル',
    title: 'お手持ちのウォッチと連携。',
    text:
      'Gadgetbridge やメーカーの公式アプリを通じて、どんなウェアラブルでも接続できます。通知、リアルタイムの心拍数、天気、カレンダーは、Bluetooth で直接同期します。すべてのデータは Health Connect に集まり、OpenVitals がそれを一つのプライベートなダッシュボードにまとめます。',
    link: 'Health Connect の同期のしくみ',
    listLabel: 'ウォッチとセンサーの対応',
    points: [
      {
        title: 'Health Connect に書き込むウェアラブルなら、どれでも',
        text: 'Gadgetbridge でもメーカーの公式アプリでも、連携アプリが Health Connect に同期していれば、OpenVitals でそのデータを見られます。'
      },
      {
        title: '睡眠、心拍数、歩数、ワークアウト',
        text: 'ウェアラブルの測定値は、すべて Health Connect に届きます。睡眠ステージ、心拍数、HRV、歩数、ワークアウトが、一つの見やすいダッシュボードに表示されます。'
      },
      {
        title: 'リアルタイムのセンサーは直接接続',
        text: 'BLE の心拍ストラップ、ケイデンスセンサー、パワーセンサーは、ワークアウトの記録中も引き続きアプリに直接つながり、リアルタイムのデータを届けます。'
      }
    ]
  },
  features: {
    eyebrow: 'できること',
    title: '見る、インポートする、計測する、記録する、読み解く。すべてスマートフォンひとつで。',
    cards: [
      {
        title: 'すべての指標を 1 か所に',
        text: 'アクティビティ、睡眠、心臓、身体、水分補給、栄養、周期を、その日のダッシュボード一つで確認できます。何が変わったのか知りたいときは、タップ一つで推移、統計、詳細画面に進めます。',
        accent: '#0f766e'
      },
      {
        title: 'いまあるデータをインポート',
        text: 'Apple ヘルスケアのエクスポートと、FIT、GPX、KML/KMZ、TCX、CSV ファイルを、1 つずつでもフォルダごとでもインポートできます。CSV には体重計の計測記録、血圧の記録、食事の表、エクスポートしたワークアウトを入れられます。ほかの場所で積み重ねてきた履歴も、そのまま引き継げます。',
        accent: '#2f6f9f'
      },
      {
        title: 'アクティビティとワークアウトを記録',
        text: 'GPS のルートは、進む向きに合わせて回転し、現在地を追いかけるオフライン地図の上に描かれます。CoMaps の曲がり角ごとの道案内をリアルタイムで表示し、予定のルートも地図に重ねます。BLE の心拍・ケイデンス・パワーセンサー、音声アナウンス、ラップ、回数カウントにも対応しています。ワークアウトプランは一度作れば、ガイド付きのセッションとして実行できます。種目ごとにセット数、重量、休憩を決められ、回数はスマートフォンが数え、休憩はカウントダウンで進みます。インポートしたルートと記録したルートは、スマートフォンに保存した標高タイルで高度を補正します。どのワークアウトも、ルートを含めずに TCX、FIT、CSV でエクスポートできます。Health Connect に書き込むのは、保存したときだけです。',
        accent: '#d95c3f'
      },
      {
        title: 'お手持ちのウォッチと連携',
        text: 'Gadgetbridge やメーカーのアプリを通じて、どんなウェアラブルでも接続できます。通知と着信、リアルタイムの心拍数、天気、カレンダー、音楽の操作を Bluetooth で同期でき、希望すれば決まった間隔で自動的に同期することもできます。すべてのデータは Health Connect を通じて、一つのダッシュボードにまとまります。 対応する Xiaomi 体重計に乗れば、アプリを閉じていても測定が Health Connect に保存されます。',
        accent: '#a07b00'
      },
      {
        title: '自分にしかわからない数値を記録',
        text: '体組成計の測定値一式（体重、体脂肪から体水分まで）、身長、血圧（測定時の状況と、ACC/AHA、ESH、ESC、ISH から選んだガイドラインによる分類付き）、HRV、血糖値、最大酸素摂取量、食事、飲み物、食品、マインドフルネスの時間を記録できます。食品は栄養素と一緒に一度登録すれば、あとは分量を指定して記録するだけです。あらゆる栄養素の1日の合計を直接入力することもできます。すばやく手入力でき、リマインダーとホーム画面ウィジェットも使えます。',
        accent: '#1f9d55'
      },
      {
        title: '医師に手渡せる健康レポート',
        text: '指標と期間を選ぶと、アプリがスマートフォン上で PDF を作成します。グラフと統計のほか、血圧、血糖値、ワークアウト、睡眠、周期の記録については医師向けのセクションも入ります。記録した栄養素は、食物繊維からセレンまで、それぞれ専用のグラフにできます。共有も保存もでき、どこにもアップロードされません。',
        accent: '#4f5d9e'
      },
      {
        title: '周期の記録は、あなたの手元に',
        text: '出血、痛み、気分、エネルギー、症状、メモ、検査を、1 日ごとに一つずつ記録できます。次の月経の推定範囲は、あなた自身の履歴から出します。経口避妊薬（ピル）の服用パターンを設定すると、服用日にリマインダーが届きます。Health Connect には Health Connect の記録が残り、日々の記録はスマートフォンの中で、専用の権限に守られて保存されます。',
        accent: '#b03a5b'
      },
      {
        title: 'スコアはスマートフォンの中で計算',
        text: '睡眠スコア、ボディエネルギー、今日のコンディションは、あなた自身のふだんの値と比べて、端末の中で計算します。ボディエネルギーは、眠った時間の長さだけでなく、睡眠効率、目覚めていた時間、深い睡眠と REM 睡眠から、どれだけよく眠れたかを読み取ります。どう眠れたかを知らせるために、クラウドがあなたのデータを読むことはありません。',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'OpenVitals のスクリーンショット',
    eyebrow: '画面の紹介',
    title: '今日の様子はひと目で。気になるときは、もっと詳しく。',
    items: [
      {
        src: '/images/screens/ja/heart-rate-day.png',
        alt: 'OpenVitals: 心拍数',
        label: '心拍数'
      },
      {
        src: '/images/screens/ja/log-metrics.png',
        alt: 'OpenVitals: 記録の追加',
        label: '記録の追加'
      },
      {
        src: '/images/screens/ja/imports.png',
        alt: 'OpenVitals: インポートとエクスポート',
        label: 'インポートとエクスポート'
      },
      {
        src: '/images/screens/ja/health-report.png',
        alt: 'OpenVitals: 健康レポート',
        label: '健康レポート'
      }
    ]
  },
  reviews: {
    label: 'Google Play のレビュー',
    eyebrow: 'Google Play から',
    title: '毎日使っている人たちの声。',
    text: 'Google Play の公開レビューを、投稿された言語のまま引用しています。',
    link: 'Google Play ですべてのレビューを読む',
    trackLabel: 'レビューのカルーセル。横にスクロールすると、ほかのレビューを表示します',
    ratingLabel: '5 つ星のうち {rating}',
    translatedNote: 'Google による翻訳',
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
    eyebrow: 'OpenVitals を入手',
    title: 'Android に OpenVitals をインストール。',
    text: 'アプリの更新方法に合わせて、入手先を選んでください。プロジェクトから直接ダウンロードしたい方向けに、署名付きのリリースも用意しています。',
    moreLabel: 'インストールに関するその他の情報',
    guide: 'インストールガイド',
    cards: [
      {
        title: 'Google Play',
        text: 'Android の標準的な方法でインストールし、更新できます。',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Google Play で手に入れよう'
      },
      {
        title: 'F-Droid',
        text: 'フリーでオープンソースの Android アプリストアからインストールできます。',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'F-Droid で手に入れよう'
      },
      {
        title: 'GitHub のリリース',
        text: '署名付きの APK をプロジェクトから直接ダウンロードできます。',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'GitHub で手に入れよう'
      }
    ]
  },
  support: {
    eyebrow: 'プロジェクトを支援',
    title: 'OpenVitals の成長を支えてください。',
    text: 'Google Play に高評価のレビューを書いたり、より多くの人に届くよう Android アプリを翻訳したり、このフリーでオープンソースのプロジェクトを支える継続的な開発、テスト、ドキュメント、リリース、保守に資金を提供したりできます。',
    actionsLabel: 'OpenVitals を支援',
    review: 'Google Play でレビューする',
    translate: 'OpenVitals を翻訳',
    liberapayAlt: 'Liberapay で OpenVitals を支援',
    more: 'その他の支援方法'
  },
  footer: {
    nav: 'フッターナビゲーション',
    documentation: 'ドキュメント',
    privacy: 'プライバシー',
    source: 'ソースコード',
    translate: '翻訳',
    support: '支援'
  }
}

export default ja
