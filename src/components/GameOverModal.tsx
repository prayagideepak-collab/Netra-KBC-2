import React from 'react';
import { GameMode, Language } from '../types/kbc';
import { Trophy, Award, RotateCcw, History, CheckCircle, AlertCircle } from 'lucide-react';

interface GameOverModalProps {
  outcome: 'won' | 'wrong' | 'timeout' | 'quit';
  finalAmountWon: number;
  highestLevelReached: number;
  questionsAnswered: number;
  mode: GameMode;
  language: Language;
  onPlayAgain: () => void;
  onOpenHistory: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  outcome,
  finalAmountWon,
  highestLevelReached,
  questionsAnswered,
  mode,
  language,
  onPlayAgain,
  onOpenHistory,
}) => {
  const isHi = language === 'hi';
  const isJackpot = outcome === 'won';

  const getTitle = () => {
    if (isJackpot) {
      return isHi ? 'अद्भुत! ₹7 करोड़ महाधनादेश विजेता!' : 'Jackpot Winner! ₹7 Crore Champion!';
    }
    if (outcome === 'quit') {
      return isHi ? 'शानदार खेल! आपने खेल छोड़ा।' : 'Well Played! You Decided to Quit.';
    }
    if (outcome === 'timeout') {
      return isHi ? 'समय समाप्त! खेल पूर्ण हुआ।' : 'Time Over! Game Concluded.';
    }
    return isHi ? 'अफ़सोस! खेल समाप्त हुआ।' : 'Game Over! Well Tried.';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-5">
        {/* Glow backdrop */}
        <div
          className={`absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 rounded-full blur-3xl opacity-40 ${
            isJackpot ? 'bg-amber-400' : 'bg-slate-700'
          }`}
        />

        {/* Icon Emblem */}
        <div className="relative">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-2xl ${
              isJackpot
                ? 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 border-amber-200 text-slate-950 animate-bounce'
                : 'bg-slate-950 border-amber-500/40 text-amber-400'
            }`}
          >
            {isJackpot ? <Trophy className="w-10 h-10 fill-slate-950" /> : <Award className="w-10 h-10" />}
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            {getTitle()}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {isHi ? 'नेत्र केबीसी (तर्कशास्त्र) द्वारा प्रदत्त' : 'Netra KBC TarkShastra'}
          </p>
        </div>

        {/* Big Won Amount Badge */}
        <div className="w-full bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
            {isHi ? 'अंतिम अर्जित धनराशि (अंक)' : 'Final Earned Score (Points)'}
          </span>
          <span className="text-3xl sm:text-4xl font-black text-amber-300 tabular-nums mt-1">
            ₹{finalAmountWon.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-slate-400 mt-1">
            {isHi ? 'ज्ञान एवं तर्क क्षमता का प्रतीक' : 'Tribute to your deductive logic & knowledge'}
          </span>
        </div>

        {/* Mini stats grid */}
        <div className="grid grid-cols-2 gap-3 w-full text-xs">
          <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
            <span className="text-slate-400 block">{isHi ? 'सही उत्तर:' : 'Correct Answers:'}</span>
            <span className="font-bold text-emerald-400 text-base">{questionsAnswered} / 17</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
            <span className="text-slate-400 block">{isHi ? 'अधिकतम पड़ाव:' : 'Highest Level:'}</span>
            <span className="font-bold text-amber-400 text-base">Level {highestLevelReached}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
          <button
            onClick={onPlayAgain}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isHi ? 'पुनः खेलें' : 'Play Again'}</span>
          </button>

          <button
            onClick={onOpenHistory}
            className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold text-sm transition-all"
          >
            <History className="w-4 h-4" />
            <span>{isHi ? 'इतिहास' : 'History'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
