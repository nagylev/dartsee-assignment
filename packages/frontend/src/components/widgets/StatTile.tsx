export interface StatTileProps {
  label: string;
  value: string | number;
  Icon: React.ElementType;
}

export function StatTile({ label, value, Icon }: StatTileProps) {
  return (
    <div className="flex flex-col rounded-xl border p-4 items-center">
      <Icon className="w-6 h-6  mx-auto mb-1" />
      <span className="text-2xl font-black text-card-foreground block">
        {value}
      </span>
      <span className="text-xs text-muted-foreground uppercase">{label}</span>
    </div>
  );
}
