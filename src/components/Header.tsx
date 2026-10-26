import React from 'react';
import { Volume2, VolumeX, Mic, MicOff, History, Info, Battery, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Language, NetraBatteryState } from '../types/kbc';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  ttsEnabled: boolean;
  onToggleTTS: () => void;
  onOpenHistory: () => void;
  onOpenAbout: () => void;
  batteryState: NetraBatteryState;
  inGame: boolean;
  onQuitGame?: () => void;
  scoreWon: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  soundEnabled,
  onToggleSound,
  ttsEnabled,
  onToggleTTS,
  onOpenHistory,
  onOpenAbout,
  batteryState,
  inGame,
  onQuitGame,
  scoreWon,
}) => {
  const isHi = language === 'hi';

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Normal':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30';
      case 'Saver':
        return 'text-amber-400 bg-amber-950/60 border-amber-500/30';
      case 'Critical':
        return 'text-orange-400 bg-orange-950/60 border-orange-500/30';
      case 'Survival':
        return 'text-red-400 bg-red-950/60 border-red-500/30';
      default:
        return 'text-sky-400 bg-sky-950/60 border-sky-500/30';
    }
  };

  return (
    <header className="w-full bg-slate-900/95 border-b border-amber-500/30 px-3 py-2.5 sm:px-6 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-amber-400/40">
              <span className="font-extrabold text-amber-300 text-xs sm:text-sm tracking-wider">नेत्र</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bold text-sm sm:text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
                Netra KBC
              </h1>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                तर्कशास्त्र
              </span>
            </div>
            <p className="text-[10px] text-amber-200/70 hidden sm:block">
              "सोचो, समझो, जीतो" • Deepak Kushwaha
            </p>
          </div>
        </div>

        {/* Center: Live Prize / Milestone info if in game */}
        {inGame && (
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30">
            <span className="text-xs text-amber-300/80">{isHi ? 'वर्तमान जीत:' : 'Current Won:'}</span>
            <span className="font-bold text-amber-300 tabular-nums text-sm">
              ₹{scoreWon.toLocaleString('en-IN')}
            </span>
          </div>
        )}

        {/* Right Controls Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Netra Battery Sentinel Status Badge */}
          <div
            title={`Netra Battery Sentinel: ${batteryState.level}% • Tier: ${batteryState.tier} • ${batteryState.temperatureCelsius}°C`}
            className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-medium ${getTierColor(batteryState.tier)}`}
          >
            {batteryState.charging ? (
              <Zap className="w-3 h-3 text-amber-400 animate-pulse" />
            ) : (
              <Battery className="w-3 h-3" />
            )}
            <span className="tabular-nums">{batteryState.level}%</span>
            <span className="text-[9px] opacity-75">({batteryState.tier})</span>
          </div>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wider transition-colors"
            title="Switch Language (हिन्दी / English)"
          >
            {language === 'hi' ? 'EN' : 'हिन्दी'}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-1.5 rounded-lg border text-xs transition-colors ${
              soundEnabled
                ? 'bg-slate-800 text-amber-400 border-amber-500/30 hover:bg-slate-700'
                : 'bg-slate-900 text-slate-500 border-slate-700'
            }`}
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* TTS Toggle */}
          <button
            onClick={onToggleTTS}
            className={`p-1.5 rounded-lg border text-xs transition-colors ${
              ttsEnabled
                ? 'bg-slate-800 text-amber-400 border-amber-500/30 hover:bg-slate-700'
                : 'bg-slate-900 text-slate-500 border-slate-700'
            }`}
            title={ttsEnabled ? 'Narration Active (TTS)' : 'Narration Muted'}
            aria-label="TTS Toggle"
          >
            {ttsEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          {/* History */}
          <button
            onClick={onOpenHistory}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs transition-colors"
            title="Progress & History"
            aria-label="Progress & History"
          >
            <History className="w-4 h-4" />
          </button>

          {/* About / Info */}
          <button
            onClick={onOpenAbout}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs transition-colors"
            title="About Netra KBC (v1.1.38)"
            aria-label="About KBC"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Quit button during active game */}
          {inGame && onQuitGame && (
            <button
              onClick={onQuitGame}
              className="px-2.5 py-1 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-600/40 text-xs font-semibold transition-colors"
              title={isHi ? 'खेल छोड़ें' : 'Quit Game'}
            >
              {isHi ? 'छोड़ें' : 'Quit'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
