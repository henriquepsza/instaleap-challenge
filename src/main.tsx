import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ResponsiveLayout from './components/ResponsiveLayout.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ResponsiveLayout />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
