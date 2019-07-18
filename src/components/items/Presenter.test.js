import React from 'react';
import ReactDOM from 'react-dom';
import ItemsPagePresenter from './Presenter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemsPagePresenter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
