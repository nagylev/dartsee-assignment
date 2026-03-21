import { ApiProperty } from '@nestjs/swagger';

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

export type GameTypeCountGroupRow = {
  type: string | null;
  _count: { type: number };
};

export type GameTypePlayCount = {
  type: string;
  count: number;
};
