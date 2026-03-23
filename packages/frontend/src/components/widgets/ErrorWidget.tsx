import { OctagonX } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ErrorProps {
  message: string;
}

export function ErrorWidget({ message }: ErrorProps) {
  return (
    <Alert>
      <OctagonX />
      <AlertTitle>The following error occurred</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
