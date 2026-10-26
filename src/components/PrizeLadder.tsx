import React from 'react';
import { PRIZE_LADDER, getGuaranteedAmount } from '../data/prizeLadder';
import { Language } from '../types/kbc';
import { Award, CheckCircle, Shield } from 'lucide-react';

interface PrizeLadderProps {
  currentLevel: number; // 1 to 17
  language: Language;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const PrizeLadder: React.FC<PrizeLadderProps> = ({
  currentLevel,
  language,
  isOpenMobile,
  onCloseMobile,
}) => {
  const isHi = language === 'hi';
  const guaranteed = getGuaranteedAmount(currentLevel - 1);

  // Reversed to show level 17 at top and level 1 at bottom
  const reversedLadder = [...PRIZE_LADDER].reverse();

  const content = (
    <div className="flex flex-col h-full bg-slate-900/90 border border-amber-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-500/20">
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-xs uppercase tracking-wider text-amber-300">
            {isHi ? 'धनराशि पड़ाव' : 'Prize Ladder'}
          </span>
        </div>
        {guaranteed > 0 && (
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
            <Shield className="w-3 h-3" />
            <span>₹{guaranteed.toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>

      {/* Ladder Steps */}
      <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {reversedLadder.map((step) => {
          const isActive = step.level === currentLevel;
          const isCleared = step.level < currentLevel;
          const isPadav = step.isMilestone;

          let bgClass = 'bg-slate-950/40 text-slate-400 border-transparent';

          if (isActive) {
            bgClass = 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-bold border-amber-300 shadow-md shadow-amber-500/30 scale-[1.02]';
          } else if (isCleared) {
            bgClass = 'bg-emerald-950/40 text-emerald-400 border-emerald-700/30 font-medium';
          } else if (isPadav) {
            bgClass = 'bg-amber-950/30 text-amber-300/90 border-amber-500/30 font-semibold';
          }

          return (
            <div
              key={step.level}
              className={`flex items-center justify-between px-2.5 py-1 rounded-lg text-xs border transition-all duration-200 ${bgClass}`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-5 text-right font-mono text-[11px] ${isActive ? 'text-slate-950' : 'text-slate-500'}`}>
                  {step.level}
                </span>
                {isPadav && (
                  <span
                    className={`text-[9px] px-1 rounded font-bold uppercase tracking-tight ${
                      isActive
                        ? 'bg-slate-950 text-amber-300'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {isHi ? 'पड़ाव' : 'Padav'}
                  </span>
                )}
                {isCleared && <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />}
              </div>

              <span className={`tabular-nums tracking-wide ${isActive ? 'text-slate-950' : ''}`}>
                {isHi ? step.displayAmountHi : step.displayAmount}
              </span>
            </div>
          );
        })}
      </div>

      <div className="pt-2 mt-2 border-t border-amber-500/20 text-center">
        <p className="text-[10px] text-amber-200/50">
          {isHi ? 'अंक केवल ज्ञानवर्धन हेतु • कोई वास्तविक नकद नहीं' : 'Points for knowledge only • Free play'}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:block w-64 shrink-0">{content}</div>

      {/* Mobile Drawer view */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-72 max-w-[85vw] h-full p-4 relative">
            <button
              onClick={onCloseMobile}
              className="absolute top-6 right-6 z-10 text-xs px-2 py-1 rounded bg-slate-800 text-amber-300 border border-amber-500/30"
            >
              ✕ {isHi ? 'बंद करें' : 'Close'}
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
};
