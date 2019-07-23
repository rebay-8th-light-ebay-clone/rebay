import React from 'react';
import './Page.scss';

const Page = (props) =>  (
    <main className={`page page--${props.background}`}>
        {props.children}
    </main>
)

export default Page;