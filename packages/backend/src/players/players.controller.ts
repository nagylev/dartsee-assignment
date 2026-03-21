import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AllTimePlayerNumberDto } from 'src/types/player.types';

import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('all-time-count')
  @ApiResponse({
    status: 200,
    description: 'The total number of players who played',
    type: AllTimePlayerNumberDto,
  })
  async getAllTimePlayerNumber(): Promise<AllTimePlayerNumberDto> {
    return { totalCount: await this.playersService.getAllTimePlayerNumber() };
  }
}
