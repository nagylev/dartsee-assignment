import type { PlayerRoundDto, RoundDto, ThrowDto } from 'generated-api';

import type { PlayerRoundValues, ThrowValues } from '@/types/games.types';

export function calculateThrowValues(throws: ThrowDto[]): ThrowValues {
  const totalScore = throws.reduce((acc, t) => acc + t.modifier * t.score, 0);
  const averageScore = Number(totalScore / throws.length).toFixed(2);
  return {
    score: totalScore,
    average: averageScore,
  };
}

export function calculatePlayerRoundValues(
  playerRound: PlayerRoundDto,
): PlayerRoundValues {
  const totalScore = playerRound.rounds.reduce(
    (acc, round) => acc + calculateThrowValues(round.throws).score,
    0,
  );
  const throws = playerRound.rounds.reduce(
    (acc, round) => acc + round.throws.length,
    0,
  );
  const averageScore = Number(totalScore / throws).toFixed(2);
  const misses = playerRound.rounds.reduce(
    (acc, round) => acc + getMissesCountInRound(round),
    0,
  );
  return {
    score: totalScore,
    average: averageScore,
    misses: misses,
  };
}

function getMissesCountInRound(round: RoundDto): number {
  return round.throws.filter((t) => t.modifier === 0).length;
}
