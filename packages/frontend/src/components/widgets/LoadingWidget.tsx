import { Skeleton } from '@/components/ui/skeleton.tsx';
import { PageWidget } from '@/components/widgets/PageWidget.tsx';

export function LoadingWidget() {
  return (
    <PageWidget>
      <div className="flex min-h-screen w-full flex-col gap-2">
        <Skeleton className="min-h-0 w-full grow rounded-4xl" />
        <Skeleton className="min-h-0 w-full grow-[2] rounded-4xl" />
      </div>
    </PageWidget>
  );
}
