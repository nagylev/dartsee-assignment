import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GameTypePopularityDto, GameTypesDto } from 'src/types/games.types';

import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('types')
  @ApiResponse({
    status: 200,
    description: 'The list of game types',
    type: GameTypesDto,
  })
  async getGameTypes(): Promise<GameTypesDto> {
    const types = await this.gamesService.getGameTypes();
    return { types: types, totalTypesCount: types.length };
  }
  @Get('games-popularity')
  @ApiResponse({
    status: 200,
    description: 'The popularity of game types',
    type: GameTypePopularityDto,
  })
  async getGameTypeStats(): Promise<GameTypePopularityDto> {
    const gameWithCount = await this.gamesService.getGamePopularityStats();
    return { gameWithCount, totalCount: gameWithCount.length };
  }
}
