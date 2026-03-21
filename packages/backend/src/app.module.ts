import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { PrismaService } from './prisma/prisma.service';
import { ThrowsModule } from './throws/throws.module';

@Module({
  imports: [ConfigModule.forRoot(), GamesModule, PlayersModule, ThrowsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
