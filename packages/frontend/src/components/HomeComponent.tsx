import { Target, Trophy, Users } from 'lucide-react';

import { HomePageNavigate } from '@/components/widgets/HomePageNavigate.tsx';
import { StatTile } from '@/components/widgets/StatTile.tsx';
import { useGetDartseeStats } from '@/hooks/useGetDartseeStats.ts';

export function Home() {
  const { data: stats, isLoading } = useGetDartseeStats();

  if (isLoading || !stats) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className="mb-10 text-center">
        <h1 className="text-7xl font-bold mb-3">Dartsee</h1>
        <p className="text-muted-foreground text-lg">Tracking your games!</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10 w-full max-w-md">
        {[
          { icon: Target, label: 'Games played', value: stats.gamesPlayed },
          { icon: Users, label: 'Players', value: stats.playersNumber },
          { icon: Trophy, label: 'Game Types', value: stats.gameTypes },
        ].map(({ icon: Icon, label, value }) => (
          <StatTile key={label} Icon={Icon} label={label} value={value} />
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <HomePageNavigate to="/games/list" text="Games Played" />
        <HomePageNavigate to="/popularity-statistics" text="Statistics" />
      </div>
    </div>
  );
}
