import { ReactElement } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';

function ThreadHeader(): ReactElement {
  return (
    <Row className="my-5">
      <Col className="d-flex flex-row gap-4 mx-4" xs={12}>
        <Image
          height={72}
          roundedCircle
          src="https://styles.redditmedia.com/t5_2mz580/styles/communityIcon_91qyk88t3y051.jpg?width=256&format=pjpg&s=296a830c026568cc5204a3bdd9ebd147be1cb3cf"
          width={72}
        />
        <div>
          <h2>smurfdomuca</h2>
          <p>r/smurfdomuca</p>
        </div>
        <Button className="align-self-start w-25 fw-bold" color="primary">
          Join
        </Button>
      </Col>
    </Row>
  );
}

export default ThreadHeader;
