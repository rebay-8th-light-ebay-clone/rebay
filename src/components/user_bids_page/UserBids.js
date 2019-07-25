import React, { useState, useEffect } from 'react';
import UserBidCard from './UserBidCard';
import ItemsPage from 'components/all_items_page/ItemsPage';

const UserBids = (props) => {
    const [itemBids, setItemBids] = useState(null);
    const [error, setError] = useState(null);
    const { apiHandler, match } = props;

    useEffect(() => {
        const fetchBids = async () => {
            const { data, error } = await apiHandler.get(`/api/users/${match.params.id}/bids`);
            data ? setItemBids(data) : setError(error);
        }
        fetchBids();
    }, [itemBids, apiHandler, match.params.id]);

    const handleError = (err) => {
        return err && `Error: ${err.message}`;
    }

    const renderBidCards = (itemBids) => {
        if (itemBids) {
            return itemBids.map(itemBid => {
                const { item, bid } = itemBid;
                return <UserBidCard item={item} bid={bid} key={bid.bid_uuid} />
            })
        }
        return null;
    }

    return (
        <ItemsPage title={'My Bids'}>
            {handleError(error)}
            {renderBidCards(itemBids)}
        </ItemsPage>
    )
}

export default UserBids;