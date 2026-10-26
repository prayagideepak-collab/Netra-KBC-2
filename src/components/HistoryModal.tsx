import React, { useState } from 'react';
import { GameHistoryItem, Language } from '../types/kbc';
import { getGameHistory, getPlayerStats, getUsedQuestionIds, resetUsedQuestionRegistry } from '../utils/storage';
import { History, X, Trophy, RefreshCw, CheckCircle2, Award } from 'lucide-react';

interface HistoryModalProps {
  language: Language;
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  language,
  onClose,
}) => {
  const isHi = language === 'hi';
  const [history, setHistory] = useState<GameHistoryItem[]>(getGameHistory());
  const [usedCount, setUsedCount] = useState<number>(getUsedQuestionIds().length);
  const stats = getPlayerStats();

  const handleResetRegistry = () => {
    resetUsedQuestionRegistry();
    setUsedCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2.5">
            <History className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-black text-amber-300">
              {isHi ? 'प्रगति एवं खेल इतिहास' : 'Progress & Game History'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {isHi ? 'कुल खेल' : 'Total Games'}
            </span>
            <span className="text-lg font-black text-slate-100 tabular-nums">
              {stats.totalGames}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {isHi ? 'सर्वोच्च स्कोर' : 'High Score'}
            </span>
            <span className="text-lg font-black text-amber-400 tabular-nums">
              ₹{stats.highestScore.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {isHi ? 'कुल प्रश्न' : 'Questions'}
            </span>
            <span className="text-lg font-black text-emerald-400 tabular-nums">
              {stats.totalQuestionsAnswered}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {isHi ? 'जैकपॉट विजय' : 'Jackpots'}
            </span>
            <span className="text-lg font-black text-yellow-300 tabular-nums">
              {stats.jackpotWins}
            </span>
          </div>
        </div>

        {/* Used-Question Registry Info */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 mb-3 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-300 font-medium">
              {isHi ? 'देखे गए प्रश्न (रजिस्ट्री):' : 'Seen Questions (Local Registry):'}
            </span>
            <span className="ml-2 font-bold text-amber-400 tabular-nums">
              {usedCount} {isHi ? 'प्रश्न' : 'questions'}
            </span>
            <p className="text-[10px] text-slate-500">
              {isHi ? 'यह सुनिश्चित करता है कि दोहराव न हो।' : 'Prevents same question from repeating.'}
            </p>
          </div>
          {usedCount > 0 && (
            <button
              onClick={handleResetRegistry}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-semibold border border-amber-500/30"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{isHi ? 'रीसेट' : 'Reset'}</span>
            </button>
          )}
        </div>

        {/* Past Sessions List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {history.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">
              {isHi ? 'कोई पूर्व खेल रिकॉर्ड उपलब्ध नहीं है।' : 'No game records recorded yet. Play a game!'}
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-200 uppercase">
                      {item.mode} Mode
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">
                      Level {item.highestLevel} / 17
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {new Date(item.timestamp).toLocaleString(isHi ? 'hi-IN' : 'en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-extrabold text-amber-400 block text-sm tabular-nums">
                    ₹{item.scoreWon.toLocaleString('en-IN')}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase ${
                      item.outcome === 'won'
                        ? 'text-yellow-400'
                        : item.outcome === 'wrong'
                        ? 'text-red-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {item.outcome}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
