import React from 'react';
import { Instagram, Facebook, Youtube, Pin, MessageCircle, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/links';
import { SocialItem } from '../types';

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const SocialBar: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Pin':
        return <Pin className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <Instagram className="w-5 h-5" />;
    }
  };

  const handleHoverOrFocus = (social: SocialItem) => {
    if (onSpeak) {
      onSpeak(`Enlace a ${social.name}`);
    }
  };

  return (
    <nav 
      className="my-3 px-4 flex items-center justify-center" 
      aria-label="Redes sociales y contacto rápido"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm p-2 px-3 rounded-full border-2 border-[#104C64]/15 shadow-sm max-w-xs sm:max-w-md overflow-x-auto">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.url === '#' ? '_self' : '_blank'}
            rel={item.url === '#' ? undefined : 'noopener noreferrer'}
            onClick={(e) => {
              if (item.url === '#') {
                e.preventDefault();
                if (onSpeak) onSpeak(`${item.name}: Enlace próximamente disponible.`);
              }
            }}
            aria-label={item.ariaLabel}
            onMouseEnter={() => handleHoverOrFocus(item)}
            onFocus={() => handleHoverOrFocus(item)}
            title={item.name}
            className={`group relative p-3 rounded-full transition-all duration-200 flex items-center justify-center focus:outline-none ${
              calmMode
                ? 'text-[#104C64] hover:bg-[#8EBEDC]/30'
                : 'text-[#104C64] hover:scale-110'
            }`}
            style={{
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            {/* Background pill effect on hover */}
            <span 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-15 transition-opacity"
              style={{ backgroundColor: calmMode ? '#104C64' : item.color }}
            />
            
            <div 
              className="relative z-10 transition-colors"
              style={{
                color: calmMode ? '#104C64' : undefined
              }}
            >
              <div className="group-hover:text-current transition-colors" style={{ color: calmMode ? '#104C64' : item.color }}>
                {getIcon(item.iconName)}
              </div>
            </div>

            {/* Screen reader label */}
            <span className="sr-only">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
