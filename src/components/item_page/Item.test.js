import React from 'react';
import Item from './Item';
import { cleanup, render, waitForElement } from '@testing-library/react';
import APIHandler from 'utilities/apiHandler';
import MockFetcher from 'utilities/mockFetcher';

describe('ItemsPage Test', () => {
  afterEach(() => {
    cleanup();
  })

  const itemData = {
    "data": {
      "data": {
        "description": "test description",
        "end_date": "2019-07-17T16:53:52Z",
        "id": 1,
        "image": "test-image-url",
        "price": 10,
        "title": "test title",
      }
    }
  };

  test('renders an item with the correct data', async () => {
    const apiHandler = new APIHandler(new MockFetcher(itemData));
    const component = render(<Item apiHandler={apiHandler} match={{ params: { id: 1 } }} />);

    await waitForElement(() =>
      component.findAllByText('test title')
    );

    component.getByAltText('test title')
    component.getByText('test description');
    component.getByText(/hr|This Auction Has Ended/);
    component.getByText('Current Bid: $10');
    component.getByText('test title');
  })

  test('handles error response', async () => {
    const error = {
      "error": {
        "message": "Invalid fetch"
      }
    };
    const apiHandler = new APIHandler(new MockFetcher(error));
    const { findByText } = render(<Item apiHandler={apiHandler} match={{ params: { id: 1 } }} />)
    const errorItem = await waitForElement(() =>
      findByText("Error: Invalid fetch")
    )

    expect(errorItem.innerHTML).toContain("Error: Invalid fetch")
  })
})