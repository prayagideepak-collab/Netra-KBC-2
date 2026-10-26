import React from 'react';
import { LifelineStatus, LifelineType, Language } from '../types/kbc';
import { Zap, RotateCcw, X } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface PowerPapluModalProps {
  lifelines: Record<LifelineType, LifelineStatus>;
  language: Language;
  onRecharge: (type: LifelineType) => void;
  onClose: () => void;
}

export const PowerPapluModal: React.FC<PowerPapluModalProps> = ({
  lifelines,
  language,
  onRecharge,
  onClose,
}) => {
  const isHi = language === 'hi';

  const usedLifelines = (Object.keys(lifelines) as LifelineType[]).filter(
    (key) => key !== 'powerPaplu' && lifelines[key].used
  );

  const getLabel = (type: LifelineType) => {
    switch (type) {
      case 'fiftyFifty':
        return '50-50 (Fifty-Fifty)';
      case 'hint':
        return isHi ? 'संकेत (Hint)' : 'Hint';
      case 'tarkGuru':
        return isHi ? 'तर्क गुरु (Ask the Expert)' : 'Tark Guru (Ask the Expert)';
      case 'flip':
        return isHi ? 'प्रश्न बदलें (Flip Question)' : 'Flip Question';
      default:
        return type;
    }
  };

  const handleSelectRecharge = (type: LifelineType) => {
    soundEffects.playMilestone();
    onRecharge(type);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-2 border-rose-500/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col gap-4">
        {/* Glow */}
        <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-rose-500/20 blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 p-0.5 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/30">
              <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
                <Zap className="w-5 h-5 text-rose-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-black text-rose-300">
                {isHi ? 'पावर पपलू (Power Paplu)' : 'Power Paplu Recharge'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {isHi ? 'किसी भी प्रयुक्त लाइफलाइन को पुनः सक्रिय करें' : 'Recharge and revive any consumed lifeline'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of used lifelines to choose */}
        <div className="flex flex-col gap-2">
          {usedLifelines.length === 0 ? (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center text-xs text-slate-400">
              {isHi
                ? 'अभी तक आपने कोई अन्य लाइफलाइन इस्तेमाल नहीं की है जिसे रिचार्ज किया जा सके।'
                : 'You have not used any other lifelines yet to recharge.'}
            </div>
          ) : (
            usedLifelines.map((type) => (
              <button
                key={type}
                onClick={() => handleSelectRecharge(type)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-rose-500/30 hover:border-rose-400 hover:bg-slate-900 transition-all text-left group"
              >
                <span className="font-bold text-sm text-slate-200 group-hover:text-rose-300">
                  {getLabel(type)}
                </span>
                <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/30">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isHi ? 'रिचार्ज करें' : 'Recharge'}</span>
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
