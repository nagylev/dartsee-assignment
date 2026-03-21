import {
  GameSummaryDto,
  GameTypeCountGroupRow,
  GameTypePlayCount,
} from 'src/types/games.types';

import { games } from '../../generated/prisma/client';
import { PlayerDto } from '../types/player.types';

export function mapGameTypePlayCount(
  rows: GameTypeCountGroupRow[],
): GameTypePlayCount[] {
  const filteredRows = rows.filter(
    (row): row is GameTypeCountGroupRow & { type: string } => row.type !== null,
  );

  return filteredRows.map((row) => ({
    type: row.type,
    count: row._count.type,
  }));
}

export function mapToGameSummaryDto(
  game: games,
  players: PlayerDto[],
): GameSummaryDto {
  return {
    gameId: game.id,
    gameType: game.type,
    playerCount: players.length,
    players: players,
  };
}
