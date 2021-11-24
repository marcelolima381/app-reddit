import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import SubredditHeader from '../../components/subreddit-header';
import Thread from '../../components/thread';

function Subreddit(): ReactElement {
  return (
    <Container className="thread-background px-0" fluid>
      <SubredditHeader />
      <Thread showCommentsInfo />
    </Container>
  );
}

export default Subreddit;
