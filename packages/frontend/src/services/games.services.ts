import { getGameDetails, getGameSummary } from '@/api/games.ts';
import type { PageResponse, Response } from '@/types/response.types.ts';

import type { GameDetailsDto, GameSummaryDto } from '../../generated-api';

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

export async function getGamesDetails(
  gameId: string,
): Promise<Response<GameDetailsDto>> {
  const response = await getGameDetails(gameId);
  return {
    ...response,
    data: response.data as GameDetailsDto,
  };
}
