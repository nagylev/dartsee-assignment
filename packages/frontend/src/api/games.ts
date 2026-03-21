import { apiClient } from '@/api-client.ts';

import type { GamePlayedDto, GameTypesDto } from '../../generated-api';

export async function getGameTypes(): Promise<GameTypesDto> {
  const response = await apiClient.gamesControllerGetGameTypes();
  return response.data;
}

export async function getAllPlayedGamesCount(): Promise<GamePlayedDto> {
  const response = await apiClient.gamesControllerGetGamePlayedCount();
  return response.data;
}
