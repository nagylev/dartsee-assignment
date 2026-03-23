import type { ChartData } from 'chart.js';

import type { GameTypePlayCountDto } from '../../generated-api';

export function mapToPieChartData(
  types: GameTypePlayCountDto[],
  totalCount: number,
): ChartData<'pie'> {
  const colors = generateRgbSegmentColors(totalCount);
  return {
    labels: types.map((type) => type.type),
    datasets: [
      {
        label: 'Number of games played',
        data: types.map((type) => type.count),
        backgroundColor: colors,
        borderColor: ['rgb(255, 255, 255)'],
        borderWidth: 4,
      },
    ],
  };
}

function generateRgbSegmentColors(n: number): string[] {
  if (n <= 0) {
    return [];
  }
  const min = 72;
  const span = 255 - min;
  const third = (2 * Math.PI) / 3;
  return Array.from({ length: n }, (_, i) => {
    const t = (2 * Math.PI * i) / n;
    const r = Math.round(min + span * (0.5 + 0.5 * Math.sin(t)));
    const g = Math.round(min + span * (0.5 + 0.5 * Math.sin(t + third)));
    const b = Math.round(min + span * (0.5 + 0.5 * Math.sin(t + 2 * third)));
    return `rgb(${r}, ${g}, ${b})`;
  });
}
