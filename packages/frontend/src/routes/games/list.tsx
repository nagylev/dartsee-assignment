import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const gamesListSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
});

export const Route = createFileRoute('/games/list')({
  component: RouteComponent,
  validateSearch: gamesListSchema,
});

function RouteComponent() {
  const { page, limit } = Route.useSearch();
  console.log(page, limit);

  return <div>Hello "/games/list"!</div>;
}
