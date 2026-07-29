import React from 'react';
import { 
  Youtube, 
  Mic, 
  Headphones, 
  Radio, 
  Play, 
  Puzzle, 
  Users, 
  GraduationCap, 
  Stethoscope, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Volume2
} from 'lucide-react';

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const YouTubePodcast: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const handleMouseEnterOrFocus = () => {
    if (onSpeak) {
      onSpeak("Podcast NeuroVisual en YouTube. Aprende junto a nosotros con episodios dedicados al TEA, la neurodiversidad, la comunicación y la autonomía.");
    }
  };

  const benefits = [
    {
      icon: Play,
      color: 'text-[#E54B88]',
      bgColor: 'bg-[#E54B88]/15',
      emoji: '▶️',
      text: 'Nuevos episodios periódicamente.'
    },
    {
      icon: Puzzle,
      color: 'text-[#8CC63F]',
      bgColor: 'bg-[#8CC63F]/20',
      emoji: '🧩',
      text: 'Estrategias prácticas para acompañar a personas con TEA.'
    },
    {
      icon: Users,
      color: 'text-[#49A2D2]',
      bgColor: 'bg-[#8FD3FF]/30',
      emoji: '👨‍👩‍👧‍👦',
      text: 'Contenido para familias.'
    },
    {
      icon: GraduationCap,
      color: 'text-[#8CC63F]',
      bgColor: 'bg-[#B9F3E4]/40',
      emoji: '🏫',
      text: 'Recursos para docentes.'
    },
    {
      icon: Stethoscope,
      color: 'text-[#9B51E0]',
      bgColor: 'bg-[#DCC6FF]/40',
      emoji: '🩺',
      text: 'Información útil para profesionales.'
    },
    {
      icon: Heart,
      color: 'text-[#49A2D2]',
      bgColor: 'bg-[#8FD3FF]/30',
      emoji: '💙',
      text: 'Consejos para favorecer la comunicación, la autonomía y la inclusión.'
    }
  ];

  return (
    <section 
      className="w-full my-6 text-left"
      aria-label="Podcast NeuroVisual en YouTube"
    >
      {/* Container Card */}
      <div 
        onMouseEnter={handleMouseEnterOrFocus}
        onFocus={handleMouseEnterOrFocus}
        className={`w-full p-4 sm:p-6 rounded-3xl transition-all duration-300 border-2 ${
          calmMode
            ? 'bg-[#FAF8F5] border-[#8EBEDC]/60 text-[#104C64]'
            : 'bg-white border-[#8FD3FF]/80 shadow-xs hover:border-[#49A2D2] text-[#104C64]'
        }`}
      >
        {/* Header Badge & Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="space-y-1.5 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 text-[#104C64] text-xs font-black">
              <Youtube className="w-4 h-4 text-[#FF0000] fill-current shrink-0" />
              <span>Canal Oficial de YouTube</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#104C64] tracking-tight flex items-center gap-2">
              <span>🎙️</span>
              <span>Podcast NeuroVisual en YouTube</span>
            </h2>
          </div>

          {/* Friendly Illustration / Microphone Badge */}
          <div className="self-center sm:self-auto shrink-0 p-3 rounded-2xl bg-gradient-to-tr from-[#8FD3FF]/30 via-[#B9F3E4]/30 to-[#DCC6FF]/30 border border-[#104C64]/10 flex items-center justify-center relative group">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#104C64] flex items-center justify-center text-white shadow-xs">
                <Mic className="w-6 h-6 text-[#8CC63F]" />
              </div>
              <div className="absolute -top-1 -right-1 p-1 bg-[#FF0000] rounded-full text-white shadow-2xs">
                <Youtube className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-[#104C64]/85 leading-relaxed mb-5">
          Aprende junto a nosotros con episodios dedicados al TEA, la neurodiversidad, la comunicación, la autonomía y herramientas prácticas para familias, docentes y profesionales.
        </p>

        {/* Featured Card */}
        <div className="w-full p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#8FD3FF]/20 via-[#B9F3E4]/20 to-[#FFF2A8]/30 border border-[#49A2D2]/30 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#FF0000] shadow-xs shrink-0 border border-[#FF0000]/20">
              <Youtube className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#104C64]/70">
                Espacio de Aprendizaje Accessible
              </span>
              <span className="font-extrabold text-sm sm:text-base text-[#104C64]">
                Escucha y aprende con NeuroVisual Podcast
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#104C64]/15 text-xs font-bold text-[#104C64]">
            <Radio className="w-3.5 h-3.5 text-[#E54B88] animate-pulse" />
            <span>Episodios Formativos</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/90 border border-[#104C64]/10 shadow-2xs hover:border-[#49A2D2]/50 hover:shadow-xs transition-all"
              >
                <div className={`w-8 h-8 rounded-xl ${benefit.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-4 h-4 ${benefit.color}`} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#104C64] leading-snug">
                  <span className="mr-1">{benefit.emoji}</span>
                  {benefit.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Main CTA Button */}
        <div className="w-full flex flex-col items-center gap-4">
          <a
            href="https://youtube.com/@neurovisualpodcast?si=jCQpXeBe4x2-h-yg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar canal de YouTube de NeuroVisual Podcast (se abre en una ventana nueva)"
            className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 transform active:scale-98 touch-manipulation min-h-[52px] shadow-md border-2 group ${
              calmMode
                ? 'bg-[#104C64] text-white border-[#8FD3FF] hover:bg-[#0c394b]'
                : 'bg-[#FF0000] hover:bg-[#cc0000] text-white border-[#FF4D4D]'
            }`}
          >
            <div className="p-1 rounded-md bg-white/20 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current text-white" />
            </div>
            <span className="tracking-tight text-white font-extrabold drop-shadow-2xs">
              ▶️ Visitar canal de YouTube
            </span>
            <ExternalLink className="w-5 h-5 text-white/90 shrink-0 ml-1" />
          </a>

          {/* Inspirational Message Footer */}
          <div className="w-full p-3.5 rounded-2xl bg-[#DCC6FF]/20 border border-[#DCC6FF]/40 flex items-start gap-2.5 text-xs text-[#104C64] leading-relaxed">
            <Heart className="w-5 h-5 text-[#E54B88] fill-current shrink-0 mt-0.5" />
            <p className="font-semibold text-[#104C64]/95">
              En NeuroVisual creemos que compartir conocimiento es una forma de construir una comunidad más inclusiva. Te invitamos a acompañarnos en cada episodio y seguir aprendiendo juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
