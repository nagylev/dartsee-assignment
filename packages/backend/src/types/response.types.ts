import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

export class PageResponseDto<T> {
  @ApiProperty({ isArray: true, description: 'The data' })
  data: T[];
  @ApiProperty({ type: Number, description: 'The total number of items' })
  total: number;
  @ApiProperty({ type: Number, description: 'The page number' })
  page: number;
  @ApiProperty({ type: Number, description: 'The page size' })
  pageSize: number;
}

export const ApiPageResponse = <TModel extends Type<unknown>>(
  model: TModel,
  description: string,
) =>
  applyDecorators(
    ApiExtraModels(PageResponseDto, model),
    ApiOkResponse({
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
