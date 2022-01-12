import { ReactElement } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IThread } from '../../common/types';
import Vote from '../vote';

function Thread(props: {
  showCommentsInfo: boolean;
  thread: IThread;
}): ReactElement {
  const { showCommentsInfo, thread } = props;
  const navigate = useNavigate();

  return (
    <Card className="my-4">
      <Card.Body className="d-flex flex-row px-0">
        <Col xs={1}>
          <Vote direction="vertical" upvotes={thread.upvotes} />
        </Col>
        <Col xs={11}>
          <div>
            <p>Posted by u/{thread.author}</p>
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
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
                {thread.comments.length > 1
                  ? `${thread.comments.length} comments`
                  : `${thread.comments.length} comment`}
              </span>
            </div>
          ) : null}
        </Col>
      </Card.Body>
    </Card>
  );
}

export default Thread;
