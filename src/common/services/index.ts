import { MOCK_SUBREDDIT, MOCK_THREAD, MOCK_THREAD_2 } from '../../mock';
import { ISubreddit, IThread } from '../types';
// import instance from '../fetch';

// const APIUrl = 'https://backend-reddit.herokuapp.com/api/v1/threads';

export const Identifiers = {
  GET_SUBREDDIT: 'get-subreddit',
  GET_THREADS: 'get-threads',
  GET_THREAD: 'get-thread',
};

export const RedditService = {
  getSubreddit: async (): Promise<ISubreddit> =>
    // return instance.get(`${APIUrl}/subreddit`)
    MOCK_SUBREDDIT,
  getThreads: async (): Promise<IThread[]> =>
    // return instance.get(`${APIUrl}/threads`)
    [MOCK_THREAD, MOCK_THREAD_2],
  getThread: async (): Promise<IThread> =>
    // return instance.get(`${APIUrl}/thread`)
    MOCK_THREAD,
};
