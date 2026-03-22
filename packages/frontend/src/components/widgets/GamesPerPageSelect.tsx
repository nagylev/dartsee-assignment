import { useNavigate } from '@tanstack/react-router';

import { Field, FieldLabel } from '@/components/ui/field.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';

interface GamesPerPageSelectProps {
  perPage: number;
}

export function GamesPerPageSelect({ perPage }: GamesPerPageSelectProps) {
  const navigate = useNavigate({ from: '/games/list' });

  const LIMIT_OPTIONS = [5, 10, 15, 20, 25];

  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="select-rows-per-page">games per page</FieldLabel>
      <Select
        value={String(perPage)}
        onValueChange={(value) => {
          navigate({
            to: '/games/list',
            search: { page: 1, perPage: Number(value) },
          });
        }}
      >
        <SelectTrigger className="w-20" id="select-rows-per-page">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="start">
          <SelectGroup>
            {LIMIT_OPTIONS.map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
