import React from 'react';
import './ItemPage.scss';
import Page from 'components/UI/Page';
import { timeRemainingFromNowMessage } from 'utilities/date';

export const ItemPage = ({ item, error }) => {
  const { id, title, description, price, end_date, image } = item;
  return (
    <Page>
      <section className="error">{error}</section>
      <section className="item--container" id={`item-${id}`}>
        <img id={`item-image-${id}`} src={image} alt={title} />
        <div className={`item-info`}>
          <div className="item-title">
            <span id={`item-title-${title}`}><strong>{title}</strong></span>
          </div>
          <div className="item-bidding-info">
            <span id={`item-price-${price}`}>Current Bid: ${price}</span><br />
            <span id={`item-end-date-${end_date}`}>{timeRemainingFromNowMessage(new Date(end_date))}</span><br />
          </div>

          <div className="item-description">
            <h4 id="description-header">Product Description</h4>
            <span id={`item-description-${description}`}>{description}</span><br />
          </div>
        </div>
      </section>
    </Page>
  );
}
