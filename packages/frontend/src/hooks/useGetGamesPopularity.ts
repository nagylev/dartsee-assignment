import { useQuery } from '@tanstack/react-query';

import { getGamesPopularity } from '@/api/games';

export function useGetGamesPopularity() {
  return useQuery({
    queryKey: ['games-popularity'],
    queryFn: () => getGamesPopularity(),
  });
}
