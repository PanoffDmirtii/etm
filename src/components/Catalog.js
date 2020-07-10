import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {ContextApp, TYPES} from '../store/reducer'
import {data} from '../data'
import { Item } from './Item';

export const Catalog = (props) => {
  const { state, dispatch } = useContext(ContextApp);
  const history = useHistory();
  useEffect(() => {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1500)
    })
    p.then(res => dispatch({ type: TYPES.SET_DATA, payload: res }))
  }, []);

  const onClickItem = (id) => {
    history.push(`/catalog/${id}`)
  }

  const renderItems = () => {
    return state.data.map((item) => <Item key={item.id} {...item} onClick={onClickItem}/>)
  }

  return (
      <div className='catalog padding20-10'>
        {state.data.length > 0 ? renderItems() : 'Loading...'}
      </div>
  );
};
