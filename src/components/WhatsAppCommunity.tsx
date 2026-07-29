import React from 'react';
import { 
  MessageCircle, 
  Gift, 
  Puzzle, 
  Smile, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Users, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react';

interface Props {
  onSpeak?: (text: string) => void;
  calmMode?: boolean;
}

export const WhatsAppCommunity: React.FC<Props> = ({ onSpeak, calmMode }) => {
  const handleMouseEnterOrFocus = () => {
    if (onSpeak) {
      onSpeak("Únete a nuestra comunidad de WhatsApp. Recibe recursos visuales gratuitos, consejos prácticos y novedades.");
    }
  };

  const benefits = [
    {
      icon: Gift,
      color: 'text-[#E54B88]',
      bgColor: 'bg-[#E54B88]/10',
      emoji: '🎁',
      text: 'Recursos visuales gratuitos cada semana.'
    },
    {
      icon: Puzzle,
      color: 'text-[#8CC63F]',
      bgColor: 'bg-[#8CC63F]/15',
      emoji: '🧩',
      text: 'Rutinas visuales e historias sociales.'
    },
    {
      icon: Smile,
      color: 'text-[#F9A825]',
      bgColor: 'bg-[#F9A825]/15',
      emoji: '😊',
      text: 'Tableros de emociones y material imprimible.'
    },
    {
      icon: BookOpen,
      color: 'text-[#49A2D2]',
      bgColor: 'bg-[#49A2D2]/15',
      emoji: '📚',
      text: 'Recursos para familias, docentes y profesionales.'
    },
    {
      icon: Heart,
      color: 'text-[#E54B88]',
      bgColor: 'bg-[#E54B88]/10',
      emoji: '💙',
      text: 'Consejos prácticos para favorecer la comunicación, la autonomía y la inclusión.'
    },
    {
      icon: Sparkles,
      color: 'text-[#8CC63F]',
      bgColor: 'bg-[#8CC63F]/15',
      emoji: '🌟',
      text: 'Acceso anticipado a nuevos recursos de NeuroVisual.'
    }
  ];

  return (
    <section 
      className="w-full my-6 text-left"
      aria-label="Comunidad de WhatsApp de NeuroVisual"
    >
      {/* Container Card */}
      <div 
        onMouseEnter={handleMouseEnterOrFocus}
        onFocus={handleMouseEnterOrFocus}
        className={`w-full p-4 sm:p-6 rounded-3xl transition-all duration-300 border-2 ${
          calmMode
            ? 'bg-[#FAF8F5] border-[#8EBEDC]/60 text-[#104C64]'
            : 'bg-white border-[#8CC63F]/40 shadow-xs hover:border-[#8CC63F] text-[#104C64]'
        }`}
      >
        {/* Card Header with Header Badge & Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="space-y-1.5 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#104C64] text-xs font-black">
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
              <span>Comunidad Oficial</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#104C64] tracking-tight flex items-center gap-2">
              <span>💬</span>
              <span>Únete a nuestra comunidad de WhatsApp</span>
            </h2>
          </div>

          {/* Amicable Vector Illustration / Badge */}
          <div className="self-center sm:self-auto shrink-0 p-2.5 rounded-2xl bg-gradient-to-tr from-[#49A2D2]/10 via-[#8CC63F]/10 to-[#E54B88]/10 border border-[#104C64]/10 flex items-center justify-center">
            <svg className="w-12 h-12 text-[#104C64]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connecting puzzle pieces & heart illustration */}
              <circle cx="50" cy="50" r="44" fill="#49A2D2" fillOpacity="0.12" />
              <path d="M30 42C30 35.3726 35.3726 30 42 30H58C64.6274 30 70 35.3726 70 42V54C70 60.6274 64.6274 66 58 66H46L34 74V64.5C31.5 62.5 30 58.5 30 54V42Z" fill="#104C64" />
              <path d="M42 42C40 42 38 43.5 38 46C38 49.5 45 54 50 58C55 54 62 49.5 62 46C62 43.5 60 42 58 42C55.5 42 52.5 44 50 46C47.5 44 44.5 42 42 42Z" fill="#25D366" />
              <circle cx="72" cy="32" r="8" fill="#8CC63F" />
              <circle cx="28" cy="68" r="6" fill="#E54B88" />
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-[#104C64]/85 leading-relaxed mb-5">
          Recibe recursos visuales gratuitos, consejos prácticos y novedades para familias, docentes y profesionales que acompañan a personas con TEA y otras condiciones del neurodesarrollo.
        </p>

        {/* Benefits List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/80 border border-[#104C64]/10 shadow-2xs hover:border-[#49A2D2]/40 transition-colors"
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
        <div className="w-full flex flex-col items-center gap-3">
          <a
            href="https://chat.whatsapp.com/B92w5oesi1RJzkER6iCymG?s=cl&p=a&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirme al grupo de WhatsApp de NeuroVisual (se abre en una ventana nueva)"
            className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 transform active:scale-98 touch-manipulation min-h-[52px] shadow-md border-2 ${
              calmMode
                ? 'bg-[#104C64] text-white border-[#25D366] hover:bg-[#0c394b]'
                : 'bg-[#25D366] hover:bg-[#20bd5a] text-white border-[#1b9e4b]'
            }`}
          >
            <MessageCircle className="w-6 h-6 fill-current shrink-0" />
            <span className="tracking-tight text-white font-extrabold drop-shadow-2xs">
              📲 Unirme al grupo de WhatsApp
            </span>
            <ExternalLink className="w-5 h-5 text-white/90 shrink-0 ml-1" />
          </a>

          {/* Trust Message Box */}
          <div className="w-full p-3 sm:p-4 rounded-2xl bg-[#49A2D2]/10 border border-[#49A2D2]/30 flex items-start gap-2.5 text-xs text-[#104C64] leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-[#49A2D2] shrink-0 mt-0.5" />
            <p className="font-medium">
              <span className="font-bold">💙 </span>
              Este grupo está pensado para compartir recursos gratuitos, consejos prácticos y novedades. No enviamos spam y procuramos mantener un ambiente cálido, respetuoso e inclusivo para toda la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
