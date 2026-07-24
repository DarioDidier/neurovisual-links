/**
 * Utility for speech synthesis (Text-to-Speech) in Spanish
 * Optimized for cognitive accessibility and clean audio feedback.
 */

export function speakText(text: string, rate: number = 0.9, onStart?: () => void, onEnd?: () => void) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis API is not supported in this environment.');
    return;
  }

  // Stop any current speaking utterance
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES'; // Spanish speech
  utterance.rate = rate; // Gentle pace
  utterance.pitch = 1.0;

  // Try to find a Spanish voice if available
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find((v) => v.lang.startsWith('es'));
  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
