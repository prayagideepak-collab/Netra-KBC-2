import React from 'react';
import { GameMode, Language, NetraBatteryState } from '../types/kbc';
import { Brain, GraduationCap, Laptop, Play, Award, Zap, ShieldCheck, Flame, ToggleLeft, ToggleRight } from 'lucide-react';

interface TitleScreenProps {
  language: Language;
  selectedMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  onStartGame: () => void;
  batteryState: NetraBatteryState;
  simplifiedLifelines: boolean;
  onToggleSimplifiedLifelines: () => void;
  stats: {
    totalGames: number;
    highestScore: number;
    totalQuestionsAnswered: number;
    jackpotWins: number;
  };
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  language,
  selectedMode,
  onSelectMode,
  onStartGame,
  batteryState,
  simplifiedLifelines,
  onToggleSimplifiedLifelines,
  stats,
}) => {
  const isHi = language === 'hi';

  const modes: Array<{
    id: GameMode;
    titleHi: string;
    titleEn: string;
    descHi: string;
    descEn: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      id: 'adult',
      titleHi: 'तर्कशास्त्र (Adult Mode)',
      titleEn: 'TarkShastra (Adult Mode)',
      descHi: '15 तर्क परिवार, सामान्य ज्ञान, पहेलियां और विश्लेषणात्मक चिंतन।',
      descEn: '15 reasoning families, logical deduction, GK, and critical thinking.',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'junior',
      titleHi: 'जूनियर मोड (NCERT School)',
      titleEn: 'Junior Mode (NCERT School)',
      descHi: 'विद्यालयी छात्रों हेतु कक्षावार NCERT विज्ञान, गणित, पर्यावरण एवं सामान्य ज्ञान।',
      descEn: 'NCERT-aligned science, mathematics, geography, and conceptual reasoning.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'it',
      titleHi: 'IT Professional (Tech Logic)',
      titleEn: 'IT Professional (Tech Logic)',
      descHi: 'कम्प्यूटर साइंस, एल्गोरिद्म, डेटाबेस, नेटवर्किंग और सॉफ्टवेयर लॉजिक।',
      descEn: 'Algorithms, data structures, system design, networking, and security logic.',
      icon: <Laptop className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto">
      {/* Studio Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Emblem */}
      <div className="flex flex-col items-center text-center gap-3 relative z-10">
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border-2 border-amber-400/60">
              <span className="font-black text-amber-300 text-2xl sm:text-3xl tracking-widest">नेत्र</span>
              <span className="text-[10px] uppercase font-bold text-amber-200/80 tracking-widest -mt-1">KBC</span>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md whitespace-nowrap">
            तर्कशास्त्र
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Netra KBC
          </h1>
          <p className="text-base sm:text-xl font-bold text-amber-300/90 mt-1">
            "सोचो, समझो, जीतो" • Socho, Samjho, Jeeto
          </p>
          <p className="text-xs text-slate-400 mt-1">
            By Deepak Kushwaha • Prayagi Store and Services, Prayagraj
          </p>
        </div>
      </div>

      {/* Netra Eco Battery Sentinel Pre-check */}
      <div className="mt-5 w-full max-w-lg bg-slate-900/80 border border-amber-500/30 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-300">
            {isHi ? 'नेत्र बैटरी सेंटिनल स्थिति:' : 'Netra Battery Sentinel:'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-emerald-300 tabular-nums">
            {batteryState.level}% {batteryState.charging ? '⚡' : ''} ({batteryState.tier})
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 tabular-nums">{batteryState.temperatureCelsius}°C</span>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="mt-6 w-full max-w-2xl flex flex-col gap-3">
        <label className="text-xs font-bold uppercase tracking-wider text-amber-400 text-center">
          {isHi ? 'प्रश्नावली मोड चुनें (Select Player Mode)' : 'Select Quiz Mode'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {modes.map((m) => {
            const isSelected = selectedMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelectMode(m.id)}
                className={`relative flex flex-col items-center p-4 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.03]'
                    : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 text-white bg-gradient-to-tr ${m.color} shadow-md`}
                >
                  {m.icon}
                </div>
                <h3 className={`font-bold text-sm ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                  {isHi ? m.titleHi : m.titleEn}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {isHi ? m.descHi : m.descEn}
                </p>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lifeline Mode Switcher (Section 3 Owner Directive) */}
      <div className="mt-5 flex items-center justify-center gap-3 text-xs bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl">
        <span className="text-slate-300">
          {isHi ? 'लाइफलाइन व्यवस्था:' : 'Lifelines Configuration:'}
        </span>
        <button
          onClick={onToggleSimplifiedLifelines}
          className="flex items-center gap-1.5 font-semibold text-amber-300 hover:text-amber-200"
        >
          {simplifiedLifelines ? (
            <ToggleRight className="w-5 h-5 text-amber-400" />
          ) : (
            <ToggleLeft className="w-5 h-5 text-slate-500" />
          )}
          <span>
            {simplifiedLifelines
              ? isHi ? 'सरलीकृत (केवल 50-50 और फ्लिप)' : 'Simplified (50-50 & Flip only)'
              : isHi ? 'पारंपरिक (सभी 5 लाइफलाइन)' : 'Full (All 5 Lifelines)'}
          </span>
        </button>
      </div>

      {/* Primary Play Button */}
      <div className="mt-7 w-full max-w-sm">
        <button
          onClick={onStartGame}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-lg tracking-wider shadow-2xl shadow-amber-500/40 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-amber-300"
        >
          <Play className="w-6 h-6 fill-slate-950" />
          <span>{isHi ? 'खेल शुरू करें (17 प्रश्न)' : 'PLAY NOW (17 Questions)'}</span>
        </button>
      </div>

      {/* Stats summary bar */}
      {stats.totalGames > 0 && (
        <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
          <div>
            {isHi ? 'कुल खेल:' : 'Total Games:'}{' '}
            <span className="font-bold text-amber-400 tabular-nums">{stats.totalGames}</span>
          </div>
          <div>•</div>
          <div>
            {isHi ? 'सर्वोत्तम स्कोर:' : 'Highest Score:'}{' '}
            <span className="font-bold text-emerald-400 tabular-nums">
              ₹{stats.highestScore.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      )}

      {/* Free & Safe Play Disclaimers */}
      <div className="mt-6 text-center text-[11px] text-amber-200/50 max-w-md">
        {isHi
          ? 'नेत्र ईको परिवार • पूर्णतः निःशुल्क ज्ञानवर्धक खेल • कोई वास्तविक नकद लेन-देन नहीं • कोई लॉगिन आवश्यक नहीं'
          : 'Netra Eco Family • 100% Free Educational Quiz • Strictly Points Only • No Login Required'}
      </div>
    </div>
  );
};
