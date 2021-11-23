import { ReactElement } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import './style.css';

function ThreadHeader(): ReactElement {
  return (
    <Row className="thread-header py-2 m-auto mt-5">
      <Col
        className="thread-header__content d-flex flex-row gap-4 m-auto"
        xs={12}
      >
        <div>
          <Image
            height={72}
            roundedCircle
            src="https://styles.redditmedia.com/t5_2mz580/styles/communityIcon_91qyk88t3y051.jpg?width=256&format=pjpg&s=296a830c026568cc5204a3bdd9ebd147be1cb3cf"
            width={72}
          />
        </div>
        <div>
          <h2>smurfdomuca</h2>
          <span>r/smurfdomuca</span>
        </div>
        <Button
          className="align-self-start fw-bold rounded-pill"
          color="primary"
          style={{ minWidth: '80px' }}
        >
          Join
        </Button>
      </Col>
    </Row>
  );
}

export default ThreadHeader;
