import { ReactElement, useState } from 'react';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IVote = {
  direction: 'vertical' | 'horizontal';
};

function Vote({ direction }: IVote): ReactElement {
  const [counter, setCounter] = useState<number>(453);

  return (
    <div
      className={`d-flex
      ${direction === 'horizontal' ? 'flex-row' : ''}
      ${direction === 'vertical' ? 'flex-column' : ''}
      align-items-center justify-content-start gap-2`}
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
    </div>
  );
}

export default Vote;
