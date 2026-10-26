import React, { useEffect, useState } from 'react';
import { Question, Language } from '../types/kbc';
import { UserCheck, Sparkles, Check, BrainCircuit, Loader2 } from 'lucide-react';

interface TarkGuruModalProps {
  question: Question;
  language: Language;
  onClose: () => void;
}

export const TarkGuruModal: React.FC<TarkGuruModalProps> = ({
  question,
  language,
  onClose,
}) => {
  const isHi = language === 'hi';
  const [advice, setAdvice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [source, setSource] = useState<string>('ai');

  useEffect(() => {
    let isMounted = true;

    async function fetchExpertAdvice() {
      setLoading(true);
      const qText = isHi ? question.question.hi : question.question.en;
      const opts = isHi ? question.options.hi : question.options.en;

      try {
        const res = await fetch('/api/tark-guru', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: qText,
            options: opts,
            language,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.advice) {
            setAdvice(data.advice);
            setSource(data.source || 'ai');
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Using embedded Tark Guru reasoning:', err);
      }

      // High-precision vetted fallback from question bank
      if (isMounted) {
        const clue = isHi ? question.tarkGuruClue.hi : question.tarkGuruClue.en;
        setAdvice(clue);
        setSource('vetted-reasoning');
        setLoading(false);
      }
    }

    fetchExpertAdvice();

    return () => {
      isMounted = false;
    };
  }, [question, language, isHi]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col gap-4">
        {/* Glow backdrop */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl" />

        {/* Header with Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 p-0.5 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
            <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-emerald-400" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-black text-emerald-300">
                {isHi ? 'तर्क गुरु (Ask the Expert)' : 'Tark Guru (Ask the Expert)'}
              </h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                AI Mentor
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {isHi
                ? 'नियम: तर्क गुरु कभी सीधा उत्तर नहीं बताते, केवल तार्किक मार्गदर्शन करते हैं।'
                : 'Rule: Tark Guru provides reasoning direction only, never the direct answer.'}
            </p>
          </div>
        </div>

        {/* Advice Content Box */}
        <div className="bg-slate-950/90 border border-emerald-500/25 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 min-h-[120px] justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-4 gap-2 text-emerald-400">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-xs text-slate-300">
                {isHi ? 'तर्क गुरु प्रश्न का विश्लेषण कर रहे हैं...' : 'Tark Guru is analyzing the logic...'}
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4" />
                <span>{isHi ? 'तार्किक दिशा निर्देश' : 'Reasoning Guidance'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{advice}"
              </p>
              <div className="text-[10px] text-emerald-400/60 text-right">
                {source === 'gemini-3.8-flash' ? 'Powered by Gemini Intelligence' : 'Netra TarkShastra Pipeline'}
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>{isHi ? 'समझ गया, उत्तर चुनता हूँ' : 'Understood, Back to Question'}</span>
        </button>
      </div>
    </div>
  );
};
