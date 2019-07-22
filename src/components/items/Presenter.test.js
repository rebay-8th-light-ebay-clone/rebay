import React from 'react';
import ReactDOM from 'react-dom';
import ItemsPagePresenter from './Presenter';
import { render, cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemsPagePresenter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders children elements', () => {
  const component = render(
    <ItemsPagePresenter>
      <div>Hello</div>
      <h1>World</h1>
    </ItemsPagePresenter>
  )
  
  component.getByText('Items Page')
  component.getByText('Hello')
  component.getByText('World')
})