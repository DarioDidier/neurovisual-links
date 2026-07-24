import { LinkItem, SocialItem, PictogramResource } from '../types';

export const MAIN_LINKS: LinkItem[] = [
  {
    id: 'link-website',
    title: 'Visita Nuestro Sitio Web',
    subtitle: 'Descarga recursos educativos gratuitos, agendas y material para docentes',
    url: 'https://dariodidier.github.io/neurovisual/',
    color: 'green',
    iconName: 'Globe',
    isPopular: true,
    badgeText: 'Web Oficial',
    category: 'destacados',
    modalPreviewType: 'sitio_web'
  },
  {
    id: 'link-instagram',
    title: 'Síguenos en Instagram',
    subtitle: 'Comunidad, tips diarios y novedades para el acompañamiento visual',
    url: 'https://www.instagram.com/neurovisualtea/',
    color: 'blue',
    iconName: 'Instagram',
    category: 'redes',
    modalPreviewType: 'community'
  },
  {
    id: 'link-facebook',
    title: 'Comunidad en Facebook',
    subtitle: 'Conecta con otras familias y profesionales de la neurodiversidad',
    url: '#',
    color: 'pink',
    iconName: 'Facebook',
    category: 'redes',
    modalPreviewType: 'community'
  },
  {
    id: 'link-catalog',
    title: 'Catálogo de Agendas y Pictogramas',
    subtitle: 'Organizadores de rutinas diarias, llaveros de comunicación y anticipadores',
    url: 'https://dariodidier.github.io/neurovisual/#descargas',
    color: 'yellow',
    iconName: 'BookOpen',
    badgeText: 'Destacado',
    category: 'recursos',
    modalPreviewType: 'catalog'
  },
  {
    id: 'link-downloads',
    title: 'Kits de Fichas Gratuitas',
    subtitle: 'Descargables listos para imprimir: emociones, higiene y anticipadores',
    url: 'https://dariodidier.github.io/neurovisual/#descargas',
    color: 'blue',
    iconName: 'Download',
    badgeText: 'Gratis PDF',
    category: 'recursos',
    modalPreviewType: 'free_resources'
  }
];

export const SOCIAL_LINKS: SocialItem[] = [
  {
    id: 'social-instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/neurovisualtea/',
    iconName: 'Instagram',
    color: '#E54B88',
    ariaLabel: 'Visitar perfil de NeuroVisual en Instagram (se abre en ventana externa)'
  },
  {
    id: 'social-facebook',
    name: 'Facebook',
    url: '#',
    iconName: 'Facebook',
    color: '#49A2D2',
    ariaLabel: 'Página de NeuroVisual en Facebook'
  },
  {
    id: 'social-pinterest',
    name: 'Pinterest',
    url: 'https://pinterest.com/neurovisual',
    iconName: 'Pin',
    color: '#F9A825',
    ariaLabel: 'Visitar tableros de NeuroVisual en Pinterest (se abre en ventana externa)'
  },
  {
    id: 'social-email',
    name: 'Correo Electrónico',
    url: 'mailto:contacto@neurovisual.org',
    iconName: 'Mail',
    color: '#92278F',
    ariaLabel: 'Enviar un correo a contacto@neurovisual.org'
  }
];

export const SAMPLE_PICTOGRAMS: PictogramResource[] = [
  {
    id: 'p-1',
    title: 'Rutina de la Mañana',
    category: 'Agendas Visuales',
    description: 'Secuencia de 6 pasos para levantarse, lavarse la cara, vestirse y desayunar con autonomía.',
    icon: 'Sun',
    tags: ['Estructura', 'Hogar', 'Pasos']
  },
  {
    id: 'p-2',
    title: 'Llavero de Emociones',
    category: 'Comunicación CAA',
    description: 'Tarjetas portátiles con expresiones para identificar y comunicar alegría, calma, molestia o cansancio.',
    icon: 'Smile',
    tags: ['Regulación', 'Sentimientos', 'Portátil']
  },
  {
    id: 'p-3',
    title: 'Anticipador: Visita al Médico',
    category: 'Anticipación',
    description: 'Historia social ilustrada para reducir la ansiedad ante consultas pediátricas o dentales.',
    icon: 'HeartPulse',
    tags: ['Salud', 'Sin Ansiedad', 'Secuencia']
  },
  {
    id: 'p-4',
    title: 'Organizador de Tareas Escolares',
    category: 'Escuela Inclusiva',
    description: 'Tablero tipo "Por hacer - En proceso - Logrado" para primaria y docentes.',
    icon: 'CheckSquare',
    tags: ['Autonomía', 'Docentes', 'Escuela']
  }
];
