import React, { useState } from 'react';
import { Language } from '../types/kbc';
import { Info, X, ShieldCheck, CheckCircle2, Clock, Calendar, AlertCircle, Ban, Cpu } from 'lucide-react';

interface AboutModalProps {
  language: Language;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  language,
  onClose,
}) => {
  const isHi = language === 'hi';
  const [activeTab, setActiveTab] = useState<'overview' | 'status' | 'rules'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <span className="font-bold text-amber-300 text-xs">नेत्र</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-300">
                Netra KBC (TarkShastra)
              </h3>
              <p className="text-[10px] text-amber-200/70">
                "Socho, Samjho, Jeeto" • Code Head v1.1.38
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

        {/* Tabs */}
        <div className="flex items-center gap-2 mt-3 mb-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-amber-300'
            }`}
          >
            {isHi ? 'अवलोकन (Overview)' : 'Overview'}
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'status'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-amber-300'
            }`}
          >
            {isHi ? 'रोडमैप व स्थिति' : 'Roadmap & Status'}
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'rules'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-amber-300'
            }`}
          >
            {isHi ? 'अल्ट्रा-लो पावर नीति' : 'Ultra-Low Power'}
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs text-slate-300 custom-scrollbar">
          {activeTab === 'overview' && (
            <>
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-300 text-sm">
                  {isHi ? 'परियोजना परिचय' : 'Project Identity'}
                </h4>
                <p className="leading-relaxed">
                  Netra KBC (TarkShastra) is a free KBC-style quiz game created by <strong>Deepak Kushwaha</strong> (Prayagi Store and Services, Prayagraj, India) as part of the <strong>Netra Eco</strong> family of apps.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block">First Release:</span>
                    <span className="font-semibold text-slate-200">v1.0.0 (2 Oct 2026)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block">Current Head:</span>
                    <span className="font-semibold text-emerald-400">v1.1.38</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isHi ? 'सत्यापित मौजूदा विशेषताएं (Section 2 - Done)' : 'Verified Current Features (Section 2)'}</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300 leading-relaxed">
                  <li><strong>17 Questions Prize Ladder:</strong> KBC format with milestones at Q5, Q10, Q15, and Q17 (Jackpot).</li>
                  <li><strong>Question Pipeline:</strong> Dynamic generation & rich offline cache; no repeats via local used registry.</li>
                  <li><strong>Two Core Modes:</strong> Junior (NCERT school curriculum) & Adult (15 reasoning logic families) + IT Professional.</li>
                  <li><strong>Full Lifeline Suite:</strong> 50-50, Hint, Ask the Expert (Tark Guru), Flip the Question, Power Paplu.</li>
                  <li><strong>Text-to-Speech (TTS):</strong> Question read aloud first, timer starts immediately per spec.</li>
                  <li><strong>Tark Guru AI:</strong> Guides reasoning direction only; by design never reveals direct answers.</li>
                  <li><strong>Safe & Fair:</strong> No login needed, zero tracking, points only (fake payout removed in v1.1.0).</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'status' && (
            <>
              {/* In Progress */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/20 space-y-2">
                <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{isHi ? 'प्रगति पर (Section 3 - In Progress)' : 'In Progress (Section 3)'}</span>
                </h4>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Play Protect Security:</strong> In-app self-updater removal in progress; distribution through Netra Eco store.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Lifeline Simplification:</strong> Owner directive (12 Oct) to retain only 50-50 and Flip. Available here as a toggle!</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Junior/Adult Overhaul:</strong> Concept-level deduplication and strict board tagging (CBSE, ICSE, NCERT).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>KBC TV:</strong> Android TV edition started 13 Oct 2026.</span>
                  </li>
                </ul>
              </div>

              {/* Planned */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-blue-500/20 space-y-2">
                <h4 className="font-bold text-blue-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{isHi ? 'प्रस्तावित (Section 4 - Planned)' : 'Planned Roadmap (Section 4)'}</span>
                </h4>
                <ul className="space-y-1 text-slate-300">
                  <li>• QR Login for KBC Web (WhatsApp Web-style mobile companion answering)</li>
                  <li>• Optional Google login with Firebase progress sync</li>
                  <li>• Practice Test mode (100 Qs in 90 mins for competitive exams)</li>
                  <li>• Global used-question web archive</li>
                  <li>• Day-special occasion questions (Gandhi Jayanti, Republic Day)</li>
                </ul>
              </div>

              {/* Deliberately Dropped */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-red-500/20 space-y-2">
                <h4 className="font-bold text-red-400 flex items-center gap-1.5">
                  <Ban className="w-4 h-4" />
                  <span>{isHi ? 'निरस्त किए गए (Section 5 - Dropped by Owner)' : 'Deliberately Dropped (Section 5)'}</span>
                </h4>
                <ul className="space-y-1 text-slate-400">
                  <li>✕ Anti-cheating systems (mic monitoring/camera) - fully removed in v1.1.12.</li>
                  <li>✕ Any payment, payout or fake money flow.</li>
                  <li>✕ Mandatory login of any kind.</li>
                  <li>✕ Study mode revision from public books.</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'rules' && (
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>Ultra-Low Power & 24/7 Reliability (Netra Eco Design)</span>
              </h4>
              <p className="leading-relaxed">
                Adhering to the Core Design Principle: minimum battery consumption, event-driven execution, no busy loops, batched writes, and adaptive power tiers:
              </p>
              <div className="space-y-2 pt-1 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-300">Normal (&gt;30%):</strong> Full high-fidelity simulation, Web Audio synthesis, and dynamic pipeline sync.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-amber-300">Saver (15-30%):</strong> Extended caching, reduced particle animations, paused audio synthesis.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-red-300">Critical / Survival (&lt;15%):</strong> Essential Tier-0 gameplay only, dark OLED palette, local storage batching.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
