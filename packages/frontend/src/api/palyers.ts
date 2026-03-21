import { apiClient } from '@/api-client';

import type { AllTimePlayerNumberDto } from '../../generated-api';

export async function getAllTimePlayerCount(): Promise<AllTimePlayerNumberDto> {
  const response = await apiClient.playersControllerGetAllTimePlayerNumber();
  return response.data;
}
