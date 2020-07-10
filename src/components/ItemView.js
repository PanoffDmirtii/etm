import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { data } from '../data';

export const ItemView = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect( () => {
    setTimeout( () => setItem(fetchingItem()), 1000)
  })
  
  const fetchingItem = () => {
    return data.find(i => i.id === id)
  }

  if (!item) return 'Loading...'

  return (
    <div className='item-view'>
      <Card border="primary" style={{width: '360px'}}>
        <Card.Header>{item.title}</Card.Header>
        <Card.Img src={item.photo}/>
        <Card.Body>
          <Card.Title>{item.vendor}</Card.Title>
          <Card.Text>
            <div>Pack: {item.pack}</div>
            <div>Price: {item.price}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
