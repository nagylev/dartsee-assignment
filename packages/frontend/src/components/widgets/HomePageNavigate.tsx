import { Link } from '@tanstack/react-router';

interface HomePageNavigateProps {
  to: string;
  text: string;
}

export function HomePageNavigate({ to, text }: HomePageNavigateProps) {
  return (
    <Link
      className="inline-flex items-center bg-primary text-lg px-8 py-8 rounded-xl gap-2 tracking-wider text-primary-foreground font-bold"
      to={to}
    >
      {text}
    </Link>
  );
}
