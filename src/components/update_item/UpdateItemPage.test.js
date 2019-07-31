import React from 'react';
import UpdateItemPage from 'components/update_item/UpdateItemPage';
import {
    render,
    waitForElement,
    cleanup
} from '@testing-library/react'
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

describe('Update Item Page Test', () => {
  afterEach(() => {
    cleanup();
})

  test('populates the form with the items original data', async () => {
    const itemData = {
        "data": {
            "data":  {
                "category": "Other",
                "description": "test description",
                "end_date": "2019-07-17T16:53:52Z",
                "uuid": 1,
                "image": "test-image-url",
                "price": 4000,
                "title": "item",
                "user_uuid": 2
            }
        }
    };
    const apiHandler = new MockAPIHandler(itemData);
    // localhost:3000/users/user_uuid/items/uuid/edit
    const { getByLabelText, getByDisplayValue } = render(<UpdateItemPage apiHandler={apiHandler} match={{ params: { user_uuid: 2, uuid: 1 } }} />);
    
    await waitForElement(() =>
      getByDisplayValue("test description") 
    );
    
    const title = getByLabelText("Title");
    expect(title.value).toBe("item");

    const description = getByLabelText("Description");
    expect(description.value).toBe("test description");

    const image = getByLabelText("Image URL");
    expect(image.value).toBe("test-image-url");

    const price = getByLabelText("Starting Price (USD)");
    expect(price.value).toBe("40.00");

    const date = getByLabelText("Auction End Date");
    expect(date.value).toBe("2019-07-17");
  })
})