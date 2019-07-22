import React from 'react';
import ItemsPage from 'components/items/Container';
import {
    render,
    waitForElement,
    cleanup
} from '@testing-library/react'
import APIHandler from 'utilities/apiHandler';
import MockFetcher from 'utilities/mockFetcher';
jest.unmock('axios')

describe('ItemsPage Test', () => {
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
                        "id": 1,
                        "image": "test-image-url",
                        "price": 10,
                        "title": "item",
                    },
                    {
                        "category": "test category",
                        "description": "test description",
                        "end_date": "2019-07-17T16:53:52Z",
                        "id": 2,
                        "image": "test-image-url",
                        "price": 20,
                        "title": "item",
                    },
                ]
            }
        };
        const apiHandler = new APIHandler(new MockFetcher(itemData));
        const { findAllByText } = render(<ItemsPage apiHandler={apiHandler} />)
        const renderedItems = await waitForElement(() =>
                findAllByText('item')
        )

        expect(renderedItems.length).toEqual(2)
    })
    
    test('handles error response', async () => {
        const error = {
            "error": {
                "message": "Invalid fetch"
            }
        };
        const apiHandler = new APIHandler(new MockFetcher(error));
        const { findByText } = render(<ItemsPage apiHandler={apiHandler} />)
        const errorItem = await waitForElement(() =>
            findByText("Error: Invalid fetch")
        )

        expect(errorItem.innerHTML).toContain("Error: Invalid fetch")
    })
})
