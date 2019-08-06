import React, { useState, useEffect } from 'react';
import ItemCard from '../item_card/ItemCard';
import ItemsPage from './ItemsPage';
import Error from 'components/UI/Error';

const Items = ({ apiHandler }) => {
    const [items, setItems] = useState([]);
    const [errors, setError] = useState(null);
    const [loading, setLoader] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            const { data, errors } = await apiHandler.get("/api/items");
            data ? setItems(data) : setError(errors);
            setLoader(false)
        }
        setLoader(true)
        fetchItems();
    }, [apiHandler]);

    const createItemComponents = (data) => {
        return data.map((object) => {
            return <ItemCard item={object} showDescription={false} key={object.uuid} />
        });
    }

    return (
        <ItemsPage loading={loading} title='Items Page'>
            { errors && <Error message={errors} />}
            {createItemComponents(items)}
        </ItemsPage>
    )
}

export default Items;