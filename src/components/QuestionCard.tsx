import React from 'react';
import { Question, Language, PrizeLevel } from '../types/kbc';
import { Volume2, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface QuestionCardProps {
  question: Question;
  prizeLevel: PrizeLevel;
  language: Language;
  selectedOptionIndex: number | null;
  lockedOptionIndex: number | null;
  revealedResult: boolean;
  eliminatedOptionIndices: number[];
  speakingOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  onReplayAudio?: () => void;
  isReadingQuestion?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  prizeLevel,
  language,
  selectedOptionIndex,
  lockedOptionIndex,
  revealedResult,
  eliminatedOptionIndices,
  speakingOptionIndex,
  onSelectOption,
  onReplayAudio,
  isReadingQuestion,
}) => {
  const isHi = language === 'hi';
  const qText = isHi ? question.question.hi : question.question.en;
  const options = isHi ? question.options.hi : question.options.en;
  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleOptionClick = (idx: number) => {
    if (lockedOptionIndex !== null) return;
    if (eliminatedOptionIndices.includes(idx)) return;
    soundEffects.playSelect();
    onSelectOption(idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
      {/* Top Banner: Level, Category, Prize Amount */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-amber-400">
            {isHi ? `प्रश्न ${prizeLevel.level} / 17` : `Question ${prizeLevel.level} of 17`}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-200/80 font-medium truncate max-w-[160px] sm:max-w-none">
            {question.category} ({question.family})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {prizeLevel.isMilestone && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider">
              {isHi ? 'पड़ाव' : 'Padav'}
            </span>
          )}
          <span className="font-black text-amber-300 text-sm sm:text-base tabular-nums">
            {isHi ? prizeLevel.displayAmountHi : prizeLevel.displayAmount}
          </span>
        </div>
      </div>

      {/* Hexagonal Stylized Question Box */}
      <div className="relative group">
        {/* Glow backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-yellow-500/30 to-amber-600/20 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />

        <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-400/50 rounded-2xl p-5 sm:p-7 shadow-2xl flex flex-col items-center justify-center min-h-[130px] sm:min-h-[160px] text-center">
          {/* Top Center Badge */}
          <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-slate-950 border border-amber-400/60 shadow-md">
            <span className="text-[10px] font-black text-amber-300 tracking-widest uppercase">
              {isHi ? 'तर्कशास्त्र प्रश्न' : 'TARKSHASTRA QUESTION'}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-100 leading-relaxed max-w-3xl">
            {qText}
          </h2>

          {/* Bottom audio trigger */}
          {onReplayAudio && (
            <button
              onClick={onReplayAudio}
              className={`mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                isReadingQuestion
                  ? 'bg-amber-500/30 text-amber-200 border border-amber-400 animate-pulse'
                  : 'bg-slate-800/80 text-amber-300/80 hover:text-amber-200 border border-amber-500/20 hover:border-amber-400/40'
              }`}
              title="Replay Audio Narration"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isReadingQuestion ? (isHi ? 'वाचन जारी है...' : 'Narrating...') : (isHi ? 'पुनः सुनें' : 'Listen')}</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Options Grid (2x2 on tablet/desktop, 1x4 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
        {options.map((optText, idx) => {
          const isEliminated = eliminatedOptionIndices.includes(idx);
          const isSelected = selectedOptionIndex === idx;
          const isLocked = lockedOptionIndex === idx;
          const isSpeaking = speakingOptionIndex === idx;
          const isCorrect = idx === question.correctIndex;

          let btnClass = 'bg-slate-950/80 border-amber-500/30 text-slate-200 hover:border-amber-300 hover:bg-slate-900';
          let letterBadgeClass = 'bg-slate-900 border-amber-500/40 text-amber-300';

          if (isEliminated) {
            btnClass = 'opacity-20 bg-slate-950 border-slate-800 text-slate-600 line-through cursor-not-allowed';
            letterBadgeClass = 'bg-slate-950 border-slate-800 text-slate-700';
          } else if (revealedResult) {
            if (isCorrect) {
              btnClass = 'bg-emerald-950/90 border-emerald-400 text-emerald-100 shadow-lg shadow-emerald-500/30 scale-[1.01]';
              letterBadgeClass = 'bg-emerald-600 border-emerald-300 text-white font-extrabold';
            } else if (isLocked && !isCorrect) {
              btnClass = 'bg-red-950/90 border-red-500 text-red-100 shadow-lg shadow-red-500/30';
              letterBadgeClass = 'bg-red-600 border-red-300 text-white font-extrabold';
            }
          } else if (isLocked) {
            btnClass = 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 border-amber-200 text-slate-950 font-bold shadow-xl shadow-amber-500/40 animate-pulse';
            letterBadgeClass = 'bg-slate-950 border-amber-300 text-amber-300 font-extrabold';
          } else if (isSelected) {
            btnClass = 'bg-amber-950/70 border-amber-400 text-amber-200 shadow-md shadow-amber-500/20';
            letterBadgeClass = 'bg-amber-500 border-amber-300 text-slate-950 font-bold';
          } else if (isSpeaking) {
            btnClass = 'bg-slate-900 border-amber-400/80 text-amber-100 ring-2 ring-amber-400/40';
            letterBadgeClass = 'bg-amber-600 border-amber-300 text-white';
          }

          return (
            <button
              key={idx}
              disabled={isEliminated || lockedOptionIndex !== null}
              onClick={() => handleOptionClick(idx)}
              className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left ${btnClass}`}
            >
              {/* Option Letter Diamond Badge */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm border shrink-0 transition-colors ${letterBadgeClass}`}
              >
                {optionLabels[idx]}
              </div>

              {/* Option Text */}
              <span className="flex-1 font-semibold text-sm sm:text-base leading-snug">
                {optText}
              </span>

              {/* Status Icons */}
              {revealedResult && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 animate-bounce" />
              )}
              {revealedResult && isLocked && !isCorrect && (
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
