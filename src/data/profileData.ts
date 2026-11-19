export const profile = {
  name: 'Roberto Burgos Vidal',
  headline: 'Técnico informático y técnico superior en desarrollo web',
  summary:
    'Estudio 2º de DAW en Digitech FP después de un grado medio en SMR. He reparado y preparado equipos para clientes como El Corte Inglés, Fremap o la ONU, y ahora busco prácticas donde juntar las dos cosas: sistemas y código.',
  role: 'Estudiante de DAW, 2º curso',
  availability: 'Disponible para prácticas',
  email: 'roburgosvidal@gmail.com',
  phone: '+34 684 02 38 36',
  location: 'Velilla de San Antonio, Madrid',
  // TODO: sustituye por tus URLs reales
  github: 'https://github.com/robburgoss',
  linkedin: 'https://www.linkedin.com/in/roberto-burgos-vidal-7196a228b',
  cv: '/cv-roberto-burgos.pdf',
  emailjs: { publicKey: 'R3wJc5n9dtOEPPzLC', serviceId: 'service_tyv6xie', templateId: 'template_bulgfx9' },
};

export const skills = [
  { category: 'Backend', items: ['Java', 'PHP', 'JavaScript', 'SQL y bases de datos relacionales', 'HTML y CSS'] },
  {
    category: 'Sistemas',
    items: [
      'Diagnóstico y reparación de hardware',
      'Maquetado de imágenes de sistema',
      'Redes locales y soporte a servidores',
      'Windows Server y Linux (nivel básico)',
      'Reparación de CashKeeper y TPV',
    ],
  },
  { category: 'Herramientas', items: ['Git y GitHub', 'Terminal', 'Claude Code y otros asistentes de IA'] },
  { category: 'Idiomas', items: ['Español nativo', 'Inglés C1'] },
];

type TimelineItem = { start: string; period: string; title: string; org: string; text?: string };

// `start` (AAAA-MM) solo sirve para ordenar la línea temporal, de más reciente a más antiguo.
export const timeline: TimelineItem[] = [
  {
    start: '2025-09',
    period: '2025 – 2027',
    title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    org: 'Digitech FP',
  },
  {
    start: '2025-07',
    period: 'jul – ago 2025',
    title: 'Agente inmobiliario',
    org: 'Tecnocasa, Velilla de San Antonio',
    text: 'Negociación, gestión administrativa y atención directa a clientes.',
  },
  {
    start: '2025-03',
    period: 'mar – jun 2025',
    title: 'Técnico informático en prácticas',
    org: 'Keycoes Comunicaciones, San Blas-Canillejas',
    text: 'Diagnóstico y reparación de hardware y software. Maquetado y preparación de equipos para El Corte Inglés, Primaprix, Fremap, Ginefiv y la ONU. Soporte de campo e incidencias técnicas.',
  },
  {
    start: '2023-09',
    period: '2023 – 2025',
    title: 'Grado Medio en Sistemas Microinformáticos y Redes (SMR)',
    org: 'IES Los Olivos',
  },
  { start: '2018-09', period: '2018 – 2022', title: 'ESO', org: 'Colegio Malvar' },
].sort((a, b) => b.start.localeCompare(a.start));
