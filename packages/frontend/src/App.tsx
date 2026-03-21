import './App.css';
import { queryClient } from './utils/query.utils';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World</h1>
    </QueryClientProvider>
  );
}

export default App;
