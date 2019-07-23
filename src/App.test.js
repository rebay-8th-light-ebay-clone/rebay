import React from 'react';
import ReactDOM from 'react-dom';
import { UnauthenticatedApp, AuthenticatedApp } from './App';
import { Route, MemoryRouter } from "react-router-dom";
import { render, cleanup } from '@testing-library/react'

jest.unmock('axios')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnauthenticatedApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('UnauthenticatedApp can render child routes', () => {
  const testPage = (
    <UnauthenticatedApp>
      <MemoryRouter initialEntries={["/", "/test"]} initialIndex={1}>
          <Route path="/test" exact render={() => <div>Test Page</div>} />
      </MemoryRouter >
    </UnauthenticatedApp>
  );

  const testComponent = render(testPage);
  testComponent.getByText("Test Page")
})

it('UnauthenticatedApp can render original routes', () => {
  const indexPage = (
    <UnauthenticatedApp>
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <Route path="/test" exact render={() => <div>Test Page</div>} />
      </MemoryRouter >
    </UnauthenticatedApp>
  );

  const indexComponent = render(indexPage);
  indexComponent.getAllByText("Items Page")
})