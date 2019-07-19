import React, { useState, useEffect } from 'react';
<<<<<<< HEAD:src/components/all_items_page/Items.js
import ItemCard from '../item_card/ItemCard';
import ItemsPage from './ItemsPage';

const Items = ({ apiHandler }) => {
=======
import Fetch from 'utilities/fetch';
import ItemCard from '../item_card/ItemCard';
import ItemsPage from './ItemsPage';

const Items = () => {
>>>>>>> Rename files and folders to be more intuitive:src/components/all_items_page/Items.js
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
        <ItemsPage>
            {handleError(error)}
            {createItemComponents(items)}
        </ItemsPage>
    )
}

export default Items;