import React from 'react';
import ItemContainer from './Container.js';
import { cleanup, render, waitForElement } from '@testing-library/react';
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
    axios.get.mockResolvedValueOnce(itemData)
    const component = render(<ItemContainer match={{ params: { id: 1 } }} />);
    await waitForElement(() =>
      component.findAllByText('test title')
    )

    component.getByAltText('test title')
    component.getByText('test description');
    component.getByText(/hr|This Auction Has Ended/);
    component.getByText('Current Bid: $10');
    component.getByText('test title');
  })
})