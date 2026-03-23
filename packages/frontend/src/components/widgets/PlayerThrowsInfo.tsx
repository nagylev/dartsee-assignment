import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import { RoundWidget } from '@/components/widgets/RoundWidget.tsx';
import { calculatePlayerRoundValues } from '@/utils/games.utils';

import type { PlayerRoundDto } from '../../../generated-api';

interface UserThrowsProps {
  playerRound: PlayerRoundDto;
}

export function PlayerThrowsInfo({ playerRound }: UserThrowsProps) {
  const playerRoundValues = calculatePlayerRoundValues(playerRound);
  return (
    <Accordion
      type="single"
      collapsible
      className="min-w-0 max-w-full rounded-lg border"
    >
      <AccordionItem
        value={playerRound.player.name}
        className="border-b pl-4 pr-4 last:border-b-0"
      >
        <AccordionTrigger>
          <div className="flex w-full min-w-0 flex-row items-center justify-between pr-2">
            <div className="flex flex-col">
              <span>{playerRound.player.name}</span>
              <span>
                {playerRoundValues.misses} miss • Avg{' '}
                {playerRoundValues.average}
              </span>
            </div>
            <span className="whitespace-nowrap">
              {playerRoundValues.score} pts
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-0.5 pt-2 border-t">
            {playerRound.rounds.map((round) => (
              <RoundWidget round={round} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
