import React, { useState, useEffect } from 'react';
import BidCard from "../bid_card/BidCard";

const ItemBids = ({ item_uuid, apiHandler, handleError, fetchBids }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      const { data, errors } = await apiHandler.get(`/api/items/${item_uuid}/bids`);
      data ? setBids(data) : handleError(errors);
    }
    fetchBids();
  }, [apiHandler, item_uuid, handleError, fetchBids]);

  const bidUserName = (bid) => {
    return bid.user_uuid === JSON.parse(localStorage.getItem("user")).uuid ? "You" : "Someone";
  }

  return bids.length > 0 && (
    <>
      <h2 className='header--secondary'>Bids</h2>
      {bids.map(bid => {
        return <BidCard
          white={true}
          key={bid.uuid}
          timestamp={bid.timestamp}
          bid_price={bid.bid_price}
          userName={bidUserName(bid)}
          winner={bid.winner} />
      })}
    </>
  )
}

export default ItemBids;