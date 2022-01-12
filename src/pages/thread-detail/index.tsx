import { Fragment, ReactElement } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useQuery, useQueryClient } from 'react-query';

import { Identifiers, RedditService } from '../../common/services';
import { IComment } from '../../common/types';
import Comment from '../../components/comment';
import RequestError from '../../components/request-error';
import Thread from '../../components/thread';

function ThreadDetail(): ReactElement {
  const queryClient = useQueryClient();
  const queryThread = useQuery(Identifiers.GET_THREAD, () =>
    RedditService.getThread()
  );

  if (queryThread.isLoading) {
    return <Spinner animation="border" />;
  }

  if (queryThread.isSuccess && queryThread.isFetched) {
    return (
      <Container className="thread">
        <Row>
          <Col xs={12}>
            <Thread showCommentsInfo={false} thread={queryThread.data} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row gap-2" xs={12}>
            <Card>
              <Card.Body>
                {queryThread.data.comments.map((comment: IComment) => (
                  <Fragment key={comment.id}>
                    <Comment comment={comment} key={comment.id} />
                    <hr />
                  </Fragment>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  if (queryThread.isError) {
    return (
      <RequestError
        refetch={() =>
          new Promise(() =>
            queryClient.refetchQueries([Identifiers.GET_THREAD])
          )
        }
      />
    );
  }

  return <></>;
}

export default ThreadDetail;
