import React from 'react';
import ReactDOM from 'react-dom';
import ItemsPage from './ItemsPage';
import { render, cleanup } from '@testing-library/react'

describe('Items Page Test', () => {
  afterEach(() => {
    cleanup();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders children elements', () => {
    const component = render(
      <ItemsPage>
        <div>Hello</div>
        <h1>World</h1>
      </ItemsPage>
    )
    
    component.getByText('Items Page')
    component.getByText('Hello')
    component.getByText('World')
  })
})