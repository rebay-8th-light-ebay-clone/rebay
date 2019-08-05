import React from 'react';
import UserBids from './UserBids';
import { cleanup, render, waitForElement } from '@testing-library/react';
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

describe('User Bids Test', () => {
    afterEach(() => {
        cleanup();
    })

    const itemData = {
        "data": {
            "data": [
                {
                    "item": {
                        "description": "test description",
                        "end_date": "2019-07-17T16:53:52Z",
                        "id": 1,
                        "image": "test-image-url",
                        "price": 10,
                        "title": "test title",
                        "current_highest_bid": 10
                    },
                    "bids": [
                        {
                            "bid_uuid": 1,
                            "user_uuid": 1,
                            "item_uuid": 1,
                            "bid_price": 15,
                            "timestamp": "2019-07-17T16:53:52Z",
                        },
                        {
                            "bid_uuid": 1,
                            "user_uuid": 1,
                            "item_uuid": 1,
                            "bid_price": 200,
                            "timestamp": "2019-07-17T16:53:52Z",
                        }
                    ]
                }
            ]
        }
    };

    test('renders an item with the correct data', async () => {
        const apiHandler = new MockAPIHandler(itemData);
        const component = render(<UserBids apiHandler={apiHandler} match={{ params: { id: 1 } }} />);

        await waitForElement(() =>
            component.findAllByText('test title')
        );

        component.getByText('test title');
        component.getByAltText('test title')
        component.getByText(/hr|This Auction Has Ended/);
        component.getByText('$0.10');
        component.getByText(/0.15/i);
        component.getByText(/2.00/i);
    })

    test('renders a message if no user bids', async () => {
        const apiHandler = new MockAPIHandler({ data: { data: [] } });
        const component = render(<UserBids apiHandler={apiHandler} match={{ params: { id: 1 } }} />);

        component.getByText(/You have no bids yet!/i);
    })
})