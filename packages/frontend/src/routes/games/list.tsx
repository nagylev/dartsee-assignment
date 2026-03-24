import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { GamesListComponent } from '@/components/GamesListComponent.tsx';
import { LoadingWidget } from '@/components/widgets/LoadingWidget.tsx';
import { useGetGamesSummary } from '@/hooks/useGetGamesSummary.ts';

const gamesListSchema = z.object({
  page: z.number().default(1),
  perPage: z.number().default(5),
});

export const Route = createFileRoute('/games/list')({
  component: RouteComponent,
  validateSearch: gamesListSchema,
});

function RouteComponent() {
  const { page, perPage } = Route.useSearch();
  const gamesSummary = useGetGamesSummary(page, perPage);
  if (gamesSummary.isLoading || !gamesSummary.data) {
    return <LoadingWidget />;
  }
  return (
    <GamesListComponent
      page={gamesSummary.data.page}
      perPage={gamesSummary.data.pageSize}
      pageCount={gamesSummary.data.pageCount}
      gamesSummary={gamesSummary.data.data}
    />
  );
}
