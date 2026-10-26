import React from 'react';
import { Question, Language } from '../types/kbc';
import { HelpCircle, Check, Lightbulb } from 'lucide-react';

interface HintModalProps {
  question: Question;
  language: Language;
  onClose: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({
  question,
  language,
  onClose,
}) => {
  const isHi = language === 'hi';
  const hintText = isHi ? question.hint.hi : question.hint.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-2 border-blue-500/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col gap-4">
        {/* Glow */}
        <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
            <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black text-blue-300">
              {isHi ? 'लाइफलाइन: संकेत (Hint)' : 'Lifeline: Question Hint'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isHi ? 'इस प्रश्न को हल करने में सहायक सुराग' : 'Contextual clue to assist your deduction'}
            </p>
          </div>
        </div>

        {/* Clue box */}
        <div className="bg-slate-950/90 border border-blue-500/25 rounded-2xl p-4 flex flex-col gap-2">
          <p className="text-sm text-slate-200 leading-relaxed">
            {hintText}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 hover:from-blue-500 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>{isHi ? 'ठीक है, प्रश्न पर लौटें' : 'Got it, Back to Question'}</span>
        </button>
      </div>
    </div>
  );
};
