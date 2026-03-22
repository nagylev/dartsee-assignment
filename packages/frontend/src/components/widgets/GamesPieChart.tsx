import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import type { GameTypePlayCountDto } from 'generated-api/api';
import { Pie } from 'react-chartjs-2';

import { mapToPieChartData } from '@/utils/pieChart.utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GamesPieChartProps {
  types: GameTypePlayCountDto[];
  totalCount: number;
}

export function GamesPieChart({ types, totalCount }: GamesPieChartProps) {
  const data = mapToPieChartData(types, totalCount);

  return (
    <div className="border rounded-xl p-4">
      <Pie data={data} />
    </div>
  );
}
