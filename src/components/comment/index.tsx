import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';
import { useQueryClient } from 'react-query';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Identifiers } from '../../common/services';
import { IComment, IThread } from '../../common/types';
import Vote from '../vote';

function Comment(props: { comment: IComment }): ReactElement {
  const { comment } = props;
  const queryClient = useQueryClient();
  const deleteComment = (deletedCommentId: number) => {
    queryClient.setQueryData<IThread>(
      Identifiers.GET_THREAD,
      (oldData: IThread | undefined): IThread => {
        if (oldData) {
          const newData = oldData;
          newData.comments = oldData.comments.filter(
            (threadComment: IComment) => threadComment.id !== deletedCommentId
          );
          return newData;
        }

        return oldData as unknown as IThread;
      }
    );
  };

  return (
    <div className="comment">
      <div className="d-flex flex-row gap-2">
        <Image height={28} roundedCircle src={comment.imageUrl}
width={28} />
        <p className="fs-6 fw-light">{comment.author}</p>

        <FontAwesomeIcon
          className="clickable"
          icon={faTrash}
          onClick={() => deleteComment(comment.id)}
        />
      </div>
      <div>
        <p>{comment.content}</p>
      </div>
      <Vote direction="horizontal" upvotes={comment.upvotes} />
    </div>
  );
}

export default Comment;
