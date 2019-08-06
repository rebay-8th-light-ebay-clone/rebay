import React from 'react';
import Page from 'components/UI/Page';
import './ItemsPage.scss';

const ItemsPage = ({ title, children, loading }) => (
    <Page loading={loading}>
        <h1>
            {title}
        </h1>
        <section className='items--container'>
            {children}
        </section>
    </Page>
)

export default ItemsPage;