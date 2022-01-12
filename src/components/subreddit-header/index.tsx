import { ReactElement } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './style.css';
import { UseQueryResult } from 'react-query';

import { ISubreddit } from '../../common/types';

function ThreadHeader(props: {
  querySubreddit: UseQueryResult<ISubreddit>;
}): ReactElement {
  const { querySubreddit } = props;

  return (
    <Row className="thread-header py-2 m-auto mt-5">
      <Col
        className="thread-header__content d-flex flex-row gap-4 m-auto"
        xs={12}
      >
        <div>
          <Image
            height={72}
            roundedCircle
            src={querySubreddit.data?.imageUrl}
            width={72}
          />
        </div>
        <div>
          <h2>{querySubreddit.data?.name}</h2>
          <span>{querySubreddit.data?.tag}</span>
        </div>
      </Col>
    </Row>
  );
}

export default ThreadHeader;
