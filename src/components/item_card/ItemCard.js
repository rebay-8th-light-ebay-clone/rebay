import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ item }) => {
    let { title, price, image, end_date } = item;
    const dateFormatter = (endDate) => {
        let endDateTimestamp = new Date(endDate);
        let currentTimestamp = new Date();
        let dayDifference = currentTimestamp.getDay() - endDateTimestamp.getDay();
        let hourDifference = currentTimestamp.getHours() - endDateTimestamp.getHours();
        
        return `Ends in ${dayDifference} day ${hourDifference} hr`;
    }
    return (
        <section className='card item--card-container'>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p>{dateFormatter(end_date)}</p>
            <img src={image} alt={title} />
        </section>
    )
}

export default ItemCard;