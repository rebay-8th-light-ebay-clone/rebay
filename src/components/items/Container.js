import React, { useState, useEffect } from 'react';
import ItemCard from '../item_card/Presenter';
import ItemsPagePresenter from './Presenter';

const ItemsPage = ({ apiHandler }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            const { data, error } = await apiHandler.get("/api/items");
            data ? setItems(data) : setError(error);
        }
        fetchItems();
    }, [apiHandler]);

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