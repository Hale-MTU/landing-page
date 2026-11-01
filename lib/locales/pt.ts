import type { Messages } from '../messages'

const pt: Messages = {
  meta: {
    title: 'OpenVitals - Painel de saúde para Android, com os dados no seu telemóvel',
    description:
      'O OpenVitals é uma aplicação Android que funciona localmente para ver, registar, importar e compreender dados do Health Connect, sem contas, anúncios nem telemetria.',
    ogDescription:
      'Um painel de saúde para Android que funciona localmente com base no Health Connect, sem contas, anúncios nem telemetria.',
    twitterDescription:
      'Ferramentas de saúde para Android que funcionam localmente com os dados do Health Connect, sem contas, anúncios nem telemetria.'
  },
  nav: {
    primary: 'Navegação principal',
    privacy: 'Privacidade',
    features: 'Funcionalidades',
    docs: 'Documentação',
    install: 'Instalar',
    home: 'Início do OpenVitals',
    language: 'Idioma'
  },
  hero: {
    eyebrow: 'Ferramentas de saúde para Android que funcionam localmente',
    lede:
      'Um painel privado do Health Connect para ver, registar, importar e compreender os seus dados de saúde, sem contas, anúncios, telemetria nem uma nuvem do OpenVitals.',
    install: 'Instalar no Android',
    docs: 'Ler a documentação',
    actionsLabel: 'Ações do OpenVitals'
  },
  proof: {
    label: 'Garantias de privacidade do OpenVitals',
    points: [
      'Sem conta na nuvem do OpenVitals',
      'A aplicação não tem permissão de internet',
      'Sem anúncios nem SDK de telemetria',
      'O Health Connect continua a ser a fonte de referência'
    ]
  },
  intro: {
    eyebrow: 'Feito para pessoas, não para perfis',
    title: 'Os dados de saúde devem ser úteis sem irem parar à base de dados de outra pessoa.',
    text:
      'O OpenVitals lê os registos compatíveis do Health Connect, transforma-os em vistas diárias claras e ecrãs de detalhe, e mantém o controlo no dispositivo. A decisão é sua: que permissões concede e quando é que algo é escrito.'
  },
  privacy: {
    eyebrow: 'A nossa posição sobre privacidade',
    title: 'Sem conta. Sem feed. Sem negócio de dados nos bastidores.',
    text:
      'A aplicação Android foi pensada em torno de ações locais e explícitas. Lê o Health Connect, guarda as preferências no dispositivo e só escreve registos de saúde depois de uma ação sua: guardar, importar, gravar, editar ou eliminar.',
    link: 'Ver os detalhes de privacidade',
    detailsLabel: 'Detalhes de privacidade',
    items: [
      {
        title: 'Local por predefinição',
        text: 'O painel da aplicação não precisa de nenhum servidor do OpenVitals.'
      },
      {
        title: 'Acesso concedido por si',
        text: 'As permissões do Health Connect continuam visíveis e são dadas de forma consciente.'
      },
      {
        title: 'Código aberto',
        text: 'A aplicação Android e a documentação estão disponíveis no GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Wearables',
    title: 'Funciona com o seu relógio.',
    text:
      'Ligue qualquer wearable através do Gadgetbridge ou da aplicação oficial do fabricante. Sincronize notificações, frequência cardíaca em tempo real, meteorologia e o seu calendário diretamente por Bluetooth. Tudo vai parar ao Health Connect, e o OpenVitals reúne tudo num único painel privado.',
    link: 'Como funciona a sincronização com o Health Connect',
    listLabel: 'Relógios e sensores compatíveis',
    points: [
      {
        title: 'Qualquer wearable que escreva no Health Connect',
        text: 'Seja através do Gadgetbridge ou da aplicação oficial do fabricante, se a aplicação complementar sincronizar com o Health Connect, o OpenVitals vê os dados.'
      },
      {
        title: 'Sono, frequência cardíaca, passos e treinos',
        text: 'Todas as métricas do seu wearable chegam ao Health Connect: fases do sono, frequência cardíaca, VFC, passos e treinos aparecem num painel claro.'
      },
      {
        title: 'Os sensores em tempo real ligam-se diretamente',
        text: 'As bandas de frequência cardíaca BLE e os sensores de cadência e potência continuam a ligar-se diretamente à aplicação para dar dados em tempo real enquanto grava um treino.'
      }
    ]
  },
  features: {
    eyebrow: 'O que faz',
    title: 'Ver, importar, gravar, registar e compreender. Tudo no telemóvel.',
    cards: [
      {
        title: 'Todas as métricas num só lugar',
        text: 'Atividade, sono, coração, corpo, hidratação, nutrição e ciclo num painel diário. As tendências, as estatísticas e os ecrãs de detalhe estão a um toque de distância quando quiser saber o que mudou.',
        accent: '#0f766e'
      },
      {
        title: 'Importe o que já tem',
        text: 'Traga exportações do Apple Health e ficheiros FIT, GPX, KML/KMZ, TCX e CSV, um de cada vez ou pastas inteiras. Um CSV pode trazer as pesagens de uma balança, um registo de pressão arterial, uma folha de refeições ou os treinos que exportou. O histórico que construiu noutro lado vem consigo.',
        accent: '#2f6f9f'
      },
      {
        title: 'Grave atividades e treinos',
        text: 'Rotas GPS em mapas offline que rodam e acompanham o seu movimento, indicações curva a curva do CoMaps em tempo real com a rota planeada no mapa, sensores BLE de frequência cardíaca, cadência e potência, anúncios de voz, voltas e contagem de repetições. Planos de treino criados uma vez e feitos como sessões guiadas, com séries, peso e descanso por exercício, repetições contadas pelo telemóvel e descansos em contagem decrescente. As rotas importadas e gravadas têm a altitude corrigida com mosaicos de elevação guardados no telemóvel. Qualquer treino pode ser exportado sem a rota em TCX, FIT ou CSV. Só é escrito no Health Connect quando guarda.',
        accent: '#d95c3f'
      },
      {
        title: 'Funciona com o seu relógio',
        text: 'Ligue qualquer wearable através do Gadgetbridge ou da aplicação do fabricante: sincronize por Bluetooth as notificações e as chamadas recebidas, a frequência cardíaca em tempo real, a meteorologia, o calendário e os controlos de música, de forma programada, se quiser. Tudo é sincronizado através do Health Connect num único painel. Suba para uma balança Xiaomi compatível e a pesagem chega ao Health Connect, mesmo com a app fechada.',
        accent: '#a07b00'
      },
      {
        title: 'Registe os números que mais ninguém conhece',
        text: 'A pesagem completa de uma balança de composição corporal, do peso e gordura à água corporal, altura, tensão arterial com o contexto da medição e categorias segundo a diretriz que escolher (ACC/AHA, ESH, ESC ou ISH), VFC, glicemia, VO2 máx., refeições, bebidas, alimentos que define uma vez com os respetivos nutrientes e regista por porção, totais diários de qualquer nutriente escritos diretamente, e minutos de atenção plena. Registo manual rápido, com lembretes e widgets no ecrã inicial.',
        accent: '#1f9d55'
      },
      {
        title: 'Um relatório que o seu médico pode ter na mão',
        text: 'Escolha as métricas e um intervalo de tempo, e a aplicação cria um PDF no seu telemóvel: gráficos, estatísticas e secções clínicas de tensão arterial, glicemia, treinos, sono e registo do ciclo. Cada nutriente que regista, da fibra ao selénio, pode ter o seu próprio gráfico. Partilhe-o ou guarde-o; nada é enviado para a internet.',
        accent: '#4f5d9e'
      },
      {
        title: 'Um registo do ciclo que continua a ser seu',
        text: 'Um registo do dia para sangramento, dor, humor, energia, sintomas, notas e testes, uma coisa de cada vez. O intervalo previsto para a próxima menstruação vem do seu próprio histórico, um esquema de pílula contracetiva lembra-lhe os dias de toma, e o Health Connect guarda os respetivos registos enquanto o diário fica no seu telemóvel, protegido por uma permissão própria.',
        accent: '#b03a5b'
      },
      {
        title: 'Indicadores calculados no seu telemóvel',
        text: 'As pontuações do sono, a Energia corporal e a Prontidão diária são calculadas no dispositivo com base nas suas próprias linhas de base. A Energia corporal avalia a qualidade do seu sono (eficiência, tempo acordado, sono profundo e REM) e não apenas a duração. Nenhuma nuvem lê os seus dados para lhe dizer como dormiu.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Capturas de ecrã do OpenVitals',
    eyebrow: 'A aplicação por dentro',
    title: 'Pensado para ver o dia num relance e aprofundar quando importa.',
    items: [
      {
        src: '/images/screens/pt/heart-rate-day.png',
        alt: 'OpenVitals: Frequência cardíaca',
        label: 'Frequência cardíaca'
      },
      {
        src: '/images/screens/pt/log-metrics.png',
        alt: 'OpenVitals: Adicionar registo',
        label: 'Adicionar registo'
      },
      {
        src: '/images/screens/pt/imports.png',
        alt: 'OpenVitals: Importar e exportar',
        label: 'Importar e exportar'
      },
      {
        src: '/images/screens/pt/health-report.png',
        alt: 'OpenVitals: Relatório de saúde',
        label: 'Relatório de saúde'
      }
    ]
  },
  reviews: {
    label: 'Críticas no Google Play',
    eyebrow: 'Do Google Play',
    title: 'O que dizem as pessoas depois de o usarem no dia a dia.',
    text: 'Citações literais de críticas públicas na página do Google Play, no idioma original.',
    link: 'Ler todas as críticas no Google Play',
    trackLabel: 'Carrossel de críticas, deslize para o lado para ver mais',
    ratingLabel: '{rating} de 5 estrelas',
    translatedNote: 'Traduzido pelo Google',
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
    eyebrow: 'Obter o OpenVitals',
    title: 'Instale o OpenVitals no Android.',
    text: 'Escolha o canal Android que melhor se adapta à forma como atualiza as aplicações. O OpenVitals também está disponível em versões assinadas para quem prefere transferir diretamente do projeto.',
    moreLabel: 'Mais recursos de instalação',
    guide: 'Guia de instalação',
    cards: [
      {
        title: 'Google Play',
        text: 'Use a via habitual de instalação e atualização do Android.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Disponível no Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Instale através da loja de aplicações Android livres e de código aberto.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Disponível no F-Droid'
      },
      {
        title: 'Versões no GitHub',
        text: 'Transfira os APK assinados diretamente do projeto.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Disponível no GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Apoie o projeto',
    title: 'Ajude o OpenVitals a crescer.',
    text: 'Deixe uma crítica positiva no Google Play, traduza a aplicação Android para chegar a mais pessoas ou financie o desenvolvimento, os testes, a documentação, as versões e a manutenção contínuos deste projeto livre e de código aberto.',
    actionsLabel: 'Apoiar o OpenVitals',
    review: 'Avaliar no Google Play',
    translate: 'Traduzir o OpenVitals',
    liberapayAlt: 'Apoiar o OpenVitals no Liberapay',
    more: 'Mais formas de apoiar'
  },
  footer: {
    nav: 'Navegação do rodapé',
    documentation: 'Documentação',
    privacy: 'Privacidade',
    source: 'Código-fonte',
    translate: 'Traduzir',
    support: 'Apoiar'
  }
}

export default pt
