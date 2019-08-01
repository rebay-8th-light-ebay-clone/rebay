import React from 'react';
import './ItemPage.scss';
import Page from '../UI/Page';
import { timeRemainingFromNowMessage } from '../../utilities/date';
import { convertPenniesToDollars } from 'utilities/price';

export const ItemPage = ({ item, error }) => {
  const { title, description, price, end_date, image } = item;
  return (
    <Page>
      <section className="error">{error}</section>
      <section className="item--container">
        <img src={image} alt={title} />
        <div className={`item-info`}>
          <div className="item-title">
            <span><strong>{title}</strong></span>
          </div>
          <div className="item-bidding-info">
            <span>Current Bid: ${convertPenniesToDollars(price)}</span><br />
            <span>{timeRemainingFromNowMessage(new Date(end_date))}</span><br />
          </div>

          <div className="item-description">
            <h4 id="description-header">Product Description</h4>
            <span>{description}</span><br />
          </div>
        </div>
      </section>
    </Page>
  );
}
