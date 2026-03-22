import { getGameSummary } from '@/api/games.ts';
import type { PageResponse } from '@/types/response.types.ts';

import type { GameSummaryDto } from '../../generated-api';

export async function getGamesSummary(
  page?: number,
  perPage?: number,
): Promise<PageResponse<GameSummaryDto>> {
  const response = await getGameSummary(page, perPage);
  return {
    ...response,
    data: response.data as GameSummaryDto[],
  };
}
