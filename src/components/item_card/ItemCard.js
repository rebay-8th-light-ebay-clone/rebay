import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ item }) => {
    let { title, price, image, end_date } = item;

    return (
        <section className='card item--card-container'>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p>{countdown(new Date(), new Date(end_date))}</p>
            <img src={image} alt={title} />
        </section>
    )
}

export default ItemCard;