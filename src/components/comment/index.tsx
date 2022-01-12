import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';

import { IComment } from '../../common/types';
import Vote from '../vote';

function Comment(props: { comment: IComment }): ReactElement {
  const { comment } = props;

  return (
    <div className="comment">
      <div className="d-flex flex-row gap-2">
        <Image height={28} roundedCircle src={comment.imageUrl}
width={28} />
        <p className="fs-6 fw-light">{comment.author}</p>
      </div>
      <div>
        <p>{comment.content}</p>
      </div>
      <Vote direction="horizontal" upvotes={comment.upvotes} />
    </div>
  );
}

export default Comment;
