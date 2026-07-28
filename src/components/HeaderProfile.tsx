import React from 'react';
import { Puzzle, Sparkles, Heart } from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/3xtB6rDz/logo-neurovisual.png";

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const HeaderProfile: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const titleText = "NeuroVisual";
  const bioText = "Recursos visuales para potenciar la autonomía. Diseñamos herramientas que comunican, organizan y acompañan.";

  const handleHeaderClick = () => {
    if (onSpeak) {
      onSpeak(`${titleText}. ${bioText}`);
    }
  };

  return (
    <div 
      className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 px-2 sm:px-4 flex flex-col items-center select-none cursor-pointer group w-full"
      onClick={handleHeaderClick}
      role="banner"
      aria-label="Perfil de NeuroVisual"
    >
      {/* Circular Avatar Container with soft rainbow border */}
      <div className="relative mb-3 sm:mb-4">
        {/* Decorative rainbow halo ring */}
        <div className={`absolute -inset-1.5 rounded-full opacity-80 blur-xs transition-all group-hover:scale-105 ${
          calmMode 
            ? 'bg-[#9EC079]' 
            : 'bg-gradient-to-tr from-[#E54B88] via-[#8CC63F] to-[#49A2D2]'
        }`} />

        <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-[#FFFDF9] shadow-lg border-4 border-[#104C64] overflow-hidden flex items-center justify-center">
          <img
            src={LOGO_URL}
            alt="Isotipo de NeuroVisual: Cerebro de rompecabezas multicolor amigable"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full transform transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback SVG if image loading fails
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.classList.add('bg-[#104C64]');
              }
            }}
          />
          <div className="hidden flex-col items-center justify-center text-white">
            <Puzzle className="w-10 h-10 sm:w-12 sm:h-12 text-[#8CC63F]" />
            <span className="text-[10px] font-black uppercase text-[#49A2D2]">NeuroVisual</span>
          </div>
        </div>

        {/* Small puzzle badge overlay */}
        <div 
          className="absolute -bottom-1 -right-1 bg-[#8CC63F] text-[#104C64] p-1.5 rounded-full border-2 border-white shadow-md flex items-center justify-center"
          title="Inclusión y Neurodiversidad"
        >
          <Puzzle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#104C64]" />
        </div>
      </div>

      {/* Main Title "NeuroVisual" */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 flex items-center justify-center gap-1">
        <span className="text-[#104C64] font-extrabold">Neuro</span>
        <span className={`font-extrabold ${
          calmMode 
            ? 'text-[#8EBEDC]' 
            : 'bg-clip-text text-transparent bg-gradient-to-r from-[#E54B88] via-[#49A2D2] to-[#8CC63F]'
        }`}>
          Visual
        </span>
      </h1>

      {/* Short Bio / Subtitle */}
      <p className="max-w-xs sm:max-w-md text-xs xs:text-sm sm:text-base text-[#104C64]/90 font-semibold leading-relaxed mb-3 px-1">
        {bioText}
      </p>

      {/* Category Pills / Badges for accessibility and trust */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] xs:text-[11px] font-bold w-full max-w-sm">
        <span className="px-2.5 py-1 rounded-full bg-[#E54B88]/10 text-[#E54B88] border border-[#E54B88]/20 flex items-center gap-1 shrink-0">
          <Heart className="w-3 h-3 fill-current" />
          TEA y Neurodiversidad
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#49A2D2]/10 text-[#49A2D2] border border-[#49A2D2]/20 shrink-0">
          Agendas y Rutinas
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#8CC63F]/15 text-[#104C64] border border-[#8CC63F]/30 flex items-center gap-1 shrink-0">
          <Sparkles className="w-3 h-3 text-[#8CC63F]" />
          Educación Inclusiva
        </span>
      </div>
    </div>
  );
};
