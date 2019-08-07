import React from 'react';
import UserItems from './UserItems';
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
                    "description": "test description",
                    "end_date": "2019-07-17T16:53:52Z",
                    "id": 1,
                    "image": "test-image-url",
                    "price": 10,
                    "title": "test title",
                    "current_highest_bid": 10
                }
            ]
        }
    };

    test('renders an item with the correct data', async () => {
        const apiHandler = new MockAPIHandler(itemData);
        const component = render(<UserItems apiHandler={apiHandler} match={{ params: { id: 1 } }} />);

        await waitForElement(() =>
            component.findAllByText('test title')
        );

        component.getByText('test title');
        component.getByAltText('test title')
        component.getByText(/hr|This Auction Has Ended/);
        component.getByText('$0.10');
        component.getByText(/delete/i);
        component.getByText(/edit/i);
    })

    test('renders a message if no user bids', async () => {
        const apiHandler = new MockAPIHandler({ data: { data: [] } });
        const component = render(<UserItems apiHandler={apiHandler} match={{ params: { id: 1 } }} />);

        component.queryByText(/You have no items yet!/i);
    })
})