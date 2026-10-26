import { GameMode, Question } from '../types/kbc';
import { QUESTION_BANK } from '../data/questionBank';
import { getUsedQuestionIds } from './storage';

export interface PreparedGameSet {
  questions: Question[]; // 17 questions (levels 1 to 17)
  reserves: Question[]; // Pool for Flip the Question lifeline
}

/**
 * Shuffles options for fairness while keeping correctIndex accurate.
 */
function shuffleQuestionOptions(q: Question): Question {
  const indices = [0, 1, 2, 3];
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const newOptionsEn: [string, string, string, string] = [
    q.options.en[indices[0]],
    q.options.en[indices[1]],
    q.options.en[indices[2]],
    q.options.en[indices[3]],
  ];

  const newOptionsHi: [string, string, string, string] = [
    q.options.hi[indices[0]],
    q.options.hi[indices[1]],
    q.options.hi[indices[2]],
    q.options.hi[indices[3]],
  ];

  const newCorrectIndex = indices.indexOf(q.correctIndex);

  return {
    ...q,
    options: {
      en: newOptionsEn,
      hi: newOptionsHi,
    },
    correctIndex: newCorrectIndex,
  };
}

/**
 * Prepares a fresh 17-question ladder + reserve set for the selected mode,
 * avoiding already used questions.
 */
export async function prepareQuestionSet(mode: GameMode): Promise<PreparedGameSet> {
  const usedIds = getUsedQuestionIds();

  // Filter bank by mode preference
  // Junior mode strictly uses junior & all; Adult mode uses adult, it, and all; IT mode prioritizes it.
  const filterByMode = (q: Question) => {
    if (mode === 'junior') {
      return q.mode === 'junior' || q.mode === 'all';
    }
    if (mode === 'it') {
      return q.mode === 'it' || q.mode === 'adult' || q.mode === 'all';
    }
    return q.mode === 'adult' || q.mode === 'all';
  };

  const eligiblePool = QUESTION_BANK.filter(filterByMode);

  // Group by level (1 to 17)
  const selectedQuestions: Question[] = [];
  const reservePool: Question[] = [];

  for (let lvl = 1; lvl <= 17; lvl++) {
    let candidates = eligiblePool.filter((q) => q.level === lvl);

    // If no exact match for this mode at this level, pull from any matching level in the entire bank
    if (candidates.length === 0) {
      candidates = QUESTION_BANK.filter((q) => q.level === lvl);
    }

    // Try to pick an unused question first
    let unused = candidates.filter((q) => !usedIds.includes(q.id));
    if (unused.length === 0) {
      // If all used, recycle from candidates
      unused = candidates;
    }

    // Pick 1 for the ladder
    const pickedIndex = Math.floor(Math.random() * unused.length);
    const chosen = unused[pickedIndex] || candidates[0];
    selectedQuestions.push(shuffleQuestionOptions(chosen));

    // The remaining candidates (or reserves) go into reservePool
    candidates.forEach((cand) => {
      if (cand.id !== chosen.id) {
        reservePool.push(shuffleQuestionOptions(cand));
      }
    });
  }

  // Also include designated reserve questions from the bank
  const bankReserves = QUESTION_BANK.filter((q) => q.id.startsWith('reserve_'));
  bankReserves.forEach((rq) => reservePool.push(shuffleQuestionOptions(rq)));

  return {
    questions: selectedQuestions,
    reserves: reservePool,
  };
}
