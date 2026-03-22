import { useQuery } from '@tanstack/react-query';

import { getGamesSummary } from '@/services/games.services.ts';

export function useGetGamesSummary(page?: number, perPage?: number) {
  return useQuery({
    queryKey: ['games-summary', page, perPage],
    queryFn: () => getGamesSummary(page, perPage),
  });
}
