import { GamesHeader } from '@/components/widgets/GamesHeader.tsx';
import { PageWidget } from '@/components/widgets/PageWidget.tsx';

interface PageWithTitleWidgetProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function PageWithTitleWidget({
  children,
  title,
  subtitle,
}: PageWithTitleWidgetProps) {
  return (
    <PageWidget>
      <GamesHeader title={title} subtitle={subtitle} />
      {children}
    </PageWidget>
  );
}
