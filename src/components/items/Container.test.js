import React from 'react';
import ItemsPage from 'components/items/Container';
import {
    render,
    waitForElement,
} from '@testing-library/react'
import axiosMock from "axios";

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
    axiosMock.get.mockResolvedValueOnce(itemData)
    const { getAllByText } = render(<ItemsPage />)
    const renderedItems = await waitForElement(() =>
            getAllByText('item')
    )
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(renderedItems.length).toEqual(2)
})

// test('handles error response', async () => {
//     const error = {
//         "error": {
//             "message": "Invalid fetch"
//         }
//     };
//     axiosMock.get.mockRejectedValue(error)
//     const { getAllByText } = render(<ItemsPage />)
//     const renderedItems = await waitForElement(() =>
//             getAllByText('item')
//     )
//     expect(axiosMock.get).toHaveBeenCalledTimes(2)
//     expect(renderedItems.length).toEqual(0)
// })