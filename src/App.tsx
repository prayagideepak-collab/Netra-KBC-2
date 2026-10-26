import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameHistoryItem, GameMode, Language, LifelineStatus, LifelineType, NetraBatteryState, Question } from './types/kbc';
import { PRIZE_LADDER, getGuaranteedAmount } from './data/prizeLadder';
import { prepareQuestionSet } from './utils/questionPipeline';
import { soundEffects } from './utils/audio';
import { ttsService } from './utils/tts';
import { loadSettings, markQuestionAsUsed, saveGameHistory, saveSettings } from './utils/storage';

import { Header } from './components/Header';
import { TitleScreen } from './components/TitleScreen';
import { PrizeLadder } from './components/PrizeLadder';
import { LifelineBar } from './components/LifelineBar';
import { TimerRing } from './components/TimerRing';
import { QuestionCard } from './components/QuestionCard';
import { ExplanationModal } from './components/ExplanationModal';
import { TarkGuruModal } from './components/TarkGuruModal';
import { HintModal } from './components/HintModal';
import { PowerPapluModal } from './components/PowerPapluModal';
import { GameOverModal } from './components/GameOverModal';
import { HistoryModal } from './components/HistoryModal';
import { AboutModal } from './components/AboutModal';

import { Award, ShieldAlert, Sparkles, AlertCircle, Menu } from 'lucide-react';

export default function App() {
  const initialSettings = loadSettings();

  // App Settings
  const [language, setLanguage] = useState<Language>(initialSettings.language);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(initialSettings.soundEnabled);
  const [ttsEnabled, setTtsEnabled] = useState<boolean>(initialSettings.ttsEnabled);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(initialSettings.autoAdvance);
  const [simplifiedLifelines, setSimplifiedLifelines] = useState<boolean>(initialSettings.simplifiedLifelines);

  // Modals state
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showMobileLadder, setShowMobileLadder] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<'none' | 'tarkGuru' | 'hint' | 'powerPaplu' | 'explanation' | 'gameOver'>('none');

  // Game Flow state
  const [screen, setScreen] = useState<'title' | 'game' | 'gameOver'>('title');
  const [gameMode, setGameMode] = useState<GameMode>('adult');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [reservePool, setReservePool] = useState<Question[]>([]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0); // 0 to 16

  // Question Interaction state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [lockedOption, setLockedOption] = useState<number | null>(null);
  const [revealedResult, setRevealedResult] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [speakingOptionIndex, setSpeakingOptionIndex] = useState<number | null>(null);
  const [isReadingQuestion, setIsReadingQuestion] = useState<boolean>(false);

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Lifelines state
  const [lifelines, setLifelines] = useState<Record<LifelineType, LifelineStatus>>({
    fiftyFifty: { used: false, available: true },
    hint: { used: false, available: true },
    tarkGuru: { used: false, available: true },
    flip: { used: false, available: true },
    powerPaplu: { used: false, available: true },
  });

  // Score and Outcome state
  const [scoreWon, setScoreWon] = useState<number>(0);
  const [gameOutcome, setGameOutcome] = useState<'won' | 'wrong' | 'timeout' | 'quit'>('wrong');
  const [highestLevelReached, setHighestLevelReached] = useState<number>(1);
  const [lifelinesUsedThisGame, setLifelinesUsedThisGame] = useState<LifelineType[]>([]);

  // Netra Battery & Device Sentinel state
  const [batteryState, setBatteryState] = useState<NetraBatteryState>({
    level: 88,
    charging: false,
    tier: 'Normal',
    temperatureCelsius: 32,
  });

  // Synchronize audio & tts states
  useEffect(() => {
    soundEffects.setMuted(!soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    ttsService.enabled = ttsEnabled;
  }, [ttsEnabled]);

  // Battery Sentinel Listener (Core Design Principle: ultra-low power)
  useEffect(() => {
    let batteryObj: any = null;

    if (typeof navigator !== 'undefined' && 'getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        batteryObj = battery;
        const updateBattery = () => {
          const lvl = Math.round(battery.level * 100);
          const chg = battery.charging;

          let tier: 'Normal' | 'Saver' | 'Critical' | 'Survival' = 'Normal';
          if (chg || lvl > 30) tier = 'Normal';
          else if (lvl > 15) tier = 'Saver';
          else if (lvl > 5) tier = 'Critical';
          else tier = 'Survival';

          setBatteryState({
            level: lvl,
            charging: chg,
            tier,
            temperatureCelsius: 31 + (chg ? 3 : 0),
          });
        };

        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
      }).catch(() => {});
    }

    return () => {
      if (batteryObj) {
        batteryObj.removeEventListener?.('levelchange', () => {});
        batteryObj.removeEventListener?.('chargingchange', () => {});
      }
    };
  }, []);

  // Current Question & Prize level
  const currentQuestion = questions[currentLevelIndex] || null;
  const currentPrizeLevel = PRIZE_LADDER[currentLevelIndex] || PRIZE_LADDER[0];

  // Stop timer helper
  const stopTimer = useCallback(() => {
    setTimerActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Start question sequence & TTS
  const startQuestionNarration = useCallback((q: Question, prize: typeof PRIZE_LADDER[0]) => {
    stopTimer();
    setSelectedOption(null);
    setLockedOption(null);
    setRevealedResult(false);
    setEliminatedOptions([]);
    setSpeakingOptionIndex(null);

    const initialTime = prize.timerSeconds;
    setTimeLeft(initialTime);

    if (ttsEnabled && ttsService.isSupported()) {
      setIsReadingQuestion(true);
      const qText = language === 'hi' ? q.question.hi : q.question.en;
      const opts = language === 'hi' ? q.options.hi : q.options.en;

      ttsService.readQuestionAndOptions({
        questionText: qText,
        options: opts,
        language,
        onQuestionFinished: () => {
          // Per Section 2: "A timer starts right after the question has been read, even while the options are still being read."
          setIsReadingQuestion(false);
          setTimerActive(true);
        },
        onOptionSpeaking: (optIdx) => {
          setSpeakingOptionIndex(optIdx);
        },
        onAllFinished: () => {
          setSpeakingOptionIndex(null);
          setIsReadingQuestion(false);
        },
      });
    } else {
      // Immediate timer start if TTS disabled
      setIsReadingQuestion(false);
      setTimerActive(true);
    }
  }, [language, ttsEnabled, stopTimer]);

  // Main countdown timer interval
  useEffect(() => {
    if (!timerActive) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopTimer();
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerActive, stopTimer]);

  // Start a fresh Game
  const handleStartGame = async () => {
    ttsService.stop();
    stopTimer();

    // Prepare fresh 17 questions via question pipeline
    const prepared = await prepareQuestionSet(gameMode);
    setQuestions(prepared.questions);
    setReservePool(prepared.reserves);

    setCurrentLevelIndex(0);
    setHighestLevelReached(1);
    setScoreWon(0);
    setLifelinesUsedThisGame([]);

    // Reset lifelines
    setLifelines({
      fiftyFifty: { used: false, available: true },
      hint: { used: false, available: true },
      tarkGuru: { used: false, available: true },
      flip: { used: false, available: true },
      powerPaplu: { used: false, available: true },
    });

    setScreen('game');
    setActiveModal('none');

    // Start Question 1
    startQuestionNarration(prepared.questions[0], PRIZE_LADDER[0]);
  };

  // Option Click / Selection
  const handleSelectOption = (idx: number) => {
    if (lockedOption !== null || !timerActive) return;
    setSelectedOption(idx);
    handleLockOption(idx);
  };

  // Lock Option ("Lock Kiya Jaye!")
  const handleLockOption = (idx: number) => {
    stopTimer();
    ttsService.stop();
    setLockedOption(idx);
    soundEffects.playLock();

    // Dramatic KBC lock suspense pause (1.8 seconds)
    setTimeout(() => {
      revealResult(idx);
    }, 1800);
  };

  // Reveal Right/Wrong Result
  const revealResult = (selectedIdx: number) => {
    if (!currentQuestion) return;

    setRevealedResult(true);
    markQuestionAsUsed(currentQuestion.id);

    const isCorrect = selectedIdx === currentQuestion.correctIndex;

    if (isCorrect) {
      soundEffects.playCorrect();
      if (currentPrizeLevel.isMilestone) {
        setTimeout(() => soundEffects.playMilestone(), 500);
      }
      const earnedSoFar = currentPrizeLevel.amount;
      setScoreWon(earnedSoFar);
      setHighestLevelReached(Math.max(highestLevelReached, currentPrizeLevel.level));

      // Show step-by-step reasoning modal
      setTimeout(() => {
        setActiveModal('explanation');
      }, 1000);
    } else {
      soundEffects.playWrong();
      // On wrong answer, award guaranteed milestone amount
      const guaranteed = getGuaranteedAmount(currentLevelIndex);
      setScoreWon(guaranteed);
      setGameOutcome('wrong');

      setTimeout(() => {
        setActiveModal('explanation');
      }, 1200);
    }
  };

  // Time Out handler
  const handleTimeout = () => {
    ttsService.stop();
    soundEffects.playWrong();
    if (currentQuestion) {
      markQuestionAsUsed(currentQuestion.id);
    }
    const guaranteed = getGuaranteedAmount(currentLevelIndex);
    setScoreWon(guaranteed);
    setGameOutcome('timeout');
    setActiveModal('gameOver');
  };

  // Next Question / Finish Game
  const handleNextQuestion = () => {
    setActiveModal('none');

    if (gameOutcome === 'wrong') {
      finishGame('wrong');
      return;
    }

    const nextIndex = currentLevelIndex + 1;
    if (nextIndex >= 17) {
      // 7 Crore Jackpot Achieved!
      soundEffects.playMilestone();
      finishGame('won');
      return;
    }

    setCurrentLevelIndex(nextIndex);
    setHighestLevelReached(Math.max(highestLevelReached, nextIndex + 1));
    startQuestionNarration(questions[nextIndex], PRIZE_LADDER[nextIndex]);
  };

  // Quit Game deliberately
  const handleQuitGame = () => {
    stopTimer();
    ttsService.stop();
    finishGame('quit');
  };

  // Save Game History & Show Victory / Game Over
  const finishGame = (outcome: 'won' | 'wrong' | 'timeout' | 'quit') => {
    setGameOutcome(outcome);
    setScreen('gameOver');
    setActiveModal('none');

    const historyRecord: GameHistoryItem = {
      id: `game_${Date.now()}`,
      timestamp: Date.now(),
      mode: gameMode,
      questionsAnswered: outcome === 'won' ? 17 : currentLevelIndex,
      scoreWon,
      displayScore: `₹${scoreWon.toLocaleString('en-IN')}`,
      highestLevel: highestLevelReached,
      lifelinesUsed: lifelinesUsedThisGame,
      outcome,
    };

    saveGameHistory(historyRecord);
  };

  // Use Lifelines
  const handleUseLifeline = (type: LifelineType) => {
    if (lifelines[type].used || !timerActive || !currentQuestion) return;

    // Mark as used
    setLifelines((prev) => ({
      ...prev,
      [type]: { ...prev[type], used: true },
    }));
    setLifelinesUsedThisGame((prev) => [...prev, type]);

    if (type === 'fiftyFifty') {
      // Eliminate two incorrect options
      const incorrectIndices = [0, 1, 2, 3].filter((idx) => idx !== currentQuestion.correctIndex);
      // Pick 2 random incorrect
      const shuffled = [...incorrectIndices].sort(() => 0.5 - Math.random());
      setEliminatedOptions(shuffled.slice(0, 2));
    } else if (type === 'hint') {
      stopTimer();
      setActiveModal('hint');
    } else if (type === 'tarkGuru') {
      stopTimer();
      setActiveModal('tarkGuru');
    } else if (type === 'flip') {
      // Swap question with a matching reserve
      if (reservePool.length > 0) {
        const replacement = reservePool[0];
        setReservePool((prev) => prev.slice(1));
        const updatedQuestions = [...questions];
        updatedQuestions[currentLevelIndex] = replacement;
        setQuestions(updatedQuestions);
        startQuestionNarration(replacement, currentPrizeLevel);
      }
    } else if (type === 'powerPaplu') {
      stopTimer();
      setActiveModal('powerPaplu');
    }
  };

  // Power Paplu Recharge Action
  const handlePowerPapluRecharge = (rechargeType: LifelineType) => {
    setLifelines((prev) => ({
      ...prev,
      [rechargeType]: { ...prev[rechargeType], used: false },
    }));
    setActiveModal('none');
    setTimerActive(true);
  };

  // Close modals and resume timer if playing
  const handleCloseSubModal = () => {
    setActiveModal('none');
    if (screen === 'game' && lockedOption === null) {
      setTimerActive(true);
    }
  };

  const isHi = language === 'hi';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* App Header */}
      <Header
        language={language}
        onToggleLanguage={() => {
          const next = language === 'hi' ? 'en' : 'hi';
          setLanguage(next);
          saveSettings({ language: next });
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          const next = !soundEnabled;
          setSoundEnabled(next);
          saveSettings({ soundEnabled: next });
        }}
        ttsEnabled={ttsEnabled}
        onToggleTTS={() => {
          const next = !ttsEnabled;
          setTtsEnabled(next);
          saveSettings({ ttsEnabled: next });
        }}
        onOpenHistory={() => setShowHistory(true)}
        onOpenAbout={() => setShowAbout(true)}
        batteryState={batteryState}
        inGame={screen === 'game'}
        onQuitGame={handleQuitGame}
        scoreWon={scoreWon}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center relative">
        {screen === 'title' && (
          <TitleScreen
            language={language}
            selectedMode={gameMode}
            onSelectMode={setGameMode}
            onStartGame={handleStartGame}
            batteryState={batteryState}
            simplifiedLifelines={simplifiedLifelines}
            onToggleSimplifiedLifelines={() => {
              const next = !simplifiedLifelines;
              setSimplifiedLifelines(next);
              saveSettings({ simplifiedLifelines: next });
            }}
            stats={{
              totalGames: 0,
              highestScore: 0,
              totalQuestionsAnswered: 0,
              jackpotWins: 0,
            }}
          />
        )}

        {screen === 'game' && currentQuestion && (
          <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 flex flex-col lg:flex-row gap-6 items-stretch flex-1">
            {/* Left & Center: Quiz Playfield */}
            <div className="flex-1 flex flex-col justify-between gap-4 sm:gap-6">
              {/* Top Controls: Lifelines & Timer & Mobile Ladder Toggle */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 border border-amber-500/20 rounded-2xl p-3 backdrop-blur-sm">
                {/* Mobile Ladder Button */}
                <button
                  onClick={() => setShowMobileLadder(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-bold"
                >
                  <Menu className="w-4 h-4" />
                  <span>{isHi ? 'पड़ाव देखें' : 'View Ladder'}</span>
                </button>

                {/* Lifeline Buttons */}
                <LifelineBar
                  lifelines={lifelines}
                  onUseLifeline={handleUseLifeline}
                  language={language}
                  disabled={!timerActive || lockedOption !== null}
                  simplifiedMode={simplifiedLifelines}
                />

                {/* Timer Ring */}
                <div className="shrink-0">
                  <TimerRing
                    timeLeft={timeLeft}
                    totalTime={currentPrizeLevel.timerSeconds}
                    isActive={timerActive}
                    onTimeout={handleTimeout}
                  />
                </div>
              </div>

              {/* Main Question & 4 Options Box */}
              <div className="flex-1 flex flex-col justify-center">
                <QuestionCard
                  question={currentQuestion}
                  prizeLevel={currentPrizeLevel}
                  language={language}
                  selectedOptionIndex={selectedOption}
                  lockedOptionIndex={lockedOption}
                  revealedResult={revealedResult}
                  eliminatedOptionIndices={eliminatedOptions}
                  speakingOptionIndex={speakingOptionIndex}
                  onSelectOption={handleSelectOption}
                  onReplayAudio={() => startQuestionNarration(currentQuestion, currentPrizeLevel)}
                  isReadingQuestion={isReadingQuestion}
                />
              </div>

              {/* Bottom Subtle Status */}
              <div className="flex items-center justify-between text-[11px] text-amber-200/50 px-2">
                <span>{isHi ? 'नेत्र केबीसी • सोचो, समझो, जीतो' : 'Netra KBC • Socho, Samjho, Jeeto'}</span>
                <span>{isHi ? 'प्रश्नावली मोड:' : 'Mode:'} {gameMode.toUpperCase()}</span>
              </div>
            </div>

            {/* Right: 17-Step Prize Ladder */}
            <PrizeLadder
              currentLevel={currentPrizeLevel.level}
              language={language}
              isOpenMobile={showMobileLadder}
              onCloseMobile={() => setShowMobileLadder(false)}
            />
          </div>
        )}

        {screen === 'gameOver' && (
          <GameOverModal
            outcome={gameOutcome}
            finalAmountWon={scoreWon}
            highestLevelReached={highestLevelReached}
            questionsAnswered={gameOutcome === 'won' ? 17 : currentLevelIndex}
            mode={gameMode}
            language={language}
            onPlayAgain={handleStartGame}
            onOpenHistory={() => setShowHistory(true)}
          />
        )}
      </main>

      {/* Post-Answer Step-by-Step Explanation Modal */}
      {activeModal === 'explanation' && currentQuestion && (
        <ExplanationModal
          question={currentQuestion}
          prizeLevel={currentPrizeLevel}
          isCorrect={selectedOption === currentQuestion.correctIndex}
          language={language}
          onNextQuestion={handleNextQuestion}
          autoAdvanceEnabled={autoAdvance}
        />
      )}

      {/* Lifeline: Tark Guru (Ask the Expert) Modal */}
      {activeModal === 'tarkGuru' && currentQuestion && (
        <TarkGuruModal
          question={currentQuestion}
          language={language}
          onClose={handleCloseSubModal}
        />
      )}

      {/* Lifeline: Hint Modal */}
      {activeModal === 'hint' && currentQuestion && (
        <HintModal
          question={currentQuestion}
          language={language}
          onClose={handleCloseSubModal}
        />
      )}

      {/* Lifeline: Power Paplu Modal */}
      {activeModal === 'powerPaplu' && (
        <PowerPapluModal
          lifelines={lifelines}
          language={language}
          onRecharge={handlePowerPapluRecharge}
          onClose={handleCloseSubModal}
        />
      )}

      {/* History & Progress Modal */}
      {showHistory && (
        <HistoryModal
          language={language}
          onClose={() => setShowHistory(false)}
        />
      )}

      {/* About Netra KBC Modal */}
      {showAbout && (
        <AboutModal
          language={language}
          onClose={() => setShowAbout(false)}
        />
      )}
    </div>
  );
}
