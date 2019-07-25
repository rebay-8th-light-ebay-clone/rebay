import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await props.apiHandler.get(`/api/items/${props.match.params.id}`);
      data ? setItem(data) : setError(error);
    }
    fetchItems();
  }, [item, props.match.params.id]);


  const handleError = (err) => {
    return err && `Error: ${err.message}`;
  }

  return (
    <ItemPage item={item} error={handleError(error)} />
  );
}

export default Item;