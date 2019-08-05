import React, { useState, useEffect } from 'react';
import ItemsPage from 'components/all_items_page/ItemsPage';
import UserItemCard from './UserItemCard';
import NoContent from 'components/UI/NoContent';

const UserItems = (props) => {
    const [userItems, setUserItems] = useState(null);
    const [error, setError] = useState(null);
    const { apiHandler, match: { params: { uuid }} } = props;

    useEffect(() => {
        const fetchBids = async () => {
            const { data, error } = await apiHandler.get(`/api/users/${uuid}/items`);
            data ? setUserItems(data) : setError(error);
        }
        fetchBids();
    }, [apiHandler, uuid]);

    const handleError = (err) => {
        return err && `Error: ${err.message}`;
    }

    const renderBidCards = (userItems) => {
        if (userItems && userItems.length > 0) {
            return userItems.map(item => {
                return <UserItemCard item={item} key={item.uuid} />
            })
        } else {
            return <NoContent
                message={"You Have No Items Yet!"}
                subtext={"Please check back here after you list an item for sale."}
            />
        }
    }

    return (
        <ItemsPage title={'My Items'}>
            {handleError(error)}
            {renderBidCards(userItems)}
        </ItemsPage>
    )
}

export default UserItems;