import React from 'react';
import ItemCard from 'components/item_card/ItemCard';
import './UserItemCard.scss';

const UserItemCard = ({ item, onDelete }) => {
    return (
        <section className='user-item--container'>
            <ItemCard item={item} showDescription={false} />
            <ItemController item={item} onDelete={onDelete} />
        </section>
    )
}

const ItemController = ({ item, onDelete }) => {
    const { user_uuid, uuid } = item;
    return (
        <section className='item-controller--container'>
            <button onClick={() => onDelete(user_uuid, uuid)} className='btn-delete'>
                Delete
            </button>
            <a href={`/users/${user_uuid}/items/${uuid}/edit`}>
                Edit
            </a>
        </section>
    )
}


export default UserItemCard;
