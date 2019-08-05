import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';
import ItemBids from 'components/item_bids/ItemBids';
import { dayEndedUTCString } from 'utilities/date';
import { convertDollarsToPennies } from 'utilities/price';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { uuid, user_uuid } = props.match.params;

  useEffect(() => {
    const fetchItems = async () => {
      const { data, errors } = await props.apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
      data ? setItem(data) : setError(errors);
    }
    fetchItems();
  }, [props.apiHandler, uuid, user_uuid, refetch]);

  const handleBidSubmit = async (values) => {
    const { data, errors } = await props.apiHandler.post(`/api/items/${uuid}/bids`, {
      bid_price: convertDollarsToPennies(values.price),
      timestamp: dayEndedUTCString(new Date())
    });
    data ? setRefetch(true) : setError(errors)
  }

  return (
    <ItemPage item={item} error={error} handleBidSubmit={handleBidSubmit}>
      {
        item.uuid && <ItemBids item_uuid={item.uuid} handleError={setError} apiHandler={props.apiHandler} fetchBids={refetch} />
      }
    </ItemPage>
  );
}

export default Item;