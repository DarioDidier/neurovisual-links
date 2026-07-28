import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  Download, 
  ExternalLink, 
  Sun, 
  Smile, 
  HeartPulse, 
  CheckSquare, 
  Sparkles,
  BookOpen,
  Puzzle,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { LinkItem, PictogramResource } from '../types';
import { SAMPLE_PICTOGRAMS } from '../data/links';
import { speakText } from '../utils/speechUtils';

interface Props {
  link: LinkItem | null;
  onClose: () => void;
  speechRate?: number;
  textToSpeech?: boolean;
}

export const ResourceModal: React.FC<Props> = ({ link, onClose, speechRate = 0.9, textToSpeech = true }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'rutinas' | 'emociones'>('all');

  if (!link) return null;

  const getPictogramIcon = (icon: string) => {
    switch (icon) {
      case 'Sun':
        return <Sun className="w-8 h-8 text-[#F9A825]" />;
      case 'Smile':
        return <Smile className="w-8 h-8 text-[#E54B88]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-8 h-8 text-[#49A2D2]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-8 h-8 text-[#8CC63F]" />;
      default:
        return <Puzzle className="w-8 h-8 text-[#104C64]" />;
    }
  };

  const handleSpeakItem = (title: string, desc: string) => {
    speakText(`${title}. ${desc}`, speechRate);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `NeuroVisual - ${link.title}`,
        text: link.subtitle,
        url: link.url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(link.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#FFFDF9] w-full max-w-lg rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#104C64] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#104C64] text-white p-3 sm:p-4 flex items-center justify-between gap-2 border-b-3 sm:border-b-4 border-[#8CC63F] shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-white/10 text-[#8CC63F] shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h2 id="modal-title" className="text-base sm:text-xl font-extrabold leading-tight truncate">
                Muestra de Recursos Visuales
              </h2>
              <p className="text-[11px] sm:text-xs text-[#8CC63F] font-semibold truncate">
                {link.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar vista previa"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 no-scrollbar">
          {/* Banner Description */}
          <div className="bg-[#49A2D2]/10 border-2 border-[#49A2D2]/30 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex items-start gap-2.5 sm:gap-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#49A2D2] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#104C64] font-semibold leading-relaxed">
              <p className="font-bold text-xs sm:text-sm mb-0.5">{link.subtitle}</p>
              <p className="opacity-90 text-[11px] sm:text-xs">
                A continuación puedes explorar ejemplos de pictogramas e historias sociales diseñadas con alta legibilidad para anticipar y estructurar la jornada.
              </p>
            </div>
          </div>

          {/* Interactive Pictogram Cards */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between gap-1">
              <h3 className="text-[11px] sm:text-xs uppercase tracking-wider font-black text-[#104C64] flex items-center gap-1">
                <Puzzle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E54B88]" />
                Apoyos Visuales
              </h3>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#8CC63F] bg-[#8CC63F]/15 px-2 py-0.5 rounded-full shrink-0">
                Toca para escuchar
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
              {SAMPLE_PICTOGRAMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSpeakItem(item.title, item.description)}
                  className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border-2 border-[#104C64]/20 bg-white hover:border-[#E54B88] hover:shadow-md transition-all cursor-pointer flex items-center gap-2.5 sm:gap-3 group active:scale-[0.98] touch-manipulation"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSpeakItem(item.title, item.description);
                    }
                  }}
                  aria-label={`Escuchar tarjeta: ${item.title}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFFDF9] border-2 border-[#104C64]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getPictogramIcon(item.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-black text-xs sm:text-sm text-[#104C64] group-hover:text-[#E54B88] transition-colors truncate">
                        {item.title}
                      </h4>
                      <Volume2 className="w-4 h-4 text-[#49A2D2] group-hover:scale-110 transition-transform shrink-0" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#104C64]/80 font-semibold line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1 flex-wrap">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-bold bg-[#104C64]/5 text-[#104C64] px-1.5 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-[#FFFDF9] border-t-2 border-[#104C64]/10 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <button
            onClick={handleShare}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl sm:rounded-2xl bg-white border-2 border-[#104C64]/20 text-[#104C64] font-extrabold text-xs flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors active:scale-95 touch-manipulation min-h-[42px]"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4 text-[#E54B88]" />}
            <span>{copied ? '¡Enlace Copiado!' : 'Compartir Recurso'}</span>
          </button>

          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl sm:rounded-2xl bg-[#104C64] hover:bg-[#0c394b] text-white font-extrabold text-xs flex items-center justify-center gap-2 border-2 border-[#8CC63F] shadow-xs transition-all active:scale-95 touch-manipulation min-h-[42px]"
          >
            <span>Ir al Sitio Completo</span>
            <ExternalLink className="w-4 h-4 text-[#8CC63F]" />
          </a>
        </div>
      </div>
    </div>
  );
};
