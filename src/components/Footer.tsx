import React from 'react';
import { Heart, ArrowUp, ShieldCheck, Sparkles, Puzzle } from 'lucide-react';

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const Footer: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const quoteText = "Creemos en un mundo que entiende, acompaña y celebra la neurodiversidad.";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: calmMode ? 'auto' : 'smooth' });
    if (onSpeak) {
      onSpeak("Volviendo al inicio de la página");
    }
  };

  return (
    <footer className="w-full mt-10 relative">
      {/* Decorative Wavy / Curved Top Border */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 text-[#104C64] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Main Footer Container with Dark Turquoise Background (#104C64) */}
      <div className="bg-[#104C64] text-white pt-6 pb-12 px-4 border-t-4 border-[#8CC63F]">
        <div className="max-w-md mx-auto text-center flex flex-col items-center space-y-4">
          
          {/* Puzzle & Heart Badge */}
          <div className="w-12 h-12 rounded-full bg-[#0C3B4E] border-2 border-[#8CC63F] flex items-center justify-center text-[#8CC63F] shadow-md">
            <Puzzle className="w-6 h-6 fill-current text-[#8CC63F]" />
          </div>

          {/* Core Inspirational Quote */}
          <p className="text-sm sm:text-lg font-bold leading-relaxed max-w-xs sm:max-w-sm text-white px-2">
            "{quoteText}"
          </p>

          {/* Secondary Accessibility & Mission Statement */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#8CC63F] font-semibold bg-[#0C3B4E] px-3 py-1.5 rounded-full border border-white/10 max-w-full text-center">
            <ShieldCheck className="w-4 h-4 text-[#8CC63F] shrink-0" />
            <span>Diseño inclusivo optimizado para TEA, TDAH y Dislexia</span>
          </div>

          {/* Quick Return to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba al inicio de la página"
            title="Volver arriba"
            className="mt-2 px-4 py-2.5 rounded-2xl bg-[#0C3B4E] hover:bg-white/10 active:scale-95 touch-manipulation text-white text-xs font-black border border-white/20 flex items-center gap-1.5 transition-all focus:outline-none min-h-[44px]"
          >
            <ArrowUp className="w-4 h-4 text-[#8CC63F]" />
            <span>Volver arriba</span>
          </button>

          {/* Copyright & Branding */}
          <div className="pt-4 border-t border-white/10 w-full text-[11px] text-white/70 space-y-1">
            <p>© {new Date().getFullYear()} NeuroVisual. Todos los derechos reservados.</p>
            <p className="text-[10px] text-white/50">Recursos de diseño accesible para la autonomía y comunicación.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
