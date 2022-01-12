import { ReactElement, useState } from 'react';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IVote } from '../../common/types';

function Vote(props: IVote): ReactElement {
  const { direction, upvotes } = props;
  const [counter, setCounter] = useState<number>(upvotes);
  const [vote, setVote] = useState({
    hasVoted: false,
    voteType: '',
  });

  const computeDownvote = (): void => {
    if (vote.voteType === 'downvote') {
      setVote(() => ({
        hasVoted: false,
        voteType: '',
      }));
      setCounter(() => upvotes);
    } else {
      setVote(() => ({
        hasVoted: true,
        voteType: 'downvote',
      }));
      setCounter(() => upvotes - 1);
    }
  };

  const computeUpvote = (): void => {
    if (vote.voteType === 'upvote') {
      setVote(() => ({
        hasVoted: false,
        voteType: '',
      }));
      setCounter(() => upvotes);
    } else {
      setVote(() => ({
        hasVoted: true,
        voteType: 'upvote',
      }));
      setCounter(() => upvotes + 1);
    }
  };

  return (
    <div
      className={`d-flex
      ${direction === 'horizontal' ? 'flex-row' : ''}
      ${direction === 'vertical' ? 'flex-column' : ''}
      align-items-center justify-content-start gap-2`}
    >
      <FontAwesomeIcon
        className={`${vote.voteType === 'upvote' ? 'disabled' : null} clickable`}
        icon={faArrowUp}
        onClick={computeUpvote}
      />
      <span className="fw-bold">{counter}</span>
      <FontAwesomeIcon
        className={`${vote.voteType === 'downvote' ? 'disabled' : null} clickable`}
        icon={faArrowDown}
        onClick={computeDownvote}
      />
    </div>
  );
}

export default Vote;
