import React from 'react';
import { dateFormatter } from 'utilities/date';
import { convertPenniesToDollars } from 'utilities/price';
import './BidCard.scss';

const BidCard = ({ timestamp, bid_price, userName, white }) => (
  <section className={`bid--container ${white && 'bid--container-white'}`}>
    <div className='bid--container-info'>
      <h2>{userName} Bid</h2>
      <h5>{dateFormatter(timestamp)}</h5>
    </div>
    <h1 className='bid--container-price'>${convertPenniesToDollars(bid_price)}</h1>
  </section>
)

export default BidCard;