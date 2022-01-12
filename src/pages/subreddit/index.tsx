import { ReactElement } from 'react';
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
import { ISubreddit, IThread } from '../../common/types';
import RequestError from '../../components/request-error';
import SubredditHeader from '../../components/subreddit-header';
import Thread from '../../components/thread';
import { MOCK_THREAD } from '../../mock';

type Inputs = {
  title: string;
  content: string;
};

function Subreddit(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const queryClient = useQueryClient();
  const querySubreddit = useQuery(Identifiers.GET_SUBREDDIT, () =>
    RedditService.getSubreddit()
  );
  const queryThreads = useQuery(Identifiers.GET_THREADS, () =>
    RedditService.getThreads()
  );
  const onSubmit: SubmitHandler<Inputs> = (newThreadForm) => {
    queryClient.setQueryData<IThread[]>(
      Identifiers.GET_THREADS,
      (oldData: IThread[] | undefined): IThread[] => {
        if (queryThreads && oldData) {
          oldData.push({
            id: Math.random(),
            author: MOCK_THREAD.author,
            title: newThreadForm.title,
            content: newThreadForm.content,
            upvotes: 0,
            comments: [],
          });
        }

        return oldData as IThread[];
      }
    );
  };

  if (querySubreddit.isLoading || queryThreads.isLoading) {
    return <Spinner animation="border" />;
  }

  if (
    querySubreddit.isSuccess &&
    querySubreddit.isFetched &&
    queryThreads.isSuccess &&
    queryThreads.isFetched
  ) {
    return (
      <Container className="thread-background px-0" fluid>
        <SubredditHeader querySubreddit={querySubreddit} />
        <div className="thread m-auto">
          {queryThreads.data.length === 0 ? (
            <Card>
              <Card.Body>No threads found</Card.Body>
            </Card>
          ) : (
            queryThreads.data.map((thread: IThread) => (
              <Thread
                canDeleteThread
                key={thread.id}
                showCommentsInfo
                thread={thread}
              />
            ))
          )}
        </div>
        <div className="thread m-auto">
          <h3>New thread</h3>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="comment">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder="Title here"
                    type="text"
                    {...register('title', { required: true })}
                  />
                  {errors.content && (
                    <Form.Text id="title" muted>
                      The title field is empty. Please fill it to be able to
                      submit.
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="content">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Content here"
                    rows={3}
                    type="text"
                    {...register('content', { required: true })}
                  />
                  {errors.content && (
                    <Form.Text id="content" muted>
                      The content field is empty. Please fill it to be able to
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
        </div>
      </Container>
    );
  }

  if (querySubreddit.isError || queryThreads.isError) {
    return (
      <RequestError
        refetch={() =>
          new Promise(() =>
            queryClient.refetchQueries([
              Identifiers.GET_SUBREDDIT,
              Identifiers.GET_THREADS,
            ])
          )
        }
      />
    );
  }

  return <></>;
}

export default Subreddit;
