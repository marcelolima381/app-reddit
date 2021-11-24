import { ReactElement } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import Comment from '../../components/comment';
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
        <Col className="d-flex flex-row gap-2" xs={12}>
          <Card>
            <Card.Body>
              <Comment />
              <hr />
              <Comment />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ThreadDetail;
