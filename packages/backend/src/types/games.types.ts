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

export class ThrowDto {
  @ApiProperty({ type: Number, description: 'The throw index', example: 1 })
  throwIndex: number;
  @ApiProperty({ type: Number, description: 'The throw score', example: 20 })
  score: number;
  @ApiProperty({ type: Number, description: 'The throw modifier', example: 1 })
  modifier: number;
  @ApiProperty({
    type: Number,
    description: 'The throw x coordinate',
    example: 516,
  })
  x: number;
  @ApiProperty({
    type: Number,
    description: 'The throw y coordinate',
    example: 322,
  })
  y: number;
}

export class RoundDto {
  @ApiProperty({ type: Number, description: 'The round index', example: 1 })
  roundIndex: number;
  @ApiProperty({
    type: String,
    description: 'The player id',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  playerId: string;
  @ApiProperty({ type: [ThrowDto], description: 'The throws in this round' })
  throws: ThrowDto[];
}

export class PlayerRoundDto {
  @ApiProperty({
    type: PlayerDto,
    description: 'The player who played this game',
  })
  player: PlayerDto;

  @ApiProperty({
    type: [RoundDto],
    description: "The player's rounds in this game",
  })
  rounds: RoundDto[];
}

export class GameDetailsDto extends GameSummaryDto {
  @ApiProperty({
    type: [PlayerRoundDto],
    description: 'The rounds in this game by players',
  })
  playerRounds: PlayerRoundDto[];
}

export type GameTypeCountGroupRow = {
  type: string | null;
  _count: { type: number };
};

export type GameTypePlayCount = {
  type: string;
  count: number;
};
