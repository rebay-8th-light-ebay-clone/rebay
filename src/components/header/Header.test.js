import React from 'react';
import Header from './Header';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import MockAPIHandler from 'utilities/APIHandler/mockApiHandler';

describe('Header', () => {
    const mockApiHandler = new MockAPIHandler();

    afterEach(() => {
        cleanup();
    })

    it('renders Authenticated Header if user exists', () => {
        const { getByAltText, getByText } = render(<Header user={{}} apiHandler={mockApiHandler} />)
        fireEvent.click(getByAltText('avatar'))

        getByText('Sell')
        getByText('Log Out')
    })

    it('renders Unauthenticated Header if user does not exists', () => {
        const component = render(
            <Header user={null} apiHandler={mockApiHandler} />
        )

        component.getByText('Log In')
    })

    it('clicking log out in Authenticated Header should switch to Unauthenticated Header', () => {
        const { getByAltText, getByText } = render(
            <Header user={{}} apiHandler={mockApiHandler} />
        )
        fireEvent.click(getByAltText('avatar'))
        fireEvent.click(getByText('Log Out'))

        waitForElement(() =>
            getByText('Log In')
        )
    })
})