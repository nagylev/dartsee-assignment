import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlayerDto } from 'src/types/player.types';
import { mapPlayerToPlayerDto } from 'src/utils/palyer.utils';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService) {}

  async getGamePlayers(gameId: number): Promise<PlayerDto[]> {
    const games = await this.prisma.game_players.findMany({
      where: {
        game_id: gameId,
      },
    });
    const playerIds: string[] = games.reduce((acc, game) => {
      if (game.player_id) {
        acc.push(game.player_id);
      }
      return acc;
    }, [] as string[]);
    return this.getPlayersByPlayerIds(playerIds);
  }

  async getPlayersByPlayerIds(playerIds: string[]): Promise<PlayerDto[]> {
    const players = await this.prisma.players.findMany({
      where: {
        id: { in: playerIds },
      },
    });
    return players.map(mapPlayerToPlayerDto);
  }

  async getAllTimePlayerNumber(): Promise<number> {
    const players = await this.prisma.players.findMany({
      distinct: ['id'],
    });
    return players.length;
  }
}
