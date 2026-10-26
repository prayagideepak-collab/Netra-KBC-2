import React, { useEffect } from 'react';
import { soundEffects } from '../utils/audio';

interface TimerRingProps {
  timeLeft: number;
  totalTime: number;
  isActive: boolean;
  onTimeout: () => void;
}

export const TimerRing: React.FC<TimerRingProps> = ({
  timeLeft,
  totalTime,
  isActive,
  onTimeout,
}) => {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, timeLeft / (totalTime || 30)));
  const strokeDashoffset = circumference - progress * circumference;

  const isUrgent = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft > 0) {
      soundEffects.playTick(isUrgent);
      if (isUrgent) {
        soundEffects.playHeartbeat();
      }
    } else if (timeLeft === 0) {
      onTimeout();
    }
  }, [timeLeft, isActive, isUrgent, onTimeout]);

  let strokeColor = '#f59e0b'; // amber-500
  if (isCritical) strokeColor = '#ef4444'; // red-500
  else if (isUrgent) strokeColor = '#f97316'; // orange-500

  return (
    <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
      {/* Outer Pulse when urgent */}
      {isActive && isUrgent && (
        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping pointer-events-none" />
      )}

      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        {/* Background track */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#1e293b"
          strokeWidth="6"
          fill="rgba(15, 23, 42, 0.85)"
        />
        {/* Animated Progress Arc */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={strokeColor}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>

      {/* Central Numeric Counter */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-black tabular-nums tracking-tighter text-xl sm:text-2xl transition-colors ${
            isCritical
              ? 'text-red-400 animate-pulse'
              : isUrgent
              ? 'text-orange-400'
              : 'text-amber-300'
          }`}
        >
          {timeLeft}
        </span>
        <span className="text-[9px] uppercase tracking-wider text-slate-400 -mt-1 font-semibold">
          SEC
        </span>
      </div>
    </div>
  );
};
