import { GamesHeader } from '@/components/widgets/GamesHeader.tsx';

interface PageWidgetProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function PageWidget({ children, title, subtitle }: PageWidgetProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4">
      <div className="w-2/3 min-w-0 max-w-full">
        <GamesHeader title={title} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
}
