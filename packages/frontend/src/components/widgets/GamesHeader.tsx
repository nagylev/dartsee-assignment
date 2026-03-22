interface GamesHeaderProps {
  title: string;
  subtitle: string;
}

export function GamesHeader({ title, subtitle }: GamesHeaderProps) {
  return (
    <div className="flex flex-col pl-4 mb-8">
      <h1 className="text-4xl font-black text-primary mb-1">{title}</h1>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
  );
}
