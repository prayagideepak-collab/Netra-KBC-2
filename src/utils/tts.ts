import { Language } from '../types/kbc';

class TTSEngine {
  private synth: SpeechSynthesis | null = null;
  public enabled: boolean = true;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return this.synth !== null;
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  /**
   * Reads question first.
   * As soon as question has been read, triggers onQuestionFinished() to start timer immediately!
   * Then optionally continues reading options A, B, C, D.
   */
  public readQuestionAndOptions({
    questionText,
    options,
    language,
    onQuestionFinished,
    onOptionSpeaking,
    onAllFinished,
  }: {
    questionText: string;
    options: [string, string, string, string];
    language: Language;
    onQuestionFinished?: () => void;
    onOptionSpeaking?: (index: number) => void;
    onAllFinished?: () => void;
  }) {
    if (!this.enabled || !this.synth) {
      if (onQuestionFinished) onQuestionFinished();
      if (onAllFinished) onAllFinished();
      return;
    }

    this.stop();

    const voices = this.synth.getVoices();
    const langCode = language === 'hi' ? 'hi-IN' : 'en-IN';
    const preferredVoice = voices.find((v) => v.lang.startsWith(language === 'hi' ? 'hi' : 'en'));

    // 1. Question Utterance
    const qUtterance = new SpeechSynthesisUtterance(questionText);
    qUtterance.lang = langCode;
    qUtterance.rate = 1.0;
    qUtterance.pitch = 1.0;
    if (preferredVoice) qUtterance.voice = preferredVoice;

    qUtterance.onend = () => {
      // Per Section 2: "A timer starts right after the question has been read, even while the options are still being read."
      if (onQuestionFinished) onQuestionFinished();

      // Read Options sequentially
      const optionLabels = language === 'hi' ? ['विकल्प ए', 'विकल्प बी', 'विकल्प सी', 'विकल्प डी'] : ['Option A', 'Option B', 'Option C', 'Option D'];

      let currentIndex = 0;
      const speakNextOption = () => {
        if (!this.synth || !this.enabled || currentIndex >= 4) {
          if (onAllFinished) onAllFinished();
          return;
        }

        const optUtterance = new SpeechSynthesisUtterance(`${optionLabels[currentIndex]}: ${options[currentIndex]}`);
        optUtterance.lang = langCode;
        optUtterance.rate = 1.05;
        if (preferredVoice) optUtterance.voice = preferredVoice;

        if (onOptionSpeaking) onOptionSpeaking(currentIndex);

        optUtterance.onend = () => {
          currentIndex++;
          speakNextOption();
        };

        optUtterance.onerror = () => {
          currentIndex++;
          speakNextOption();
        };

        this.currentUtterance = optUtterance;
        this.synth.speak(optUtterance);
      };

      speakNextOption();
    };

    qUtterance.onerror = () => {
      if (onQuestionFinished) onQuestionFinished();
      if (onAllFinished) onAllFinished();
    };

    this.currentUtterance = qUtterance;
    this.synth.speak(qUtterance);
  }
}

export const ttsService = new TTSEngine();
