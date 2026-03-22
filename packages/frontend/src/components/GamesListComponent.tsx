import type { GameSummaryDto } from 'generated-api';

import { GameListItem } from '@/components/widgets/GameListItem.tsx';
import { GamesListPagination } from '@/components/widgets/GamesListPagination.tsx';

import { GamesHeader } from './widgets/GamesHeader';

interface GamesListComponentProps {
  page: number;
  perPage: number;
  pageCount: number;
  gamesSummary: GameSummaryDto[];
}

export function GamesListComponent({
  page,
  perPage,
  pageCount,
  gamesSummary,
}: GamesListComponentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4">
      <div className="w-2/3 min-w-0 max-w-full">
        <GamesHeader
          title="ALL GAMES"
          subtitle="Scroll through all games played"
        />
        <div className="grid w-full grid-cols-1 gap-4">
          {gamesSummary.map((game) => (
            <GameListItem key={game.gameId} game={game} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <GamesListPagination
            currentPage={page}
            totalPages={pageCount}
            perPage={perPage}
          />
        </div>
      </div>
    </div>
  );
}
