import React from 'react';
import ItemsPage from 'components/all_items_page/Items';
import {
    render,
    waitForElement,
    cleanup
} from '@testing-library/react'
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

jest.unmock('axios')

describe('Items Test', () => {
    afterEach(() => {
        cleanup();
    })

    test('iterate over items data and generates item components', async () => {
        const itemData = {
            "data": {
                "data": [
                    {
                        "category": "test category",
                        "description": "test description",
                        "end_date": "2019-07-17T16:53:52Z",
                        "uuid": 1,
                        "image": "test-image-url",
                        "price": 10,
                        "title": "item",
                        "current_highest_bid": 10
                    },
                    {
                        "category": "test category",
                        "description": "test description",
                        "end_date": "2019-07-17T16:53:52Z",
                        "uuid": 2,
                        "image": "test-image-url",
                        "price": 20,
                        "title": "item",
                        "current_highest_bid": 20
                    },
                ]
            }
        };
        const apiHandler = new MockAPIHandler(itemData);
        const { findAllByText } = render(<ItemsPage apiHandler={apiHandler} />)
        const renderedItems = await waitForElement(() =>
            findAllByText('item')
        )

        expect(renderedItems.length).toEqual(2)
    })

    test('handles error response', async () => {
        const error = {
            "data": {
                "errors": {
                    "message": "Invalid fetch"
                }
            }
        };
        const apiHandler = new MockAPIHandler(error);
        const { findByText } = render(<ItemsPage apiHandler={apiHandler} />)
        await waitForElement(() =>
            findByText(/Invalid fetch/i)
        )
    })
})