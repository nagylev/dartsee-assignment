import { ApiProperty } from '@nestjs/swagger';

export class AllTimePlayerNumberDto {
  @ApiProperty({
    type: Number,
    description: 'The total number of players',
    example: 100,
  })
  totalCount: number;
}
