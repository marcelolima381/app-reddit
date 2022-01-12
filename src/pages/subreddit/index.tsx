import { ReactElement } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useQuery, useQueryClient } from 'react-query';

import { Identifiers, RedditService } from '../../common/services';
import { IThread } from '../../common/types';
import RequestError from '../../components/request-error';
import SubredditHeader from '../../components/subreddit-header';
import Thread from '../../components/thread';

function Subreddit(): ReactElement {
  const queryClient = useQueryClient();
  const querySubreddit = useQuery(Identifiers.GET_SUBREDDIT, () =>
    RedditService.getSubreddit()
  );
  const queryThreads = useQuery(Identifiers.GET_THREADS, () =>
    RedditService.getThreads()
  );

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
          {queryThreads.data.map((thread: IThread) => (
            <Thread key={thread.id} showCommentsInfo thread={thread} />
          ))}
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
