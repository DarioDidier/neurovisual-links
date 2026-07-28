import React from 'react';
import { 
  Globe, 
  Instagram, 
  BookOpen, 
  MessageCircle, 
  Youtube, 
  Download, 
  ExternalLink,
  Eye,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { LinkItem, LinkColor } from '../types';

interface Props {
  link: LinkItem;
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
  onPreviewClick?: (link: LinkItem) => void;
}

export const LinkButton: React.FC<Props> = ({ link, onSpeak, calmMode, onPreviewClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Instagram':
        return <Instagram className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6" />;
      case 'Youtube':
        return <Youtube className="w-6 h-6" />;
      case 'Download':
        return <Download className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  // Brand Color Mapping for Normal vs Calm Mode
  const getColorStyles = (color: LinkColor) => {
    if (calmMode) {
      switch (color) {
        case 'green':
          return {
            card: 'bg-[#FAF8F5] text-[#1B2C10] border-2 border-[#7B9E56]',
            iconBg: 'bg-[#9EC079] text-[#1B2C10]'
          };
        case 'blue':
          return {
            card: 'bg-[#FAF8F5] text-[#122B3B] border-2 border-[#6A9DBF]',
            iconBg: 'bg-[#8EBEDC] text-[#122B3B]'
          };
        case 'pink':
          return {
            card: 'bg-[#FAF8F5] text-[#2D1824] border-2 border-[#B56589]',
            iconBg: 'bg-[#D882A7] text-[#2D1824]'
          };
        case 'yellow':
          return {
            card: 'bg-[#FAF8F5] text-[#38290B] border-2 border-[#C19E59]',
            iconBg: 'bg-[#E2C07D] text-[#38290B]'
          };
        case 'teal':
          return {
            card: 'bg-[#FAF8F5] text-[#104C64] border-2 border-[#2A5262]',
            iconBg: 'bg-[#3E6E82] text-white'
          };
        default:
          return {
            card: 'bg-[#FAF8F5] text-[#122B3B] border-2 border-[#6A9DBF]',
            iconBg: 'bg-[#8EBEDC] text-[#122B3B]'
          };
      }
    }

    switch (color) {
      case 'green':
        // Verde Manzana (#8CC63F)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#8CC63F] hover:shadow-md hover:bg-[#8CC63F]/5',
          iconBg: 'bg-[#8CC63F] text-white'
        };
      case 'blue':
        // Celeste (#49A2D2)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#49A2D2] hover:shadow-md hover:bg-[#49A2D2]/5',
          iconBg: 'bg-[#49A2D2] text-white'
        };
      case 'pink':
        // Rosa / Fucsia (#E54B88)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#E54B88] hover:shadow-md hover:bg-[#E54B88]/5',
          iconBg: 'bg-[#E54B88] text-white'
        };
      case 'yellow':
        // Amarillo / Naranja Suave (#F9A825)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#F9A825] hover:shadow-md hover:bg-[#F9A825]/5',
          iconBg: 'bg-[#F9A825] text-white'
        };
      case 'teal':
        // Turquesa Oscuro (#104C64)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#104C64] hover:shadow-md hover:bg-[#104C64]/5',
          iconBg: 'bg-[#104C64] text-white'
        };
      case 'purple':
        // Violeta (#92278F)
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#92278F] hover:shadow-md hover:bg-[#92278F]/5',
          iconBg: 'bg-[#92278F] text-white'
        };
      default:
        return {
          card: 'bg-white text-[#104C64] border-2 border-[#49A2D2]',
          iconBg: 'bg-[#49A2D2] text-white'
        };
    }
  };

  const handleMouseEnterOrFocus = () => {
    if (onSpeak) {
      onSpeak(`${link.title}. ${link.subtitle}`);
    }
  };

  const styleObj = getColorStyles(link.color);

  return (
    <div className="w-full my-2 relative group">
      {/* Main Link Card Button */}
      <a
        href={link.url}
        target={link.url === '#' ? '_self' : '_blank'}
        rel={link.url === '#' ? undefined : 'noopener noreferrer'}
        onClick={(e) => {
          if (link.url === '#') {
            e.preventDefault();
            if (onSpeak) onSpeak(`${link.title}: Enlace próximamente disponible.`);
          }
        }}
        onMouseEnter={handleMouseEnterOrFocus}
        onFocus={handleMouseEnterOrFocus}
        aria-label={`${link.title}: ${link.subtitle}.${link.url === '#' ? '' : ' Se abre en una ventana nueva.'}`}
        className={`w-full min-h-[72px] sm:min-h-[82px] p-3 sm:p-4 rounded-2xl sm:rounded-[32px] shadow-xs flex items-center justify-between gap-2.5 sm:gap-3 transition-all duration-200 transform focus:outline-none touch-manipulation active:scale-[0.98] ${
          calmMode ? '' : 'hover:-translate-y-0.5'
        } ${styleObj.card}`}
      >
        {/* Left Badge / Icon Container */}
        <div className="flex items-center gap-2.5 xs:gap-3.5 sm:gap-4 flex-1 min-w-0">
          <div className={`w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-xs font-bold transition-transform group-hover:scale-105 ${styleObj.iconBg}`}>
            {getIcon(link.iconName)}
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-left flex-1 min-w-0 pr-0.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-sm xs:text-base sm:text-lg leading-tight tracking-tight text-[#104C64]">
                {link.title}
              </span>
              {link.badgeText && (
                <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#104C64]/10 text-[#104C64] border border-[#104C64]/15 shrink-0">
                  {link.badgeText}
                </span>
              )}
            </div>
            <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-[#104C64]/75 leading-snug mt-0.5 line-clamp-2">
              {link.subtitle}
            </span>
          </div>
        </div>

        {/* Action Icon / Chevron */}
        <div className="flex items-center gap-1.5 shrink-0 pl-0.5">
          {link.modalPreviewType && onPreviewClick && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPreviewClick(link);
                if (onSpeak) onSpeak(`Ver recursos de muestra para ${link.title}`);
              }}
              aria-label={`Ver muestra interactiva de ${link.title}`}
              title="Vista previa interactiva"
              className="p-2 rounded-xl bg-[#104C64]/10 hover:bg-[#104C64]/20 text-[#104C64] transition-colors border border-[#104C64]/15 hidden sm:flex items-center gap-1 text-[11px] font-extrabold"
            >
              <Eye className="w-4 h-4" />
              <span>Muestra</span>
            </button>
          )}

          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#104C64]/10 flex items-center justify-center text-[#104C64] group-hover:translate-x-1 transition-transform shrink-0">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </a>

      {/* Mobile-friendly secondary preview button if available */}
      {link.modalPreviewType && onPreviewClick && (
        <div className="sm:hidden flex justify-end -mt-1 mr-2">
          <button
            type="button"
            onClick={() => onPreviewClick(link)}
            className="text-[10px] xs:text-[11px] font-black text-[#104C64] bg-white/95 hover:bg-white px-3 py-1 rounded-full border border-[#104C64]/20 shadow-xs flex items-center gap-1 touch-manipulation active:scale-95"
          >
            <Sparkles className="w-3 h-3 text-[#E54B88]" />
            <span>Ver Muestra Interactiva</span>
          </button>
        </div>
      )}
    </div>
  );
};
