import React, { ReactElement } from 'react';
import { Button, Card } from 'react-bootstrap';
import { QueryObserverResult, RefetchOptions } from 'react-query';

function RequestError(props: {
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}): ReactElement {
  const { refetch } = props;

  return (
    <Card>
      <Card.Header>Erro</Card.Header>
      <Card.Body>Erro no carregamento dos dados</Card.Body>
      <Card.Footer>
        <Button onClick={() => refetch()}>Tentar novamente</Button>
      </Card.Footer>
    </Card>
  );
}

export default RequestError;
