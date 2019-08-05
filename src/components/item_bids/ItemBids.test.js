import React from 'react';
import ItemBids from './ItemBids';
import { cleanup, render } from '@testing-library/react';
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

describe('Item BidT Test', () => {
  afterEach(() => {
    cleanup();
  })

  const bidData = {
    "data": {
      "data": [
        {
          "bid_price": "1000",
          "timestamp": "2019-07-17T16:53:52Z",
          "uuid": 1,
          "item_uuid": 2,
          "user_uuid": 10
        },
        {
          "bid_price": "1500",
          "timestamp": "2019-07-17T16:53:52Z",
          "uuid": 200,
          "item_uuid": 2,
          "user_uuid": 20
        },
        {
          "bid_price": "2000",
          "timestamp": "2019-07-17T16:53:52Z",
          "uuid": 300,
          "item_uuid": 2,
          "user_uuid": 30
        }
      ]
    }
  };

  test('renders an item with the correct data', async () => {
    const apiHandler = new MockAPIHandler(bidData);
    const { findByText } = render(<ItemBids apiHandler={apiHandler} item_uuid={2} />);

    findByText("Bids")
    findByText(/10.00/)
    findByText(/15.00/)
    findByText(/20.00/)
  })
})