import React from 'react';
import ItemCard from 'components/item_card/ItemCard';
import { Link } from 'react-router-dom';
import './UserItemCard.scss';

const UserItemCard = ({ item }) => {
    return (
        <section className='user-item--container'>
            <ItemCard item={item} showDescription={false} />
            <ItemController item={item} />
        </section>
    )
}

const ItemController = ({ item }) => {
    const { user_uuid, uuid } = item;
    return (
        <section className='item-controller--container'>
            <button className='btn-delete'>
                Delete
            </button>
            <Link to={`/users/${user_uuid}/items/${uuid}/edit`}>
                Edit
            </Link>
        </section>
    )
}


export default UserItemCard;
