import React, { useState, useEffect } from 'react';
import ItemCard from '../item_card/ItemCard';
import ItemsPage from './ItemsPage';

const Items = ({ apiHandler }) => {
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
            return <ItemCard item={object} showDescription={false} key={object.uuid} />
        });
    }

    const handleError = (err) => {
        return err && `Error: ${err.message}`;
    }

    return (
        <ItemsPage title='Items Page'>
            {handleError(error)}
            {createItemComponents(items)}
        </ItemsPage>
    )
}

export default Items;