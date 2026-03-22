import type { GameTypePlayCountDto } from 'generated-api/api';

import { GamesHeader } from '@/components/widgets/GamesHeader.tsx';
import { GamesPieChart } from '@/components/widgets/GamesPieChart.tsx';

interface PopularityStatisticsComponentProps {
  types: GameTypePlayCountDto[];
  totalCount: number;
}

export function PopularityStatisticsComponent({
  types,
  totalCount,
}: PopularityStatisticsComponentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4">
      <div className="w-2/3 min-w-0 max-w-full">
        <GamesHeader
          title={'POPULARITY STATISTICS'}
          subtitle={
            'Different game types popularity based on the number of games played.'
          }
        />
        <GamesPieChart types={types} totalCount={totalCount} />
      </div>
    </div>
  );
}
