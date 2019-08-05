import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const { uuid, user_uuid } = props.match.params;
    const fetchItems = async () => {
      const { data, error } = await props.apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
      data ? setItem(data) : setError(error);
    }
    fetchItems();
  }, [props.apiHandler, props.match.params]);


  const handleError = (err) => {
    return err && `Error: ${err.message}`;
  }

  return (
    <ItemPage item={item} error={handleError(error)} />
  );
}

export default Item;