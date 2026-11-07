import type { Messages } from '../messages'

const fi: Messages = {
  meta: {
    title: 'OpenVitals - Paikallisesti toimiva terveysyhteenveto Androidille',
    description:
      'OpenVitals on paikallisesti toimiva Android-sovellus, jolla voit katsella, kirjata, tuoda ja ymmärtää Health Connect -tietojasi ilman tiliä, mainoksia tai analytiikkaa.',
    ogDescription:
      'Health Connectin varaan rakennettu, paikallisesti toimiva terveysyhteenveto Androidille. Ei tiliä, ei mainoksia, ei analytiikkaa.',
    twitterDescription:
      'Paikallisesti toimivat terveystyökalut Androidille ja Health Connect -tiedoillesi ilman tiliä, mainoksia tai analytiikkaa.'
  },
  hale: {
    eyebrow: 'Ilmaisia, verkottomia terveyssovelluksia Androidille',
    title: 'Terveystietosi omassa puhelimessasi, eikä missään muualla.',
    text: 'Hale MTÜ on voittoa tavoittelematon yhdistys OpenVitalsin, OpenWatchin ja OpenBridgen takana: ei tilejä, ei mainoksia, ei analytiikkaa, ei pilveä.',
    appsLabel: 'Sovellukset',
    apps: {
      openvitals: { text: 'Kojelauta. Lukee Health Connect -tietueesi ja kokoaa niistä päivänäkymän; tuo, tallentaa ja kirjaa, kaikki puhelimessa.', link: 'Tietoa OpenVitalsista' },
      openwatch: { text: 'Laitteet. Yhdistää Garmin- ja Wear OS -kellot sekä Xiaomi-vaa\'an Bluetoothilla ja kopioi niiden tallenteet Health Connectiin.', link: 'Tietoa OpenWatchista' },
      openbridge: { text: 'Ulospääsy. Valinnainen sovellus, joka välittää OpenVitalsin jakamat tiedot verkkopalveluihin. Varhaisessa vaiheessa.', link: 'Tietoa OpenBridgesta' }
    },
    metaTitle: 'Hale - Ilmaisia, verkottomia terveyssovelluksia Androidille',
    metaDescription: 'Hale MTÜ on voittoa tavoittelematon yhdistys OpenVitalsin, OpenWatchin ja OpenBridgen takana: ilmaisia avoimen lähdekoodin terveyssovelluksia Androidille ilman tilejä, mainoksia tai pilveä.',
    principlesTitle: 'Mitä kolmella sovelluksella on yhteistä',
    principles: [
      { title: 'Ei tiliä, ei Halen pilveä', text: 'Ei rekisteröitymistä eikä Halen palvelinta. Tietosi pysyvät Androidin Health Connectissa, ellet itse päätä välittää niitä eteenpäin.' },
      { title: 'Ei mainoksia, ei analytiikkaa', text: 'Missään sovelluksessa ei ole seurantakirjastoja, eikä tiedoillasi tehdä liiketoimintaa.' },
      { title: 'Vapaata ja avointa lähdekoodia', text: 'Jokainen sovellus on vapaata ohjelmistoa AGPL-3.0-or-later-lisenssillä, ja sen lähdekoodi on GitHubissa.' },
      { title: 'Voittoa tavoittelemattoman yhdistyksen ylläpitämä', text: 'Hale MTÜ on voittoa tavoittelematon yhdistys. Sen tulot käytetään vain sen tarkoituksiin eikä niitä jaeta.' }
    ],
    aboutTitle: 'Tietoa Halesta',
    aboutText: 'Hale on vanha englannin sana, joka tarkoittaa tervettä, kuten ilmauksessa ”hale and hearty”. Yhdistys julkaisee sovellukset ja huolehtii niiden koodista ja yhteisöstä. Kirjoita osoitteeseen hello@hale.ngo.'
  },
  openwatch: {
    metaTitle: 'OpenWatch - Kellot ja vaaka Health Connectiin',
    metaDescription: 'OpenWatch yhdistää Garmin- ja Wear OS -kellot sekä Xiaomi-vaa\'an Bluetoothilla ja kopioi niiden tallenteet Health Connectiin. Ilman tiliä, ilman palvelinta, ilman internet-lupaa.',
    eyebrow: 'Kellot ja vaaka Health Connectiin',
    lede: 'OpenWatch yhdistää kellosi ja vaakasi Bluetoothilla, kopioi niiden tallenteet Health Connectiin ja hallitsee niitä. Ilman tiliä, ilman palvelinta, ilman internet-lupaa.',
    devicesTitle: 'Tuetut laitteet',
    devices: [
      { title: 'Garmin-kellot', text: 'Aktiviteetit, uni ja hyvinvointi synkronoidaan Garminin omalla Bluetooth-protokollalla, lisäksi ilmoitukset, musiikin ohjaus, sää, kalenteri, herätykset ja kellon etsiminen.' },
      { title: 'Wear OS -kellot', text: 'OpenWatchin kellosovellus tallentaa sykkeen, askeleet ja kerrokset ja synkronoi ne napautuksella tai aikataulun mukaan, joka yöltä arvio unesta ja leposykkeestä.' },
      { title: 'Xiaomi S400 -vaaka', text: 'Jokainen punnitus tallentuu heti Health Connectiin, oli sovellus auki tai kiinni. Kehon rasvan, rasvattoman massan ja kehon veden arvioi puhelin.' }
    ],
    privacyTitle: 'Minne tietosi menevät',
    privacy: [
      { title: 'Ei internet-lupaa', text: 'Puhelinsovellus ei pääse internetiin. Kaikki kulkee Bluetoothilla laitteen ja puhelimen välillä.' },
      { title: 'Health Connectiin', text: 'Mitä laite tallentaa, päätyy Androidin terveystietovarastoon, josta OpenVitals ja jokainen sallimasi sovellus voi lukea sen.' },
      { title: 'Loput pysyvät puhelimessa', text: 'Mittaukset, joita Health Connect ei voi säilyttää, kuten stressi tai Body Battery, pysyvät OpenWatchin omassa tietokannassa.' }
    ],
    pairText: 'OpenWatchilla tiedot tulevat sisään; OpenVitalsilla katsot niitä.'
  },
  openbridge: {
    metaTitle: 'OpenBridge - OpenVitalsin tietojen välitys verkkopalveluihin',
    metaDescription: 'OpenBridge on valinnainen Android-sovellus, joka lukee OpenVitalsin jakamat tiedot ja voi välittää ne verkkopalveluihin. Varhaisessa vaiheessa.',
    eyebrow: 'Valinnainen, varhaisessa vaiheessa',
    lede: 'OpenVitals ei koskaan yhdisty internetiin. OpenBridge on erillinen sovellus, joka voi: se lukee vain sen, minkä annat OpenVitalsin jakaa, ja voi välittää sen verkkopalveluihin.',
    stepsTitle: 'Miten se saa tiedot',
    steps: [
      'Ota OpenVitalsin asetuksista käyttöön jakaminen muiden sovellusten kanssa. Se on aluksi pois päältä.',
      'Pyydä OpenBridgessa ryhmät, jotka haluat jakaa. Android kysyy kerran kustakin yhdestätoista ryhmästä, ja voit muuttaa vastausta myöhemmin sen asetuksissa.',
      'Lue yksi ryhmä tai kaikki: viimeisen viikon päiväsummat, viimeisen päivän näytteet, viimeisen kuukauden harjoitukset ja reitit.'
    ],
    statusTitle: 'Missä mennään',
    statusText: 'Yhtään verkkopalvelua ei ole vielä yhdistetty, ja jakamisrajapinta on toistaiseksi vain OpenVitalsin testiversioissa. Seuraa työtä GitHubissa.'
  },
  nav: {
    primary: 'Päävalikko',
    docs: 'Ohjeet',
    install: 'Asenna',
    home: 'Halen etusivu',
    language: 'Kieli'
  },
  hero: {
    eyebrow: 'Paikallisesti toimivat terveystyökalut Androidille',
    lede:
      'Yksityinen Health Connect -yhteenveto, jolla katselet, kirjaat, tuot ja ymmärrät terveystietojasi ilman tiliä, mainoksia, analytiikkaa tai OpenVitalsin pilvipalvelua.',
    install: 'Asenna Androidille',
    docs: 'Lue ohjeet',
    actionsLabel: 'OpenVitals-toiminnot'
  },
  proof: {
    label: 'OpenVitalsin tietosuojalupaukset',
    points: [
      'Ei OpenVitals-pilvitiliä',
      'Sovelluksella ei ole internet-oikeutta',
      'Ei mainoksia eikä sisäänrakennettua analytiikkaa',
      'Health Connect pysyy ensisijaisena tietolähteenä'
    ]
  },
  intro: {
    eyebrow: 'Tehty ihmisille, ei profiileille',
    title: 'Terveystietojesi kuuluu palvella sinua, ei päätyä jonkun muun tietokantaan.',
    text:
      'OpenVitals lukee tuettuja Health Connect -merkintöjä ja koostaa niistä selkeät päivänäkymät ja yksityiskohtaiset näkymät. Hallinta pysyy laitteellasi: sinä päätät, mitkä luvat annat ja milloin jotain kirjoitetaan.'
  },
  privacy: {
    eyebrow: 'Tietosuoja',
    title: 'Ei tiliä. Ei uutisvirtaa. Ei tietokauppaa taustalla.',
    text:
      'Android-sovellus perustuu selkeisiin, paikallisiin toimintoihin. Se lukee Health Connectia, tallentaa sovelluksen asetukset laitteelle ja kirjoittaa terveystietoja vain, kun tallennat merkinnän, tuot tiedoston, tallennat treenin, muokkaat tai poistat jotain.',
    link: 'Lue lisää tietosuojasta',
    detailsLabel: 'Tietosuojan yksityiskohdat',
    items: [
      {
        title: 'Oletuksena paikallinen',
        text: 'Sovelluksen yhteenveto ei tarvitse OpenVitals-palvelinta.'
      },
      {
        title: 'Pääsy vain luvallasi',
        text: 'Health Connect -luvat pysyvät näkyvillä ja annat ne harkiten.'
      },
      {
        title: 'Avoin lähdekoodi',
        text: 'Android-sovellus ja dokumentaatio löytyvät GitHubista.'
      }
    ]
  },
  devices: {
    eyebrow: 'Puettavat laitteet',
    title: 'Toimii kellosi kanssa.',
    text:
      'Yhdistä mikä tahansa puettava laite Gadgetbridgen tai valmistajan virallisen sovelluksen kautta. Synkronoi ilmoitukset, reaaliaikainen syke, sää ja kalenterisi suoraan Bluetoothilla. Kaikki kulkee Health Connectiin ja OpenVitals kokoaa sen yhdeksi yksityiseksi yhteenvedoksi.',
    link: 'Näin synkronointi Health Connectin kanssa toimii',
    listLabel: 'Tuetut kellot ja anturit',
    points: [
      {
        title: 'Mikä tahansa laite, joka kirjoittaa Health Connectiin',
        text: 'Käytitpä Gadgetbridgeä tai valmistajan virallista sovellusta: jos oheissovellus synkronoi Health Connectiin, OpenVitals näkee tiedot.'
      },
      {
        title: 'Uni, syke, askeleet ja treenit',
        text: 'Kaikki puettavan laitteesi mittaukset päätyvät Health Connectiin: univaiheet, syke, HRV, askeleet ja treenit näkyvät yhdessä selkeässä yhteenvedossa.'
      },
      {
        title: 'Reaaliaikaiset anturit yhdistyvät suoraan',
        text: 'BLE-sykevyöt sekä kadenssi- ja tehoanturit yhdistyvät edelleen suoraan sovellukseen ja välittävät reaaliaikaiset tiedot, kun tallennat treeniä.'
      }
    ]
  },
  features: {
    eyebrow: 'Mitä sovellus tekee',
    title: 'Katso, tuo, tallenna, kirjaa ja ymmärrä. Kaikki puhelimessa.',
    cards: [
      {
        title: 'Kaikki mittarit yhdessä paikassa',
        text: 'Aktiivisuus, uni, sydän, keho, nesteytys, ravinto ja kierto samassa päivän yhteenvedossa. Trendit, tilastot ja yksityiskohtaiset näkymät ovat yhden napautuksen päässä, kun haluat tietää, mikä muuttui.',
        accent: '#0f766e'
      },
      {
        title: 'Tuo se, mitä sinulla jo on',
        text: 'Tuo Apple Health -viennit sekä FIT-, GPX-, KML/KMZ-, TCX- ja CSV-tiedostot yksitellen tai kokonaisina kansioina. CSV-tiedostossa voi olla vaa\'an punnitukset, verenpaineloki, aterioiden taulukko tai viedyt harjoitukset. Muualla kertynyt historiasi tulee mukanasi.',
        accent: '#2f6f9f'
      },
      {
        title: 'Tallenna aktiviteetteja ja treenejä',
        text: 'GPS-reitit offline-kartoilla, jotka kääntyvät ja seuraavat sinua, CoMapsin reaaliaikainen käännöskohtainen opastus ja suunniteltu reitti kartalla, BLE-syke-, kadenssi- ja tehoanturit, ääni-ilmoitukset, kierrokset ja toistojen laskenta. Treenisuunnitelman teet kerran ja käyt sen läpi ohjattuna treeninä: jokaiselle harjoitukselle omat sarjat, paino ja lepoaika, puhelin laskee toistot ja lepoaika laskee alaspäin. Tuotujen ja tallennettujen reittien korkeustiedot korjataan puhelimeen tallennettujen korkeusruutujen avulla. Minkä tahansa treenin voi viedä ilman reittiä TCX-, FIT- tai CSV-tiedostona. Health Connectiin kirjoitetaan vasta, kun tallennat.',
        accent: '#d95c3f'
      },
      {
        title: 'Toimii kellosi kanssa',
        text: 'Yhdistä mikä tahansa puettava laite Gadgetbridgen tai valmistajan sovelluksen kautta: synkronoi Bluetoothilla ilmoitukset ja saapuvat puhelut, reaaliaikainen syke, sää, kalenteri ja musiikin hallinta, halutessasi ajastetusti. Kaikki synkronoituu Health Connectin kautta yhteen yhtenäiseen yhteenvetoon. Astu tuetulle Xiaomi-vaa’alle, ja punnitus päätyy Health Connectiin, vaikka sovellus on kiinni.',
        accent: '#a07b00'
      },
      {
        title: 'Kirjaa luvut, jotka vain sinä tiedät',
        text: 'Koko kehonkoostumusmittaus painosta ja rasvasta kehon nesteeseen, pituus, verenpaine mittaustilanteineen ja luokiteltuna valitsemasi ohjeiston mukaan (ACC/AHA, ESH, ESC tai ISH), HRV, verensokeri, VO2 max, ateriat, juomat, ruoat, joiden ravintoaineet määrität kerran ja jotka kirjaat annoksittain, minkä tahansa ravintoaineen päiväsummat suoraan syötettyinä sekä mindfulness-minuutit. Nopea käsin kirjaus, muistutukset ja aloitusnäytön widgetit.',
        accent: '#1f9d55'
      },
      {
        title: 'Terveysraportti lääkärin käteen',
        text: 'Valitse mittarit ja aikaväli, niin sovellus koostaa puhelimessasi PDF:n: kaaviot, tilastot ja kliiniset osiot verenpaineesta, verensokerista, treeneistä, unesta ja kuukautiskierron seurannasta. Jokainen kirjaamasi ravintoaine kuidusta seleeniin voi saada oman kaavionsa. Jaa tai tallenna se. Mitään ei ladata verkkoon.',
        accent: '#4f5d9e'
      },
      {
        title: 'Kierron seuranta, joka pysyy sinun omanasi',
        text: 'Päivän merkintään kirjaat vuodon, kivun, mielialan, energian, oireet, muistiinpanot ja testit, yksi asia kerrallaan. Seuraavien kuukautisten arvioidut vaihteluvälit perustuvat omaan historiaasi, ehkäisypillerin rytmi muistuttaa sinua ottopäivinä ja Health Connect säilyttää omat merkintänsä, kun taas päiväkirja pysyy puhelimessasi oman lupansa takana.',
        accent: '#b03a5b'
      },
      {
        title: 'Havainnot syntyvät puhelimessasi',
        text: 'Unipisteet, kehon energia ja päivän valmius lasketaan laitteella omiin perustasoihisi verraten. Kehon energia huomioi, kuinka hyvin nukuit (tehokkuus, hereillä oltu aika, syvä uni ja REM-uni), ei vain kuinka kauan. Mikään pilvipalvelu ei lue tietojasi kertoakseen, miten nukuit.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Kuvakaappauksia OpenVitalsista',
    eyebrow: 'Näkymiä sovelluksesta',
    title: 'Päivä yhdellä silmäyksellä ja tarkemmin silloin, kun sillä on väliä.',
    items: [
      {
        src: '/images/screens/fi/heart-rate-day.png',
        alt: 'OpenVitals: Syke',
        label: 'Syke'
      },
      {
        src: '/images/screens/fi/log-metrics.png',
        alt: 'OpenVitals: Lisää merkintä',
        label: 'Lisää merkintä'
      },
      {
        src: '/images/screens/fi/imports.png',
        alt: 'OpenVitals: Tuonti & vienti',
        label: 'Tuonti & vienti'
      },
      {
        src: '/images/screens/fi/health-report.png',
        alt: 'OpenVitals: Terveysraportti',
        label: 'Terveysraportti'
      }
    ]
  },
  reviews: {
    label: 'Google Play -arviot',
    eyebrow: 'Google Playsta',
    title: 'Mitä käyttäjät sanovat pidemmän käytön jälkeen.',
    text: 'Suoria lainauksia Google Playn julkisista arvioista, alkuperäisellä kielellään.',
    link: 'Lue kaikki arviot Google Playssa',
    trackLabel: 'Arvioiden karuselli, vieritä sivuttain nähdäksesi lisää',
    ratingLabel: '{rating} tähteä viidestä',
    translatedNote: 'Googlen kääntämä',
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
    eyebrow: 'Hanki OpenVitals',
    title: 'Asenna OpenVitals Androidille.',
    text: 'Valitse kanava sen mukaan, miten päivität sovelluksiasi. OpenVitals on saatavilla myös allekirjoitettuina julkaisuina, jos haluat ladata sen suoraan projektilta.',
    moreLabel: 'Lisää asennusohjeita',
    guide: 'Asennusohje',
    cards: [
      {
        title: 'Google Play',
        text: 'Androidin tavallinen tapa asentaa ja päivittää sovelluksia.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Lataa Google Playsta'
      },
      {
        title: 'F-Droid',
        text: 'Asenna vapaiden ja avoimen lähdekoodin Android-sovellusten kaupasta.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Lataa F-Droidista'
      },
      {
        title: 'Julkaisut GitHubissa',
        text: 'Lataa allekirjoitetut APK-tiedostot suoraan projektilta.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Lataa GitHubista'
      }
    ]
  },
  support: {
    eyebrow: 'Tue projektia',
    title: 'Auta OpenVitalsia kasvamaan.',
    text: 'Jätä myönteinen arvio Google Playhin, käännä Android-sovellus useammille ihmisille tai rahoita tämän vapaan ja avoimen lähdekoodin projektin jatkuvaa kehitystä, testausta, dokumentaatiota, julkaisuja ja ylläpitoa.',
    actionsLabel: 'Tue OpenVitalsia',
    review: 'Arvioi Google Playssa',
    translate: 'Käännä OpenVitals',
    liberapayAlt: 'Tue OpenVitalsia Liberapayssa',
    more: 'Muita tapoja tukea'
  },
  footer: {
    publisher: 'Julkaisija Hale MTÜ, voittoa tavoittelematon yhdistys.',
    nav: 'Alatunnisteen valikko',
    documentation: 'Dokumentaatio',
    privacy: 'Tietosuoja',
    source: 'Lähdekoodi',
    translate: 'Käännä',
    support: 'Tue'
  }
}

export default fi
