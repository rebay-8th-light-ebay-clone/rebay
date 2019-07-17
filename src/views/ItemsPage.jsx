import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsPage = () => {
    const [renderedItems, setRenderedItems] = useState(null)

    useEffect(() => {
        async function fetchData() {
            await axios.get('/api/items')
                .then(function (response) {
                    // handle success
                    const createItemsComponent = (data) => {
                        return data.map((object, index) => {
                            return (
                                <section key={index}>
                                    <div>{object.title}</div>
                                </section>
                            )
                        })
                    }
                    setRenderedItems(createItemsComponent(response.data.data))
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    return error.message;
                });
        }
        fetchData();
    }, []);

    return (
        <main>
            <h1>
                Items Page
            </h1>
            <section>
                {renderedItems}
            </section>
        </main>
    )
}

export default ItemsPage;