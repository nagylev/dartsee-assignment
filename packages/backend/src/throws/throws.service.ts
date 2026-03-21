import { Injectable } from '@nestjs/common';
import { throws } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ThrowsService {
  constructor(private readonly prisma: PrismaService) {}

  async getThrows(gameId: number): Promise<throws[]> {
    return this.prisma.throws.findMany({
      where: { game_id: gameId },
      orderBy: { id: 'asc' },
    });
  }
}
