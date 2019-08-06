import React, { useState, useEffect } from 'react';
import BidCard from "../bid_card/BidCard";
import Loader from 'components/UI/Loader';

const ItemBids = ({ item_uuid, apiHandler, handleError, fetchBids }) => {
  const [bids, setBids] = useState([]);
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    const fetchBids = async () => {
      const { data, errors } = await apiHandler.get(`/api/items/${item_uuid}/bids`);
      data ? setBids(data) : handleError(errors);
      setLoader(false);
    }
    setLoader(true);
    fetchBids();
  }, [apiHandler, item_uuid, handleError, fetchBids]);

  const bidUserName = (bid) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && bid.user_uuid === user.uuid) {
      return "You";
    } else {
      return "Someone";
    }
  }

  return bids.length > 0 && (
    <>
      <h2 className='header--secondary'>Bids</h2>
      {
        loading 
          ? <Loader />
          : bids.map(bid => {
            return <BidCard
              white={true}
              key={bid.uuid}
              timestamp={bid.timestamp}
              bid_price={bid.bid_price}
              userName={bidUserName(bid)}
              winner={bid.winner} />
          })
      }
    </>
  )
}

export default ItemBids;