import React from 'react';
import ItemCard from 'components/item_card/ItemCard';
import './UserBidCard.scss';
import BidCard from '../bid_card/BidCard';

const UserBidCard = ({ item, bids }) => {
    return (
        <section className='user-bid--container'>
            <ItemCard item={item} showDescription={true} />
            <section className='user-bids--grid'>
                {bids && bids.map(bid => {
                    return <BidCard bid_price={bid.bid_price} timestamp={bid.timestamp} key={bid.uuid} userName={"You"} winner={bid.winner} />
                })}
            </section>
        </section>
    )
}

export default UserBidCard;
