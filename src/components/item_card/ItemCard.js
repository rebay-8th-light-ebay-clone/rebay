import React from 'react';
import './ItemCard.scss';
import { timeRemainingFromNowMessage } from 'utilities/date';
import { convertPenniesToDollars } from 'utilities/price';

const ItemCard = ({ item, showDescription }) => {
    const { title, image, end_date, uuid, user_uuid, description, current_highest_bid } = item;
    return (
        <a href={`/users/${user_uuid}/items/${uuid}`}>
            <section className='card item--card-container'>
                <h1>{title}</h1>
                <h2>${convertPenniesToDollars(current_highest_bid)}</h2>
                <p>{timeRemainingFromNowMessage(new Date(end_date))}</p>
                <img src={image} alt={title} />
                { showDescription && <p className='item-description'>{description}</p>}
            </section>
        </a>
    )
}

export default ItemCard;
