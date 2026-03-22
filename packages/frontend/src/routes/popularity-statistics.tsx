import { createFileRoute } from '@tanstack/react-router';

import { PopularityStatisticsComponent } from '@/components/PopularityStatisticsComponent.tsx';
import { useGetGamesPopularity } from '@/hooks/useGetGamesPopularity.ts';

export const Route = createFileRoute('/popularity-statistics')({
  component: RouteComponent,
});

function RouteComponent() {
  const statistics = useGetGamesPopularity();
  if (statistics.isLoading || !statistics.data) {
    return <div>Loading...</div>;
  }
  return (
    <PopularityStatisticsComponent
      types={statistics.data.gameWithCount}
      totalCount={statistics.data.totalCount}
    />
  );
}
