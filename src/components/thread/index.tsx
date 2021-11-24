import { ReactElement, useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IThread = {
  showCommentsInfo: boolean;
};

function Thread({ showCommentsInfo }: IThread): ReactElement {
  const [counter, setCounter] = useState<number>(453);
  const [thread, setThread] = useState({
    id: 155,
  });
  const navigate = useNavigate();

  useEffect(() => setThread({ id: 155 }), []);

  return (
    <Card className="my-4">
      <Card.Body className="d-flex flex-row px-0">
        <Col
          className="d-flex flex-column align-items-center justify-content-start gap-2"
          xs={1}
        >
          <FontAwesomeIcon
            className="clickable"
            icon={faArrowUp}
            onClick={() => setCounter((prevState) => prevState + 1)}
          />
          <span className="fw-bold">{counter}</span>
          <FontAwesomeIcon
            className="clickable"
            icon={faArrowDown}
            onClick={() => setCounter((prevState) => prevState - 1)}
          />
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
          {showCommentsInfo ? (
            <div className="d-flex mt-2 gap-2 align-items-center">
              <FontAwesomeIcon icon={faCommentAlt} />
              <span
                aria-hidden="true"
                className="clickable"
                onClick={() => navigate(`/thread/${thread.id}`)}
                role="link"
                tabIndex={0}
              >
                2 comments
              </span>
            </div>
          ) : null}
        </Col>
      </Card.Body>
    </Card>
  );
}

export default Thread;
