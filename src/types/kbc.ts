export type Language = 'hi' | 'en';

export type GameMode = 'adult' | 'junior' | 'it';

export type LifelineType = 'fiftyFifty' | 'hint' | 'tarkGuru' | 'flip' | 'powerPaplu';

export interface LocalizedText {
  en: string;
  hi: string;
}

export interface Question {
  id: string;
  level: number; // 1 to 17
  category: string;
  family: string;
  mode: 'adult' | 'junior' | 'it' | 'all';
  question: LocalizedText;
  options: {
    en: [string, string, string, string];
    hi: [string, string, string, string];
  };
  correctIndex: number; // 0, 1, 2, or 3
  explanation: LocalizedText;
  hint: LocalizedText;
  tarkGuruClue: LocalizedText;
}

export interface PrizeLevel {
  level: number;
  amount: number;
  displayAmount: string;
  displayAmountHi: string;
  isMilestone: boolean;
  timerSeconds: number;
}

export interface LifelineStatus {
  used: boolean;
  available: boolean;
}

export interface GameHistoryItem {
  id: string;
  timestamp: number;
  mode: GameMode;
  questionsAnswered: number;
  scoreWon: number;
  displayScore: string;
  highestLevel: number;
  lifelinesUsed: LifelineType[];
  outcome: 'won' | 'wrong' | 'timeout' | 'quit';
}

export type PowerTier = 'Normal' | 'Saver' | 'Critical' | 'Survival';

export interface NetraBatteryState {
  level: number; // 0 to 100
  charging: boolean;
  tier: PowerTier;
  temperatureCelsius: number;
}
