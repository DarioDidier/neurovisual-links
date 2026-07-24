export type LinkColor = 'green' | 'blue' | 'pink' | 'yellow' | 'teal' | 'purple';


export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  color: LinkColor;
  iconName: string;
  isPopular?: boolean;
  badgeText?: string;
  category?: 'destacados' | 'recursos' | 'redes' | 'contacto';
  modalPreviewType?: 'sitio_web' | 'catalog' | 'free_resources' | 'community' | 'whatsapp';
}

export interface SocialItem {
  id: string;
  name: string;
  url: string;
  iconName: string;
  color: string;
  ariaLabel: string;
}

export type FontScale = 'sm' | 'base' | 'lg' | 'xl';

export interface AccessibilityState {
  fontScale: FontScale;
  calmMode: boolean;
  textToSpeech: boolean;
  speechRate: number; // 0.7 to 1.2
  dyslexiaFont: boolean;
  readingGuide: boolean;
  activeAnnouncement: string | null;
}

export interface PictogramResource {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  tags: string[];
  sampleImage?: string;
}
