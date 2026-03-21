import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { PlayersModule } from '../players/players.module';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PrismaService],
  imports: [PlayersModule],
})
export class GamesModule {}
