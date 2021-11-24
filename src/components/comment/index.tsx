import { ReactElement } from 'react';
import { Image } from 'react-bootstrap';

function Comment(): ReactElement {
  return (
    <div className="comment">
      <Image
        height={28}
        roundedCircle
        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
        width={28}
      />
      <div className="d-flex flex-column">
        <p className="fs-6 fw-light">Anonymous user · 13:00</p>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          at consequatur cum, debitis dolores ducimus est, hic illum, minus
          nesciunt optio quod similique vel velit? Accusantium necessitatibus
          porro suscipit?
        </text>
      </div>
    </div>
  );
}

export default Comment;
