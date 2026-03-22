import type { PageResponseDto } from '../../generated-api';

export type PageResponse<T> = Omit<PageResponseDto, 'data'> & { data: T[] };
