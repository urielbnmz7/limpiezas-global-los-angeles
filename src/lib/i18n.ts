export type Lang = 'en' | 'es';

const en = {
  meta: { langName: 'English' },
  nav: {
    services: 'Services',
    why: 'Why Us',
    area: 'Service Area',
    contact: 'Contact',
    call: 'Call Now',
    menu_open: 'Open menu',
    menu_close: 'Close menu',
  },
  hero: {
    label: 'Salt Lake City & surrounding areas',
    headline_1: 'Reliable, detailed cleaning',
    headline_accent: 'for your home',
    subheadline:
      'Houses and apartments cleaned with care and respect. We treat your home as if it were our own.',
    cta_call: 'Call',
    cta_text: 'Send a text',
    trust: ['Houses & apartments', 'Standard & deep cleaning', 'English & Spanish', 'Care & respect'],
    image_alt: 'Cleaning professional vacuuming a bright living room',
    badges: [
      { title: 'Reliable', desc: 'Salt Lake City' },
      { title: 'Deep cleaning', desc: 'Surface disinfection' },
    ],
  },
  services: {
    label: 'Our Services',
    title_pre: 'Cleaning plans for ',
    title_accent: 'every home',
    subtitle:
      'Choose the level of cleaning your home needs. Every visit is done with attention to detail.',
    includes: 'What’s included',
    popular: 'Most complete',
    cta: 'Request a quote',
    items: [
      {
        title: 'Standard Cleaning',
        desc: 'Ideal for keeping your home fresh and tidy week after week.',
        details: [
          'Dusting',
          'Vacuuming',
          'Mopping',
          'Bathroom cleaning',
          'Kitchen cleaning',
          'Light tidying',
        ],
      },
      {
        title: 'Deep Cleaning',
        desc: 'A top-to-bottom clean for when your home needs extra attention.',
        details: [
          'Kitchen & bathroom cleaning',
          'Bedrooms tidied and organized',
          'Dusting, vacuuming & mopping',
          'Organizing',
          'Surface disinfection',
          'High-touch areas: door handles & light switches',
        ],
      },
    ],
  },
  custom: {
    title: 'Need something different?',
    body: 'We offer the cleaning service you need. Tell us about your home and we’ll tailor a service that fits you.',
    cta: 'Contact us',
  },
  why: {
    label: 'Why choose us',
    title_pre: 'Your space, ',
    title_accent: 'our commitment',
    subtitle: 'More than a clean home — peace of mind knowing it’s in good hands.',
    items: [
      { title: 'Reliable', desc: 'We show up when we say we will, and do what we promise.' },
      { title: 'Detailed', desc: 'We pay attention to the corners and details others overlook.' },
      { title: 'Care & respect', desc: 'We treat your home and your belongings with great care.' },
      { title: 'Disinfection', desc: 'Special attention to high-touch areas like handles and switches.' },
    ],
    steps_title: 'How it works',
    steps: [
      { title: 'Call or text us', desc: 'Tell us about your home and what you need.' },
      { title: 'We schedule your visit', desc: 'We agree on the service and a time that works for you.' },
      { title: 'Enjoy your clean home', desc: 'Relax — we take care of the details.' },
    ],
  },
  area: {
    label: 'Service area',
    title: 'Proudly serving Salt Lake City and surrounding areas',
    body: 'Not sure if we cover your area? Give us a call or send a text — we’ll be happy to help.',
  },
  contact: {
    label: 'Contact',
    title_pre: 'Ready for a ',
    title_accent: 'spotless home?',
    body: 'Call or text us for a quote. We speak English and Spanish.',
    call: 'Call us',
    text: 'Text us',
    note: 'We reply to text messages as soon as possible.',
  },
  footer: {
    rights: 'All rights reserved.',
    area: 'Salt Lake City, Utah & surrounding areas',
  },
  floating: { call: 'Call Limpiezas Global', text: 'Text Limpiezas Global' },
};

export type T = typeof en;

const es: T = {
  meta: { langName: 'Español' },
  nav: {
    services: 'Servicios',
    why: 'Por qué nosotros',
    area: 'Área de servicio',
    contact: 'Contacto',
    call: 'Llamar',
    menu_open: 'Abrir menú',
    menu_close: 'Cerrar menú',
  },
  hero: {
    label: 'Salt Lake City y alrededores',
    headline_1: 'Limpieza confiable y detallada',
    headline_accent: 'para tu hogar',
    subheadline:
      'Casas y apartamentos limpios con mucho cuidado y respeto. Tratamos tu hogar como si fuera el nuestro.',
    cta_call: 'Llamar',
    cta_text: 'Enviar mensaje',
    trust: ['Casas y apartamentos', 'Limpieza ligera y profunda', 'Inglés y español', 'Cuidado y respeto'],
    image_alt: 'Profesional de limpieza aspirando una sala luminosa',
    badges: [
      { title: 'Confiables', desc: 'Salt Lake City' },
      { title: 'Limpieza profunda', desc: 'Desinfección de superficies' },
    ],
  },
  services: {
    label: 'Nuestros servicios',
    title_pre: 'Limpieza para ',
    title_accent: 'cada hogar',
    subtitle:
      'Elige el nivel de limpieza que tu hogar necesita. Cada visita se hace con atención al detalle.',
    includes: 'Qué incluye',
    popular: 'La más completa',
    cta: 'Pedir cotización',
    items: [
      {
        title: 'Limpieza Ligera',
        desc: 'Ideal para mantener tu hogar fresco y ordenado semana tras semana.',
        details: [
          'Quitar el polvo',
          'Aspirar',
          'Trapear',
          'Limpieza de baño',
          'Limpieza de cocina',
          'Orden ligero',
        ],
      },
      {
        title: 'Limpieza Profunda',
        desc: 'Una limpieza de arriba abajo para cuando tu hogar necesita atención extra.',
        details: [
          'Limpieza de cocina y baños',
          'Ordenar habitaciones',
          'Quitar el polvo, aspirar y trapear',
          'Organizar',
          'Desinfectar superficies',
          'Áreas de alto contacto: manijas e interruptores',
        ],
      },
    ],
  },
  custom: {
    title: '¿Necesitas algo diferente?',
    body: 'Ofrecemos el servicio de limpieza que usted necesite. Cuéntanos sobre tu hogar y armamos un servicio a tu medida.',
    cta: 'Contáctanos',
  },
  why: {
    label: 'Por qué elegirnos',
    title_pre: 'Tu espacio, ',
    title_accent: 'nuestro compromiso',
    subtitle: 'Más que una casa limpia: la tranquilidad de saber que está en buenas manos.',
    items: [
      { title: 'Confiables', desc: 'Llegamos cuando decimos y cumplimos lo que prometemos.' },
      { title: 'Detallistas', desc: 'Cuidamos los rincones y detalles que otros pasan por alto.' },
      { title: 'Cuidado y respeto', desc: 'Tratamos tu hogar y tus cosas con mucho cuidado.' },
      { title: 'Desinfección', desc: 'Atención especial a áreas de alto contacto como manijas e interruptores.' },
    ],
    steps_title: 'Cómo funciona',
    steps: [
      { title: 'Llámanos o escríbenos', desc: 'Cuéntanos sobre tu hogar y lo que necesitas.' },
      { title: 'Agendamos tu visita', desc: 'Acordamos el servicio y un horario que te funcione.' },
      { title: 'Disfruta tu hogar limpio', desc: 'Relájate, nosotros nos encargamos de los detalles.' },
    ],
  },
  area: {
    label: 'Área de servicio',
    title: 'Atendemos Salt Lake City y sus alrededores',
    body: '¿No sabes si llegamos a tu zona? Llámanos o envíanos un mensaje, con gusto te ayudamos.',
  },
  contact: {
    label: 'Contacto',
    title_pre: '¿Listo para un ',
    title_accent: 'hogar impecable?',
    body: 'Llámanos o envíanos un mensaje para una cotización. Hablamos inglés y español.',
    call: 'Llámanos',
    text: 'Envíanos un mensaje',
    note: 'Respondemos los mensajes de texto lo antes posible.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    area: 'Salt Lake City, Utah y alrededores',
  },
  floating: { call: 'Llamar a Limpiezas Global', text: 'Enviar mensaje a Limpiezas Global' },
};

export const translations: Record<Lang, T> = { en, es };
