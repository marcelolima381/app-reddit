import { ReactElement } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Identifiers } from '../../common/services';
import { IThread } from '../../common/types';
import Vote from '../vote';

function Thread(props: {
  showCommentsInfo: boolean;
  thread: IThread;
  canDeleteThread: boolean;
}): ReactElement {
  const { showCommentsInfo, thread, canDeleteThread } = props;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteThread = (deletedThreadId: number) => {
    queryClient.setQueryData<IThread[]>(
      Identifiers.GET_THREADS,
      (oldData: IThread[] | undefined): IThread[] => {
        if (oldData) {
          return oldData.filter(
            (subredditThread: IThread) => subredditThread.id !== deletedThreadId
          );
        }

        return oldData as unknown as IThread[];
      }
    );
  };

  return (
    <Card className="my-4">
      <Card.Body className="d-flex flex-row px-0">
        <Col xs={1}>
          <Vote direction="vertical" upvotes={thread.upvotes} />
        </Col>
        <Col xs={11}>
          <div>
            <p>Posted by u/{thread.author} {canDeleteThread && (
              <FontAwesomeIcon
                className="clickable"
                icon={faTrash}
                onClick={() => deleteThread(thread.id)}
              />
            )}</p>
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
