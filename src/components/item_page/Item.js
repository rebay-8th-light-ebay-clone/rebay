import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);
  const { uuid, user_uuid } = props.match.params;
  
  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await props.apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
      data ? setItem(data) : setError(error);
    }
    fetchItems();
  }, [item, props.apiHandler, uuid, user_uuid]);


  const handleError = (err) => {
    return err && `Error: ${err.message}`;
  }

  return (
    <ItemPage item={item} error={handleError(error)} />
  );
}

export default Item;