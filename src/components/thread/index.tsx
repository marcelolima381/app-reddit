import { ReactElement } from 'react';
import { Card, Col } from 'react-bootstrap';

import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

function Thread(): ReactElement {
  return (
    <Card className="thread m-auto my-4">
      <Card.Body className="d-flex flex-row px-0">
        <Col
          className="d-flex flex-column align-items-center justify-content-start gap-2"
          xs={1}
        >
          <FontAwesomeIcon icon={faArrowUp} />
          <span>453</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </Col>
        <Col xs={11}>
          <div>
            <p>Posted by u/SlimGust 4 hours ago</p>
            <h3>O PANO DE CHÃO COM CARA DO MUQUINHA ESTÁ VINDO</h3>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              autem culpa cumque excepturi, expedita harum iusto minima minus
              nobis non nostrum possimus ratione repudiandae ut velit. Adipisci
              praesentium provident quisquam!
            </text>
          </div>
          <div className="d-flex mt-2 gap-2 align-items-center">
            <FontAwesomeIcon icon={faCommentAlt} />
            <span>2 comments</span>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default Thread;
