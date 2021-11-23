import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import RedditHeader from './components/reddit-header';
import Thread from './components/thread';

const App = (): ReactElement => (
  <Container className="thread-background px-0" fluid>
    <RedditHeader />
    <Thread />
  </Container>
);

export default App;
