import React from 'react';
import Item from './Item';
import { cleanup, render, waitForElement } from '@testing-library/react';
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

describe('Item Test', () => {
  afterEach(() => {
    cleanup();
  })

  const itemData = {
    "data": {
      "data": {
        "description": "test description",
        "end_date": "2019-07-17T16:53:52Z",
        "uuid": 1,
        "image": "test-image-url",
        "price": 10,
        "title": "test title",
        "current_highest_bid": 20
      }
    }
  };

  test('renders an item with the correct data', async () => {
    const apiHandler = new MockAPIHandler(itemData);
    const component = render(<Item apiHandler={apiHandler} match={{ params: { uuid: 1 } }} />);

    await waitForElement(() =>
      component.findAllByText('test title')
    );

    component.getByAltText('test title')
    component.getByText('test description');
    component.getByText(/hr|This Auction Has Ended/);
    component.getByText('$0.20');
    component.getByText('test title');
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
    const { findByText } = render(<Item apiHandler={apiHandler} match={{ params: { uuid: 1 } }} />)
    await waitForElement(() =>
      findByText(/invalid fetch/i)
    )
  })

})