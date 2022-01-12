import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Subreddit from './pages/subreddit';
import ThreadDetail from './pages/thread-detail';

const AppRouter = (): ReactElement => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Subreddit />} path="/" />
          <Route element={<ThreadDetail />} path="/thread/:threadId" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default AppRouter;
