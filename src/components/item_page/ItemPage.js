import React, { useState } from 'react';
import './ItemPage.scss';
import Page from '../UI/Page';
import { timeRemainingFromNowMessage, dateHasPassed } from '../../utilities/date';
import { convertPenniesToDollars } from 'utilities/price';
import ItemBidForm from 'components/item_bids/ItemBidForm';
import Error from 'components/UI/Error';

export const ItemPage = ({ item, error, children, handleBidSubmit, success, loading }) => {
  const { title, description, price, end_date, image, current_highest_bid } = item;
  const currentPrice = current_highest_bid || price;
  const minimumPrice = current_highest_bid ? current_highest_bid + 100 : price;
  const [autoBidMode, setAutoBidMode] = useState(false);

  const bidFormIsVisible = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || Object.keys(user).length === 0) {
      return true;
    } else {
      return !dateHasPassed(end_date) && user.uuid !== item.user_uuid
    }
  }

  return (
    <Page loading={loading}>
      {error && <Error message={error} />}
      <section className="item--container">
        <img src={image} alt={title} />
        <div className={`item-info`}>
          <div className="item-title">
            <span><strong>{title}</strong></span>
          </div>
          <div className="item-bidding-info">
            <h1>${convertPenniesToDollars(currentPrice)}</h1>
            <h3>Current Price</h3>
            <h4>{timeRemainingFromNowMessage(new Date(end_date))}</h4>
          </div>
          {bidFormIsVisible() && (
            <div className="item-description">
              <h4 id="description-header">Bid On This Item</h4>
              <ItemBidForm
                submit={handleBidSubmit}
                minimum_price={convertPenniesToDollars(minimumPrice)}
                success={success}
                auction_active={bidFormIsVisible()}
                setAutoBidMode={setAutoBidMode}
                auto_bid={autoBidMode}
              />
            </div>
          )}
          <div className="item-description">
            <h4 id="description-header">Product Description</h4>
            <span>{description}</span><br />
          </div>
        </div>
        {children}
      </section>
    </Page>
  );
}
