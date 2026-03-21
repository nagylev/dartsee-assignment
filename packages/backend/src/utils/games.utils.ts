import {
  GameDetailsDto,
  GameSummaryDto,
  GameTypeCountGroupRow,
  GameTypePlayCount,
  PlayerRoundDto,
  RoundDto,
  ThrowDto,
} from 'src/types/games.types';

import { games, throws } from '../../generated/prisma/client';
import { PlayerDto } from '../types/player.types';

export function mapThrowsToGameDetailsDto(
  game: games,
  throws: throws[],
  players: PlayerDto[],
): GameDetailsDto {
  if (throws.length === 0) {
    throw new Error('No throws found for game');
  }

  const filteredOrderedThrows = filterAndOrderThrows(throws);

  const rounds = mapThrowsToRoundDto(filteredOrderedThrows);

  const playerRounds = mapRoundsToPlayerRounds(rounds, players);

  return {
    gameId: game.id,
    gameType: game.type,
    playerCount: players.length,
    players: players,
    playerRounds: playerRounds,
  };
}

function mapThrowRowToDto(row: throws, indexInRound: number): ThrowDto {
  return {
    throwIndex: indexInRound,
    score: row.score ?? 0,
    modifier: row.modifier ?? 0,
    x: row.x ?? 0,
    y: row.y ?? 0,
  };
}

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

function filterAndOrderThrows(throws: throws[]): throws[] {
  const filteredThrowRows = throws.filter(
    (row): row is throws & { player_id: string } => row.player_id !== null,
  );
  return filteredThrowRows.sort((a, b) => a.id - b.id);
}

function mapThrowsToRoundDto(throws: throws[]): RoundDto[] {
  const rounds: RoundDto[] = [];
  for (const row of throws) {
    const playerId = row.player_id;
    const last = rounds.length > 0 ? rounds[rounds.length - 1] : undefined;
    if (last?.playerId === playerId) {
      last.throws.push(mapThrowRowToDto(row, last.throws.length + 1));
    } else {
      rounds.push({
        roundIndex: rounds.length + 1,
        playerId: playerId!,
        throws: [mapThrowRowToDto(row, 1)],
      });
    }
  }
  return rounds;
}

function mapRoundsToPlayerRounds(
  rounds: RoundDto[],
  players: PlayerDto[],
): PlayerRoundDto[] {
  const playerRounds = rounds.reduce((acc, round) => {
    if (!acc.has(round.playerId)) {
      const player = players.find((p) => p.id === round.playerId);
      if (!player) {
        throw new Error(
          `Player not found for id: ${round.playerId} when mapping to rounds`,
        );
      }
      acc.set(round.playerId, { player, rounds: [round] });
    } else {
      acc.get(round.playerId)?.rounds.push(round);
    }
    return acc;
  }, new Map<string, PlayerRoundDto>());

  return Array.from(playerRounds.values());
}
