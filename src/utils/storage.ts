import { GameHistoryItem, Question } from '../types/kbc';

const STORAGE_KEYS = {
  USED_QUESTIONS: 'netra_kbc_used_questions_v1',
  HISTORY: 'netra_kbc_game_history_v1',
  SETTINGS: 'netra_kbc_settings_v1',
};

export interface AppSettings {
  language: 'hi' | 'en';
  soundEnabled: boolean;
  ttsEnabled: boolean;
  autoAdvance: boolean;
  lowPowerMode: boolean;
  simplifiedLifelines: boolean; // Section 3 owner order: 50-50 & Flip only toggle
}

const DEFAULT_SETTINGS: AppSettings = {
  language: 'hi',
  soundEnabled: true,
  ttsEnabled: true,
  autoAdvance: true,
  lowPowerMode: false,
  simplifiedLifelines: false,
};

// 1. Used Questions Registry
export function getUsedQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USED_QUESTIONS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function markQuestionAsUsed(questionId: string): void {
  try {
    const used = getUsedQuestionIds();
    if (!used.includes(questionId)) {
      used.push(questionId);
      localStorage.setItem(STORAGE_KEYS.USED_QUESTIONS, JSON.stringify(used));
    }
  } catch (err) {
    console.error('Failed to update used-question registry:', err);
  }
}

export function resetUsedQuestionRegistry(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.USED_QUESTIONS);
  } catch (err) {
    console.error('Failed to reset used questions:', err);
  }
}

// 2. History & Progress
export function getGameHistory(): GameHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveGameHistory(item: GameHistoryItem): void {
  try {
    const history = getGameHistory();
    history.unshift(item); // Most recent first
    // Keep max 50 items locally to respect bounded file storage
    const bounded = history.slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(bounded));
  } catch (err) {
    console.error('Failed to persist game history:', err);
  }
}

export function getPlayerStats() {
  const history = getGameHistory();
  const totalGames = history.length;
  const highestScore = history.reduce((max, h) => Math.max(max, h.scoreWon), 0);
  const totalQuestionsAnswered = history.reduce((sum, h) => sum + h.questionsAnswered, 0);
  const jackpotWins = history.filter((h) => h.outcome === 'won').length;

  return {
    totalGames,
    highestScore,
    totalQuestionsAnswered,
    jackpotWins,
  };
}

// 3. Settings
export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: Partial<AppSettings>): AppSettings {
  try {
    const current = loadSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    return updated;
  } catch {
    return DEFAULT_SETTINGS;
  }
}
