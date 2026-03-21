import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import {
  GameSummaryDto,
  GameTypePopularityDto,
  GameTypesDto,
} from 'src/types/games.types';
import { ApiPageResponse } from 'src/types/response.types';

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

  @Get('summary')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiPageResponse(GameSummaryDto, 'The games summary')
  async getGames(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);
    const games = await this.gamesService.getGamesSummary(
      pageNumber,
      pageSizeNumber,
    );
    return {
      data: games,
      total: games.length,
      page: pageNumber ?? 1,
      pageSize: pageSizeNumber ?? 10,
    };
  }
}
