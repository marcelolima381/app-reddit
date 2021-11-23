import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import ThreadHeader from './components/header';

const App = (): ReactElement => (
  <Container className="thread-background" fluid>
    <ThreadHeader />
  </Container>
);

export default App;
