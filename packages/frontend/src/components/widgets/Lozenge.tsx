interface Lozenge {
  text: string;
}

export function Lozenge({ text }: Lozenge) {
  return (
    <span className="text-xs font-display font-bold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground">
      {text}
    </span>
  );
}
