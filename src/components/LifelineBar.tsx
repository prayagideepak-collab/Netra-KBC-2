import React from 'react';
import { LifelineStatus, LifelineType, Language } from '../types/kbc';
import { Sparkles, HelpCircle, UserCheck, RefreshCw, Zap } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface LifelineBarProps {
  lifelines: Record<LifelineType, LifelineStatus>;
  onUseLifeline: (type: LifelineType) => void;
  language: Language;
  disabled: boolean;
  simplifiedMode?: boolean;
}

export const LifelineBar: React.FC<LifelineBarProps> = ({
  lifelines,
  onUseLifeline,
  language,
  disabled,
  simplifiedMode = false,
}) => {
  const isHi = language === 'hi';

  const lifelineConfig: Array<{
    type: LifelineType;
    labelEn: string;
    labelHi: string;
    icon: React.ReactNode;
    color: string;
    simplifiedOnly?: boolean;
  }> = [
    {
      type: 'fiftyFifty',
      labelEn: '50 : 50',
      labelHi: '50 : 50',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      type: 'hint',
      labelEn: 'Hint',
      labelHi: 'संकेत',
      icon: <HelpCircle className="w-4 h-4" />,
      color: 'from-blue-500 to-indigo-600',
      simplifiedOnly: false,
    },
    {
      type: 'tarkGuru',
      labelEn: 'Tark Guru',
      labelHi: 'तर्क गुरु',
      icon: <UserCheck className="w-4 h-4" />,
      color: 'from-emerald-500 to-teal-600',
      simplifiedOnly: false,
    },
    {
      type: 'flip',
      labelEn: 'Flip Q',
      labelHi: 'प्रश्न बदलें',
      icon: <RefreshCw className="w-4 h-4" />,
      color: 'from-purple-500 to-violet-600',
    },
    {
      type: 'powerPaplu',
      labelEn: 'Power Paplu',
      labelHi: 'पावर पपलू',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-rose-500 to-pink-600',
      simplifiedOnly: false,
    },
  ];

  // In simplified mode (Section 3 owner test), only 50-50 and Flip remain
  const visibleLifelines = simplifiedMode
    ? lifelineConfig.filter((item) => item.type === 'fiftyFifty' || item.type === 'flip')
    : lifelineConfig;

  const handleClick = (type: LifelineType) => {
    if (disabled || lifelines[type].used) return;
    soundEffects.playWhoosh();
    onUseLifeline(type);
  };

  return (
    <div className="w-full flex items-center justify-center gap-2 sm:gap-3 flex-wrap py-2">
      {visibleLifelines.map((item) => {
        const status = lifelines[item.type];
        const isUsed = status.used;

        return (
          <button
            key={item.type}
            disabled={disabled || isUsed}
            onClick={() => handleClick(item.type)}
            className={`group relative flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs sm:text-sm border transition-all duration-300 shadow-md ${
              isUsed
                ? 'opacity-30 bg-slate-900 border-slate-800 text-slate-500 line-through cursor-not-allowed grayscale'
                : disabled
                ? 'opacity-60 bg-slate-900 border-amber-500/20 text-amber-200/60 cursor-not-allowed'
                : `bg-slate-950/80 hover:bg-slate-900 border-amber-400/40 text-amber-300 hover:border-amber-300 hover:shadow-amber-500/20 hover:scale-105 active:scale-95`
            }`}
          >
            {/* Glowing Accent dot */}
            {!isUsed && !disabled && (
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} shadow-sm animate-pulse`} />
            )}

            <span className={`${isUsed ? 'text-slate-600' : 'text-amber-400'}`}>{item.icon}</span>

            <span className="tracking-wide">{isHi ? item.labelHi : item.labelEn}</span>

            {isUsed && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-[9px] w-4 h-4 flex items-center justify-center font-bold">
                ✕
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
