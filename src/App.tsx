import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { router } from './router';

const queryClient = new QueryClient({});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);

export default App;
