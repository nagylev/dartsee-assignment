import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootLayout = () => (
  <div className="flex flex-col items-center p-6">
    <Outlet />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
