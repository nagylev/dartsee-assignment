import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/popularity-statistics')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/popularity-statistics"!</div>;
}
