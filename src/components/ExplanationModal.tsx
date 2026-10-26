import React, { useEffect, useState } from 'react';
import { Question, Language, PrizeLevel } from '../types/kbc';
import { CheckCircle2, XCircle, Award, ArrowRight, BookOpen, Clock } from 'lucide-react';

interface ExplanationModalProps {
  question: Question;
  prizeLevel: PrizeLevel;
  isCorrect: boolean;
  language: Language;
  onNextQuestion: () => void;
  autoAdvanceEnabled: boolean;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  question,
  prizeLevel,
  isCorrect,
  language,
  onNextQuestion,
  autoAdvanceEnabled,
}) => {
  const isHi = language === 'hi';
  const explanationText = isHi ? question.explanation.hi : question.explanation.en;
  const correctOptionText = isHi
    ? question.options.hi[question.correctIndex]
    : question.options.en[question.correctIndex];
  const correctOptionLabel = ['A', 'B', 'C', 'D'][question.correctIndex];

  // Auto-advance countdown (4 seconds)
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!autoAdvanceEnabled || isPaused || !isCorrect) return;

    if (secondsLeft <= 0) {
      onNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, isPaused, autoAdvanceEnabled, isCorrect, onNextQuestion]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col gap-5">
        {/* Top glow decoration */}
        <div
          className={`absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 rounded-full blur-3xl opacity-30 ${
            isCorrect ? 'bg-emerald-500' : 'bg-red-500'
          }`}
        />

        {/* Result Header */}
        <div className="flex items-center gap-3 relative z-10">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${
              isCorrect
                ? 'bg-emerald-950/80 border-emerald-400 text-emerald-400'
                : 'bg-red-950/80 border-red-500 text-red-400'
            }`}
          >
            {isCorrect ? <CheckCircle2 className="w-7 h-7" /> : <XCircle className="w-7 h-7" />}
          </div>

          <div>
            <h3
              className={`text-xl sm:text-2xl font-black tracking-tight ${
                isCorrect ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {isCorrect
                ? isHi ? 'अद्भुत! सही जवाब!' : 'Superb! Correct Answer!'
                : isHi ? 'अफ़सोस! गलत जवाब!' : 'Incorrect Answer!'}
            </h3>
            <p className="text-xs text-slate-300">
              {isCorrect
                ? isHi
                  ? `आपने जीते: ${prizeLevel.displayAmountHi}`
                  : `You earned: ${prizeLevel.displayAmount}`
                : isHi
                  ? 'यह उत्तर सही नहीं था।'
                  : 'That was not the right answer.'}
            </p>
          </div>
        </div>

        {/* Milestone Callout */}
        {isCorrect && prizeLevel.isMilestone && (
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-950/80 via-yellow-900/60 to-amber-950/80 border border-amber-400/50 text-amber-200 text-xs sm:text-sm">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="font-semibold">
              {isHi
                ? `बधाई! आपने ${prizeLevel.displayAmountHi} का ऐतिहासिक पड़ाव पार कर लिया है!`
                : `Congratulations! You have secured the ${prizeLevel.displayAmount} milestone!`}
            </span>
          </div>
        )}

        {/* Correct Option Pill */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
            {correctOptionLabel}
          </div>
          <div className="text-xs sm:text-sm">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wide">
              {isHi ? 'सही उत्तर' : 'Correct Choice'}:
            </span>
            <span className="font-bold text-slate-100">{correctOptionText}</span>
          </div>
        </div>

        {/* Detailed Step-by-Step Explanation Box */}
        <div className="bg-slate-950/90 border border-amber-500/20 rounded-2xl p-4 sm:p-5 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{isHi ? 'तर्क एवं विस्तृत व्याख्या' : 'Logical Explanation & Step-by-Step Proof'}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {explanationText}
          </p>
        </div>

        {/* Bottom Actions & Auto Advance indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {isCorrect && autoAdvanceEnabled ? (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>
                {isHi
                  ? `अगला प्रश्न ${secondsLeft}s में...`
                  : `Next question in ${secondsLeft}s...`}
              </span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="underline hover:text-amber-300 text-[11px] ml-1"
              >
                {isPaused ? (isHi ? 'जारी रखें' : 'Resume') : (isHi ? 'रोकें' : 'Pause')}
              </button>
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={onNextQuestion}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{isCorrect ? (isHi ? 'अगला प्रश्न' : 'Continue Next Question') : (isHi ? 'परिणाम देखें' : 'View Game Results')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
