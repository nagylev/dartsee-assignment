import { getAllPlayedGamesCount, getGameTypes } from '@/api/games.ts';
import { getAllTimePlayerCount } from '@/api/palyers.ts';
import type { DartseeStat } from '@/types/stats.ts';

export async function getDartseeStats(): Promise<DartseeStat> {
  const [gamesPlayed, gameTypes, playerCount] = await Promise.all([
    getAllPlayedGamesCount(),
    getGameTypes(),
    getAllTimePlayerCount(),
  ]);

  return {
    gamesPlayed: gamesPlayed.totalGamesPlayedCount,
    gameTypes: gameTypes.totalTypesCount,
    playersNumber: playerCount.totalCount,
  };
}
