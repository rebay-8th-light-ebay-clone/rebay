import React from 'react';
import Page from 'components/UI/Page';
import './ItemsPage.scss';

const ItemsPage = (props) => (
    <Page>
        <h1>
            {props.title}
        </h1>
        <section className='items--container'>
            {props.children}
        </section>
    </Page>
)

export default ItemsPage;