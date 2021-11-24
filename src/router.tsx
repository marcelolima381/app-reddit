import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Subreddit from './pages/subreddit';
import ThreadDetail from './pages/thread-detail';

const AppRouter = (): ReactElement => (
  <Router>
    <Routes>
      <Route element={<Subreddit />} path="/" />
      <Route element={<ThreadDetail />} path="/thread/:threadId" />
    </Routes>
  </Router>
);

export default AppRouter;
