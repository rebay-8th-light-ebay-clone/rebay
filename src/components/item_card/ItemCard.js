import React from 'react';
import './ItemCard.scss';
import { timeRemainingFromNowMessage } from 'utilities/date';
import { pennyToDollarConverter } from 'utilities/price';

const ItemCard = ({ item, showDescription }) => {
    const { title, price, image, end_date, uuid, user_uuid } = item;
    return (
        <a href={`users/${user_uuid}/items/${uuid}`}>
            <section className='card item--card-container'>
                <h1>{title}</h1>
                <h2>${pennyToDollarConverter(price)}</h2>
                <p>{timeRemainingFromNowMessage(new Date(end_date))}</p>
                <img src={image} alt={title} />
            </section>
        </a>
    )
}

export default ItemCard;
