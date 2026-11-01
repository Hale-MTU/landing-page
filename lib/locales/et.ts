import type { Messages } from '../messages'

const et: Messages = {
  meta: {
    title: 'OpenVitals - Seadmes töötav tervisekokkuvõte Androidile',
    description:
      'OpenVitals on seadmes töötav Androidi rakendus, millega saad oma Health Connecti andmeid vaadata, logida, importida ja mõista ilma konto, reklaamide ja analüütikata.',
    ogDescription:
      'Seadmes töötav tervisekokkuvõte Androidile, mis põhineb Health Connectil. Pole kontot, reklaame ega analüütikat.',
    twitterDescription:
      'Seadmes töötavad tervisetööriistad Androidile ja sinu Health Connecti andmetele, ilma konto, reklaamide ja analüütikata.'
  },
  nav: {
    primary: 'Põhinavigatsioon',
    privacy: 'Privaatsus',
    features: 'Funktsioonid',
    docs: 'Juhendid',
    install: 'Paigalda',
    home: 'OpenVitalsi avaleht',
    language: 'Keel'
  },
  hero: {
    eyebrow: 'Seadmes töötavad tervisetööriistad Androidile',
    lede:
      'Privaatne Health Connecti kokkuvõte, millega saad oma terviseandmeid vaadata, logida, importida ja mõista ilma konto, reklaamide, analüütika ja OpenVitalsi pilveta.',
    install: 'Paigalda Androidile',
    docs: 'Loe juhendeid',
    actionsLabel: 'OpenVitalsi toimingud'
  },
  proof: {
    label: 'OpenVitalsi privaatsuslubadused',
    points: [
      'Pole OpenVitalsi pilvekontot',
      'Rakendusel pole internetiluba',
      'Pole reklaame ega sisseehitatud analüütikat',
      'Health Connect jääb peamiseks andmeallikaks'
    ]
  },
  intro: {
    eyebrow: 'Loodud inimestele, mitte profiilidele',
    title: 'Terviseandmed peavad olema sulle kasulikud, mitte jõudma kellegi teise andmebaasi.',
    text:
      'OpenVitals loeb toetatud Health Connecti kirjeid ja koondab need selgeteks päevavaadeteks ja üksikasjalikeks vaadeteks. Kontroll jääb sinu seadmesse: sina otsustad, milliseid lube annad ja millal midagi kirjutatakse.'
  },
  privacy: {
    eyebrow: 'Privaatsus',
    title: 'Pole kontot. Pole uudistevoogu. Pole varjatud andmeäri.',
    text:
      'Androidi rakendus tugineb selgetele kohalikele toimingutele. See loeb Health Connecti, salvestab rakenduse eelistused seadmesse ja kirjutab terviseandmeid alles siis, kui salvestad kirje, impordid faili, salvestad treeningu, muudad või kustutad midagi.',
    link: 'Vaata privaatsuse üksikasju',
    detailsLabel: 'Privaatsuse üksikasjad',
    items: [
      {
        title: 'Vaikimisi kohalik',
        text: 'Rakenduse kokkuvõte ei vaja OpenVitalsi serverit.'
      },
      {
        title: 'Ligipääs ainult sinu loal',
        text: 'Health Connecti load jäävad nähtavaks ja annad need teadlikult.'
      },
      {
        title: 'Avatud lähtekood',
        text: 'Androidi rakendus ja dokumentatsioon on saadaval GitHubis.'
      }
    ]
  },
  devices: {
    eyebrow: 'Kantavad nutiseadmed',
    title: 'Töötab sinu kellaga.',
    text:
      "Ühenda ükskõik milline kantav nutiseade Gadgetbridge'i või tootja ametliku rakenduse kaudu. Sünkrooni teavitused, reaalajas pulss, ilm ja kalender otse Bluetoothi kaudu. Kõik jõuab Health Connecti ja OpenVitals koondab selle ühte privaatsesse kokkuvõttesse.",
    link: 'Kuidas Health Connecti sünkroonimine töötab',
    listLabel: 'Kellade ja andurite tugi',
    points: [
      {
        title: 'Iga kantav seade, mis kirjutab Health Connecti',
        text: 'Olgu see Gadgetbridge või tootja ametlik rakendus: kui kaasrakendus sünkroonib andmed Health Connecti, näeb OpenVitals neid.'
      },
      {
        title: 'Uni, pulss, sammud ja treeningud',
        text: 'Kõik su kantava seadme näitajad jõuavad Health Connecti: unefaasid, pulss, HRV, sammud ja treeningud on koos ühes selges kokkuvõttes.'
      },
      {
        title: 'Reaalajas andurid ühenduvad otse',
        text: 'BLE-pulsivööd ning sagedus- ja võimsusandurid ühenduvad treeningu salvestamise ajal endiselt otse rakendusega ja edastavad reaalajas andmeid.'
      }
    ]
  },
  features: {
    eyebrow: 'Mida see teeb',
    title: 'Vaata, impordi, salvesta, logi ja mõista. Kõik telefonis.',
    cards: [
      {
        title: 'Kõik näitajad ühes kohas',
        text: 'Aktiivsus, uni, süda, keha, vedelikutarbimine, toitumine ja tsükkel ühes päevakokkuvõttes. Trendid, statistika ja üksikasjalikud vaated on ühe puudutuse kaugusel, kui tahad teada, mis muutus.',
        accent: '#0f766e'
      },
      {
        title: 'Too kaasa, mis sul juba olemas on',
        text: 'Impordi Apple Healthi ekspordid ning FIT-, GPX-, KML/KMZ-, TCX- ja CSV-failid ükshaaval või terve kausta korraga. CSV-fail võib sisaldada kaalu mõõtmisi, vererõhu logi, toidukordade tabelit või eksporditud treeninguid. Mujal kogunenud ajalugu tuleb sinuga kaasa.',
        accent: '#2f6f9f'
      },
      {
        title: 'Salvesta tegevusi ja treeninguid',
        text: 'GPS-marsruudid võrguühenduseta kaartidel, mis pöörlevad ja järgivad sind, CoMapsi reaalajas pöördejuhised koos kavandatud marsruudiga kaardil, BLE-pulsi-, sagedus- ja võimsusandurid, häälteated, ringid ja korduste lugemine. Treeningplaani koostad ühe korra ja läbid seda juhendatud treeninguna: igal harjutusel on oma seeriad, raskus ja puhkeaeg, telefon loeb kordusi ja puhkeajal jookseb pöördloendus. Imporditud ja salvestatud marsruutide kõrgust korrigeeritakse telefoni salvestatud kõrguspaanide abil. Iga treeningu saab ilma marsruudita eksportida TCX-, FIT- või CSV-failina. Health Connecti kirjutatakse alles siis, kui salvestad.',
        accent: '#d95c3f'
      },
      {
        title: 'Töötab sinu kellaga',
        text: "Ühenda ükskõik milline kantav seade Gadgetbridge'i või tootja rakenduse kaudu: sünkrooni Bluetoothi kaudu teavitused ja sissetulevad kõned, reaalajas pulss, ilm, kalender ja muusika juhtimine, soovi korral ajakava järgi. Kõik sünkroonitakse Health Connecti kaudu ühte ühisesse kokkuvõttesse. Astu toetatud Xiaomi kaalule ja kaalumine jõuab Health Connecti, ka suletud rakendusega.",
        accent: '#a07b00'
      },
      {
        title: 'Logi numbrid, mida tead ainult sina',
        text: 'Kehaanalüüsi kaalu kogu mõõtmine, kaalust ja keharasvast kehaveeni, pikkus, vererõhk koos mõõtmisolukorra ja sinu valitud juhise järgi määratud kategooriaga (ACC/AHA, ESH, ESC või ISH), HRV, veresuhkur, VO2 max, toidukorrad, joogid, toidud, mille toitained määrad ühe korra ja mida logid portsjonite kaupa, otse sisestatud mis tahes toitaine päevased kogused ning teadveloleku minutid. Kiire käsitsi sisestus koos meeldetuletuste ja avakuva vidinatega.',
        accent: '#1f9d55'
      },
      {
        title: 'Tervisearuanne, mille saad arstile ulatada',
        text: 'Vali näitajad ja ajavahemik ning rakendus koostab sinu telefonis PDF-i: graafikud, statistika ja kliinilised osad vererõhu, veresuhkru, treeningute, une ja tsükli jälgimise kohta. Iga toitaine, mida sa logid, kiudainetest seleenini, võib saada oma graafiku. Jaga või salvesta see. Midagi ei laadita üles.',
        accent: '#4f5d9e'
      },
      {
        title: 'Tsükli jälgimine, mis jääb sinu omaks',
        text: 'Päeva kirje veritsuse, valu, tuju, energia, sümptomite, märkuste ja testide jaoks, üks asi korraga. Järgmise menstruatsiooni hinnangulised vahemikud põhinevad sinu enda ajalool, rasestumisvastase tableti skeem tuletab sulle võtmispäevadel meelde ning Health Connect hoiab oma kirjeid, samal ajal kui päevik jääb sinu telefoni eraldi loa taha.',
        accent: '#b03a5b'
      },
      {
        title: 'Ülevaated, mis sünnivad sinu telefonis',
        text: 'Unehinded, kehaenergia ja igapäevane valmisolek arvutatakse seadmes sinu enda lähtetasemete põhjal. Kehaenergia arvestab, kui hästi sa magasid (efektiivsus, ärkvel oldud aeg, sügav uni ja REM-uni), mitte ainult seda, kui kaua. Ükski pilv ei loe sinu andmeid, et öelda, kuidas sa magasid.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'OpenVitalsi ekraanipildid',
    eyebrow: 'Vaated rakendusest',
    title: 'Loodud päeva kiireks ülevaateks ja süvenemiseks siis, kui see on oluline.',
    items: [
      {
        src: '/images/screens/et/heart-rate-day.png',
        alt: 'OpenVitals: Pulss',
        label: 'Pulss'
      },
      {
        src: '/images/screens/et/log-metrics.png',
        alt: 'OpenVitals: Lisa kirje',
        label: 'Lisa kirje'
      },
      {
        src: '/images/screens/et/imports.png',
        alt: 'OpenVitals: Import ja eksport',
        label: 'Import ja eksport'
      },
      {
        src: '/images/screens/et/health-report.png',
        alt: 'OpenVitals: Tervisearuanne',
        label: 'Tervisearuanne'
      }
    ]
  },
  reviews: {
    label: 'Google Play arvustused',
    eyebrow: 'Google Playst',
    title: 'Mida inimesed ütlevad pärast pikemat kasutamist.',
    text: 'Tsiteeritud sõna-sõnalt Google Play avalikest arvustustest, algses keeles.',
    link: 'Loe kõiki arvustusi Google Plays',
    trackLabel: 'Arvustuste karussell, keri külgsuunas, et näha rohkem',
    ratingLabel: '{rating} tärni viiest',
    translatedNote: 'Tõlkinud Google',
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
    eyebrow: 'Hangi OpenVitals',
    title: 'Paigalda OpenVitals Androidile.',
    text: 'Vali kanal, mis sobib sellega, kuidas sa rakendusi uuendad. OpenVitals on saadaval ka allkirjastatud väljalasetena neile, kes eelistavad laadida otse projektist.',
    moreLabel: 'Veel paigaldusabi',
    guide: 'Paigaldusjuhend',
    cards: [
      {
        title: 'Google Play',
        text: 'Androidi tavapärane viis rakendusi paigaldada ja uuendada.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Laadi alla Google Play poest'
      },
      {
        title: 'F-Droid',
        text: 'Paigalda vaba ja avatud lähtekoodiga Androidi rakenduste poest.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Laadi alla F-Droidist'
      },
      {
        title: 'GitHubi väljalasked',
        text: 'Laadi allkirjastatud APK-failid otse projektist.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Laadi alla GitHubist'
      }
    ]
  },
  support: {
    eyebrow: 'Toeta projekti',
    title: 'Aita OpenVitalsil kasvada.',
    text: 'Jäta Google Plays positiivne arvustus, tõlgi Androidi rakendus rohkematele inimestele või rahasta selle vaba ja avatud lähtekoodiga projekti pidevat arendust, testimist, dokumentatsiooni, väljalaskeid ja hooldust.',
    actionsLabel: 'Toeta OpenVitalsit',
    review: 'Hinda Google Plays',
    translate: 'Tõlgi OpenVitals',
    liberapayAlt: 'Toeta OpenVitalsit Liberapays',
    more: 'Veel võimalusi toetada'
  },
  footer: {
    nav: 'Jaluse navigatsioon',
    documentation: 'Dokumentatsioon',
    privacy: 'Privaatsus',
    source: 'Lähtekood',
    translate: 'Tõlgi',
    support: 'Toeta'
  }
}

export default et
