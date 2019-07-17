import React from 'react';
import './Presenter.scss';
import Page from 'components/UI/Page';

export const Item = ({ item }) => {
  let { id, title, description, price, end_date, image } = item;
  return (
    <Page>
      <div className="item" id={`item-${id}`}>
        <img id={`item-image-${id}`} src={image} alt={title} />
        <div className={`item-info`}>
          <div className="item-title">
            <span id={`item-title-${title}`}><strong>{title}</strong></span>
          </div>
          <div className="item-bidding-info">
            <span id={`item-price-${price}`}>Current Bid: ${price}</span><br />
            <span id={`item-end-date-${end_date}`}>{end_date}</span><br />
          </div>

          <div className="item-description">
            <h4 id="description-header">Product Description</h4>
            <span id={`item-description-${description}`}>{description}</span><br />
          </div>
        </div>
      </div>
    </Page>
  );
}