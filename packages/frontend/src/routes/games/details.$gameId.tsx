import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/games/details/$gameId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { gameId } = Route.useParams();
  console.log(gameId);
  return <div>Hello "/games/details/$gameId"!</div>;
}
