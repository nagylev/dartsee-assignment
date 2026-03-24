import type { GameTypePlayCountDto } from 'generated-api/api';

import { GamesPieChart } from '@/components/widgets/GamesPieChart.tsx';
import { PageWithTitleWidget } from '@/components/widgets/PageWithTitleWidget.tsx';

interface PopularityStatisticsComponentProps {
  types: GameTypePlayCountDto[];
  totalCount: number;
}

export function PopularityStatisticsComponent({
  types,
  totalCount,
}: PopularityStatisticsComponentProps) {
  return (
    <PageWithTitleWidget
      title="POPULARITY STATISTICS"
      subtitle="Different game types popularity based on the number of games played."
    >
      <GamesPieChart types={types} totalCount={totalCount} />
    </PageWithTitleWidget>
  );
}
