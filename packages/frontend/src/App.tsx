import './App.css';

import { QueryClientProvider } from '@tanstack/react-query';

import { Home } from '@/components/HomeComponent.tsx';

import { queryClient } from './utils/query.utils';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
