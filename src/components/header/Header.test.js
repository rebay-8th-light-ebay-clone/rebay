import React from 'react';
import Header from './Header';
import { render, cleanup, fireEvent, getByAltText } from '@testing-library/react'

describe('Header', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders Authenticated Header if user exists', () => {
        const { getByAltText, getByText } = render(<Header user={{}} />)
        fireEvent.click(getByAltText('avatar'))

        getByText('Sell')
        getByText('Log Out')
    })

    it('renders Unauthenticated Header if user does not exists', () => {
        const component = render(
            <Header user={null} />
        )

        component.getByText('Log In')
    })

    it('clicking log out in Authenticated Header should switch to Unauthenticated Header', () => {
       const { getByAltText,  getByText } = render(
            <Header user={{}} />
        )
        fireEvent.click(getByAltText('avatar'))
        fireEvent.click(getByText('Log Out'))

        getByText('Log In')
    })
})