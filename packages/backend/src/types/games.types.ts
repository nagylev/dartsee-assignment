import { ApiProperty } from '@nestjs/swagger';

import { PlayerDto } from './player.types';

export class GameTypesDto {
  @ApiProperty({
    type: [String],
    description: 'The list of game types',
    example: ['shanghai', 'killer', 'beer'],
  })
  types: string[];
  @ApiProperty({
    type: Number,
    description: 'The total number of game types',
    example: 3,
  })
  totalTypesCount: number;
}

export class GameTypePlayCountDto {
  @ApiProperty({ example: 'shanghai' })
  type: string;

  @ApiProperty({ example: 12 })
  count: number;
}

export class GameTypePopularityDto {
  @ApiProperty({ type: [GameTypePlayCountDto] })
  gameWithCount: GameTypePlayCountDto[];

  @ApiProperty({
    type: Number,
    description: 'The total number of unique game types',
    example: 1,
  })
  totalCount: number;
}

export class GameSummaryDto {
  @ApiProperty({ type: Number, description: 'The game id', example: 1 })
  gameId: number;

  @ApiProperty({
    type: String,
    description: 'The game type',
    example: 'shanghai',
    nullable: true,
  })
  gameType: string | null;
  @ApiProperty({
    type: Number,
    description: 'The number of players who played this game',
    example: 1,
  })
  playerCount: number;

  @ApiProperty({
    type: [PlayerDto],
    description: 'The players who played this game',
  })
  players: PlayerDto[];
}

export type GameTypeCountGroupRow = {
  type: string | null;
  _count: { type: number };
};

export type GameTypePlayCount = {
  type: string;
  count: number;
};
