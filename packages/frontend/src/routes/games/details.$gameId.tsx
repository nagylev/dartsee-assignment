import { createFileRoute } from '@tanstack/react-router';

import { GamesDetailsComponent } from '@/components/GamesDetailsComponent.tsx';
import { LoadingWidget } from '@/components/widgets/LoadingWidget.tsx';
import { useGetGameDetails } from '@/hooks/useGetGameDetails.ts';

export const Route = createFileRoute('/games/details/$gameId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { gameId } = Route.useParams();

  const gameDetails = useGetGameDetails(gameId as string);

  if (gameDetails.isLoading || !gameDetails.data) {
    return <LoadingWidget />;
  }

  return (
    <GamesDetailsComponent
      gameDetails={gameDetails.data.data}
      errorMessage={gameDetails.data.errorMessage}
    />
  );
}
