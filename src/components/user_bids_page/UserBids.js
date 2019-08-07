import React, { useState, useEffect } from 'react';
import UserBidCard from './UserBidCard';
import ItemsPage from 'components/all_items_page/ItemsPage';
import NoContent from 'components/UI/NoContent';
import Error from 'components/UI/Error';

const UserBids = (props) => {
    const [itemBids, setItemBids] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoader] = useState(false);
    const { apiHandler, match } = props;

    useEffect(() => {
        const fetchBids = async () => {
            const { data, errors } = await apiHandler.get(`/api/users/${match.params.uuid}/bids`);
            data ? setItemBids(data) : setError(errors);
            setLoader(false)
        }
        setLoader(true);
        fetchBids();
    }, [apiHandler, match.params.uuid]);

    const renderBidCards = (itemBids) => {
        if (itemBids && itemBids.length > 0) {
            return itemBids.map(itemBid => {
                const { item, bids } = itemBid;
                return <UserBidCard item={item} bids={bids} key={item.uuid} />
            })
        } else {
            return <NoContent
                message={"You Have No Bids Yet!"}
                subtext={"Please check back here after you bid on an item."}
            />
        }
    }

    return (
        <ItemsPage title={'My Bids'} loading={loading}>
            {error && <Error message={error} />}
            {renderBidCards(itemBids)}
        </ItemsPage>
    )
}

export default UserBids;