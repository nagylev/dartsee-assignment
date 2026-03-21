import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
@Module({
  providers: [PlayersService, PrismaService],
  controllers: [PlayersController],
})
export class PlayersModule {}
