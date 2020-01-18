import React from 'react';
import UserBidCard from './UserBidCard';
import { cleanup, render, waitForElement } from '@testing-library/react';

describe('User Bids Card Test', () => {
    afterEach(() => {
        cleanup();
    })

    const item = {
        "description": "test description",
        "end_date": "2019-07-17T16:53:52Z",
        "id": 1,
        "image": "test-image-url",
        "price": 10,
        "title": "test title",
        "current_highest_bid": 10
    }

    const bids = [
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
        },
        {
            "bid_uuid": 1,
            "user_uuid": 1,
            "item_uuid": 1,
            "bid_price": 300,
            "timestamp": "2019-07-17T16:53:52Z",
        },        {
            "bid_uuid": 1,
            "user_uuid": 1,
            "item_uuid": 1,
            "bid_price": 400,
            "timestamp": "2019-07-17T16:53:52Z",
        }
    ]

    test('renders the correct numbre of bids', async () => {
        const component = render(<UserBidCard item={item} bids={bids} />);

        await waitForElement(() =>
            component.findAllByText('test title')
        );
        expect(component.queryByText(/0.15/i)).toBeNull();
        component.getByText(/2.00/i);
        component.getByText(/3.00/i);
        component.getByText(/4.00/i);
    })
})