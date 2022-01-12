import { Fragment, ReactElement } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from 'react-query';

import { Identifiers, RedditService } from '../../common/services';
import { IComment, IThread } from '../../common/types';
import Comment from '../../components/comment';
import RequestError from '../../components/request-error';
import Thread from '../../components/thread';

type Inputs = {
  comment: string;
};

function ThreadDetail(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const queryClient = useQueryClient();
  const queryThread = useQuery(Identifiers.GET_THREAD, () =>
    RedditService.getThread()
  );
  const querySucessStatus = queryThread.isSuccess && queryThread.isFetched;
  const onSubmit: SubmitHandler<Inputs> = (newCommentForm) => {
    queryClient.setQueryData<IThread>(
      Identifiers.GET_THREAD,
      (oldData: IThread | undefined): IThread => {
        if (querySucessStatus && oldData) {
          oldData.comments.push({
            id: Math.random(),
            author: queryThread.data.author,
            imageUrl:
              'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
            content: newCommentForm.comment,
            upvotes: 0,
          });
        }

        return oldData as IThread;
      }
    );
  };

  if (queryThread.isLoading) {
    return <Spinner animation="border" />;
  }

  if (querySucessStatus) {
    return (
      <Container className="thread">
        <Row>
          <Col xs={12}>
            <Thread
              canDeleteThread={false}
              showCommentsInfo={false}
              thread={queryThread.data}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row gap-2" xs={12}>
            <Card>
              <Card.Body>
                {querySucessStatus &&
                queryThread.data?.comments.length === 0 ? (
                  <Card>
                    <Card.Body>No comments found</Card.Body>
                  </Card>
                ) : (
                  queryThread.data.comments.map((comment: IComment) => (
                    <Fragment key={comment.id}>
                      <Comment comment={comment} key={comment.id} />
                      <hr />
                    </Fragment>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row gap-2" xs={12}>
            <Card className="w-100">
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>New comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Comment here"
                      rows={3}
                      type="tmapsext"
                      {...register('comment', { required: true })}
                    />
                    {errors.comment && (
                      <Form.Text id="passwordHelpBlock" muted>
                        The comment field is empty. Please fill it to be able to
                        submit.
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
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
