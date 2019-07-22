import React, { useState, useEffect } from 'react';
import Fetch from 'utilities/fetch';
import ItemCard from '../item_card/Presenter';
import ItemsPagePresenter from './Presenter';

const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            let result = await Fetch("/api/items");
            let { data, error } = result;
            data ? setItems(data) : setError(error);
        }
        fetchItems();
    }, []);

    const createItemComponents = (data) => {
        return data.map((object) => {
            return <ItemCard item={object} key={object.id} />
        });
    }

    const handleError = (err) => {
        return err && "Error: " + err.message;
    }

    return (
        <ItemsPagePresenter>
            {handleError(error)}
            {createItemComponents(items)}
        </ItemsPagePresenter>
    )
}

export default ItemsPage;