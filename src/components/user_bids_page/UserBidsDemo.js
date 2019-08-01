import React, { useState } from 'react';
import UserBidCard from './UserBidCard';
import ItemsPage from 'components/all_items_page/ItemsPage';

const UserBidsDemo = (props) => {
    const [itemBids] = useState([
        {
            "item": {
                "description": "Android Dolls, pristine condition. Free shipping.",
                "end_date": "2019-07-17T16:53:52Z",
                "id": 1,
                "image": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/ANDROID-M-N-O-P/AndroidPIT-Google-collectibles-w810h462.jpg",
                "price": 15000,
                "title": "Android Dolls"
            },
            "bid": {
                "bid_uuid": 1,
                "user_uuid": 1,
                "item_uuid": 1,
                "bid_price": 10000,
                "timestamp": "2019-07-17T16:53:52Z",
            }
        },
        {
            "item": {
                "description": "LDK Game Console, used condition. Will ship with original batteries and case.",
                "end_date": "2019-10-17T16:53:52Z",
                "id": 1,
                "image": "http://cdn.shopify.com/s/files/1/0054/1225/7862/products/4_6519c366-6059-4f59-a653-0dd956aebd9e_1200x1200.jpg?v=1560477381",
                "price": 37500,
                "title": "LDK Game Console"
            },
            "bid": {
                "bid_uuid": 1,
                "user_uuid": 1,
                "item_uuid": 1,
                "bid_price": 32000,
                "timestamp": "2019-07-17T16:53:52Z",
            }
        }
    ]);

    const renderBidCards = (itemBids) => {
        if (itemBids) {
            return itemBids.map(itemBid => {
                const { item, bid } = itemBid;
                return <UserBidCard item={item} bid={bid} key={bid.bid_uuid} />
            })
        }
        return null;
    }

    return (
        <ItemsPage title={'My Bids'}>
            {renderBidCards(itemBids)}
        </ItemsPage>
    )
}

export default UserBidsDemo;