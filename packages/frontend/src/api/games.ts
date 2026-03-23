import { apiClient } from '@/api-client.ts';

import type {
  GamePlayedDto,
  GamesControllerGetGameDetails200Response,
  GameTypePopularityDto,
  GameTypesDto,
  PageResponseDto,
} from '../../generated-api';

export async function getGameTypes(): Promise<GameTypesDto> {
  const response = await apiClient.gamesControllerGetGameTypes();
  return response.data;
}

export async function getGamesPopularity(): Promise<GameTypePopularityDto> {
  const response = await apiClient.gamesControllerGetGameTypeStats();
  return response.data;
}

export async function getAllPlayedGamesCount(): Promise<GamePlayedDto> {
  const response = await apiClient.gamesControllerGetGamePlayedCount();
  return response.data;
}

export async function getGameSummary(
  page?: number,
  perPage?: number,
): Promise<PageResponseDto> {
  const response = await apiClient.gamesControllerGetGamesSummary(
    page,
    perPage,
  );
  return response.data;
}

export async function getGameDetails(
  gameId: string,
): Promise<GamesControllerGetGameDetails200Response> {
  const response = await apiClient.gamesControllerGetGameDetails(gameId);
  return response.data;
}
