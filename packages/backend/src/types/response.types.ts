import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({ description: 'The data', required: false })
  data?: T;

  @ApiProperty({
    type: Boolean,
    description: 'Whether the request was successful',
    example: false,
  })
  error: boolean;

  @ApiProperty({
    type: String,
    description: 'The error message',
    required: false,
  })
  errorMessage?: string;
}

export const ApiCallResponse = <TModel extends Type<unknown>>(
  model: TModel,
  description: string,
) =>
  applyDecorators(
    ApiExtraModels(ResponseDto, model),
    ApiOkResponse({
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                nullable: true,
                allOf: [{ $ref: getSchemaPath(model) }],
              },
            },
          },
        ],
      },
    }),
  );

export class PageResponseDto<T> {
  @ApiProperty({
    description: 'The data',
    type: 'array',
    items: { type: 'object', additionalProperties: true },
  })
  data: T[];
  @ApiProperty({ type: Number, description: 'The total number of pages' })
  pageCount: number;
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
