import type { GameDetailsDto } from 'generated-api/api';

import { ErrorWidget } from '@/components/widgets/ErrorWidget.tsx';
import { PageWidget } from '@/components/widgets/PageWidget.tsx';
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
    <PageWidget
      title="GAME DETAILS"
      subtitle="Explore your performance in the game and see how you did in each round"
    >
      <div className="flex flex-col gap-2">
        {errorMessage ? (
          <ErrorWidget message={errorMessage} />
        ) : (
          gameDetails.playerRounds.map((playerRound) => (
            <PlayerThrowsInfo playerRound={playerRound} />
          ))
        )}
      </div>
    </PageWidget>
  );
}
