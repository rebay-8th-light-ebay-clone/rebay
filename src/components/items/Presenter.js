import React from 'react';
import Page from 'components/UI/Page';
import './Presenter.scss';

const ItemsPagePresenter = (props) => (
    <Page>
        <h1>
            Items Page
        </h1>
        <section className='items--container'>
            {props.children}
        </section>
    </Page>
)

export default ItemsPagePresenter;