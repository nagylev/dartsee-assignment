import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameTypePlayCount } from 'src/types/games.types';
import { mapGameTypePlayCount } from 'src/utils/games.utils';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

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
}
