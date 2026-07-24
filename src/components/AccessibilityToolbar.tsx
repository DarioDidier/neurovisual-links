import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Eye, 
  Type, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sliders,
  ChevronDown,
  ChevronUp,
  Check,
  ShieldAlert
} from 'lucide-react';
import { AccessibilityState, FontScale } from '../types';
import { speakText, stopSpeech } from '../utils/speechUtils';

interface Props {
  state: AccessibilityState;
  setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
}

export const AccessibilityToolbar: React.FC<Props> = ({ state, setState }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [testSpeaking, setTestSpeaking] = useState(false);

  // Cycle font size: sm -> base -> lg -> xl -> sm
  const fontScales: FontScale[] = ['sm', 'base', 'lg', 'xl'];
  const currentScaleIndex = fontScales.indexOf(state.fontScale);

  const handleToggleFontScale = (direction: 'up' | 'down') => {
    let nextIndex = currentScaleIndex;
    if (direction === 'up') {
      nextIndex = Math.min(fontScales.length - 1, currentScaleIndex + 1);
    } else {
      nextIndex = Math.max(0, currentScaleIndex - 1);
    }
    const nextScale = fontScales[nextIndex];
    setState((prev) => ({ ...prev, fontScale: nextScale }));

    const textMap = {
      sm: 'Tamaño de texto pequeño',
      base: 'Tamaño de texto normal',
      lg: 'Tamaño de texto grande',
      xl: 'Tamaño de texto muy grande'
    };

    if (state.textToSpeech) {
      speakText(textMap[nextScale], state.speechRate);
    }
  };

  const handleToggleCalmMode = () => {
    const nextCalm = !state.calmMode;
    setState((prev) => ({ ...prev, calmMode: nextCalm }));
    
    if (state.textToSpeech) {
      speakText(nextCalm ? 'Modo Calma activado. Colores suavizados y animaciones pausadas.' : 'Modo Calma desactivado.', state.speechRate);
    }
  };

  const handleToggleTextToSpeech = () => {
    const nextTTS = !state.textToSpeech;
    setState((prev) => ({ ...prev, textToSpeech: nextTTS }));
    if (nextTTS) {
      speakText('Texto a voz activado. Ahora el sistema leerá los botones y opciones al pasar el cursor o hacer clic.', state.speechRate, () => setTestSpeaking(true), () => setTestSpeaking(false));
    } else {
      stopSpeech();
      setTestSpeaking(false);
    }
  };

  const handleToggleDyslexiaFont = () => {
    const nextValue = !state.dyslexiaFont;
    setState((prev) => ({ ...prev, dyslexiaFont: nextValue }));
    if (state.textToSpeech) {
      speakText(nextValue ? 'Fuente para dislexia activada' : 'Fuente estándar activada', state.speechRate);
    }
  };

  const handleToggleReadingGuide = () => {
    const nextValue = !state.readingGuide;
    setState((prev) => ({ ...prev, readingGuide: nextValue }));
    if (state.textToSpeech) {
      speakText(nextValue ? 'Guía de lectura activada. Mueve el cursor o dedo para guiar tu vista.' : 'Guía de lectura desactivada', state.speechRate);
    }
  };

  const handleResetAll = () => {
    stopSpeech();
    setState({
      fontScale: 'base',
      calmMode: false,
      textToSpeech: false,
      speechRate: 0.9,
      dyslexiaFont: false,
      readingGuide: false,
      activeAnnouncement: null
    });
    setTestSpeaking(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#104C64] text-white shadow-md border-b-2 border-[#8CC63F]/40 transition-all">
      <div className="max-w-md mx-auto px-3 py-2 flex flex-wrap items-center justify-between gap-2">
        {/* Left Badge Label */}
        <div className="flex items-center gap-1.5 text-xs font-extrabold tracking-wide text-[#8CC63F]">
          <Eye className="w-4 h-4 shrink-0 text-[#8CC63F]" />
          <span className="uppercase text-[11px] tracking-wider">Accesibilidad</span>
        </div>

        {/* Essential 3 Accessibility Quick Buttons Required by Specification */}
        <div className="flex items-center gap-1.5" role="toolbar" aria-label="Ajustes de accesibilidad rápida">
          {/* 1. Botón (+A / -A) Font Scale */}
          <div className="flex items-center bg-[#0C3B4E] rounded-xl p-0.5 border border-white/20">
            <button
              onClick={() => handleToggleFontScale('down')}
              disabled={currentScaleIndex === 0}
              aria-label="Disminuir tamaño de texto"
              title="Disminuir tamaño de letra (-A)"
              className="px-2 py-1.5 text-xs font-bold hover:bg-white/10 disabled:opacity-30 rounded-lg transition-colors flex items-center gap-0.5"
            >
              <ZoomOut className="w-3.5 h-3.5" />
              <span>-A</span>
            </button>
            <span className="text-[10px] font-bold px-1 text-[#8CC63F] border-x border-white/10 uppercase">
              {state.fontScale}
            </span>
            <button
              onClick={() => handleToggleFontScale('up')}
              disabled={currentScaleIndex === fontScales.length - 1}
              aria-label="Aumentar tamaño de texto"
              title="Aumentar tamaño de letra (+A)"
              className="px-2 py-1.5 text-xs font-bold hover:bg-white/10 disabled:opacity-30 rounded-lg transition-colors flex items-center gap-0.5"
            >
              <span>+A</span>
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Botón "Modo Calma" Switch */}
          <button
            onClick={handleToggleCalmMode}
            aria-label={state.calmMode ? "Desactivar Modo Calma" : "Activar Modo Calma (colores suaves y sin animaciones)"}
            aria-pressed={state.calmMode}
            title="Modo Calma: Suaviza colores y elimina animaciones para evitar sobreestimulación"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
              state.calmMode
                ? 'bg-[#8CC63F] text-[#104C64] border-white shadow-inner font-extrabold'
                : 'bg-[#0C3B4E] text-white hover:bg-white/10 border-white/20'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${state.calmMode ? 'animate-pulse' : 'text-[#8CC63F]'}`} />
            <span className="hidden sm:inline">Modo</span> Calma
            {state.calmMode && <Check className="w-3 h-3 text-[#104C64]" />}
          </button>

          {/* 3. Botón "Texto a Voz" Switch */}
          <button
            onClick={handleToggleTextToSpeech}
            aria-label={state.textToSpeech ? "Desactivar lectura en voz alta" : "Activar Texto a Voz (leerá los enlaces al interactuar)"}
            aria-pressed={state.textToSpeech}
            title="Texto a Voz: Lee el contenido de los botones en español con window.speechSynthesis"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
              state.textToSpeech
                ? 'bg-[#E54B88] text-white border-white shadow-md animate-bounce-short font-extrabold'
                : 'bg-[#0C3B4E] text-white hover:bg-white/10 border-white/20'
            }`}
          >
            {state.textToSpeech ? (
              <Volume2 className="w-3.5 h-3.5 text-white" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-white/70" />
            )}
            <span className="hidden sm:inline">Voz</span>
            <span className="text-[10px]">{state.textToSpeech ? 'ON' : 'OFF'}</span>
          </button>

          {/* Dropdown toggle for extra neurodiversity controls */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label="Más opciones de accesibilidad cognitiva"
            title="Ver más herramientas de accesibilidad (dislexia, guía de lectura)"
            className="p-1.5 rounded-xl bg-[#0C3B4E] hover:bg-white/10 text-white border border-white/20 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4 text-[#8CC63F]" /> : <ChevronDown className="w-4 h-4 text-[#49A2D2]" />}
          </button>
        </div>
      </div>

      {/* Expanded Accessibility Menu */}
      {isExpanded && (
        <div className="bg-[#0A3344] border-t border-white/10 px-4 py-3 text-xs text-white max-w-md mx-auto animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {/* Fuente Dislexia */}
            <button
              onClick={handleToggleDyslexiaFont}
              aria-pressed={state.dyslexiaFont}
              className={`p-2 rounded-xl text-left font-semibold flex items-center gap-2 border transition-all ${
                state.dyslexiaFont
                  ? 'bg-[#49A2D2] text-[#104C64] border-white font-extrabold'
                  : 'bg-[#104C64] hover:bg-[#165a77] border-white/10'
              }`}
            >
              <Type className="w-4 h-4 shrink-0 text-[#8CC63F]" />
              <div className="flex flex-col">
                <span className="text-[11px]">Lectura Fácil</span>
                <span className="text-[9px] opacity-80">Tipografía clara</span>
              </div>
            </button>

            {/* Guía de Lectura */}
            <button
              onClick={handleToggleReadingGuide}
              aria-pressed={state.readingGuide}
              className={`p-2 rounded-xl text-left font-semibold flex items-center gap-2 border transition-all ${
                state.readingGuide
                  ? 'bg-[#F9A825] text-[#104C64] border-white font-extrabold'
                  : 'bg-[#104C64] hover:bg-[#165a77] border-white/10'
              }`}
            >
              <Sliders className="w-4 h-4 shrink-0 text-[#49A2D2]" />
              <div className="flex flex-col">
                <span className="text-[11px]">Guía de Lectura</span>
                <span className="text-[9px] opacity-80">Línea de enfoque</span>
              </div>
            </button>
          </div>

          {/* Audio Rate Control & Stop Button */}
          {state.textToSpeech && (
            <div className="bg-[#104C64] p-2.5 rounded-xl border border-white/15 mb-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#8CC63F] flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5" />
                  Velocidad de voz:
                </span>
                <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">
                  {state.speechRate === 0.7 ? 'Pausada (0.7x)' : state.speechRate === 0.9 ? 'Normal (0.9x)' : 'Rápida (1.1x)'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setState(p => ({ ...p, speechRate: 0.7 }))}
                  className={`flex-1 py-1 rounded-lg text-[10px] font-bold border ${state.speechRate === 0.7 ? 'bg-[#E54B88] text-white border-white' : 'bg-[#0C3B4E] border-white/20'}`}
                >
                  Despacio
                </button>
                <button
                  onClick={() => setState(p => ({ ...p, speechRate: 0.9 }))}
                  className={`flex-1 py-1 rounded-lg text-[10px] font-bold border ${state.speechRate === 0.9 ? 'bg-[#E54B88] text-white border-white' : 'bg-[#0C3B4E] border-white/20'}`}
                >
                  Normal
                </button>
                <button
                  onClick={() => stopSpeech()}
                  className="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600 text-white text-[10px] font-bold"
                  title="Detener voz"
                >
                  Pausar Audio
                </button>
              </div>
            </div>
          )}

          {/* Reset button */}
          <div className="flex items-center justify-between pt-1 border-t border-white/10">
            <span className="text-[10px] text-white/70">Ajustes visuales adaptados a TEA y TDAH</span>
            <button
              onClick={handleResetAll}
              className="flex items-center gap-1 text-[11px] text-[#F9A825] hover:underline font-bold"
            >
              <RotateCcw className="w-3 h-3" />
              Restablecer todo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
