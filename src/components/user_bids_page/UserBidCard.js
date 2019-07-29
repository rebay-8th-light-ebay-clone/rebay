import React from 'react';
import ItemCard from 'components/item_card/ItemCard';
import './UserBidCard.scss';
import { dateFormatter } from 'utilities/date';
import { pennyToDollarConverter } from 'utilities/price';

const UserBidCard = ({ item, bid }) => {
    const { bid_price, timestamp } = bid;

    return (
        <section className='user-bid--container'>
            <ItemCard item={item} showDescription={true} />
            <section className='bid--container'>
                <div className='bid--container-info'>
                    <h2>You Bid</h2>
                    <h5>{dateFormatter(timestamp)}</h5>
                </div>
                <h1 className='bid--container-price'>${pennyToDollarConverter(bid_price)}</h1>
            </section>
        </section>
    )
}

export default UserBidCard;
