import type { Messages } from '../messages'

const es: Messages = {
  meta: {
    title: 'OpenVitals - Panel de salud local-first para Android',
    description:
      'OpenVitals es una app Android local-first para ver, registrar, importar y entender datos de Health Connect sin cuentas, anuncios ni analítica.',
    ogDescription:
      'Un panel de salud local-first para Android impulsado por Health Connect, sin cuentas, anuncios ni analítica.',
    twitterDescription:
      'Herramientas de salud local-first para Android con datos de Health Connect, sin cuentas, anuncios ni analítica.'
  },
  nav: {
    primary: 'Navegación principal',
    privacy: 'Privacidad',
    features: 'Funciones',
    docs: 'Docs',
    install: 'Instalar',
    home: 'Inicio de OpenVitals',
    language: 'Idioma'
  },
  hero: {
    eyebrow: 'Herramientas de salud local-first para Android',
    lede:
      'Un panel privado de Health Connect para ver, registrar, importar y entender tus datos de salud sin cuentas, anuncios, analítica ni una nube de OpenVitals.',
    install: 'Instalar en Android',
    docs: 'Leer la documentación',
    actionsLabel: 'Acciones de OpenVitals'
  },
  proof: {
    label: 'Garantías de privacidad de OpenVitals',
    points: [
      'Sin cuenta en la nube de OpenVitals',
      'Sin permiso de internet a nivel de app',
      'Sin anuncios ni SDK de analítica',
      'Health Connect sigue siendo la fuente de verdad'
    ]
  },
  intro: {
    eyebrow: 'Hecho para personas, no para perfiles',
    title: 'Los datos de salud deben servir sin convertirse en el conjunto de datos de otra persona.',
    text:
      'OpenVitals lee los registros compatibles de Health Connect, los convierte en vistas diarias claras y pantallas de detalle, y mantiene el control cerca del dispositivo. Tú decides qué permisos conceder y cuándo se escribe algo.'
  },
  privacy: {
    eyebrow: 'Enfoque de privacidad',
    title: 'Sin cuenta. Sin feed. Sin negocio de datos en segundo plano.',
    text:
      'La app de Android está pensada en torno a flujos locales explícitos. Lee Health Connect, guarda preferencias en el dispositivo y escribe registros de salud solo tras guardar, importar, grabar, editar o eliminar.',
    link: 'Revisar los detalles de privacidad',
    detailsLabel: 'Detalles de privacidad',
    items: [
      {
        title: 'Local por defecto',
        text: 'No hace falta un servidor de OpenVitals para el panel de la app.'
      },
      {
        title: 'Acceso concedido por ti',
        text: 'Los permisos de Health Connect siguen visibles y deliberados.'
      },
      {
        title: 'Código abierto',
        text: 'La app de Android y la documentación están disponibles en GitHub.'
      }
    ]
  },
  devices: {
    eyebrow: 'Wearables',
    title: 'Funciona con tu reloj.',
    text:
      'Conecta cualquier wearable a través de Gadgetbridge o la app oficial del fabricante. Sincroniza notificaciones, frecuencia cardiaca en vivo, tiempo y tu calendario directamente por Bluetooth. Todo fluye a Health Connect, y OpenVitals lo reúne en un solo panel privado.',
    link: 'Cómo funciona la sincronización con Health Connect',
    listLabel: 'Compatibilidad con relojes y sensores',
    points: [
      {
        title: 'Cualquier wearable que escriba en Health Connect',
        text: 'Ya sea Gadgetbridge o la app oficial del fabricante, si la app compañera sincroniza a Health Connect, OpenVitals lo ve.'
      },
      {
        title: 'Sueño, frecuencia cardiaca, pasos y entrenamientos',
        text: 'Todas tus métricas de wearable llegan a Health Connect: fases del sueño, frecuencia cardiaca, VFC, pasos y entrenamientos aparecen en un panel claro.'
      },
      {
        title: 'Los sensores en vivo siguen siendo directos',
        text: 'Las bandas de frecuencia cardiaca BLE y los sensores de cadencia y potencia siguen conectándose a la app para datos en vivo mientras grabas un entrenamiento.'
      }
    ]
  },
  features: {
    eyebrow: 'Qué hace',
    title: 'Véelo, impórtalo, grábalo, regístralo y entiéndelo. Todo en el teléfono.',
    cards: [
      {
        title: 'Todas las métricas en un solo lugar',
        text: 'Actividad, sueño, corazón, cuerpo, hidratación, nutrición y ciclo en un panel diario. Tendencias, estadísticas y pantallas de detalle están a un toque cuando quieras saber qué cambió.',
        accent: '#0f766e'
      },
      {
        title: 'Importa lo que ya tienes',
        text: 'Trae exportaciones de Apple Health, y archivos FIT, GPX, KML/KMZ, TCX y CSV, de uno en uno o por carpetas enteras. Un CSV puede traer los pesajes de una báscula, un registro de presión arterial, una hoja de cálculo de comidas o los entrenamientos que exportaste. El historial que construiste en otro sitio te acompaña.',
        accent: '#2f6f9f'
      },
      {
        title: 'Graba actividades y entrenamientos',
        text: 'Rutas GPS sobre mapas offline que giran y te siguen, guía turn-by-turn de CoMaps en vivo con la ruta planificada en el mapa, sensores BLE de frecuencia cardiaca, cadencia y potencia, anuncios de voz, vueltas y conteo de repeticiones. Planes de entrenamiento que creas una vez y ejecutas como sesiones guiadas, con series, peso y descanso por ejercicio, repeticiones contadas por el teléfono y descansos con cuenta atrás. Las rutas importadas y grabadas corrigen su altitud con teselas de elevación guardadas en el teléfono. Cualquier entrenamiento se exporta sin su ruta como TCX, FIT o CSV. Se escribe en Health Connect solo cuando guardas.',
        accent: '#d95c3f'
      },
      {
        title: 'Funciona con tu reloj',
        text: 'Conecta cualquier wearable a través de Gadgetbridge o la app del fabricante: sincroniza notificaciones y llamadas entrantes, frecuencia cardiaca en vivo, tiempo, calendario y controles de música por Bluetooth, con horario automático si quieres. Todo sincroniza a través de Health Connect en un panel unificado. Súbete a una báscula Xiaomi compatible y el pesaje llega a Health Connect, incluso con la app cerrada.',
        accent: '#a07b00'
      },
      {
        title: 'Registra los números que solo tú conoces',
        text: 'Todo el pesaje de una báscula de composición corporal, del peso y la grasa al agua corporal, altura, presión arterial con su contexto de medición y categorías según la guía que elijas (ACC/AHA, ESH, ESC o ISH), VFC, glucosa, VO2 máx, comidas, bebidas, alimentos que defines una vez con sus nutrientes y registras por porción, totales diarios de cualquier nutriente escritos directamente, y minutos de mindfulness. Entrada manual rápida, con recordatorios y widgets en la pantalla de inicio.',
        accent: '#1f9d55'
      },
      {
        title: 'Un informe que tu médico puede tener',
        text: 'Elige métricas y un intervalo, y la app genera un PDF en tu teléfono: gráficos, estadísticas y secciones clínicas para presión arterial, glucosa, entrenamientos, sueño y seguimiento del ciclo. Cada nutriente que registras, de la fibra al selenio, puede tener su propio gráfico. Compártelo o guárdalo; no se sube nada.',
        accent: '#4f5d9e'
      },
      {
        title: 'Seguimiento del ciclo que sigue siendo tuyo',
        text: 'Un registro diario de sangrado, dolor, ánimo, energía, síntomas, notas y tests, una cosa cada vez. Los rangos de la próxima regla salen de tu propio historial, una pauta de píldora anticonceptiva te recuerda los días de toma, y Health Connect guarda sus registros mientras el diario se queda en tu teléfono tras su propio permiso.',
        accent: '#b03a5b'
      },
      {
        title: 'Insights hechos en tu teléfono',
        text: 'Las puntuaciones de sueño, la Energía corporal y la preparación diaria se calculan en el dispositivo frente a tus propias baselines. La Energía corporal lee lo bien que dormiste - eficiencia, tiempo despierto, sueño profundo y REM - no solo cuánto. Ninguna nube lee tus datos para decirte cómo dormiste.',
        accent: '#6b5dd3'
      }
    ]
  },
  screens: {
    label: 'Capturas de OpenVitals',
    eyebrow: 'Vistas del producto',
    title: 'Diseñado para revisar el día de un vistazo y profundizar cuando importa.',
    items: [
      {
        src: '/images/screens/es/heart-rate-day.png',
        alt: 'OpenVitals: Frecuencia cardiaca',
        label: 'Frecuencia cardiaca'
      },
      {
        src: '/images/screens/es/log-metrics.png',
        alt: 'OpenVitals: Añadir entrada',
        label: 'Añadir entrada'
      },
      {
        src: '/images/screens/es/imports.png',
        alt: 'OpenVitals: Importar y exportar',
        label: 'Importar y exportar'
      },
      {
        src: '/images/screens/es/health-report.png',
        alt: 'OpenVitals: Informe de salud',
        label: 'Informe de salud'
      }
    ]
  },
  reviews: {
    label: 'Reseñas de Google Play',
    eyebrow: 'Desde Google Play',
    title: 'Lo que dice la gente después de usarla a diario.',
    text: 'Citas literales de reseñas públicas en la ficha de Google Play.',
    link: 'Leer todas las reseñas en Google Play',
    trackLabel: 'Carrusel de reseñas, desplaza lateralmente para ver más',
    ratingLabel: '{rating} de 5 estrellas',
    translatedNote: 'Traducido por Google',
    // Literal de la ficha de Google Play, de más reciente a más antigua.
    // Las reseñas en inglés usan la traducción que Google muestra en la ficha.
    items: [
      {
        author: 'Peter',
        rating: 5,
        date: '2026-08-31',
        text: 'Una aplicación fantástica, sin cuenta, sin nube y con funciones mucho mejores que Google Health. Y lo mejor de todo: es de código abierto.',
        translated: true
      },
      {
        author: 'James Wiles',
        rating: 5,
        date: '2026-08-27',
        text: 'Es como la aplicación de Fitbit de cuando la aplicación de Fitbit era buena. ¡Un trabajo fantástico!',
        translated: true
      },
      {
        author: 'Vlastní Cestou',
        rating: 5,
        date: '2026-08-25',
        text: 'Es un alivio encontrar una aplicación de salud que realmente respeta la privacidad: sin cuentas, sin anuncios, sin seguimiento, y lee los datos de Health Connect con más fiabilidad que la propia aplicación Fit de Google. Los análisis de Preparación Diaria y Energía Corporal son realmente útiles, y el desarrollador responde rápidamente a los comentarios. Además, es de código abierto: ¡un trabajo impresionante para un proyecto individual!',
        translated: true
      },
      {
        author: 'Przemyslaw Kusiak',
        rating: 5,
        date: '2026-08-23',
        text: '¡Excelente aplicación! La uso para importar entrenamientos de FIT y TCX a Google Health.',
        translated: true
      },
      {
        author: 'Leandro Ferri',
        rating: 5,
        date: '2026-08-11',
        text: 'buenísima app de código abierto que no solo sirve por si misma, sino que ademas puedo leer y usar todos mis datos registrados por otras aplicaciones de salud 10/10'
      },
      {
        author: 'José Papaianni',
        rating: 5,
        date: '2026-08-10',
        text: '¡Por fin! Una aplicación transparente para el seguimiento de la salud.',
        translated: true
      },
      {
        author: 'Alejandra Pedragosa',
        rating: 5,
        date: '2026-08-10',
        text: 'Me resulta muy útil para sistematizar toda mi información sobre salud y son muy útiles los reportes que puedo compartir con mi médico'
      },
      {
        author: 'Ezequiel Aciar',
        rating: 5,
        date: '2026-08-10',
        text: '¡Todo lo que estaba buscando!',
        translated: true
      },
      {
        author: 'Alejandro H. Marcatili',
        rating: 5,
        date: '2026-08-10',
        text: 'Excelente aplicacion, toma con exactitud los datos y los muestra de una manera amigable y certera'
      },
      {
        author: 'aniket kadam',
        rating: 5,
        date: '2026-07-06',
        text: '¡Excelente aplicación! El desarrollador merece un gran reconocimiento. Responde rápidamente a los comentarios y resuelve los problemas. ¡Gracias!',
        translated: true
      },
      {
        author: 'Joshua King',
        rating: 5,
        date: '2026-07-04',
        text: '¡Justo lo que buscaba en la app de Google Salud, pero mejor! ¡Excelente trabajo! 👏',
        translated: true
      },
      {
        author: 'Karan Dhillon',
        rating: 5,
        date: '2026-06-13',
        text: 'Como ingeniero de Android, me decepciona mucho que la propia aplicación Google Health no pueda consultar correctamente su repositorio de Health Connect. ¡Sin embargo, esta aplicación lo hace a la perfección!',
        translated: true
      },
      {
        author: 'Rob Pitt',
        rating: 5,
        date: '2026-06-05',
        text: 'Una pequeña y genial herramienta que muestra datos de salud sin recopilar datos de forma forzada; de hecho, según Gemini, actualmente ni siquiera tiene permiso a nivel de sistema para acceder a Internet.',
        translated: true
      }
    ]
  },
  install: {
    eyebrow: 'Consigue OpenVitals',
    title: 'Instala OpenVitals en Android.',
    text: 'Elige el canal de Android que encaje con cómo actualizas apps. OpenVitals también está disponible como releases firmados para quien prefiera descargas directas del proyecto.',
    moreLabel: 'Más recursos de instalación',
    guide: 'Guía de instalación',
    cards: [
      {
        title: 'Google Play',
        text: 'Usa la vía estándar de instalación y actualización en Android.',
        hrefKey: 'playStore',
        badge: '/images/google-play-badge.png',
        alt: 'Disponible en Google Play'
      },
      {
        title: 'F-Droid',
        text: 'Instálala desde la tienda de apps libres y de código abierto para Android.',
        hrefKey: 'fdroid',
        badge: '/images/fdroid-badge.svg',
        alt: 'Disponible en F-Droid'
      },
      {
        title: 'Releases de GitHub',
        text: 'Descarga APKs firmados directamente desde el proyecto.',
        hrefKey: 'releases',
        badge: '/images/github-releases-badge.svg',
        alt: 'Disponible en GitHub'
      }
    ]
  },
  support: {
    eyebrow: 'Apoya el proyecto',
    title: 'Ayuda a que OpenVitals crezca.',
    text: 'Deja una reseña positiva en Google Play, traduce la app de Android para más personas o financia el desarrollo, las pruebas, la documentación, las releases y el mantenimiento de este proyecto libre y de código abierto.',
    actionsLabel: 'Apoyar OpenVitals',
    review: 'Valorar en Google Play',
    translate: 'Traducir OpenVitals',
    liberapayAlt: 'Apoyar OpenVitals en Liberapay',
    more: 'Más formas de apoyar'
  },
  footer: {
    nav: 'Navegación del pie',
    documentation: 'Documentación',
    privacy: 'Privacidad',
    source: 'Código',
    translate: 'Traducir',
    support: 'Apoyo'
  }
}

export default es
