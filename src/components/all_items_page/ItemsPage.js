import React from 'react';
import Page from 'components/UI/Page';
import './ItemsPage.scss';
<<<<<<< HEAD:src/components/all_items_page/ItemsPage.js
=======
import './ItemsPage';
>>>>>>> Rename files and folders to be more intuitive:src/components/all_items_page/ItemsPage.js

const ItemsPage = (props) => (
    <Page>
        <h1>
            Items Page
        </h1>
        <section className='items--container'>
            {props.children}
        </section>
    </Page>
)

export default ItemsPage;