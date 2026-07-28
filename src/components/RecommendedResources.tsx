import React from 'react';
import { GraduationCap, ExternalLink, Sparkles, BookOpenCheck } from 'lucide-react';

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const RecommendedResources: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const handleMouseEnterOrFocus = () => {
    if (onSpeak) {
      onSpeak("Recursos recomendados. Curso recomendado sobre Autismo.");
    }
  };

  return (
    <section 
      className="w-full my-6 text-left"
      aria-label="Recursos recomendados"
    >
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-2 px-1">
        <span className="text-xl sm:text-2xl" role="img" aria-label="Pieza de rompecabezas">🧩</span>
        <h2 className="text-lg sm:text-xl font-extrabold text-[#104C64] tracking-tight">
          Recursos recomendados
        </h2>
      </div>

      {/* Section Description */}
      <p className="text-xs sm:text-sm font-semibold text-[#104C64]/80 mb-3.5 px-1 leading-relaxed">
        Herramientas, cursos y materiales útiles seleccionados para familias, docentes y profesionales que acompañan a personas con autismo.
      </p>

      {/* Main Educational Recommendation Card */}
      <div 
        onMouseEnter={handleMouseEnterOrFocus}
        onFocus={handleMouseEnterOrFocus}
        className={`w-full p-4 sm:p-5 rounded-3xl transition-all duration-200 border-2 ${
          calmMode
            ? 'bg-[#FAF8F5] border-[#8EBEDC]/60 text-[#104C64]'
            : 'bg-white border-[#49A2D2]/40 shadow-xs hover:border-[#49A2D2] text-[#104C64]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Content Left */}
          <div className="flex items-start gap-3.5 flex-1 min-w-0">
            {/* Icon badge */}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
              calmMode ? 'bg-[#8EBEDC]/25 text-[#104C64]' : 'bg-[#49A2D2]/15 text-[#104C64] border border-[#49A2D2]/30'
            }`}>
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#104C64]" />
            </div>

            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8CC63F]/20 text-[#104C64] border border-[#8CC63F]/30 shrink-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#8CC63F]" />
                  Recomendación Formativa
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#104C64] leading-snug">
                🎓 Curso recomendado sobre Autismo
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#104C64]/85 leading-relaxed pt-0.5">
                "Un recurso educativo con estrategias y herramientas prácticas para comprender, acompañar y favorecer el desarrollo de personas con autismo."
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="sm:self-center shrink-0 pt-1 sm:pt-0">
            <a
              href="https://go.hotmart.com/P106916307K"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conocer el curso recomendado sobre Autismo (se abre en una ventana nueva)"
              className={`w-full sm:w-auto px-5 py-3 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 border-2 active:scale-95 touch-manipulation min-h-[46px] ${
                calmMode
                  ? 'bg-[#2A5262] text-white border-[#2A5262] hover:bg-[#104C64]'
                  : 'bg-[#104C64] text-white border-[#8CC63F] hover:bg-[#0c394b] shadow-sm'
              }`}
            >
              <BookOpenCheck className="w-4 h-4 text-[#8CC63F]" />
              <span>Conocer el curso</span>
              <ExternalLink className="w-4 h-4 text-[#8CC63F] ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Educational Disclaimer / Footer Note */}
      <p className="text-[11px] sm:text-xs text-[#104C64]/70 font-semibold mt-2.5 px-1.5 italic text-center sm:text-left">
        En NeuroVisual compartimos recursos seleccionados que pueden ayudar a familias y profesionales.
      </p>
    </section>
  );
};
