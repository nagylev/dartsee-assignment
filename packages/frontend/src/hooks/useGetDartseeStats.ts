import { useQuery } from '@tanstack/react-query';

import { getDartseeStats } from '@/services/dartseeStats.service';
import type { DartseeStat } from '@/types/stats';

export function useGetDartseeStats() {
  return useQuery<DartseeStat>({
    queryKey: ['dartseeStats'],
    queryFn: getDartseeStats,
  });
}
