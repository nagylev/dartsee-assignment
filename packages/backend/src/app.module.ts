import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), GamesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
