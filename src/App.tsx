import React, { useState, useEffect } from 'react';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { HeaderProfile } from './components/HeaderProfile';
import { SocialBar } from './components/SocialBar';
import { LinkButton } from './components/LinkButton';
import { ResourceModal } from './components/ResourceModal';
import { RecommendedResources } from './components/RecommendedResources';
import { WhatsAppCommunity } from './components/WhatsAppCommunity';
import { Footer } from './components/Footer';
import { ReadingGuideOverlay } from './components/ReadingGuideOverlay';
import { AccessibilityState, LinkItem } from './types';
import { MAIN_LINKS } from './data/links';
import { speakText, stopSpeech } from './utils/speechUtils';
import { Info, Sparkles, Heart, HelpCircle, ShieldCheck } from 'lucide-react';

export default function App() {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>(() => {
    // Persistent initial state if saved
    return {
      fontScale: 'base',
      calmMode: false,
      textToSpeech: false,
      speechRate: 0.9,
      dyslexiaFont: false,
      readingGuide: false,
      activeAnnouncement: null
    };
  });

  const [selectedPreviewLink, setSelectedPreviewLink] = useState<LinkItem | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'destacados' | 'recursos' | 'contacto'>('todos');

  // Handle Speech trigger
  const handleSpeak = (text: string) => {
    if (accessibilityState.textToSpeech) {
      speakText(text, accessibilityState.speechRate);
    }
  };

  // Filter links by active tab if selected
  const filteredLinks = MAIN_LINKS.filter((link) => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'destacados') return link.isPopular;
    if (activeTab === 'recursos') return link.category === 'recursos' || link.category === 'destacados';
    if (activeTab === 'contacto') return link.category === 'contacto' || link.category === 'redes';
    return true;
  });

  return (
    <div 
      className={`min-h-screen flex flex-col font-['Nunito',sans-serif] transition-colors duration-300 ${
        accessibilityState.calmMode ? 'mode-calma bg-[#FAF8F5]' : 'bg-[#FFFDF9]'
      } ${
        accessibilityState.dyslexiaFont ? 'font-dyslexic' : ''
      } ${
        `font-scale-${accessibilityState.fontScale}`
      }`}
    >
      {/* Reading Guide Line Overlay */}
      <ReadingGuideOverlay enabled={accessibilityState.readingGuide} />

      {/* Top Fixed / Sticky Accessibility Toolbar */}
      <AccessibilityToolbar 
        state={accessibilityState} 
        setState={setAccessibilityState} 
      />

      {/* Main Content Card Container (Mobile-first centered column) */}
      <main className="flex-1 max-w-md sm:max-w-lg mx-auto w-full px-3 sm:px-4 py-2 flex flex-col items-center">
        {/* Profile Header */}
        <HeaderProfile 
          onSpeak={handleSpeak} 
          calmMode={accessibilityState.calmMode} 
        />

        {/* Social Media Links Horizontal Bar */}
        <SocialBar 
          onSpeak={handleSpeak} 
          calmMode={accessibilityState.calmMode} 
        />

        {/* Active Accessibility Status Indicator Banner (if any accessibility feature is on) */}
        {(accessibilityState.calmMode || accessibilityState.textToSpeech || accessibilityState.dyslexiaFont || accessibilityState.fontScale !== 'base') && (
          <div className="w-full my-2 p-2.5 rounded-2xl bg-[#104C64]/5 border border-[#104C64]/15 flex items-center justify-between text-xs font-bold text-[#104C64] animate-fadeIn">
            <div className="flex items-center gap-1.5 flex-wrap">
              <ShieldCheck className="w-4 h-4 text-[#8CC63F] shrink-0" />
              <span className="shrink-0">Modo Adaptado:</span>
              {accessibilityState.calmMode && <span className="bg-[#8CC63F]/20 text-[#104C64] px-2 py-0.5 rounded-full text-[10px] shrink-0">Calma</span>}
              {accessibilityState.textToSpeech && <span className="bg-[#E54B88]/20 text-[#104C64] px-2 py-0.5 rounded-full text-[10px] shrink-0">Lectura Voz</span>}
              {accessibilityState.dyslexiaFont && <span className="bg-[#49A2D2]/20 text-[#104C64] px-2 py-0.5 rounded-full text-[10px] shrink-0">Lectura Fácil</span>}
              {accessibilityState.fontScale !== 'base' && <span className="bg-[#F9A825]/20 text-[#104C64] px-2 py-0.5 rounded-full text-[10px] shrink-0">Texto {accessibilityState.fontScale.toUpperCase()}</span>}
            </div>
          </div>
        )}

        {/* Category Filter Pills (for quick cognitive organization) */}
        <div 
          className="w-full my-2.5 flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-0.5 touch-pan-x"
          role="tablist"
          aria-label="Filtrar enlaces por categoría"
        >
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'destacados', label: '⭐ Destacados' },
            { id: 'recursos', label: '🧩 Recursos Gratis' },
            { id: 'contacto', label: '💬 Contacto' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                handleSpeak(`Filtrando por ${tab.label}`);
              }}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all border whitespace-nowrap shrink-0 touch-manipulation active:scale-95 min-h-[38px] flex items-center justify-center ${
                activeTab === tab.id
                  ? 'bg-[#104C64] text-white border-[#104C64] shadow-xs'
                  : 'bg-white text-[#104C64] hover:bg-gray-100 border-[#104C64]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main List of Links (Large Rainbow Buttons) */}
        <div className="w-full my-2 space-y-1" role="list" aria-label="Lista de enlaces de NeuroVisual">
          {filteredLinks.map((link) => (
            <div role="listitem" key={link.id}>
              <LinkButton
                link={link}
                onSpeak={handleSpeak}
                calmMode={accessibilityState.calmMode}
                onPreviewClick={(item) => setSelectedPreviewLink(item)}
              />
            </div>
          ))}
        </div>

        {/* Recommended Resources Section */}
        {(activeTab === 'todos' || activeTab === 'recursos') && (
          <RecommendedResources 
            onSpeak={handleSpeak} 
            calmMode={accessibilityState.calmMode} 
          />
        )}

        {/* WhatsApp Community Section */}
        {(activeTab === 'todos' || activeTab === 'recursos' || activeTab === 'contacto') && (
          <WhatsAppCommunity 
            onSpeak={handleSpeak} 
            calmMode={accessibilityState.calmMode} 
          />
        )}

        {/* Informational Guidance Card for Parents and Educators */}
        <div className="w-full my-6 p-4 rounded-3xl bg-[#49A2D2]/10 border-2 border-[#49A2D2]/30 text-[#104C64] space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#49A2D2] text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="font-extrabold text-sm text-[#104C64]">
              ¿Qué son los Apoyos Visuales?
            </h2>
          </div>
          <p className="text-xs font-semibold leading-relaxed text-[#104C64]/90">
            Los pictogramas y agendas de anticipación son canales de comunicación directa que reducen la sobrecarga cognitiva y promueven la autonomía en personas dentro del espectro autista (TEA) y con desafíos en el procesamiento del lenguaje.
          </p>
        </div>
      </main>

      {/* Resource Modal Preview */}
      <ResourceModal
        link={selectedPreviewLink}
        onClose={() => setSelectedPreviewLink(null)}
        speechRate={accessibilityState.speechRate}
        textToSpeech={accessibilityState.textToSpeech}
      />

      {/* Footer */}
      <Footer 
        onSpeak={handleSpeak} 
        calmMode={accessibilityState.calmMode} 
      />
    </div>
  );
}
