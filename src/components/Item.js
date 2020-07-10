import React from 'react';
import { Card } from 'react-bootstrap';

export const Item = (props) => {
  const { id, title, vendor, pack, price, photo, onClick } = props;
  return (
    <Card
      bg='primary'
      key={id}
      text='white'
      style={{ width: '20rem' }}
      className="m-2 card-style"
      onClick={() => onClick(id)}
    >
      <Card.Header>{title}</Card.Header>
      <Card.Img variant='top' src={photo} />
      <Card.Body>
        <Card.Title>{vendor} </Card.Title>
        <Card.Text>
          <div>Pack: {pack}</div>
          <div>Price: {price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
