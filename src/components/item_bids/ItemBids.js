import React, { useState, useEffect } from 'react';
import BidCard from "../bid_card/BidCard";

const ItemBids = ({ item_uuid, apiHandler, handleError }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      const { data, errors } = await apiHandler.get(`/api/items/${item_uuid}/bids`);
      data ? setBids(data) : handleError(errors);
    }
    fetchBids();
  }, [apiHandler, item_uuid]);

  const renderBids = (bidCollection) => {
    return bidCollection.map(bid => {
      return <BidCard white={true} key={bid.uuid} timestamp={bid.timestamp} bid_price={bid.bid_price} userName={"Anonymous"} />
    })
  }

  if (bids.length > 0) {
    return (
      <>
        <h2 className='header--secondary'>Bids</h2>
        {renderBids(bids)}
      </>
    );
  } else {
    return null;
  }
}

export default ItemBids;