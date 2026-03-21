import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ThrowsService } from 'src/throws/throws.service';
import { GameSummaryDto, GameTypePlayCount } from 'src/types/games.types';
import {
  mapGameTypePlayCount,
  mapThrowsToGameDetailsDto,
  mapToGameSummaryDto,
} from 'src/utils/games.utils';

import { games } from '../../generated/prisma/client';
import { PlayersService } from '../players/players.service';

@Injectable()
export class GamesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly playersService: PlayersService,
    private readonly throwsService: ThrowsService,
  ) {}

  async getGameDetails(gameId: number) {
    const game = await this.prisma.games.findUnique({
      where: { id: gameId },
    });
    if (!game) {
      throw new Error('Game not found');
    }
    const [players, throws] = await Promise.all([
      this.playersService.getGamePlayers(gameId),
      this.throwsService.getThrows(gameId),
    ]);
    return mapThrowsToGameDetailsDto(game, throws, players);
  }

  async getGamesSummary(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<GameSummaryDto[]> {
    const games = await this.getGames(page, pageSize);
    const playerPromises = games.map(async (game): Promise<GameSummaryDto> => {
      const players = await this.playersService.getGamePlayers(game.id);
      return mapToGameSummaryDto(game, players);
    });
    return await Promise.all(playerPromises);
  }

  async getGamePopularityStats(): Promise<GameTypePlayCount[]> {
    const rows = await this.prisma.games.groupBy({
      by: ['type'],
      where: { type: { not: null } },
      _count: { type: true },
    });
    return mapGameTypePlayCount(rows);
  }

  async getGameTypes(): Promise<string[]> {
    const rows = await this.prisma.games.findMany({
      distinct: ['type'],
      where: { type: { not: null } },
    });
    const types = rows.map((row) => row.type);

    return types.filter((type) => type !== null);
  }

  async getGamePlayedCount(): Promise<number> {
    const games = await this.prisma.games.findMany({
      where: { type: { not: null } },
    });
    return games.length;
  }

  private async getGames(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<games[]> {
    const skip = (page - 1) * pageSize;
    return this.prisma.games.findMany({
      skip: Number.isNaN(skip) ? 0 : skip,
      take: pageSize,
    });
  }
}
