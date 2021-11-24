import { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Thread from '../../components/thread';

function ThreadDetail(): ReactElement {
  return (
    <Container className="thread">
      <Row>
        <Col xs={12}>
          <Thread showCommentsInfo={false} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="m-auto">teste</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ThreadDetail;
