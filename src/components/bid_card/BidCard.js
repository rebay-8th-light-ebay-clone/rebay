import React from 'react';
import { dateFormatter } from 'utilities/date';
import { convertPenniesToDollars } from 'utilities/price';
import './BidCard.scss';

const BidCard = ({ timestamp, bid_price, userName, white, winner }) => {
  const bidClass = () => {
    if (white && !winner) {
      return 'bid--white';
    } else if (winner) {
      return 'bid--winner';
    }
  }

  const bidMessage = winner ? "Won" : "Bid";

  return (
    <section className={`bid--container ${bidClass()}`}>
      <div className='bid--container-info'>
        <h2>{userName} {bidMessage}</h2>
        <h5>{dateFormatter(timestamp)}</h5>
      </div>
      <h1 className='bid--container-price'>${convertPenniesToDollars(bid_price)}</h1>
    </section>
  )
}

export default BidCard;