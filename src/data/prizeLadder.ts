import { PrizeLevel } from '../types/kbc';

export const PRIZE_LADDER: PrizeLevel[] = [
  { level: 1, amount: 1000, displayAmount: '₹1,000', displayAmountHi: '₹1,000', isMilestone: false, timerSeconds: 30 },
  { level: 2, amount: 2000, displayAmount: '₹2,000', displayAmountHi: '₹2,000', isMilestone: false, timerSeconds: 30 },
  { level: 3, amount: 3000, displayAmount: '₹3,000', displayAmountHi: '₹3,000', isMilestone: false, timerSeconds: 30 },
  { level: 4, amount: 5000, displayAmount: '₹5,000', displayAmountHi: '₹5,000', isMilestone: false, timerSeconds: 30 },
  { level: 5, amount: 10000, displayAmount: '₹10,000', displayAmountHi: '₹10,000', isMilestone: true, timerSeconds: 30 }, // Padav 1
  { level: 6, amount: 20000, displayAmount: '₹20,000', displayAmountHi: '₹20,000', isMilestone: false, timerSeconds: 45 },
  { level: 7, amount: 40000, displayAmount: '₹40,000', displayAmountHi: '₹40,000', isMilestone: false, timerSeconds: 45 },
  { level: 8, amount: 80000, displayAmount: '₹80,000', displayAmountHi: '₹80,000', isMilestone: false, timerSeconds: 45 },
  { level: 9, amount: 160000, displayAmount: '₹1,60,000', displayAmountHi: '₹1,60,000', isMilestone: false, timerSeconds: 45 },
  { level: 10, amount: 320000, displayAmount: '₹3,20,000', displayAmountHi: '₹3,20,000', isMilestone: true, timerSeconds: 45 }, // Padav 2
  { level: 11, amount: 640000, displayAmount: '₹6,40,000', displayAmountHi: '₹6,40,000', isMilestone: false, timerSeconds: 60 },
  { level: 12, amount: 1250000, displayAmount: '₹12,50,000', displayAmountHi: '₹12.5 लाख', isMilestone: false, timerSeconds: 60 },
  { level: 13, amount: 2500000, displayAmount: '₹25,00,000', displayAmountHi: '₹25 लाख', isMilestone: false, timerSeconds: 60 },
  { level: 14, amount: 5000000, displayAmount: '₹50,00,000', displayAmountHi: '₹50 लाख', isMilestone: false, timerSeconds: 60 },
  { level: 15, amount: 10000000, displayAmount: '₹1 Crore', displayAmountHi: '₹1 करोड़', isMilestone: true, timerSeconds: 60 }, // Padav 3
  { level: 16, amount: 30000000, displayAmount: '₹3 Crore', displayAmountHi: '₹3 करोड़', isMilestone: false, timerSeconds: 90 },
  { level: 17, amount: 70000000, displayAmount: '₹7 Crore', displayAmountHi: '₹7 करोड़', isMilestone: true, timerSeconds: 90 }, // Jackpot
];

export const GUARANTEED_MILESTONES = [
  { level: 0, amount: 0, display: '₹0' },
  { level: 5, amount: 10000, display: '₹10,000' },
  { level: 10, amount: 320000, display: '₹3,20,000' },
  { level: 15, amount: 10000000, display: '₹1 Crore' },
];

export function getGuaranteedAmount(currentLevelIndex: number): number {
  if (currentLevelIndex >= 15) return 10000000;
  if (currentLevelIndex >= 10) return 320000;
  if (currentLevelIndex >= 5) return 10000;
  return 0;
}
