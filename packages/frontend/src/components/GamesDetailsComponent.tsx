import type { GameDetailsDto } from 'generated-api/api';

import { ErrorWidget } from '@/components/widgets/ErrorWidget.tsx';
import { GamesHeader } from '@/components/widgets/GamesHeader.tsx';
import { PlayerThrowsInfo } from '@/components/widgets/PlayerThrowsInfo.tsx';

interface GamesDetailsComponentProps {
  gameDetails: GameDetailsDto;
  errorMessage?: string;
}

export function GamesDetailsComponent({
  gameDetails,
  errorMessage,
}: GamesDetailsComponentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4">
      <div className="w-2/3 min-w-0 max-w-full">
        <GamesHeader
          title={'GAME DETAILS'}
          subtitle={
            'Explore your performance in the game and see how you did in each round'
          }
        />
        <div className="flex flex-col gap-2">
          {errorMessage ? (
            <ErrorWidget message={errorMessage} />
          ) : (
            gameDetails.playerRounds.map((playerRound) => (
              <PlayerThrowsInfo playerRound={playerRound} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
