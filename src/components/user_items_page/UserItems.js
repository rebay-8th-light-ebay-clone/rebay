import React, { useState, useEffect } from 'react';
import ItemsPage from 'components/all_items_page/ItemsPage';
import UserItemCard from './UserItemCard';
import NoContent from 'components/UI/NoContent';
import Error from 'components/UI/Error';

const UserItems = (props) => {
    const [userItems, setUserItems] = useState(null);
    const [errors, setError] = useState(null);
    const { apiHandler, match: { params: { uuid }} } = props;

    const fetchBids = async () => {
        const { data, errors } = await apiHandler.get(`/api/users/${uuid}/items`);
        data ? setUserItems(data) : setError(errors);
    }
    
    useEffect(() => {
        fetchBids();
    }, [apiHandler, uuid]);

    const onDelete = async (user_uuid, item_uuid) => {
        const { status, message } = await apiHandler.delete(`/api/users/${user_uuid}/items/${item_uuid}`)
        if (status) {
            fetchBids()
        } else {
            if (message.includes("401")) {
                setError("You are not authorized to delete this item.")
            } else {
                setError(message)
            }
        }
    }

    const renderBidCards = (userItems) => {
        if (userItems && userItems.length > 0) {
            return userItems.map(item => {
                return <UserItemCard item={item} key={item.uuid} onDelete={onDelete} />
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
             {errors && <Error message={errors} />}
            {renderBidCards(userItems)}
        </ItemsPage>
    )
}

export default UserItems;