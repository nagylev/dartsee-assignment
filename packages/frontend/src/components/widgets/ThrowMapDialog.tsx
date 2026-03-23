import { Crosshair } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DartWidget } from '@/components/widgets/DartWidget.tsx';
import { getThrowsFromRounds } from '@/utils/games.utils.ts';

import type { RoundDto } from '../../../generated-api';

interface ThrowMapDialogProps {
  rounds: RoundDto[];
  playerName: string;
}

export function ThrowMapDialog({ rounds, playerName }: ThrowMapDialogProps) {
  const throws = getThrowsFromRounds(rounds);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Crosshair className="w-3.5 h-3.5" />
          View throw map
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Throw map for {playerName}
          </DialogTitle>
          <DialogDescription>
            <DartWidget throws={throws} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
