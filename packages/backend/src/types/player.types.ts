import { ApiProperty } from '@nestjs/swagger';

export class AllTimePlayerNumberDto {
  @ApiProperty({
    type: Number,
    description: 'The total number of players',
    example: 100,
  })
  totalCount: number;
}

export class PlayerDto {
  @ApiProperty({
    type: String,
    description: 'The player id',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'The player name',
    example: 'Imre',
  })
  name: string;
}
