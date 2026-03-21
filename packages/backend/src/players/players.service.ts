import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { players } from '../../generated/prisma/client';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService) {}

  async getPlayersByPlayerIds(playerIds: string[]): Promise<players[]> {
    const players = await this.prisma.players.findMany({
      where: {
        id: { in: playerIds },
      },
    });
    return players.map((player) => ({
      id: player.id,
      name: player.name,
    }));
  }

  async getAllTimePlayerNumber(): Promise<number> {
    const players = await this.prisma.players.findMany({
      distinct: ['id'],
    });
    return players.length;
  }
}
