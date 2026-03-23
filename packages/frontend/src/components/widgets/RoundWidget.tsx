import { calculateThrowValues } from '@/utils/games.utils';

import type { RoundDto, ThrowDto } from '../../../generated-api';

interface RoundWidgetProps {
  round: RoundDto;
}

export function RoundWidget({ round }: RoundWidgetProps) {
  const throwTypes: Record<number, string> = {
    0: 'Miss',
    1: 'Single',
    2: 'Double',
    3: 'Triple',
  };
  const throwValues = calculateThrowValues(round.throws);

  const roundRow = (round: number, score: number, avg: string) => {
    return (
      <div className="flex flex-row items-center justify-between pb-2 my-2 border-b">
        <span>ROUND {round}</span>
        <span>
          Total: {score} • Avg: {avg}
        </span>
      </div>
    );
  };

  const throwRow = (throwIndex: number, t: ThrowDto) => {
    const miss = t.modifier === 0;
    const throwTypeLabel = throwTypes[t.modifier] ?? 'Unknown';

    return (
      <div className="flex flex-row items-center justify-between">
        <span>
          <span className="mr-2"> {throwIndex}. </span>
          <span>{miss ? 'X' : t.score}</span>
        </span>
        <span>
          <span> {t.modifier * t.score} </span>
          <span className="ml-2"> {throwTypeLabel} </span>
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col m-2">
      <div className="flex flex-col border rounded-lg p-4">
        {roundRow(round.roundIndex, throwValues.score, throwValues.average)}

        {round.throws.map((t, index) => (
          <div key={`${round.roundIndex}-${index}`}>
            {throwRow(index + 1, t)}
          </div>
        ))}
      </div>
    </div>
  );
}
