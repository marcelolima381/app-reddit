import { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ThreadHeader from '../../components/subreddit-header';
import Thread from '../../components/thread';

function ThreadDetail(): ReactElement {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ThreadHeader />
          <Thread showCommentsInfo={false} />
        </Col>
      </Row>
    </Container>
  );
}

export default ThreadDetail;
