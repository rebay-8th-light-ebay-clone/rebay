import React from 'react';
import CreateItemPage from './CreateItemPage';
import { cleanup, render } from '@testing-library/react';

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
}

describe('CreateItemPage', () => {

  afterEach(cleanup)

  test('renders an item with a title field', () => {
    const component = render(<CreateItemPage />);
     
    component.getByLabelText('Title');
  })


  // error is rendered if image is not a url
  // error is rendered if price is not formatted properly (string vs number)
  // error is renderedif price is less than 1
  // error is rendered if end_date is not a valid date. 
  // error is rendered if end_time and end_date is not after current date time
  // submit is enabled if all fields are entered correctly
});
