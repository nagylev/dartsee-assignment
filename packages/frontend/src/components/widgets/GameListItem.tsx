import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

import { Lozenge } from '@/components/widgets/Lozenge.tsx';

import type { GameSummaryDto } from '../../../generated-api';

interface GameListItemProps {
  game: GameSummaryDto;
}
export function GameListItem({ game }: GameListItemProps) {
  const playerName = game.players.map((player) => player.name).join(', ');
  return (
    <Link
      to={`/games/details/${game.gameId}`}
      role="listitem"
      className="flex items-center justify-between rounded-xl border p-5 hover:border-primary/40"
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          {game.gameId}#
          <Lozenge text={game.gameType!} />
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          {game.playerCount} player • {playerName}
        </p>
      </div>
      <ChevronRight className="w-5 h-5" />
    </Link>
  );
}
