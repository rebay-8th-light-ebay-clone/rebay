import React from 'react';
import ItemsPage from 'components/items/Container';
import {
    render,
    waitForElement,
    cleanup
} from '@testing-library/react'
import axios from '__mocks__/axios';

describe('ItemsPage Test', () => {
    beforeEach(() => {
        jest.mock('axios');
    })
    
    afterEach(() => {
        cleanup();
    })

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
    
    test('iterate over items data and generates item components', async () => {
        axios.get.mockResolvedValueOnce(itemData)
        const { findAllByText } = render(<ItemsPage />)
        const renderedItems = await waitForElement(() =>
                findAllByText('item')
        )
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(renderedItems.length).toEqual(2)
    })
    
    test('handles error response', async () => {
        const error = {
            "error": {
                "message": "Invalid fetch"
            }
        };
        axios.get.mockRejectedValue(error)
        const { findByText } = render(<ItemsPage />)
        const errorItem = await waitForElement(() =>
            findByText("Error: Invalid fetch")
        )
        expect(axios.get).toHaveBeenCalledTimes(2)
        expect(errorItem.innerHTML).toContain("Error: Invalid fetch")
    })
})
