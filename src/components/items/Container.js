import React, { useState, useEffect } from 'react';
import Fetch from 'utilities/fetch';
import ItemCard from '../item_card/Presenter';
import ItemsPagePresenter from './Presenter';

const ItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            let result = await Fetch("/api/items");
            setItems(result)
        }
        fetchItems();
    }, []);

    const createItemComponents = (data) => {
        if (data) {
            return data.map((object, index) => {
                return <ItemCard item={object} key={index} />
            });
        } else {
            return null;
        }
    }

    return (
        <ItemsPagePresenter>
            {createItemComponents(items)}
        </ItemsPagePresenter>
    )
}

export default ItemsPage;