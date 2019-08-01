import React, { useState, useEffect } from 'react';
import UserBidCard from './UserBidCard';
import ItemsPage from 'components/all_items_page/ItemsPage';

const UserBids = (props) => {
    const [itemBids, setItemBids] = useState(null);
    const [error, setError] = useState(null);
    const { apiHandler, match } = props;

    useEffect(() => {
        const fetchBids = async () => {
            const { data, error } = await apiHandler.get(`/api/users/${match.params.uuid}/bids`);
            console.log(data)
            data ? setItemBids(data) : setError(error);
        }
        fetchBids();
    }, []);

    const handleError = (err) => {
        return err && `Error: ${err.message}`;
    }

    const renderBidCards = (itemBids) => {
        if (itemBids && itemBids.length > 0) {
            return itemBids.map(itemBid => {
                const { item, bids } = itemBid;
                return <UserBidCard item={item} bids={bids} key={item.uuid} />
            })
        } else {
            return <div className='no-bids'>You Have No Bids Yet!<br /><p>Please check back here after you bid on an item.</p></div>
        }
    }

    return (
        <ItemsPage title={'My Bids'}>
            {handleError(error)}
            {renderBidCards(itemBids)}
        </ItemsPage>
    )
}

export default UserBids;