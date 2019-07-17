import React, { useState, useEffect } from 'react';
import { Item } from './Presenter';
import Fetch from 'utilities/fetch';

const ItemContainer = (props) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    const fetchItems = async () => {
      let result = await Fetch(`/api/items/${props.match.params.id}`);
      let { data } = result;
      data && setItem(data);
    }
    fetchItems();
  }, [item, props.match.params.id]);

  return (
    item.hasOwnProperty('id') ?
      <Item item={item} /> :
      null
  );
}

export default ItemContainer;