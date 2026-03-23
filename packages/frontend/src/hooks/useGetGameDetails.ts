import { useQuery } from '@tanstack/react-query';

import { getGamesDetails } from '@/services/games.services.ts';

export function useGetGameDetails(gameId: string) {
  return useQuery({
    queryKey: ['gameDetails', gameId],
    queryFn: () => getGamesDetails(gameId),
  });
}
