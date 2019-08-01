import React from 'react';
import ItemCard from 'components/item_card/ItemCard';
import './UserBidCard.scss';
import { dateFormatter } from 'utilities/date';
import { pennyToDollarConverter } from 'utilities/price';

const UserBidCard = ({ item, bids }) => {
    return (
        <section className='user-bid--container'>
            <ItemCard item={item} showDescription={true} />
            <section className='user-bids--grid'>
                {bids && bids.map(bid => {
                    return <UserBid bid_price={bid.bid_price} timestamp={bid.timestamp} />
                })}
            </section>
        </section>
    )
}

const UserBid = ({ timestamp, bid_price }) => (
    <section className='bid--container'>
        <div className='bid--container-info'>
            <h2>You Bid</h2>
            <h5>{dateFormatter(timestamp)}</h5>
        </div>
        <h1 className='bid--container-price'>${pennyToDollarConverter(bid_price)}</h1>
    </section>
)

export default UserBidCard;
