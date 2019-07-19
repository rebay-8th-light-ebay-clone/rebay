import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';
import Fetch from 'utilities/fetch';

const Item = (props) => {
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
      <ItemPage item={item} /> :
      null
  );
}

export default Item;