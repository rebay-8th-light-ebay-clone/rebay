import React, { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';
import ItemBids from 'components/item_bids/ItemBids';
import { ISOString } from 'utilities/date';
import { convertDollarsToPennies } from 'utilities/price';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoader] = useState(false);
  const { uuid, user_uuid } = props.match.params;

  useEffect(() => {
    const fetchItems = async () => {
      const { data, errors } = await props.apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
      data ? setItem(data) : setError(errors);
      setRefetch(false);
      setLoader(false);
    }
    setLoader(true);
    fetchItems();
  }, [props.apiHandler, uuid, user_uuid, refetch]);

  const handleBidSubmit = async (values) => {
    setLoader(true);
    const { price, max_price } = values;
    const { data, errors } = await props.apiHandler.post(`/api/items/${uuid}/bids`, {
      max_bid_price: max_price ? convertDollarsToPennies(max_price) : null,
      bid_price: convertDollarsToPennies(price),
      timestamp: ISOString(new Date())
    });
    if (data) {
      setRefetch(true)
      setError(false)
    } else {
      setRefetch(false)
      setError(errors)
    }
    setLoader(false);
  }

  return (
    <ItemPage 
      loading={loading} 
      item={item} 
      error={error} 
      handleBidSubmit={handleBidSubmit} 
      success={refetch}
    >
      {
        item.uuid && <ItemBids item_uuid={item.uuid} handleError={setError} apiHandler={props.apiHandler} fetchBids={refetch} />
      }
    </ItemPage>
  );
}

export default Item;