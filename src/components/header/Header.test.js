import React from 'react';
import Header from './Header';
import { render, cleanup, fireEvent } from '@testing-library/react'

describe('Header', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders Authenticated Header if user exists', () => {
        const component = render(
            <Header user={{}} />
        )
        
        component.getByText('Sell')
        component.getByText('Log Out')
    })

    it('renders Unauthenticated Header if user does not exists', () => {
        const component = render(
            <Header user={null} />
        )

        component.getByText('Log In')
    })

    it('clicking log out in Authenticated Header should switch to Unauthenticated Header', () => {
       const { getByRole, getByText } = render(
            <Header user={{}} />
        )
        fireEvent.click(getByRole('button'))

        getByText('Log In')
    })
})