import type { PageResponseDto, ResponseDto } from '../../generated-api';

export type PageResponse<T> = Omit<PageResponseDto, 'data'> & { data: T[] };

export type Response<T> = Omit<ResponseDto, 'data'> & { data: T };
