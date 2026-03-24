interface PageWidgetProps {
  children: React.ReactNode;
}

export function PageWidget({ children }: PageWidgetProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4">
      <div className="w-2/3 min-w-0 max-w-full">{children}</div>
    </div>
  );
}
